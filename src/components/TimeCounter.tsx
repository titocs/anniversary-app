import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { intervalToDuration, type Duration } from 'date-fns';

const TimeCounter = ({ startDate }: { startDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<Duration>({
    years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const duration = intervalToDuration({
        start: startDate,
        end: new Date()
      });
      setTimeLeft(duration);
    }, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  const items = [
    { label: 'Years', value: timeLeft.years || 0 },
    { label: 'Months', value: timeLeft.months || 0 },
    { label: 'Days', value: timeLeft.days || 0 },
    { label: 'Hours', value: timeLeft.hours || 0 },
    { label: 'Minutes', value: timeLeft.minutes || 0 },
    { label: 'Seconds', value: timeLeft.seconds || 0 },
  ];

  return (
    <section className="relative py-20 px-4 -mt-20 z-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(190,24,93,0.1)] border border-white/80">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display text-rose-900 mb-2">Time Together</h2>
            <p className="text-rose-600/80 font-medium">Every second counts</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="flex flex-col items-center justify-center p-4 bg-white/50 rounded-2xl border border-white hover:bg-white/80 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-rose-500 tabular-nums font-display">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-rose-800/60 uppercase tracking-widest mt-2">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeCounter;
