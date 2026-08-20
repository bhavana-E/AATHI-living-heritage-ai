from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import shutil

app = FastAPI(
    title="AATHI - Living Heritage AI",
    description="Backend for preserving endangered local art, crafts and oral traditions.",
    version="1.0.0"
)

# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# Upload folder
# --------------------------------------------------

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


# --------------------------------------------------
# Home
# --------------------------------------------------

@app.get("/")
def home():
    return {
        "project": "AATHI - Living Heritage AI",
        "status": "Backend is running",
        "message": "Welcome to AATHI"
    }


# --------------------------------------------------
# Audio Upload
# --------------------------------------------------

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):

    if not file.filename:
        return {
            "success": False,
            "message": "No file selected"
        }

    # Allow common audio formats
    allowed_extensions = {
        ".mp3",
        ".wav",
        ".m4a",
        ".webm",
        ".ogg",
        ".mp4"
    }

    extension = Path(file.filename).suffix.lower()

    if extension not in allowed_extensions:
        return {
            "success": False,
            "message": "Unsupported audio format"
        }

    # Create a safe filename
    safe_filename = Path(file.filename).name

    file_path = UPLOAD_DIR / safe_filename

    # Save uploaded audio
    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "success": True,
        "message": "Audio uploaded successfully",
        "filename": safe_filename,
        "path": str(file_path)
    }