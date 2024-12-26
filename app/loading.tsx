'use client';

import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        className="relative w-20 h-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-red-600 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner Ring */}
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-t-green-400 border-l-yellow-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center Logo */}
        <motion.div
          className="absolute inset-4 bg-white rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="text-blue-600 font-bold text-xl">S</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Spinner;
