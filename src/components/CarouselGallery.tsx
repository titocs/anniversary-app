
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: "https://images.unsplash.com/photo-1522093537031-296d8dba709c?auto=format&fit=crop&q=80&w=800", caption: "Laughing Together" },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800", caption: "Sunset Walks" },
  { src: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80&w=800", caption: "Just Us" },
  { src: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?auto=format&fit=crop&q=80&w=800", caption: "City Adventures" },
  { src: "https://images.unsplash.com/photo-1546552356-3fae876a61ca?auto=format&fit=crop&q=80&w=800", caption: "Coffee Dates" },
  { src: "https://images.unsplash.com/photo-1511253272986-749e7943c51f?auto=format&fit=crop&q=80&w=800", caption: "Cozy Evenings" },
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800", caption: "Nature Escapes" },
  { src: "https://images.unsplash.com/photo-1505353846665-22d7ba48fcb7?auto=format&fit=crop&q=80&w=800", caption: "Always by your side" },
];

const CarouselGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + photos.length) % photos.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-24 px-4 bg-linear-to-b from-white to-rose-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display text-rose-900 mb-4">Our Journey</h2>
        <p className="text-rose-600/70">Moments that mean the world to me</p>
      </div>

      <div className="relative h-125 max-w-4xl mx-auto flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute max-w-[90%] md:max-w-[70%] w-full aspect-4/5 md:aspect-video bg-white rounded-3xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing border-4 border-white"
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              className="w-full h-full object-cover pointer-events-none" // prevent dragging image itself
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8 p-4">
              <h3 className="text-white text-xl md:text-2xl font-display tracking-wide font-medium">
                {photos[currentIndex].caption}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 md:-left-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-rose-600 shadow-lg hover:bg-white transition-all hover:scale-110 focus:outline-none"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 md:-right-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-rose-600 shadow-lg hover:bg-white transition-all hover:scale-110 focus:outline-none"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
            {photos.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-rose-500 w-8" : "bg-rose-200 hover:bg-rose-300"}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselGallery;
