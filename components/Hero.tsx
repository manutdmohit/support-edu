'use client';

import { useRouter } from 'next/navigation';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const HeroSection = () => {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  };

  const itemVariant = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    [
      'World Class Education System',
      'Cost-Friendly Studying & Living',
      'Experience The Japanese Culture & Food',
    ],
    [
      'Experience Japanese Technology',
      'Safest & Cleanest Country In The World',
      'Job Opportunities',
    ],
  ];

  return (
    <div className="relative min-h-screen font-serif">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover opacity-80"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"
        />
      </motion.div>

      <div className="relative container mx-auto px-4 pt-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center min-h-[80vh] text-center my-5"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: -50 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 100,
              damping: 10,
            }}
            className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold mb-8"
          >
            {/* First Word */}
            <motion.span
              className="text-teal-400 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0px 0px 0px rgba(0,0,0,0)',
                  '0px 4px 16px rgba(59,130,246,0.4)',
                  '0px 0px 0px rgba(0,0,0,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(100).typeString('STUDY IN').start();
                }}
                options={{
                  cursor: '',
                  loop: false,
                  autoStart: true,
                  wrapperClassName: 'text-shadow-glow',
                }}
              />
            </motion.span>

            <div className="m-6"></div>

            {/* Second Word */}
            <motion.span
              className="text-yellow-500 inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0px 0px 0px rgba(0,0,0,0)',
                  '0px 4px 16px rgba(234,179,8,0.4)',
                  '0px 0px 0px rgba(0,0,0,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .changeDelay(100)
                    .typeString('JAPAN')
                    .start();
                }}
                options={{
                  cursor: '',
                  loop: false,
                  autoStart: true,
                  wrapperClassName: 'text-shadow-glow',
                }}
              />
            </motion.span>
          </motion.div>

          <div className="p-4 rounded-lg shadow-lg border-2 border-white/20 mb-10">
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-8">
              <div className="relative p-6 bg-white/10 rounded-lg shadow-lg border border-white/20">
                {/* Quote Icon Top */}
                <FaQuoteLeft
                  className="absolute top-[-10px] left-[-10px] text-teal-400 opacity-90"
                  size={36}
                />

                {/* Introduction */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-left font-bold font-mono leading-relaxed">
                  Dreaming of studying in Japan? Support Educational Consultancy
                  is your dedicated partner in navigating the journey to
                  Japanese education. We specialize in guiding Nepalese students
                  through every step, from school/university selection and
                  application assistance to visa processing and pre-departure
                  support. Let us help you unlock your academic & career
                  potential in the Land of the Rising Sun.
                </p>

                {/* Quote Icon Bottom */}
                <FaQuoteRight
                  className="absolute bottom-[-10px] right-[-10px] text-teal-400 opacity-80"
                  size={36}
                />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-5xl font-bold font- text-white mb-6"
            >
              Why Japan?
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto p-8 rounded-lg shadow-lg border border-white/20"
              style={{
                background: 'rgba(77, 86, 95, 0.575)', // Semi-transparent white background
                backdropFilter: 'blur(0px)', // Frosted-glass effect
              }}
            >
              {features.map((column, colIndex) => (
                <div key={colIndex} className="space-y-6">
                  {column.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariant}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-4 text-white bg-[rgba(6, 126, 238, 0.575)] rounded-lg border-4 border-white/20"
                    >
                      <motion.span
                        className="text-green-400 text-2xl"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        ★
                      </motion.span>
                      <p className="text-left text-lg font-bold">{item}</p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0px 0px 0px rgba(0,0,0,0)',
                    '0px 4px 16px rgba(255,0,0,0.2)',
                    '0px 0px 0px rgba(0,0,0,0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 mt-12 mb-5 text-2xl rounded-full"
                onClick={() => router.push('/contact')}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
