import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const languageOptions = {
  en: { code: "EN", name: "English" },
  fr: { code: "FR", name: "Français" },
  de: { code: "DE", name: "Deutsch" }
};

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languageOptions[i18n.language as keyof typeof languageOptions] || languageOptions.en;

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-200"
      >
        <span className="font-semibold text-primary-700 text-sm">{currentLanguage.code}</span>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={handleClickOutside}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
            {Object.entries(languageOptions).map(([lang, option]) => (
              <button
                key={lang}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  i18n.language === lang ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-sm">{option.code}</span>
                  <span className="text-sm">{option.name}</span>
                </div>
                {i18n.language === lang && (
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};