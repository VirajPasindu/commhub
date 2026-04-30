import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EDLLogin.css';

const EDLLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const togglePassword = () => setPasswordVisible(!passwordVisible);
  const toggleRememberMe = () => setRememberMe(!rememberMe);

  const handleLogin = async () => {
    if (!username.trim() || !password) {
      setError('UserId and Password are required');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/SecInfo/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          UserId: username.trim(),
          Password: password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Login failed');
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const user = data[0];
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user_id', user.user_id?.trim() || '');
        localStorage.setItem('user_name', user.user_name?.trim() || '');
        localStorage.setItem('user_cat', user.user_cat?.trim() || '');

        navigate('/commhub');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      console.error('Login error:', err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="card">
        <div className="right">
          {/* Logo + CommHub Text */}
          <div className="logo-header">
            <div className="edl-logo">
              <img src="/logo.jpeg" alt="EDL" />
            </div>
            <span className="commhub-title">CommHub</span>
          </div>

          <h2 className="welcome-title">Welcome Back</h2>
          <p className="welcome-sub">Please enter your credentials to access your dashboard.</p>

          {error && <div className="error-message">{error}</div>}

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <button
                className="toggle-btn"
                onClick={togglePassword}
                type="button"
                disabled={isLoading}
              >
                {passwordVisible ? '🙈' : '👁️'}
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
        © 2026 UTILITY SOLUTIONS & AUTOMATION BRANCH, EDL. ALL RIGHTS RESERVED
      </footer>
    </div>
  );
};

export default EDLLogin;