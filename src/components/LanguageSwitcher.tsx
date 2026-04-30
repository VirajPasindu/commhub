import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
      >
        English
      </button>
      <button 
        onClick={() => changeLanguage('si')}
        className={`lang-btn ${currentLang === 'si' ? 'active' : ''}`}
      >
        සිංහල
      </button>
      <button 
        onClick={() => changeLanguage('ta')}
        className={`lang-btn ${currentLang === 'ta' ? 'active' : ''}`}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageSwitcher;