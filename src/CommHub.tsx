import React from 'react';
import './CommHub.css';   // We'll create this CSS file next

const CommHub: React.FC = () => {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-logo">
          <img 
            src="/logo.jpeg" 
            alt="EDL Logo" 
            style={{ height: '40px', width: 'auto' }}
          />
          <span className="nav-brand">CommHub</span>
        </div>

        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#features">Features</a>
          <a href="#integration">About</a>
          <a href="#ecosystem">Contact</a>
        </div>

        <div className="nav-right">
          <div className="nav-avatar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span></span> EDL Communication Platform
          </div>
          <h1 className="hero-h1">
            Reliable<br />
            Email &amp; SMS<br />
            <span className="accent">Notifications<br />Across Sri Lanka</span>
          </h1>
          <p className="hero-sub">
            Send Emails &amp; SMS notifications instantly across Sri Lanka. 
            Scale your customer engagement with high-deliverability messaging 
            tailored for enterprises.
          </p>
          <a href="#" className="btn-primary">
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="notif-pill pill-1">
              <div className="dot" style={{ background: '#4ade80' }}></div>
              SMS Delivered ✓
            </div>
            <div className="notif-pill pill-2">
              <div className="dot" style={{ background: '#f59e0b' }}></div>
              Email Sent · 2s ago
            </div>
            <div className="notif-pill pill-3">
              <div className="dot" style={{ background: '#60a5fa' }}></div>
              OTP dispatched
            </div>

            <div className="hero-card-inner">
              <div className="hero-stats-card">
                <div className="stats-header">
                  <span>Today's Activity</span>
                  <span className="live-dot">Live</span>
                </div>
                <div className="stats-grid">
                  <div className="stat-box">
                    <div className="stat-num">12.4k</div>
                    <div className="stat-label">SMS Sent</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">8.1k</div>
                    <div className="stat-label">Emails</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-num">98.7%</div>
                    <div className="stat-label">Delivery</div>
                  </div>
                </div>
                <div className="bar-chart">
                  <div className="bar" style={{ height: '60%' }}></div>
                  <div className="bar" style={{ height: '80%' }}></div>
                  <div className="bar" style={{ height: '50%' }}></div>
                  <div className="bar" style={{ height: '90%' }}></div>
                  <div className="bar active" style={{ height: '100%' }}></div>
                  <div className="bar" style={{ height: '70%' }}></div>
                  <div className="bar" style={{ height: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">Uptime SLA</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">1.2M+</span>
                <span className="stat-label">Daily Messages</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">&lt;2s</span>
                <span className="stat-label">Avg Latency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-center">
            <div className="section-tag">Platform Features</div>
            <h2 className="section-title">Powerful Tools for Modern Notification Workflows</h2>
            <p className="section-sub">
              Everything you need to manage business communications at scale, 
              from automated debt recovery to marketing blasts.
            </p>
          </div>

          <div className="features-grid">
            {[
              { icon: "💳", title: "Payment Reminder", desc: "Automate debt collection with scheduled SMS and Email alerts. Reduce late payments by 40% with smart nudges." },
              { icon: "📨", title: "Bulk Messages", desc: "Sync with your ERP to automatically dispatch invoices and bill alerts the moment they are generated." },
              { icon: "💬", title: "Individual Messages", desc: "Blast localized SMS updates to thousands of customers simultaneously using our high-speed gateway." },
              { icon: "✉️", title: "Email Campaign Manager", desc: "Design beautiful, responsive emails with our drag-and-drop builder and track open rates in real-time." },
              { icon: "⚡", title: "Real-time Notifications", desc: "Trigger transactional alerts for OTPs, logins, and purchases with millisecond latency." },
              { icon: "📊", title: "Analytics Dashboard", desc: "Deep insights into delivery status, link clicks, and engagement metrics across all channels." }
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-title">{feature.title}</div>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration / How It Works */}
      <section className="section integration" id="integration">
        <div className="section-inner">
          <div className="integration-grid">
            <div>
              <div className="section-tag">How It Works</div>
              <h2 className="section-title">Seamless Integration in Minutes</h2>
              <div className="steps">
                {[
                  { num: "1", title: "Add Customers", desc: "Import via CSV or connect directly through our REST API to sync your existing database." },
                  { num: "2", title: "Create Message", desc: "Use templates or dynamic placeholders to personalize each message for every recipient." },
                  { num: "3", title: "Schedule or Send", desc: "Choose the perfect time for delivery or trigger messages instantly based on user actions." },
                  { num: "4", title: "Track Analytics", desc: "Monitor delivery reports and optimize your communication strategy with real-time data." }
                ].map((step, i) => (
                  <div key={i} className="step">
                    <div className="step-num">{step.num}</div>
                    <div>
                      <div className="step-title">{step.title}</div>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="integration-visual">
              <div className="vis-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
              <div className="vis-icon">📡</div>
              <div className="vis-label">CommHub Gateway</div>
              <div className="vis-tag">instantMessageDelivery()</div>
              <div className="code-block">
                <span style={{ color: '#a5b4fc' }}>POST</span> /v1/messages/send<br />
                {'{'}
                <br />
                &nbsp;&nbsp;<span style={{ color: '#86efac' }}>"to"</span>: <span style={{ color: '#fde68a' }}>"+94712345678"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: '#86efac' }}>"type"</span>: <span style={{ color: '#fde68a' }}>"sms"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: '#86efac' }}>"template"</span>: <span style={{ color: '#fde68a' }}>"BILL_REMINDER"</span><br />
                {'}'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem / Use Cases */}
      <section className="section ecosystem" id="ecosystem">
        <div className="section-inner">
          <div className="section-center">
            <div className="section-tag">Use Cases</div>
            <h2 className="section-title">Built for the Sri Lankan Ecosystem</h2>
            <p className="section-sub">Tailored solutions for local business needs across major sectors.</p>
          </div>

          <div className="ecosystem-cards">
            {[
              { title: "Utility Bill Alert", tag: "Utilities", emoji: "⚡" },
              { title: "Banking Alert", tag: "Finance", emoji: "🏦" },
              { title: "School Notice", tag: "Education", emoji: "🏫" },
              { title: "Order Update", tag: "Retail", emoji: "🛒" }
            ].map((item, i) => (
              <div key={i} className="eco-card">
                <div className={`eco-bg eco-bg-${i + 1}`}></div>
                <div className="eco-overlay"></div>
                <div className="eco-content">
                  <div className="eco-mockup">
                    <div className="eco-mockup-title">{item.emoji} {item.title}</div>
                    <div className="eco-mockup-line medium"></div>
                    <div className="eco-mockup-line short"></div>
                    <div className="eco-mockup-line medium"></div>
                    <div className="badge"><div className="badge-dot"></div>Delivered</div>
                  </div>
                </div>
                <div className="eco-label">
                  <div className="eco-tag">{item.tag}</div>
                  <br />{item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="footer-copy">
          © 2026 UTILITY SOLUTIONS &amp; AUTOMATION BRANCH, EDL. ALL RIGHTS RESERVED
        </span>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default CommHub;