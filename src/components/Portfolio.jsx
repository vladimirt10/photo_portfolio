import { RevealOnScroll } from './RevealOnScroll';

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "צילומי טבע ונוף",
      description: "סדרת צילומי נוף עוצרת נשימה המתעדת את יופיו הטבעי של נוף ישראל",
      technologies: ["צילום דיגיטלי", "Lightroom", "צילום נוף", "HDR"],
      image: "/images/portfolio/project1.jpg",
      githubUrl: "https://github.com/",
      liveUrl: "https://nature-portfolio.com"
    },
    {
      id: 2,
      title: "צילומי פורטרטים",
      description: "אוסף צילומי פורטרטים אישיים המבטאים את האישיות והרגש הייחודי של כל נושא",
      technologies: ["צילום סטודיו", "תאורה מקצועית", "Photoshop", "צילום פורטרט"],
      image: "/images/portfolio/project2.jpg",
      githubUrl: "https://github.com/",
      liveUrl: "https://portrait-gallery.com"
    },
    {
      id: 3,
      title: "צילומי חתונה",
      description: "תיעוד רגשי ומקצועי של רגעי אושר ואהבה ביום החתונה המיוחד",
      technologies: ["צילום אירועים", "עריכה מתקדמת", "צילום קנדיד", "אלבומים דיגיטליים"],
      image: "/images/portfolio/project3.jpg",
      githubUrl: "https://github.com/",
      liveUrl: "https://wedding-moments.com"
    },
    {
      id: 4,
      title: "צילום רחוב",
      description: "תמונות ספונטניות המתעדות את החיים האורבניים והתרבות הישראלית",
      technologies: ["צילום רחוב", "תמונות קנדיד", "עיבוד שחור לבן", "צילום תיעודי"],
      image: "/images/portfolio/project4.jpg",
      githubUrl: "https://github.com/",
      liveUrl: "https://street-photography.com"
    },
    {
      id: 5,
      title: "צילום מוצרים",
      description: "צילום מוצרים מקצועי לעסקים ומותגים עם דגש על פרטים ואיכות",
      technologies: ["צילום מוצרים", "תאורת סטודיو", "עיבוד מתקדם", "רטוש מקצועי"],
      image: "/images/portfolio/project5.jpg",
      githubUrl: "https://github.com/",
      liveUrl: "https://product-shots.com"
    },
    {
      id: 6,
      title: "צילום מקרו",
      description: "חקר עולם המיקרו דרך עדשת המקרו - פרטים קטנים בגדול",
      technologies: ["צילום מקרו", "עדשות מיוחדות", "תאורה מיוחדת", "פוקוס סטקינג"],
      image: "/images/portfolio/project6.jpg",
      githubUrl: "https://github.com/",
      liveUrl: "https://macro-world.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" dir="rtl">
              תיק העבודות שלי
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-right" dir="rtl">
              כאן מוצגים כמה מהפרויקטים האחרונים שלי המציגים את הכישורים והמומחיות שלי
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} className={`delay-${index * 100}`}>
              <div className="bg-gray-100 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-xl font-bold opacity-60">
                      {project.title}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span dir="rtl">צפה בעוד ב-GitHub</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
