
// MusicPlayer component
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import song from '../assets/lany-last-forever.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(song);
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-rose-100 p-3 md:p-4 z-40 flex items-center justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
    >
      <div className="flex items-center gap-4 max-w-5xl w-full px-2 md:px-4">
        {/* Album Art */}
        <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-200 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
          <Heart size={20} className="text-rose-500 animate-pulse" fill="currentColor" />
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-900 truncate text-sm md:text-base font-display">Last Forever</div>
          <div className="text-xs text-rose-500 truncate">LANY</div>
          {/* Progress Bar */}
          <div className="w-full bg-rose-100 h-1 mt-1.5 rounded-full overflow-hidden cursor-pointer" 
               onClick={(e) => {
                 if (audioRef.current) {
                   const rect = e.currentTarget.getBoundingClientRect();
                   const x = e.clientX - rect.left;
                   const width = rect.width;
                   const percentage = x / width;
                   audioRef.current.currentTime = percentage * audioRef.current.duration;
                 }
               }}>
            <div className="bg-rose-500 h-full rounded-full relative transition-all duration-100" style={{ width: `${progress}%` }}>
               <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-rose-600 rounded-full shadow-sm" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 md:gap-6 shrink-0 ml-2">
           <button 
            onClick={toggleMute}
            className="text-gray-400 hover:text-rose-500 hidden sm:block transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <button className="text-gray-400 hover:text-rose-500 hidden md:block transition-colors"><SkipBack size={20} /></button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-all hover:scale-105 shadow-lg shadow-rose-500/30"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
          </button>
          <button className="text-gray-400 hover:text-rose-500 hidden md:block transition-colors"><SkipForward size={20} /></button>
        </div>
      </div>
    </motion.div>
  );
};
export default MusicPlayer;
