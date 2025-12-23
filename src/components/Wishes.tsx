import { motion } from 'framer-motion';
import { Star, Heart, Compass, Sparkles } from 'lucide-react';

const wishes = [
  {
    id: 1,
    title: "Endless Adventures",
    icon: Compass,
    description: "May we explore every corner of the world together, hand in hand, discovering new places and making unforgettable memories."
  },
  {
    id: 2,
    title: "Growing Together",
    icon: Star,
    description: "To support each other's dreams and improved versions of ourselves, celebrating every small win along the way."
  },
  {
    id: 3,
    title: "Unconditional Love",
    icon: Heart,
    description: "That our love continues to deepen with every passing year, remaining the safe harbor we both can always return to."
  },
  {
    id: 4,
    title: "Shared Laughter",
    icon: Sparkles,
    description: "May our days always be filled with the sound of our laughter and the joy of simply being in each other's company."
  }
];

const Wishes = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-t from-rose-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display text-rose-900 mb-4">Wishes For Us</h2>
          <p className="text-gray-500 font-light text-lg">Hoping for a future as beautiful as you</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md hover:border-rose-200 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="bg-rose-50 p-4 rounded-2xl text-rose-400 group-hover:text-rose-500 group-hover:bg-rose-100 transition-colors">
                  <wish.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-display text-gray-800 mb-3 group-hover:text-rose-700 transition-colors">{wish.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{wish.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;
