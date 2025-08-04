import { RevealOnScroll } from './RevealOnScroll';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" dir="rtl">
              אודותיי
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto text-right" dir="rtl">
              צלמת נלהבת עם אהבה ליצירת פתרונות חדשניים ומעוררי השראה
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right" dir="rtl">
                שלום! אני מטר וינברג
              </h3>
              <div className="space-y-4 text-gray-600 text-right" dir="rtl">
                <p>
                  אני צלמת נלהבת עם מומחיות ב...
                  אני אוהבת ליצור יצירות מעוררות השראה הפותרות אתגרים אמנותיים אמיתיים ומספקות
                  חוויות חזותיות יוצאות דופן.
                </p>
                <p>
                  המסע שלי בצילום התחיל בסקרנות לגבי איך אור ותנועה פועלים, והתפתח
                  לקריירה המתמקדת ביצירת תמונות נקיות, יעילות ובעלות משמעות.
                </p>
                <p>
                  כשאני לא מצלמת, אפשר למצוא אותי חוקרת טכניקות צילום חדשות, תורמת לפרויקטים
                  קהילתיים, או...
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">X+</div>
                <div className="text-gray-600" dir="rtl">שנות ניסיון</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">X+</div>
                <div className="text-gray-600" dir="rtl">פרויקטים הושלמו</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">X+</div>
                <div className="text-gray-600" dir="rtl">לקוחות מרוצים</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-gray-600" dir="rtl">שביעות רצון</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center" dir="rtl">
              הטכנולוגיות איתן אני עובדת
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'צילום דיגיטלי', 'עריכת תמונות', 'Adobe Lightroom', 'Adobe Photoshop', 'צילום סטודיו', 'צילום טבע',
                'צילום פורטרטים', 'צילום אירועים', 'צילום נוף', 'צילום רחוב', 'צילום מקרו', 'עיצוב גרפי'
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-100 p-4 rounded-lg text-center text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-all duration-200"
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
