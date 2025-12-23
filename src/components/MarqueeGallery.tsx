
import { motion } from 'framer-motion';

const photos = Array.from({ length: 19 }, (_, i) => ({
  src: `./image${i + 1}.jpeg`,
  caption: `Memory ${i + 1}`
}));

const MarqueeGallery = () => {
  return (
    <section className="py-24 bg-rose-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-display text-rose-900 mb-4">Our Memories</h2>
        <p className="text-rose-600/70">A never-ending stream of happy moments</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30, // Adjust speed here (slower = higher number)
          }}
          // Pause on hover
          whileHover={{ animationPlayState: "paused" }} // Note: Framer motion doesn't support playState directly in whileHover for orchestrating continuous animations easily, but we can try basic css hover or just accept it flows.
          // Actually, basic hover pause is easier with CSS on the container, but let's stick to simple motion first.
        >
          {/* Double the array to create seamless loop */}
          {[...photos, ...photos].map((photo, index) => (
            <div 
              key={index} 
              className="relative w-64 md:w-80 h-96 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={photo.src} 
                alt={photo.caption} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">{photo.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
           className="flex gap-8 whitespace-nowrap absolute top-0 left-0"
           initial={{ x: "100%" }} 
           // We actually just need one container moving 2 sets of items. 
           // The logic above [0% -> -50%] works if the container width fits exactly 2 sets.
           // However, for a robust marquee, normally we translate the track -50% if the track contains 2 copies of content.
        /> 
      </div>
      
      {/* Decorative gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 w-32 h-full z-10 bg-linear-to-r from-rose-50/80 to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 w-32 h-full z-10 bg-linear-to-l from-rose-50/80 to-transparent"></div>
    </section>
  );
};

export default MarqueeGallery;
