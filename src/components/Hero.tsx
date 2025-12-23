import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
  const [hearts] = useState(() => [...Array(12)].map((_, i) => ({
    id: i,
    x: Math.random() * 200 - 100,
    left: Math.random() * 100,
    fontSize: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 10
  })));

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-50 via-white to-pink-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/40 to-transparent z-0" />

      {/* Floating Hearts Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: '110vh', opacity: 0, scale: 0.5 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 0.4, 0],
              x: heart.x 
            }}
            transition={{ 
              duration: heart.duration, 
              repeat: Infinity, 
              delay: heart.delay,
              ease: "linear"
            }}
            className="absolute text-rose-200/50"
            style={{ 
              left: `${heart.left}%`,
              fontSize: `${heart.fontSize}rem` 
            }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="block text-rose-400 font-medium tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
            Together Forever
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-rose-900 mb-6 drop-shadow-sm leading-tight">
            Happy Anniversary <br />
            <span className="italic text-rose-500">Tito & Gia</span>
          </h1>
          <div className="h-1 w-24 bg-rose-300 mx-auto my-8 rounded-full" />
          <p className="text-xl md:text-2xl text-rose-800/80 font-light tracking-wide font-display">
            Celebrating <span className="font-medium text-rose-600">1 Years</span> of beautiful moments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-rose-400/60 animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
            <Heart size={20} fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
