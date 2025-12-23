import { motion } from 'framer-motion';
import { Heart, Plane, Home, Coffee } from 'lucide-react';

const milestones = [
  {
    id: 1,
    year: "2021",
    title: "First Meeting",
    icon: Coffee,
    description: "The day our paths crossed at the coffee shop. I knew there was something special about you from the very first moment."
  },
  {
    id: 2,
    year: "2022",
    title: "Our First Trip",
    icon: Plane,
    description: "Traveling together showed me that you're the perfect adventure partner. Every moment was magic."
  },
  {
    id: 3,
    year: "2023",
    title: "Moving In",
    icon: Home,
    description: "Building our home together has been the greatest joy. Waking up next to you is my favorite part of the day."
  },
  {
    id: 4,
    year: "2024",
    title: "Forever & Always",
    icon: Heart,
    description: "Every day with you is a gift. I can't wait to see what the future holds for us."
  },
];

const OurStory = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-rose-50/50 to-white overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-display text-rose-900 text-center mb-16">Our Story</h2>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200/50" />

        <div className="flex flex-col gap-12 md:gap-24 relative">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center justify-between gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Content Side */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                <span className="inline-block text-rose-400 font-display text-xl mb-2">{milestone.year}</span>
                <h3 className="text-2xl font-display text-rose-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>

              {/* Center Icon */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-rose-200 flex items-center justify-center shrink-0 shadow-sm">
                <milestone.icon size={20} className="text-rose-400" />
              </div>

              {/* Empty Side for Balance */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
