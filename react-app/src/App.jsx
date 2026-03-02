import { useState } from 'react'

function App() {
  return (
    <div className="app">
      <nav className="glass-nav">
        <div className="nav-logo">KubeQuest</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Get Started</button>
        </div>
      </nav>

      <main>
        <section className="container hero animate-fadeIn">
          <h1 className="hero-title">
            Scaling the <span style={{ color: 'var(--primary)' }}>Future</span> <br />
            of Architecture
          </h1>
          <p className="hero-subtitle">
            Experience the power of containerized excellence. Version 1 of our 
            Kubernetes-native application brings speed, reliability, and 
            stunning design to your orchestration workflow.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary">Explore Version 1</button>
            <button className="btn-secondary">View Documentation</button>
          </div>
        </section>

        <section id="features" className="container features">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Core Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">🚀</div>
              <h3>Rapid Deployment</h3>
              <p>Deploy your services in seconds with our optimized CI/CD pipelines and container orchestration.</p>
            </div>
            <div className="feature-card animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🛡️</div>
              <h3>Built-in Security</h3>
              <p>Security is not an afterthought. We implement multi-layer authentication and data encryption by default.</p>
            </div>
            <div className="feature-card animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">📊</div>
              <h3>Real-time Insights</h3>
              <p>Monitor your cluster's health and performance with integrated dashboards and alerting systems.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 KubeQuest Assignment. Created with ❤️ for Kubernetes Enthusiasts.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>Version 1.0.0 (Initial Release)</p>
      </footer>
    </div>
  )
}

export default App
