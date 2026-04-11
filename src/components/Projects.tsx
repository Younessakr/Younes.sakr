import { ExternalLink, Eye } from 'lucide-react';
import { projects } from '../data/projectsData';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; type: 'before' | 'after' } | null>(null);

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Project Images */}
              {project.beforeImage && project.afterImage && (
                <div className="grid grid-cols-2 gap-1 p-4">
                  <div className="relative group">
                    <img
                      src={project.beforeImage}
                      alt={`${t(`projects.${project.id}.title`)} - Before`}
                      className="w-full h-32 object-cover rounded cursor-pointer"
                      onClick={() => setSelectedImage({
                        src: project.beforeImage!,
                        alt: `${t(`projects.${project.id}.title`)} - ${t('projects.before')}`,
                        type: 'before'
                      })}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <span className="absolute bottom-1 left-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {t('projects.before')}
                    </span>
                  </div>
                  <div className="relative group">
                    <img
                      src={project.afterImage}
                      alt={`${t(`projects.${project.id}.title`)} - After`}
                      className="w-full h-32 object-cover rounded cursor-pointer"
                      onClick={() => setSelectedImage({
                        src: project.afterImage!,
                        alt: `${t(`projects.${project.id}.title`)} - ${t('projects.after')}`,
                        type: 'after'
                      })}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <span className="absolute bottom-1 left-1 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {t('projects.after')}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {t(`projects.${project.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {t(`projects.${project.id}.description`)}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                {project.improvements && (
                  <div className="mb-4">
                    <h4 className="font-medium text-dark mb-2 text-sm">
                      {t('projects.improvements')}:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {t(`projects.${project.id}.improvements`, { returnObjects: true }).map((improvement: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-1">•</span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* View Project Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    {t('projects.viewProject')} <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-dark">
                  {selectedImage.alt}
                </h3>
                <button
                  onClick={closeImageModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeImageModal}
        />
      )}
    </section>
  );
};