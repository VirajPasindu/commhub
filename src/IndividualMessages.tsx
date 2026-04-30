import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './IndividualMessages.css';

const IndividualMessages: React.FC = () => {
  const navigate = useNavigate();

  const [area, setArea] = useState('');
  const [billMonth, setBillMonth] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [toFolder, setToFolder] = useState('');
  const [cc, setCc] = useState('');
  const [subject, setSubject] = useState('');
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [errorLogPath, setErrorLogPath] = useState('');
  const [sendToCustomer, setSendToCustomer] = useState(true);

  // Refs for hidden file inputs
  const toFolderRef = useRef<HTMLInputElement>(null);
  const attachmentRef = useRef<HTMLInputElement>(null);
  const errorLogRef = useRef<HTMLInputElement>(null);

  const handleBrowseToFolder = () => toFolderRef.current?.click();
  const handleBrowseAttachment = () => attachmentRef.current?.click();
  const handleBrowseErrorLog = () => errorLogRef.current?.click();

  const handleToFolderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setToFolder(e.target.files[0].name);
    }
  };

  const handleAttachmentSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachmentFile(e.target.files[0]);
    }
  };

  const handleErrorLogSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setErrorLogPath(e.target.files[0].name);
    }
  };

  const handleSend = () => {
    if (!subject) {
      alert("Please enter the Subject");
      return;
    }
    alert("✅ Individual Messages sent successfully! (Demo Mode)");
  };

  const handleCancel = () => {
    navigate('/commhub');
  };

  return (
    <>
      {/* Navigation Header */}
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
          <a href="/commhub">Home</a>
          <a href="/commhub#features">Features</a>
          <a href="/commhub#integration">About</a>
          <a href="/commhub#ecosystem">Contact</a>
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

      <div className="individual-page">
        <div className="form-container">
          <h1 className="form-title">Individual Messages</h1>
          <p className="form-subtitle">Send personalized messages to specific customers</p>

          <div className="email-form">
            <div className="form-row">
              <div className="form-group">
                <label>Area</label>
                <select value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="">Select Area</option>
                  <option value="colombo">Colombo</option>
                  <option value="gampaha">Gampaha</option>
                  <option value="kandy">Kandy</option>
                </select>
              </div>

              <div className="form-group">
                <label>Bill Month</label>
                <select value={billMonth} onChange={(e) => setBillMonth(e.target.value)}>
                  <option value="">Select Month</option>
                  <option value="2026-04">April 2026</option>
                  <option value="2026-05">May 2026</option>
                </select>
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <select value={companyName} onChange={(e) => setCompanyName(e.target.value)}>
                  <option value="">Select Company</option>
                  <option value="ceb">CEB</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>To :</label>
              <button className="browse-btn" onClick={handleBrowseToFolder}>
                Browse Bill Folder
              </button>
              <input 
                type="text" 
                className="path-input" 
                value={toFolder} 
                placeholder="Selected folder path" 
                readOnly 
              />
            </div>

            <div className="form-group">
              <label>cc</label>
              <input 
                type="text" 
                className="full-input" 
                value={cc} 
                onChange={(e) => setCc(e.target.value)} 
                placeholder="email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input 
                type="text" 
                className="full-input" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                placeholder="Enter email subject"
              />
            </div>

            <div className="form-group">
              <label>Attach Bill Terms_Conditions</label>
              <button className="browse-btn" onClick={handleBrowseAttachment}>
                Browse Attachment
              </button>
              <input 
                type="text" 
                className="path-input" 
                value={attachmentFile ? attachmentFile.name : ''} 
                placeholder="Attachment file name" 
                readOnly 
              />
            </div>

            <div className="details-section">
              <h4>Details of (For any queries or difficulties Contact:)</h4>
              
              <div className="form-group">
                <label>email Address</label>
                <input 
                  type="email" 
                  className="full-input" 
                  value={emailAddress} 
                  onChange={(e) => setEmailAddress(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label>Telephone</label>
                <input 
                  type="tel" 
                  className="full-input" 
                  value={telephone} 
                  onChange={(e) => setTelephone(e.target.value)} 
                />
              </div>

              <div className="form-group">
                <label>Error Log Folder Path</label>
                <button className="browse-btn" onClick={handleBrowseErrorLog}>
                  Browse Folder
                </button>
                <input 
                  type="text" 
                  className="path-input" 
                  value={errorLogPath} 
                  placeholder="Selected path" 
                  readOnly 
                />
              </div>
            </div>

            <div className="send-options">
              <label>
                <input 
                  type="radio" 
                  checked={sendToCustomer} 
                  onChange={() => setSendToCustomer(true)} 
                /> Send To Customer
              </label>
              <label>
                <input 
                  type="radio" 
                  checked={!sendToCustomer} 
                  onChange={() => setSendToCustomer(false)} 
                /> Testing (Send All Mails To Your Mail Address)
              </label>
            </div>

            <div className="action-buttons">
              <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button className="btn-send" onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>

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

      {/* Hidden File Inputs */}
      <input 
        type="file" 
        ref={toFolderRef} 
        onChange={handleToFolderSelect} 
        style={{ display: 'none' }} 
      />
      <input 
        type="file" 
        ref={attachmentRef} 
        onChange={handleAttachmentSelect} 
        style={{ display: 'none' }} 
      />
      <input 
        type="file" 
        ref={errorLogRef} 
        onChange={handleErrorLogSelect} 
        style={{ display: 'none' }} 
      />
    </>
  );
};

export default IndividualMessages;