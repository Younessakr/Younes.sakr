import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Realization {
  id: string;
  title: string;
  description: string;
  image: string;
}

const realizations: Realization[] = [
  {
    id: 'cameras',
    title: '',
    description: '',
    image: '2.png'
  },
  {
    id: 'network',
    title: '',
    description: '',
    image: '1.png'
  },
 
  {
    id: 'workenv',
    title: '',
    description: '',
    image: '3.png'
  }
];

export const Realizations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % realizations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + realizations.length) % realizations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="realizations" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            Überblick über meine berufliche Erfahrung
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video shadow-lg">
            {/* Images */}
            {realizations.map((realization, index) => (
              <div
                key={realization.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={realization.image}
                  alt={realization.title}
                  className="w-full h-full object-cover"
                />
                {/* Title and Description Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                    {realization.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    {realization.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark p-2 rounded-full transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark p-2 rounded-full transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {realizations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
