import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-rose-50/50 text-center text-rose-800/60 pb-32">
       <div className="flex items-center justify-center gap-2 mb-2 font-display text-lg">
         Made with <Heart size={16} fill="currentColor" className="text-rose-400 animate-pulse" /> for my love
       </div>
       <p className="text-sm tracking-widest uppercase">Forever & Always</p>
    </footer>
  );
};
export default Footer;
