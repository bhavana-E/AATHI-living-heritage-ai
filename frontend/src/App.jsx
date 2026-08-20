import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [question, setQuestion] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend unavailable");
        }
        return response.json();
      })
      .then(() => {
        setBackendStatus("Backend connected");
      })
      .catch(() => {
        setBackendStatus("Backend offline");
      });
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleAsk = (event) => {
    event.preventDefault();

    if (!question.trim()) {
      return;
    }

    alert(
      "Ask the Tradition AI will answer this question using the selected Heritage Capsule."
    );
  };

  return (
    <div className="aathi-app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div
          className="brand"
          onClick={() => scrollToSection("home")}
        >
          <div className="brand-symbol">A</div>

          <div>
            <h2>AATHI</h2>
            <span>Living Heritage AI</span>
          </div>
        </div>

        <nav className="nav-links">
          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            className={activeSection === "heritage" ? "active" : ""}
            onClick={() => scrollToSection("heritage")}
          >
            Heritage
          </button>

          <button
            className={activeSection === "ask" ? "active" : ""}
            onClick={() => scrollToSection("ask")}
          >
            Ask the Tradition
          </button>

          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </nav>

        <div className="backend-status">
          <span
            className={
              backendStatus === "Backend connected"
                ? "status-dot online"
                : "status-dot"
            }
          ></span>

          {backendStatus}
        </div>
      </header>

      {/* ================= HERO ================= */}

      <main>

        <section id="home" className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              <span>✦</span>
              DIGITAL PRESERVATION FOR LIVING HERITAGE
            </div>

            <h1>
              Preserve the
              <span> Voice.</span>
              <br />
              Preserve the
              <span> Tradition.</span>
            </h1>

            <p className="hero-description">
              AATHI transforms the voices and knowledge of elders,
              artisans and cultural storytellers into living digital
              Heritage Capsules for future generations.
            </p>

            <div className="hero-actions">

              <button
                className="primary-button"
                onClick={() => scrollToSection("capture")}
              >
                <span>🎙️</span>
                Start Voice → Heritage
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("heritage")}
              >
                Explore Heritage
                <span>→</span>
              </button>

            </div>

            <div className="hero-note">
              <span>●</span>
              Speak naturally in your own language. AATHI does the rest.
            </div>

          </div>

          {/* Hero visual */}

          <div className="hero-visual">

            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>

            <div className="heritage-card floating-card">

              <div className="card-top">
                <span className="capsule-label">
                  HERITAGE CAPSULE
                </span>

                <span className="verified">
                  ✓ PRESERVED
                </span>
              </div>

              <div className="heritage-art">
                <div className="art-pattern">
                  ✦
                </div>
              </div>

              <div className="capsule-info">

                <span className="location">
                  📍 Karnataka, India
                </span>

                <h3>Yakshagana Tradition</h3>

                <p>
                  Traditional performance, costume,
                  music and storytelling knowledge.
                </p>

                <div className="capsule-tags">
                  <span>Oral Tradition</span>
                  <span>Performance</span>
                  <span>Craft</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CAPTURE ================= */}

        <section id="capture" className="capture-section">

          <div className="section-heading">

            <div className="eyebrow">
              <span>01</span>
              VOICE → HERITAGE
            </div>

            <h2>
              Give your tradition
              <span> a voice.</span>
            </h2>

            <p>
              No forms. No complicated data entry.
              An artisan or elder simply speaks about their
              tradition in the language they are comfortable with.
            </p>

          </div>

          <div className="capture-grid">

            <div className="capture-panel">

              <div className="mic-circle">
                🎙️
              </div>

              <h3>Record a Story</h3>

              <p>
                Record an elder, artisan or knowledge holder
                explaining a craft, ritual, song, recipe,
                instrument or local tradition.
              </p>

              <button className="record-button">
                <span className="record-icon"></span>
                Start Recording
              </button>

              <span className="small-text">
                Voice recording will be connected in the next stage.
              </span>

            </div>

            <div className="upload-panel">

              <div className="upload-icon">
                ↑
              </div>

              <h3>Upload an Existing Recording</h3>

              <p>
                Already have an audio recording?
                Upload it and AATHI will transform it
                into structured cultural knowledge.
              </p>

              <label className="upload-button">
                📁 Choose Audio
                <input
                  type="file"
                  accept="audio/*"
                  hidden
                />
              </label>

              <span className="small-text">
                Supported audio files can be processed here.
              </span>

            </div>

          </div>

        </section>

        {/* ================= WORKFLOW ================= */}

        <section className="workflow-section">

          <div className="section-heading center">

            <div className="eyebrow">
              <span>02</span>
              HOW AATHI WORKS
            </div>

            <h2>
              From one voice to a
              <span> living archive.</span>
            </h2>

          </div>

          <div className="workflow">

            <div className="workflow-step">
              <div className="step-number">01</div>
              <div className="step-icon">🎙️</div>
              <h3>Voice</h3>
              <p>
                Artisan speaks naturally in their own language.
              </p>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="step-number">02</div>
              <div className="step-icon">📝</div>
              <h3>Transcribe</h3>
              <p>
                Speech is converted into searchable text.
              </p>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="step-number">03</div>
              <div className="step-icon">🌐</div>
              <h3>Translate</h3>
              <p>
                Cultural knowledge becomes accessible across languages.
              </p>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="step-number">04</div>
              <div className="step-icon">🧠</div>
              <h3>Understand</h3>
              <p>
                AI identifies important cultural information.
              </p>
            </div>

            <div className="workflow-line"></div>

            <div className="workflow-step">
              <div className="step-number">05</div>
              <div className="step-icon">🏺</div>
              <h3>Preserve</h3>
              <p>
                A structured Heritage Capsule is created.
              </p>
            </div>

          </div>

        </section>

        {/* ================= HERITAGE CAPSULE ================= */}

        <section id="heritage" className="heritage-section">

          <div className="section-heading">

            <div className="eyebrow">
              <span>03</span>
              HERITAGE CAPSULES
            </div>

            <h2>
              Every tradition gets
              <span> its own story.</span>
            </h2>

            <p>
              AATHI preserves the original voice together with
              structured cultural information so future generations
              can explore the tradition in context.
            </p>

          </div>

          <div className="capsule-large">

            <div className="capsule-visual">

              <div className="visual-symbol">
                ✦
              </div>

              <span>
                LIVING HERITAGE
              </span>

            </div>

            <div className="capsule-details">

              <div className="capsule-header">

                <div>
                  <span className="location">
                    📍 Karnataka, India
                  </span>

                  <h3>Yakshagana Costume Tradition</h3>
                </div>

                <span className="preserved-badge">
                  ✓ PRESERVED
                </span>

              </div>

              <p className="capsule-description">
                A traditional knowledge record containing the
                knowledge holder's original voice, transcription,
                translation, cultural context and craft information.
              </p>

              <div className="detail-grid">

                <div className="detail-item">
                  <span>👤</span>
                  <div>
                    <small>Knowledge Holder</small>
                    <strong>Artisan / Elder</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <span>🧵</span>
                  <div>
                    <small>Materials</small>
                    <strong>Traditional Materials</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <span>🎨</span>
                  <div>
                    <small>Process</small>
                    <strong>Craft & Technique</strong>
                  </div>
                </div>

                <div className="detail-item">
                  <span>❤️</span>
                  <div>
                    <small>Significance</small>
                    <strong>Cultural Meaning</strong>
                  </div>
                </div>

              </div>

              <button
                className="capsule-button"
                onClick={() => scrollToSection("ask")}
              >
                Ask about this tradition →
              </button>

            </div>

          </div>

        </section>

        {/* ================= ASK THE TRADITION ================= */}

        <section id="ask" className="ask-section">

          <div className="ask-glow"></div>

          <div className="ask-content">

            <div className="eyebrow">
              <span>04</span>
              ASK THE TRADITION
            </div>

            <h2>
              Don't just search.
              <br />
              <span>Have a conversation with heritage.</span>
            </h2>

            <p>
              Ask questions about a preserved tradition.
              AATHI answers using the archived cultural knowledge
              associated with that Heritage Capsule.
            </p>

            <form
              className="question-box"
              onSubmit={handleAsk}
            >

              <span className="question-icon">
                💬
              </span>

              <input
                type="text"
                value={question}
                onChange={(event) =>
                  setQuestion(event.target.value)
                }
                placeholder="Why is this costume designed this way?"
              />

              <button type="submit">
                Ask →
              </button>

            </form>

            <div className="example-questions">

              <button
                onClick={() =>
                  setQuestion("Why is this costume designed this way?")
                }
              >
                Why is this costume designed this way?
              </button>

              <button
                onClick={() =>
                  setQuestion("Who traditionally makes it?")
                }
              >
                Who traditionally makes it?
              </button>

              <button
                onClick={() =>
                  setQuestion("What materials are used?")
                }
              >
                What materials are used?
              </button>

            </div>

          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="about-section">

          <div className="about-card">

            <div className="about-mark">
              A
            </div>

            <div>

              <div className="eyebrow">
                ABOUT AATHI
              </div>

              <h2>
                Technology that listens
                <span> before it speaks.</span>
              </h2>

              <p>
                AATHI is designed to preserve endangered local art,
                crafts and oral traditions by capturing knowledge
                directly from the people who carry it.
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-brand">
          <strong>AATHI</strong>
          <span>Living Heritage AI</span>
        </div>

        <div className="team">
          <span>Built by</span>
          <strong>RnB</strong>
          <span>·</span>
          <span>BHAVANA E & RAKSHITA N</span>
        </div>

        <div className="footer-copy">
          Preserving voices. Preserving traditions.
        </div>

      </footer>

    </div>
  );
}

export default App;