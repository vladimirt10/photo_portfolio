import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { GalleryModal } from './GalleryModal';

export const Portfolio = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const projects = [
    {
      id: 1,
      title: "צילומי טבע ונוף",
      description: "סדרת צילומי נוף עוצרת נשימה המתעדת את יופיו הטבעי של נוף ישראל",
      technologies: ["צילום דיגיטלי", "Lightroom", "צילום נוף", "HDR"],
      image: "/photo_portfolio/images/portfolio/project.jpg"
    },
    {
      id: 2,
      title: "צילומי פורטרטים",
      description: "אוסף צילומי פורטרטים אישיים המבטאים את האישיות והרגש הייחודי של כל נושא",
      technologies: ["צילום סטודיו", "תאורה מקצועית", "Photoshop", "צילום פורטרט"],
      image: "/photo_portfolio/images/portfolio/project.jpg"
    },
    {
      id: 4,
      title: "צילום רחוב",
      description: "תמונות ספונטניות המתעדות את החיים האורבניים והתרבות הישראלית",
      technologies: ["צילום רחוב", "עיבוד שחור לבן", "צילום תיעודי"],
      image: "/photo_portfolio/images/portfolio/project4.jpg",
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczN1EYFj3mbSIXfUAAML1XoY_Hpoag-K3Kw9bZC2XEQDX4rjqzs6U61sO1MIBEOxzvnujSkIowDEXIJKkj0847m3R4-_oH5g7uK57G4xltBZ9qIu70sp9_vBtTrMfMu9iIuE8Q_rcmFOWkoVqHdFZyECyBVEhUXREmxRp08zBtOeig97D8SJ2Cp5LHG_S6yNOpiz26ax7TxcntC873o5-3fO1KSarNYz0N1oTdEyC0hCdbrv-OWeqFpr3kyRceZen3RrH2qNBk0032gE9t8savwmJkTyEVOaGqDvxsqJxtNTah2A9Fnv-s8P4eOJOsawDdREDP7xUMeIE28ZaxpeM2t9QNxuovcplugedj05MrBkwfyzMPF8xNAR1p30u15S7CByByfx3-UbFpVhwxboWKsGKtC9fomSlEG9g6n2XI2YtvmnyQ2jDDg8dDiDICk1MTcjeWkpNuE_v1mglDdBFBc0bx43RvZGO4NqodvdkyA8CWoKbhwCB6upKC-CQITA3GDcpwf4vOLwqe0LL7W2JfHuikR0PDx2alfzy9ODfEWtEyW2OTOICle7MO_id2ZmWGisz_9Vjn6Hc5Y_njqDPbiS5RofsL_tU7wfYXjEga0zLr3uG42pOAob5bNRB9fEZYq-dUqkxokr_4ZA3lDeSjuFPPfa0O-tln_eywox-h13EpPaK9o_hq7ala2Dq5q4cDgVnyI1zWSLDGzbUxewuO8TxaS-79UOaYOdXs5RMBCd4ahMJy-bMXIGoz7I5bLPyGGYbm9ditNBRyhKCvwFC8-vcJooS9zVT9FKyYAXCoVe4OVibCluSrtrJC1_ul-lmDhOlB-t06fMw6uD2SaM7BH1jd8QeiI81OoxIWUpnkr2VBj3zBOQ1EK7cmOZduNUi7mF77ewTdyYbO4ErVbwByosQtRN7fPCrobBsh2LhXOm1rOWlMV6F-6dANO5=w980-h735-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNl5AX8kT4AfMAZvZ-LosLVhwchJ3NyuiH-TEMXUT2oJ9gU10obkMUo7XKFQh2PP-02m_Y9CM1k2ySUibLi6X0BqgR6UwBQ6nz8ZZ9CoK7-l6PzzkpHxGhkTGhAa6fjmx3X_XTr9yoRj5fCYqYS_QpLde4iW-NuC5ilbfi1z3KpszlcnMIwCc-H2UgVsAOd9Os1UAqK81tLrCBK4X2qqjKsWQ1uH0WzWdkFU9c8I51axdeIqWs5fKn3bUT07OYReBrEGmvZzat-3z-ZtRk3l8vGO-it6OFGUCmZVlBsv0rWGWps2H3tJTkxN2jWgndmT6ytFyMV_W6FNNbWi1A4fK0ax5k7MUTjrV4xjG8-hcQCjoCcgLBZ1xkX9mwrOQTFDO4Acx09aMZeebySYEYe60Bk028-4tPVPgf8QrLj__vDmp6GApdB_9KRyt0nbSRUvP8Y_2CMdc0MwBX0EK7HZq449XIdGjzSSzQpr-1S7HDY30LN06FtEG4SEVYl917m2dTcquI3CnTJeNfxH-LIsMloD5_SrL74LNr8zd6oDYWIohCAcebMDwueJHwkgfkfyfuoa0XAaD5sdv6Ya51JVFgBy9_rudoHhYEqZqeFRZORANkca05zPNAGKzMSCFsJPLePcVb_o_MndiIUIfFbkfbvZIeMXeL_84ehusMugpb4wS182GoY-DsSDZ1_3HR8Uq3cIGicVYKF0TxCg8UMce8K4NTYvs2Gx4nX0wV96q17rcZ6bV3VOWYeAir-PwXU5Ipj68JndiDEXqnFJBqZVV26IoJAr12DbYFHQg9z59Is70RPJpNMZp4u27g9EA967vzCoC7m-FCnXzruUp-M2bK4c4Pa4VNm0fB9fZJ4SqY_0IA0LbITk1Fpy3UucwhJZ5jZRMrF0sxz8BoIce2jVOZ4btDwWYHvclk3nOELOXnjYVJWp-U4JIwZJRbU=w1346-h757-no?authuser=0"
      ]
    },
    {
      id: 5,
      title: "צילום מוצרים",
      description: "צילום מוצרים מקצועי לעסקים ומותגים עם דגש על פרטים ואיכות",
      technologies: ["צילום מוצרים", "תאורת סטודיו", "עיבוד מתקדם", "רטוש מקצועי"],
      image: "/photo_portfolio/images/portfolio/project5.jpg",
      gallery: [
        "https://lh3.googleusercontent.com/pw/AP1GczNlXl1Pu2TcqDDKkYyXLvEVh9kM0vdErsa1Vg-TSh6Ed625o-34bmHflDBkiDOlq8d7OnYWcWKwYiXOFZOmGZGzdtL8U_TTyYOiZPWK21I6Ut80ZvJ51578WS6hkTjI9NUARMUH1tGxbEu_ZFcYFTGnQni15TzpixCxE70ThVJ1Ev6YKMG8wmBllXzVk8kWzItnJ0lBlTs_6-_Kw39Nq1qse5EXRDl-Uzc5qBMVgBRSLGErFVh-MnClRsEyWPyMId7VCLay7oJtTH6EAqAXn5rqOCa4gEORcdpo8SKAW7m7SiHX5oTOjU4OL4i9JjPFtrJn8dE_X-qFCYT0seuG-F6OLUFeUAzCtsH4WfRNTQQCnxkOzgmD5dSwZcMcIjuQ8PMNMTs8n9nUIFd23ad4Q-NcIspOopIMHN0j_IClynr8AXGJ7qiH6lEPPYJDx9sY6BSYnA_MD07aRsDrGrIbK9pQt_5oHEQYmygrpM0T5IAZLsji_8XZq9Hv1t6R0nGWxSEWG4DpGNgPnv_WQgGCEjP4MwuWcHcJKNm5srYo-9BLi5Bn1gtL3qRCkqEjH_iEftLyS6F843qq5FOL0gbdjpY9PbHBilGi-15gCfAmofO6Lk8rIjtMvUX_ccCrZY_2qX40dwLs8wsDJ9Ofy4hFA7gx73M58amw2XMFU1n6uaz-XgM8KS9xEjn1_R47FtvX6pK3Mh_7tHyeAltMh8W9fKMrPmMXnUgnDUeuqAHOO9D4ZIvczsfOPlCiHFl2GEuRd2ldzipqQjEsXkZjY8NI9DYp_Lz3YnJdNGpv7lqd7v8WAM3xOtooe_w_AIwSdm7R7KBLRQtaRC1z7asT-lrfliaRg42tp6oUMmxDpCb1PuqhxqF7bXS1OrrpiCCLTpp11HN3O_3RE06MuIlBNnpuPpUDMfZBQT8yP6RfX9UJTYjTkaqnHvkH6xDRExxx=w568-h757-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczP4kUTgWoPAOKOlITMJwP_xS4VRdjc8s4N5BAbap9voIUPa5QVMPx7TCWpv-pRsKFi873nMwaJF0KSLEiV8QjNeL_736fa1DYOqfCNwCiMYKqyzbsQZ8g5XDIm26Et6PI6TRr-ZkUbz23BmJBnkEDzc_y0El-QuXdNpZKfLnBbi_1LsK7fqF8SFwB2IrZh3oLlBU1dP2MrgYW4yTJ7hobYGycLQWWL2qNMCOM_jFUQNlbFFZXbzSvvqwu1WITMFy4-flkRJ-ZUPR9WdZzxDqwNBzvFIYkLFsHoJK_TAi9IvSMKvRbl22GiSFXyHOwbW8kW7yzSLKiU0A-mbM2n1IJlWbUwa2EVQsSQj7XaONI4GZretcKpvxaymFVnGg5OeSMEnWvusUbuGzRVMbE2c-EBgjAhDqq8hpKhiDyoj8FTy2ETPFfixfI8yMQfSDn7Tvhnjs3Roz5EKTJ4_WpdEyEsPSzeIYvF9OoG0XISjgXLlrRrLATc9RgNigzpZ7Ak5MMcevh2dA3MOTf9Bm-q8DVWMwDnCfnD3U-iBtivkFG78XyXI061AZJmt0fC_Hgfx23fboTcQ13Igqb8oOagcyhfWJvQU4Hd30tB_KcWjqsjBPz7u-0I4WeEiw-taY3qtl_77gGl2ysk2CurXfw35SwbY12vZpcdwwmMdSW1WHjTqfmsLAEUqebCEHkVY2M8ZeHJeHUZnBAnuOuTsU4I9nMQFJzt7ILwjou2K_TxVkJ5DJEd7MyYhQDDAteK653HSFv7l6i4n8jzkUZ2KzwnNPyHdw7lFFNdEgXJdrA7brHDYoVbhzI3uHtEm4Q9bwG7evCGfuu-PJLbPmzWZGkRWj5LBTpb7AUqZeyglLG98A_Qsm7-1CYzMdD8wG6HjpH5JNMGeV3RvTQKODCBGqAqx806vOFb0uPFRBXz0qxedPFzQ8lEUDI9vyIShbdzS=w568-h757-no?authuser=0"
      ]
    },
    {
      id: 6,
      title: "צילום משפחות",
      description: "תיעוד רגעים ייחודיים ומשמעותיים בחיי המשפחה",
      technologies: ["צילום משפחות", "תאורה טבעית", "עיבוד תמונות"],
      image: "/photo_portfolio/images/portfolio/project.jpg"
    }
  ];

  const handleProjectClick = (project) => {
    if (project.gallery) {
      setSelectedGallery({
        images: project.gallery,
        title: project.title
      });
    }
  };

  const closeGallery = () => {
    setSelectedGallery(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" dir="rtl">
              צילומים
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-right" dir="rtl">
              כאן מוצגים כמה מהפרויקטים האחרונים שלי
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} className={`delay-${index * 100}`}>
              <div 
                className={`bg-gray-100 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group ${
                  project.gallery ? 'cursor-pointer hover:shadow-lg' : ''
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <div className="w-full h-48 bg-gray-200 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-xl font-bold opacity-60">
                        {project.title}
                      </div>
                    </div>
                  )}
                  
                  {/* Click to view gallery hint */}
                  {project.gallery && (
                    <div className="absolute inset-0 bg-transparent group-hover:bg-transparent group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 px-3 py-2 rounded-lg" dir="rtl">
                        לחץ לצפייה בגלריה
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    {project.gallery && (
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full" dir="rtl">
                        {project.gallery.length} תמונות
                      </span>
                    )}
                  </div>
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

      {/* Gallery Modal */}
      {selectedGallery && (
        <GalleryModal
          isOpen={!!selectedGallery}
          onClose={closeGallery}
          images={selectedGallery.images}
          projectTitle={selectedGallery.title}
        />
      )}
    </section>
  );
};
