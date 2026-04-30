import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CommHub.css';

const CommHub: React.FC = () => {
  const navigate = useNavigate();

  const handleBulkMessagesClick = () => {
    navigate('/email-tool');
  };

  const handleIndividualMessagesClick = () => {
    navigate('/individual-messages');
  };

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

      {/* Hero Section - Larger Title */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-eyebrow">EDL COMMUNICATION PLATFORM</div>
          <h1 className="hero-h1">
            Reliable<br />
            Email &amp; SMS<br />
            <span className="accent">Notifications Across Sri Lanka</span>
          </h1>
          <p className="hero-sub">
            Send Emails &amp; SMS notifications instantly across Sri Lanka. 
            Scale your customer engagement with high-deliverability messaging 
            tailored for enterprises.
          </p>
          <a href="#features" className="btn-primary">
            Get Started →
          </a>
        </div>
      </section>

      {/* Features Section - Moved up to replace old card area */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-center">
            <div className="section-tag">PLATFORM FEATURES</div>
            <h2 className="section-title">Powerful Tools for Modern Notification Workflows</h2>
            <p className="section-sub">
              Everything you need to manage business communications at scale, 
              from automated debt recovery to marketing blasts.
            </p>
          </div>

          <div className="features-grid">
            {[
              { 
                icon: "💳", 
                title: "Payment Reminder", 
                desc: "Automate debt collection with scheduled SMS and Email alerts. Reduce late payments by 40% with smart nudges." 
              },
              { 
                icon: "📨", 
                title: "Bulk Messages", 
                desc: "Sync with your ERP to automatically dispatch invoices and bill alerts the moment they are generated.",
                isBulk: true 
              },
              { 
                icon: "💬", 
                title: "Individual Messages", 
                desc: "Blast localized SMS updates to thousands of customers simultaneously using our high-speed gateway.",
                isIndividual: true 
              },
              { 
                icon: "✉️", 
                title: "Email Campaign Manager", 
                desc: "Design beautiful, responsive emails with our drag-and-drop builder and track open rates in real-time." 
              },
              { 
                icon: "⚡", 
                title: "Real-time Notifications", 
                desc: "Trigger transactional alerts for OTPs, logins, and purchases with millisecond latency." 
              },
              { 
                icon: "📊", 
                title: "Analytics Dashboard", 
                desc: "Deep insights into delivery status, link clicks, and engagement metrics across all channels." 
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className={`feature-card ${feature.isBulk || feature.isIndividual ? 'clickable' : ''}`}
                onClick={
                  feature.isBulk 
                    ? handleBulkMessagesClick 
                    : feature.isIndividual 
                    ? handleIndividualMessagesClick 
                    : undefined
                }
                style={(feature.isBulk || feature.isIndividual) ? { cursor: 'pointer' } : {}}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
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
                  { num: "1", title: "Add Customers", desc: "Import via CSV or connect directly through our REST API." },
                  { num: "2", title: "Create Message", desc: "Use templates or dynamic placeholders to personalize." },
                  { num: "3", title: "Schedule or Send", desc: "Choose the perfect time or trigger instantly." },
                  { num: "4", title: "Track Analytics", desc: "Monitor delivery reports in real-time." }
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
              <div className="vis-icon">📡</div>
              <div className="vis-label">CommHub Gateway</div>
              <div className="vis-tag">instantMessageDelivery()</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
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
                <div className="eco-label">
                  <div className="eco-tag">{item.tag}</div>
                  {item.title}
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