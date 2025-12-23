import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sun, Coffee, Music } from 'lucide-react';

const reasons = [
  { id: 1, title: "Your Smile", icon: Sun, description: "It lights up my darkest days and makes everything better. I get butterflies every time." },
  { id: 2, title: "Your Support", icon: Star, description: "You believe in me even when I doubt myself. You are my rock." },
  { id: 3, title: "Our Talks", icon: Coffee, description: "Those quiet mornings where we just talk about everything and nothing over coffee." },
  { id: 4, title: "Your Kindness", icon: Heart, description: "The way you treat everyone with respect and love inspires me to be better." },
  { id: 6, title: "Your Laugh", icon: Music, description: "It's the most beautiful melody I've ever heard. It gets me every time." },
];

const Reasons = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-rose-50/50 to-white overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-display text-rose-900 text-center mb-16">why I Love You</h2>
      
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
        {reasons.map((reason) => (
           <motion.div
             key={reason.id}
             layoutId={`card-${reason.id}`}
             onClick={() => setSelectedId(reason.id)}
             className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100/50 hover:shadow-lg hover:border-rose-200 cursor-pointer w-40 h-40 md:w-56 md:h-56 flex flex-col items-center justify-center gap-4 text-center group transition-colors"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <motion.div layoutId={`icon-${reason.id}`} className="text-rose-300 group-hover:text-rose-500 transition-colors">
               <reason.icon size={32} className="md:w-10 md:h-10" />
             </motion.div>
             <motion.h3 layoutId={`title-${reason.id}`} className="font-display text-lg md:text-xl text-rose-800 font-medium">
               {reason.title}
             </motion.h3>
           </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
              
              {(() => {
                const reason = reasons.find(r => r.id === selectedId);
                if (!reason) return null;
                return (
                  <div className="flex flex-col items-center text-center">
                    <motion.div layoutId={`icon-${reason.id}`} className="text-rose-500 mb-6 bg-rose-50 p-6 rounded-full">
                      <reason.icon size={48} />
                    </motion.div>
                    <motion.h3 layoutId={`title-${reason.id}`} className="text-3xl font-display text-rose-900 mb-4">
                      {reason.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.2 }}
                      className="text-gray-600 leading-relaxed text-lg"
                    >
                      {reason.description}
                    </motion.p>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Reasons;
