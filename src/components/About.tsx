import { User, MapPin, Mail, Phone } from 'lucide-react';
import { languages } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  const getLanguageProficiencyLabel = (proficiency: string) => {
    switch (proficiency) {
      case 'native':
        return t('about.languages.native');
      case 'proficient':
        return t('about.languages.proficient');
      case 'intermediate':
        return t('about.languages.intermediate');
      default:
        return proficiency;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('about.objective')}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-dark mb-4">{t('about.info.title')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <User className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Younes Sakr</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">{t('about.info.location')}</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">{t('about.info.email')}</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">{t('about.info.phone')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-dark mb-6">
              {t('about.languages.title')}
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-5 shadow-sm transition-transform hover:transform hover:scale-105"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-800">{language.name}</h4>
                    <span className="text-sm text-primary-700 font-medium">
                      {getLanguageProficiencyLabel(language.proficiency)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full" 
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};