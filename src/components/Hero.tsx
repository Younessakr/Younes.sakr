import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { profileImages } from '../data/imagesData';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in mb-8">
            <div className="w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
              <img
                src={profileImages.hero}
                alt="Younes Sakr"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6 font-heading">
              Younes Sakr
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-700 mb-8">
              {t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg font-medium flex items-center"
            >
              {t('hero.buttons.learnMore')}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-white hover:bg-gray-100 text-primary-700 border border-primary-600 px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg font-medium"
            >
              {t('hero.buttons.contact')}
            </Link>
          </div>

          <div className="animate-bounce mt-10 hidden md:block">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block cursor-pointer"
            >
              <ArrowDown className="text-primary-600 h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};