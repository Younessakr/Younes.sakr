import { skills } from '../data/portfolioData';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  
  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-dark mb-6 text-center">
              {t('skills.technicalTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <h4 className="font-medium text-gray-800 mb-2">{t(`skills.technicalSkills.${index}.name`)}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-primary-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6 text-center">
              {t('skills.personalTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all text-center"
                >
                  <h4 className="font-medium text-gray-800 mb-2">{t(`skills.personalSkills.${index}.name`)}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-accent-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
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