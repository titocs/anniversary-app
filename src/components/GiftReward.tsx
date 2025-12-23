
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Flower2, X, Sparkles } from 'lucide-react';

const GiftReward = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClaimed, setIsClaimed] = useState(false);

  // Sparkles configuration
  const sparkles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    angle: (i * 360) / 12,
    delay: i * 0.1,
  }));

  const handleClaim = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsClaimed(false);
  };

  return (
    <>
      {/* Floating Gift Button */}
      <motion.button
        onClick={handleClaim}
        initial={{ scale: 0, rotate: -20 }}
        animate={{ 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          scale: {
             type: "spring",
             stiffness: 260,
             damping: 20
          }
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-50 bg-white p-4 rounded-full shadow-xl shadow-rose-500/20 border-2 border-rose-100 cursor-pointer group"
      >
        <Gift className="w-8 h-8 text-rose-500 group-hover:text-rose-600 transition-colors" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
        </span>
      </motion.button>

      {/* Modal / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="min-h-50 flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isClaimed ? (
                    <motion.div
                      key="gift-box"
                      exit={{ scale: 0, rotate: 20, opacity: 0 }}
                      className="cursor-pointer"
                      onClick={() => setIsClaimed(true)}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [-5, 5, -5],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                         <Gift size={120} className="text-rose-500" strokeWidth={1} />
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 text-xl font-display text-gray-800"
                      >
                        Tap to open!
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="flower-reward"
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="relative"
                    >
                      {/* Flower Icon */}
                      <motion.div
                        className="relative z-10"
                        animate={{ 
                           rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Flower2 size={140} className="text-rose-500" strokeWidth={1} fill="#ffe4e6" />
                      </motion.div>
                      
                      {/* Sparkles */}
                      {sparkles.map((sparkle) => (
                        <motion.div
                          key={sparkle.id}
                          initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                          animate={{ 
                            opacity: [1, 0],
                            scale: [0, 1],
                            x: Math.cos(sparkle.angle * (Math.PI / 180)) * 80,
                            y: Math.sin(sparkle.angle * (Math.PI / 180)) * 80,
                          }}
                          transition={{ 
                            duration: 1.5,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: sparkle.delay
                          }}
                          className="absolute top-1/2 left-1/2 w-4 h-4 text-yellow-400"
                        >
                          <Sparkles size={16} fill="currentColor" />
                        </motion.div>
                      ))}

                       <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h3 className="mt-6 text-2xl font-display font-bold text-rose-600">
                          For You! 🌹
                        </h3>
                        <p className="text-gray-500 mt-2">
                           You'll be able to receive this flower physically later when we meet.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GiftReward;
