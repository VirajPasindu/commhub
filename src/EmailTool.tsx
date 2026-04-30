/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';   // ← Added
import './EmailTool.css';

const EmailTool: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [billPdfFolder, setBillPdfFolder] = useState('');
  const [area, setArea] = useState('');
  const [billCycle, setBillCycle] = useState('');
  const [cc, setCc] = useState('');
  const [subject, setSubject] = useState('');
  const [addAttachment, setAddAttachment] = useState(true);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [errorLogPath, setErrorLogPath] = useState('');
  const [sendToCustomer, setSendToCustomer] = useState(true);
  const [messageBody, setMessageBody] = useState('');

  const billFolderRef = useRef<HTMLInputElement>(null);
  const attachmentRef = useRef<HTMLInputElement>(null);
  const errorLogRef = useRef<HTMLInputElement>(null);

  const handleBrowseBillFolder = () => billFolderRef.current?.click();
  const handleBrowseAttachment = () => attachmentRef.current?.click();
  const handleBrowseErrorLog = () => errorLogRef.current?.click();

  const handleBillFolderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const path = e.target.files[0].webkitRelativePath || e.target.files[0].name;
      setBillPdfFolder(path.split('/')[0] || path);
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

  const handleSendEmail = () => {
    if (!subject || !messageBody) {
      alert(t('pleaseFillSubjectAndBody'));
      return;
    }
    alert(t('emailSentSuccessfully'));
  };

  const handleBack = () => {
    navigate('/commhub');
  };

  return (
    <>
      {/* Navigation Header with Language Switcher */}
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
          <LanguageSwitcher />   {/* ← Language Switcher Added Here */}
        </div>
      </nav>

      <div className="email-tool-page">
        <div className="email-tool-container">
          <h1 className="page-title">{t('bulkEmailTool')}</h1>
          <p className="page-subtitle">{t('sendBillNotifications')}</p>

          <div className="email-form">
            <div className="form-row">
              <div className="form-group">
                <label>{t('area')}</label>
                <select className="input-field" value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="">{t('selectArea')}</option>
                  <option value="colombo">Colombo</option>
                  <option value="gampaha">Gampaha</option>
                </select>
              </div>

              <div className="form-group">
                <label>{t('billCycle')}</label>
                <select className="input-field" value={billCycle} onChange={(e) => setBillCycle(e.target.value)}>
                  <option value="">{t('selectCycle')}</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('billPdfFolder')}</label>
                <button className="browse-btn" onClick={handleBrowseBillFolder}>
                  {t('browseBillFolder')}
                </button>
              </div>
              <input 
                type="text" 
                className="path-input" 
                value={billPdfFolder} 
                placeholder={t('selectedFolderPath')}
                readOnly 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('cc')}</label>
                <input 
                  type="text" 
                  className="full-input" 
                  value={cc} 
                  onChange={(e) => setCc(e.target.value)} 
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t('subject')}</label>
                <input 
                  type="text" 
                  className="full-input" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                  placeholder={t('enterEmailSubject')}
                />
              </div>
            </div>

            <div className="attachment-section">
              <label>{t('addExtraAttachment')}</label>
              <div className="radio-group">
                <label>
                  <input 
                    type="radio" 
                    name="attachment" 
                    checked={!addAttachment} 
                    onChange={() => setAddAttachment(false)} 
                  /> {t('no')}
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="attachment" 
                    checked={addAttachment} 
                    onChange={() => setAddAttachment(true)} 
                  /> {t('yes')}
                </label>
              </div>

              {addAttachment && (
                <div className="attachment-row">
                  <button className="browse-btn" onClick={handleBrowseAttachment}>
                    {t('browseAttachmentFile')}
                  </button>
                  <input 
                    type="text" 
                    className="path-input" 
                    value={attachmentFile ? attachmentFile.name : ''} 
                    placeholder={t('attachmentFileName')} 
                    readOnly 
                  />
                </div>
              )}
            </div>

            <div className="details-section">
              <h4>{t('detailsOf')}</h4>
              
              <div className="form-row">
                <div className="form-group">
                  <label>{t('emailAddress')}</label>
                  <input 
                    type="email" 
                    className="full-input" 
                    value={emailAddress} 
                    onChange={(e) => setEmailAddress(e.target.value)} 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t('telephone')}</label>
                  <input 
                    type="tel" 
                    className="full-input" 
                    value={telephone} 
                    onChange={(e) => setTelephone(e.target.value)} 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>{t('errorLogFolderPath')}</label>
                  <button className="browse-btn" onClick={handleBrowseErrorLog}>
                    {t('browseFolder')}
                  </button>
                  <input 
                    type="text" 
                    className="path-input" 
                    value={errorLogPath} 
                    placeholder={t('selectedFolderPath')}
                    readOnly 
                  />
                </div>
              </div>
            </div>

            <div className="message-body">
              <label>{t('messageBody')}</label>
              <textarea 
                value={messageBody} 
                onChange={(e) => setMessageBody(e.target.value)} 
                rows={10}
                placeholder={t('typeYourMessage')}
              />
            </div>

            <div className="send-options">
              <label>
                <input 
                  type="radio" 
                  name="sendOption" 
                  checked={sendToCustomer} 
                  onChange={() => setSendToCustomer(true)} 
                /> {t('sendToCustomer')}
              </label>
              <label>
                <input 
                  type="radio" 
                  name="sendOption" 
                  checked={!sendToCustomer} 
                  onChange={() => setSendToCustomer(false)} 
                /> {t('testing')}
              </label>
            </div>

            <div className="action-buttons">
              <button className="btn-secondary" onClick={handleBack}>{t('back')}</button>
              <button className="btn-primary" onClick={handleSendEmail}>{t('sendEmail')}</button>
              <button className="btn-secondary">Close</button>
            </div>

            <div className="status-bar">
              <span>0 out of 0</span>
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
        ref={billFolderRef}
        onChange={handleBillFolderSelect}
        style={{ display: 'none' }}
        {...({ webkitdirectory: true, directory: true } as any)}
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

export default EmailTool;