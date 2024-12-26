'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text */}
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-white mb-4"
            animate={{
              scale: [1, 1.1, 1],
              textShadow: [
                '0 0 10px rgba(0,0,255,0.5)',
                '0 0 20px rgba(0,0,255,0.3)',
                '0 0 10px rgba(0,0,255,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Oops! Page Not Found
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Go Back
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              <Link href="/">Return Home</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
