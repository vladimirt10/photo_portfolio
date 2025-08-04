import { RevealOnScroll } from './RevealOnScroll';
import oilColorsImg from '../assets/oil_colors.jpg';

export const OilColorsTransition = () => {
  return (
    <section 
      id="oil-colors-transition" 
      className="relative bg-reveal"
      style={{
        backgroundImage: `url(${oilColorsImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      {/* Enhanced overlay for artistic effect */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <RevealOnScroll>
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white opacity-90">
              Through My Lens
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Every photograph tells a story, capturing moments that speak to the soul and reveal the beauty in our world.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
