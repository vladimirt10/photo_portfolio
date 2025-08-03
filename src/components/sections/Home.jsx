import { RevealOnScroll } from "../RevealOnScroll";
 
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Mrs. M W
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a passionate photographer who finds inspiration in nature's quiet moments 
            and the authentic beauty of human connection. 
            Through my lens, I capture the optimistic spirit of our world, 
            revealing the extraordinary in everyday scenes and celebrating the light 
            that exists in every frame.
          </p>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-right" dir="rtl">
            אני צלמת נלהבת שמוצאת השראה ברגעים השקטים של הטבע
            וביופיו האותנטי של הקשר האנושי.
            דרך העדשה שלי, אני תופסת את רוח האופטימיות של עולמנו,
            חושפת את המיוחד שבסצנות היומיומיות וחוגגת את האור
            הקיים בכל פריים.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
