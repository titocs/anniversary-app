import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, Camera } from 'lucide-react';

const milestones = [
  { date: 'January 15, 2022', title: 'First Date', description: 'Coffee at The Grind, where we talked for hours.', icon: Calendar },
  { date: 'June 20, 2022', title: 'First Trip', description: 'A magical weekend getaway to the beach.', icon: MapPin },
  { date: 'February 14, 2023', title: 'Moved In', description: 'Our first apartment together. Chaos and love.', icon: Heart },
  { date: 'December 25, 2023', title: 'First Holiday', description: 'Celebrating Christmas with our families.', icon: Camera },
];

const Timeline = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <h2 className="text-3xl md:text-5xl font-display text-rose-900 text-center mb-20">Our Journey</h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-rose-200" />
        
        <div className="flex flex-col gap-12 md:gap-24">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Box */}
              <div className="w-full md:w-5/12 pl-20 md:pl-0 md:px-8 text-left md:text-right">
                 {index % 2 === 0 ? (
                   <div className="relative">
                     <span className="text-rose-400 text-sm font-bold tracking-wider uppercase mb-2 block">{item.date}</span>
                     <h3 className="text-2xl font-display text-rose-800 mb-2">{item.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
                   </div>
                 ) : (
                   <div className="hidden md:block"></div> 
                 )}
              </div>
              
              {/* Icon Bubble */}
              <div className="absolute left-0 md:relative md:left-auto md:w-16 md:h-16 w-16 h-16 rounded-full bg-rose-50 border-4 border-white shadow-lg flex items-center justify-center text-rose-500 z-10 mx-auto">
                <item.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Content Box (Mobile or Alternate) */}
              <div className="w-full md:w-5/12 pl-20 md:pl-8 text-left">
                {index % 2 !== 0 ? (
                   <div className="relative">
                     <span className="text-rose-400 text-sm font-bold tracking-wider uppercase mb-2 block">{item.date}</span>
                     <h3 className="text-2xl font-display text-rose-800 mb-2">{item.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
                   </div>
                 ) : (
                   <div className="block md:hidden">
                     <span className="text-rose-400 text-sm font-bold tracking-wider uppercase mb-2 block">{item.date}</span>
                     <h3 className="text-2xl font-display text-rose-800 mb-2">{item.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
                   </div>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Timeline;
