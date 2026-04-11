import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Education = () => {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  // Group certifications by issuer
  const groupedCertifications = certifications.reduce((groups, cert, index) => {
    const issuer = t(`education.certificationsList.${index}.issuer`);
    if (!groups[issuer]) {
      groups[issuer] = [];
    }
    groups[issuer].push({ ...cert, originalIndex: index });
    return groups;
  }, {} as Record<string, Array<any>>);
  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('education.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary-600" /> {t('education.degrees')}
            </h3>
            <div className="relative border-l-2 border-primary-200 pl-8 ml-4">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="relative mb-10"
                >
                  <div className="absolute -left-12 mt-1.5 w-8 h-8 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">{edu.year.substring(2)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-dark mb-2">{t(`education.${edu.id}.degree`)}</h4>
                    <p className="text-gray-600">{t(`education.${edu.id}.institution`)}</p>
                    {edu.id === 'edu4' && (
                      <p className="text-sm text-secondary-600 mt-2 font-medium italic">{t(`education.${edu.id}.additionalInfo`)}</p>
                    )}
                    <p className="text-sm text-primary-700 mt-2 font-medium">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6 flex items-center">
              <Award className="mr-2 text-primary-600" /> {t('education.certifications')}
            </h3>
            <div className="space-y-6">
              {Object.entries(groupedCertifications).map(([issuer, certs]) => (
                <div key={issuer} className="bg-gray-50 rounded-lg p-5 shadow-sm">
                  <h4 className="font-semibold text-dark mb-3 text-lg border-b border-gray-200 pb-2">
                    {issuer === 'ODC AGADIR' ? 'ODC AGADIR (ORANGE DIGITAL CENTER)' : issuer}
                  </h4>
                  <div className="space-y-3">
                    {certs.map((cert) => (
                      <div 
                        key={cert.originalIndex}
                        className="bg-white rounded-md p-4 hover:shadow-sm transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h5 className="font-medium text-dark text-sm">
                              {t(`education.certificationsList.${cert.originalIndex}.title`)}
                            </h5>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full font-medium">
                              {t(`education.certificationsList.${cert.originalIndex}.date`)}
                            </span>
                            {cert.photo && (
                              <button
                                onClick={() => setSelectedCertificate(cert.originalIndex)}
                                className="bg-primary-600 hover:bg-primary-700 text-white p-1.5 rounded-full transition-colors"
                                title="View Certificate"
                              >
                                <Eye className="h-3 w-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate !== null && certifications[selectedCertificate]?.photo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-dark">
                  {t(`education.certificationsList.${selectedCertificate}.title`)}
                </h3>
                <button
                  onClick={closeCertificateModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {t(`education.certificationsList.${selectedCertificate}.issuer`)} • {t(`education.certificationsList.${selectedCertificate}.date`)}
              </p>
            </div>
            <div className="p-4">
              <img
                src={certifications[selectedCertificate].photo}
                alt={t(`education.certificationsList.${selectedCertificate}.title`)}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close modal */}
      {selectedCertificate !== null && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeCertificateModal}
        />
      )}
      {/* Click outside to close modal */}
      {selectedCertificate !== null && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeCertificateModal}
        />
      )}
    </section>
  );
};