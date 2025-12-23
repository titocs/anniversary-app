
import { motion } from 'framer-motion';
import { Bus, MapPin, Heart } from 'lucide-react';

// Using a few placeholder images from the uploaded set
// The user can swap these for the actual TJ specific photos later
const routinePhotos = [
  { src: "./image-tj-1.jpeg", rotation: -3 },
  { src: "./image-tj-2.jpeg", rotation: 2 },
  { src: "./image-tj-3.jpeg", rotation: -2 },
];

const AlwaysWithYou = () => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-30 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-2 text-rose-500 mb-4 font-medium tracking-wide uppercase text-sm">
              <Bus size={18} />
              <span>Daily Routine</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6 leading-tight">
              Always With You <br />
              <span className="text-rose-500 italic">On The Way Home</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every ride on the TransJakarta isn't just a commute; it's our little escape. 
              Holding hands in the crowd, sharing stories from our day, and just being 
              present with each other.
            </p>

            <div className="flex flex-col gap-4">
               <div className="flex items-start gap-4 p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
                  <div className="bg-white p-2.5 rounded-full shadow-sm text-rose-500 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Our Route</h4>
                    <p className="text-gray-600 text-sm">From the busy station to our peaceful destination, every stop is better with you.</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-4 bg-blue-50/30 rounded-2xl border border-blue-50">
                  <div className="bg-white p-2.5 rounded-full shadow-sm text-blue-500 mt-1">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Favorite Moments</h4>
                    <p className="text-gray-600 text-sm">Resting my head on your shoulder as the city lights pass by.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Photo Collage */}
          <motion.div 
            className="order-1 lg:order-2 relative h-125 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {routinePhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="absolute w-64 md:w-72 aspect-3/4 p-3 bg-white shadow-xl rounded-xl border border-gray-100"
                style={{ 
                  left: index === 0 ? '10%' : index === 1 ? '50%' : '30%',
                  top: index === 0 ? '10%' : index === 1 ? '5%' : '40%',
                  transform: `translate(-50%, 0) rotate(${photo.rotation}deg)`,
                  zIndex: index,
                }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, transition: { duration: 0.3 } }}
              >
                <div className="w-full h-full overflow-hidden rounded-lg bg-gray-100">
                   <img src={photo.src} alt="Us on TJ" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AlwaysWithYou;
