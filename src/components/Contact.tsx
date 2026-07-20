import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Merci pour votre message! Je vous contacterai dès que possible.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">{t('contact.info.email')}</h4>
                  <a href="mailto:younessakr01@gmail.com" className="text-gray-700 hover:text-primary-700 transition-colors">
                    younessakr01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary-700" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">{t('contact.info.phone')}</h4>
                  <a href="tel:+212671130224" className="text-gray-700 hover:text-primary-700 transition-colors">
                    +212 671 130 224
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-700" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">{t('contact.info.location')}</h4>
                  <p className="text-gray-700">
                    Agadir, Maroc
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-dark mb-4">
                {t('contact.social.title')}
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.xing.com/profile/Younes_Sakr" target="_blank" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                 <svg className="h-5 w-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657L5.43 6.12c-.179-.314-.421-.619-.91-.619H.736c-.446 0-.619.33-.381.75l4.631 8.286L.044 22.716c-.221.402-.026.784.444.784h3.82c.517 0 .756-.31.937-.64 0 0 4.93-8.824 5.121-9.192l4.13 7.551c.174.32.417.63.913.63h3.82c.465 0 .614-.397.355-.776l-5.351-8.75 5.34-9.5c.247-.417.062-.773-.392-.773h-3.82z"/>
</svg>
                </a>
                <a href="https://www.linkedin.com/in/younes-sakr/" target="_blank" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                  <svg className="h-5 w-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-dark mb-6">
              {t('contact.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors shadow-md hover:shadow-lg font-medium flex items-center justify-center"
              >
                {t('contact.form.send')} <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};