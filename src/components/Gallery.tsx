import { motion } from 'framer-motion';

const photos = [
  { src: "./image1.jpeg", caption: "Laughing Together" },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800", caption: "Sunset Walks" },
  { src: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80&w=800", caption: "Just Us" },
  { src: "https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?auto=format&fit=crop&q=80&w=800", caption: "City Adventures" },
  { src: "https://images.unsplash.com/photo-1546552356-3fae876a61ca?auto=format&fit=crop&q=80&w=800", caption: "Coffee Dates" },
  { src: "https://images.unsplash.com/photo-1511253272986-749e7943c51f?auto=format&fit=crop&q=80&w=800", caption: "Cozy Evenings" },
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800", caption: "Nature Escapes" },
  { src: "https://images.unsplash.com/photo-1505353846665-22d7ba48fcb7?auto=format&fit=crop&q=80&w=800", caption: "Always by your side" },
];

const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-rose-50/30">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display text-rose-900 mb-4">Captured Moments</h2>
        <p className="text-rose-600/70">Snapshots of our favorite memories</p>
      </div>
      
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white"
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Gallery;
