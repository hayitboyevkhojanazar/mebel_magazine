import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import img1 from '../assets/images/swipe1.png';
import img2 from '../assets/images/swipe2.png';
import img3 from '../assets/images/swipe3.png';


const images = [
  {img: img1, text: "Скидка 15% на первую покупку", textColor: "rgba(153, 153, 153, 1)", width: "1100px" },
  {img: img2, text: "1000+ аксессуаров для дома", textColor: "rgba(153, 153, 153, 1)", width: "1100px" },
  {img: img3, text: "Коллекция стильного и яркого текстиля", textColor: "white", width: "1200px" },
  // Add more image paths as needed
];

const variants = {
  enter: {
    x: 1000,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    }
  },
  exit: {
    x: -1000,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    }
  }
};

const ImageLoop = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center z-10">
      <div className="relative w-full h-[500px] overflow-hidden">
        <AnimatePresence initial={false} custom={page}>
          <motion.img
            key={page}
            src={images[page].img}
            className="absolute top-0 left-0 w-full h-full object-cover"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          />
            <motion.div
              className={`absolute top-1/4 contain-pad`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{maxWidth: images[page].width}}
            >
              <p
                className={`text-5xl font-bold`}
                style={{ color: images[page].textColor, maxWidth: images[page].width }}
              >
                {images[page].text}
              </p>
              <button
                className='mt-6 bg-primary text-white px-12 py-5 rounded-xl'
              >
                Подробнее
              </button>
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageLoop;
