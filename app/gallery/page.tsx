'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const galleryItems = [
  {
    id: 1,
    image: '/gallery/1.jpeg',
    title: 'Visa Success Story',
    description:
      ' A proud student showcasing his Japanese visa in front of the Support Educational Consultancy logo wall, representing another successful step towards realizing his academic dreams in Japan',
  },
  {
    id: 2,
    image: '/gallery/2.jpeg',
    title: 'Student Achievement',
    description:
      "A successful student proudly displaying her Japanese visa, marking another milestone in Support Educational Consultancy's commitment to helping students achieve their study abroad goals.",
  },
  {
    id: 3,
    image: '/gallery/3.jpeg',
    title: 'Professional Work Station',
    description:
      'Our well-equipped office space featuring Japanese university brochures, modern facilities, and a professional setup to assist students with their educational journey to Japan.',
  },
  {
    id: 4,
    image: '/gallery/4.jpeg',
    title: 'Gateway to Japan',
    description:
      'An eye-catching entrance featuring our iconic torii gate wall art and company branding, symbolizing the pathway to Japanese education opportunities through Support Educational Consultancy',
  },
  {
    id: 5,
    image: '/gallery/5.jpeg',
    title: 'Resource Center',
    description:
      'Our professional office environment showcasing educational materials, modern equipment, and aesthetic display units, reflecting our commitment to quality service and Japanese education counseling.',
  },
  {
    id: 6,
    image: '/gallery/6.jpeg',
    title: 'Professional Reception Area',
    description:
      'A welcoming reception space showcasing modern design elements with wooden accents, custom lighting, and an informative Japanese map display, creating a professional learning environment.',
  },
  {
    id: 7,
    image: '/gallery/7.jpeg',
    title: 'Our Modern Office Building',
    description:
      "Support Educational Consultancy's contemporary office building featuring a striking blue glass facade, centrally located in Bagbazar, Kathmandu, offering easy accessibility to students.",
  },
  {
    id: 8,
    image: '/gallery/8.jpeg',
    title: 'Japanese Language Classroom',
    description:
      'A dedicated learning space equipped with essential Japanese language materials including Hiragana and Katakana charts, designed for effective language instruction and student comfort.',
  },
  {
    id: 9,
    image: '/gallery/9.jpeg',
    title: 'Student Success Story',
    description:
      'A proud student displaying their newly received visa document in front of the Support Educational Consultancy logo wall, marking another successful step towards their Japanese education journey',
  },
];

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const paginatedItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-12 mt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Capturing moments of success and cultural exchange in our journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {paginatedItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                } transition-colors`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 hover:bg-blue-700 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
