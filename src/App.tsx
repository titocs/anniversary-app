import Hero from './components/Hero';
import TimeCounter from './components/TimeCounter';
// import Gallery from './components/Gallery';
import Reasons from './components/Reasons';
import MusicPlayer from './components/MusicPlayer.tsx';
import Footer from './components/Footer.tsx';
import GiftReward from './components/GiftReward';
// import CarouselGallery from './components/CarouselGallery';
import MarqueeGallery from './components/MarqueeGallery';
import AlwaysWithYou from './components/AlwaysWithYou';

function App() {
  // Example start date: 3 years ago from now
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  return (
    <div className="min-h-screen text-gray-800 bg-rose-50/30 font-sans pb-24">
      <main className="flex flex-col">
        <Hero />
        <TimeCounter startDate={startDate} />
        {/* <Timeline /> */}
        <MarqueeGallery />
        {/* <CarouselGallery /> */}
        {/* <Gallery /> */}
        <Reasons />
        <AlwaysWithYou />
        <Footer />
        <MusicPlayer />
        <GiftReward />
      </main>
    </div>
  );
}

export default App;
