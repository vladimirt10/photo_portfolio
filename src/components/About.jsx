import { RevealOnScroll } from './RevealOnScroll';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Hello! I'm Mrs. M, a passionate photographer.
              </h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love building scalable applications that solve real-world problems and provide 
                  exceptional user experiences.
                </p>
                <p>
                  My journey in development started with curiosity about how things work, and has 
                  evolved into a career focused on creating clean, efficient, and maintainable code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">20+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'Vue.js',
                'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS'
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-800 p-4 rounded-lg text-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
