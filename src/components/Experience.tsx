import { experiences } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary-200 pl-8 ml-4 md:ml-6">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative mb-12 ${index === 0 ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-12 mt-1.5 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary-600" />
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-dark">{t(`experience.${experience.id}.title`)}</h3>
                    <span className="text-sm font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                      {t(`experience.${experience.id}.period`)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 font-medium">{t(`experience.${experience.id}.company`)}</p>
                  <ul className="list-disc ml-5 space-y-2">
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-700">
                        {t(`experience.${experience.id}.responsibilities.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};