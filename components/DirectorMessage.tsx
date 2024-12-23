'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DirectorMessage = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-tr from-gray-50 via-white to-gray-100">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 -right-24 w-80 h-80 bg-blue-200 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Message from the Director
          </h2>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Director's Circular Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center md:self-start pt-8"
          >
            <div className="rounded-full overflow-hidden shadow-xl w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/director.jpg"
                alt="Director"
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover w-full h-full"
                height={320}
                width={320}
                priority
              />
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 bg-blue-900 text-white py-3 px-6 rounded-lg shadow-xl"
            >
              <h3 className="text-lg font-semibold">Mr. Bibek Pathak</h3>
              <p className="text-sm">Managing Director</p>
            </motion.div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              "Welcome to Support Educational Consultancy! We're passionate
              about helping students experience the incredible opportunity of
              studying in Japan. Our deep connection with Japan, cultivate over
              10 years of living and exploring the Japan & their culture, allows
              us to proved truly insightful and effective support. As a
              language-based consultancy, we understand the crucial role of
              language proficiency and prioritize language development alongside
              academic preparation. We handle everything from language
              preparation to university placement, ensuring a smooth and
              successful transition to your new academic adventure."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              "We're here to Support your Dream, every step of the way"
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-xl text-blue-900 font-bold">
                  Mr. Bibek Pathak
                </span>
                <span className="text-lg text-gray-500">Managing Director</span>
                <span className="text-lg text-gray-500">
                  Support Educational Consultancy
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
