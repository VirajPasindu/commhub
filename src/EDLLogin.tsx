import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EDLLogin.css';

const EDLLogin: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => setPasswordVisible(!passwordVisible);
  const toggleRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = () => {
    setIsLoading(true);

    // Simulate login delay (you can replace this with real API call later)
    setTimeout(() => {
      setIsLoading(false);
      navigate('/commhub');   // Navigate to CommHub page
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="card">
        {/* Left Panel - Stacks on top on mobile */}
        <div className="left">
          <div className="commhub">CommHub</div>
          <h1>Connect your workforce with surgical precision.</h1>
          <p>The sophisticated communication layer built for high-performance enterprise teams.</p>

          <div className="avatars-bottom">
            <br />
            <br />
          </div>
        </div>

        {/* Right Panel */}
        <div className="right">
          <div className="edl-logo">
            <img src="/logo.jpeg" alt="EDL" />
          </div>

          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-sub">Please enter your credentials to access your dashboard.</p>

          <div className="field">
            <label className="field-label">USERNAME</label>
            <div className="input-wrap">
              <span className="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input 
                type="text" 
                className="input-field" 
                placeholder="035837" 
              />
            </div>
          </div>

          <div className="field">
            <label className="field-label">PASSWORD</label>
            <div className="input-wrap">
              <span className="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••••"
              />
              <button className="toggle-btn" onClick={togglePassword} type="button">
                {passwordVisible ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="row-mid">
            <label className="check-row" onClick={toggleRememberMe}>
              <div className={`checkbox ${rememberMe ? 'checked' : ''}`}>
                {rememberMe && <span>✔</span>}
              </div>
              <span>Remember Me</span>
            </label>
            <a href="#" className="forgot-btn">Forgot Password?</a>
          </div>

          <button 
            className="login-btn" 
            onClick={handleLogin} 
            disabled={isLoading}
            type="button"
          >
            {isLoading ? 'Signing in…' : 'Login'}
          </button>

          <div className="support-row">
            Don't have an account?{' '}
            <a href="#" className="support-link">Contact Enterprise Support</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        © 2026 UTILITY SOLUTIONS &amp; AUTOMATION BRANCH, EDL. ALL RIGHTS RESERVED
      </footer>
    </div>
  );
};

export default EDLLogin;