import { RevealOnScroll } from './RevealOnScroll';
import oilColorsImg from '../assets/oil_colors.jpg';

export const OilColorsTransition = () => {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section 
      id="oil-colors-transition" 
      className="relative w-full"
    >
      <div className="relative">
        <img 
          src={oilColorsImg} 
          alt="Oil Colors Transition" 
          className={`w-full h-auto ${isMobile ? 'object-contain' : 'object-cover'}`}
        />
        {/* Enhanced overlay for artistic effect */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    </section>
  );
};
