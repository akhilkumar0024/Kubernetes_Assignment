import { useState } from 'react'

function App() {
  return (
    <div className="app">
      <nav className="glass-nav">
        <div className="nav-logo">KubeQuest v3</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#metrics">Metrics</a>
          <a href="#about">About</a>
          <button className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Get Started</button>
        </div>
      </nav>

      <main>
        <section className="container hero animate-fadeIn">
          <div className="version-badge">New: Version 3.0</div>
          <h1 className="hero-title">
            Orchestration <span style={{ color: 'var(--primary)' }}>Redefined</span> <br />
            with Intelligence
          </h1>
          <p className="hero-subtitle">
            Experience the pinnacle of containerized excellence. Version 3 of our
            Kubernetes-native application delivers AI-driven scaling,
            enhanced observability, and an ultra-premium design interface.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary">Explore Version 3</button>
            <button className="btn-secondary">Watch v3 Keynote</button>
          </div>
        </section>

        <section id="metrics" className="container metrics animate-fadeIn">
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-value">99.99%</div>
              <div className="metric-label">Uptime SLA</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">25ms</div>
              <div className="metric-label">Avg Latency</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">5x</div>
              <div className="metric-label">Efficiency v1</div>
            </div>
          </div>
        </section>

        <section id="features" className="container features">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Enterprise Features</h2>
          <div className="feature-grid">
            <div className="feature-card animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">⚡</div>
              <h3>AI-Driven Scaling</h3>
              <p>Proactive resource management that predicts traffic spikes before they happen.</p>
            </div>
            <div className="feature-card animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🛡️</div>
              <h3>Zero-Trust Security</h3>
              <p>Military-grade encryption and automated compliance checks for every container.</p>
            </div>
            <div className="feature-card animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">🔮</div>
              <h3>Full-Stack Observability</h3>
              <p>Deep-dive telemetry with automated root cause analysis for instant troubleshooting.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 KubeQuest Assignment. Created with ❤️ for Kubernetes Enthusiasts.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>Version 3.0.0 (Enterprise Gold Edition)</p>
      </footer>
    </div>
  )
}

export default App
