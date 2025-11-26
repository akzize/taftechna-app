import { Link } from "@inertiajs/react";
import { ArrowRight, BookOpen, Users, Award, Calendar, Trophy, UsersRound, Sprout, GraduationCap, Sparkles, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import { galleryAlbums } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBanner from "@/assets/hero-banner.jpg";
import { EventItem, GalleryAlbum, NewsItem } from '@/types';
import serviceExamResults from "@/assets/sstaftechna-slama1-5-mePxlMbOWzs9w8QQ.avif";
import serviceActivities from "@/assets/sstaftechna-activity15-Yg2j3wWNXbHLVPeq (1).avif";
import projectLeading from "@/assets/sstaftechna-student-Aq2WEwGyNXIwLgbV.avif";
import projectEcological from "@/assets/sstaftechna-vue-inter-mePxMwJ7RbTEWRbW.jpeg";
import projectStaff from "@/assets/whatsapp-image-2025-10-17-at-12.19.52-ttx4F2gNASeDAEUq.avif";
import projectAchievements from "@/assets/sstaftechna-activity15-Yg2j3wWNXbHLVPeq (1).avif";

interface HomeProps {
  latestNews: NewsItem[],
  upcomingEvents: EventItem[],
  recentAlbum: GalleryAlbum[];
}

const Home: React.FC<HomeProps> = ({ latestNews, upcomingEvents, recentAlbum }) => {
  const { language, t } = useLanguage();
  console.log(latestNews)  
  // const albumTitle = language === "fr" ? recentAlbum.titleFr : language === "en" ? recentAlbum.title : recentAlbum.titleAr;
  const albumTitle = recentAlbum.title;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10" />
        <img
          src={heroBanner}
          alt="Taftechna School"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t("مدارس تفتشنا الرائدة", "École Taftechna", "Taftechna School")}
          </h1>
          <p className="text-4xl md:text-5xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("من أجل تعليم ذو جودة للجميع", "Construire l'avenir avec des racines authentiques", "Building the Future with Authentic Roots")}
          </p>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("نحن نعمل على تعزيز جودة التعليم والتواصل بين جميع مكونات  المدرسة.", "Construire l'avenir avec des racines authentiques", "Building the Future with Authentic Roots")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/about">
              <Button size="lg" variant="secondary">
                {t("اكتشف المدرسة", "Découvrir l'école", "Discover the School")}
                <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2" : "ml-2"}`} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                {t("تواصل معنا", "Contactez-nous", "Contact Us")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 -mt-16 relative z-30 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, value: "800+", label: t("طالب وطالبة", "Élèves", "Students"), color: "from-primary to-primary/80" },
            { icon: BookOpen, value: "25+", label: t("معلم ومعلمة", "Enseignants", "Teachers"), color: "from-secondary to-secondary/80" },
            { icon: Award, value: "15+", label: t("جوائز وإنجازات", "Prix et réalisations", "Awards & Achievements"), color: "from-accent to-accent/80" },
            { icon: Calendar, value: "20+", label: t("أنشطة سنوية", "Événements annuels", "Annual Events"), color: "from-primary to-secondary" },
          ].map((stat, index) => (
            <Card key={index} className="shadow-elevated hover-lift">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Educational Services */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("خدماتنا التعليمية", "Nos Services Éducatifs", "Our Educational Services")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              "نقدم تعليماً مبتكراً لإعداد أجيال النجاح، ونلتزم بالتميز التعليمي وفق أفضل المعايير العالمية ونسعى لتعزيز التواصل بين الإدارة، الأساتذة، التلاميذ، وأولياء الأمور.",
              "Nous offrons un enseignement innovant pour préparer les générations au succès, nous nous engageons à l'excellence éducative selon les meilleures normes internationales et nous cherchons à renforcer la communication entre l'administration, les professeurs, les élèves et les parents.",
              "We provide innovative education to prepare successful generations, we commit to educational excellence according to the best international standards and we strive to enhance communication between administration, teachers, students, and parents."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden hover-lift">
            <div className="aspect-video overflow-hidden">
              <img
                src={serviceExamResults}
                alt={t("نتائج الامتحانات", "Résultats des Examens", "Exam Results")}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="px-6 pb-3">
              <div className="flex align-center items-center content-center gap-2 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">
                  {t("نتائج الامتحانات", "Résultats des Examens", "Exam Results")}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {t(
                  "نوفر معلومات دقيقة حول نتائج الامتحانات لمساعدة أولياء الأمور في متابعة المسار الدراسي لأبنائهم.",
                  "Nous fournissons des informations précises sur les résultats des examens pour aider les parents à suivre le parcours scolaire de leurs enfants.",
                  "We provide accurate information about exam results to help parents track their children's academic progress."
                )}
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <div className="aspect-video overflow-hidden">
              <img
                src={serviceActivities}
                alt={t("أنشطة تربوية", "Activités Éducatives", "Educational Activities")}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="px-6 pb-3">
              <div className="flex align-center items-center content-center gap-2 mb-3">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">
                  {t("أنشطة تربوية", "Activités Éducatives", "Educational Activities")}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {t(
                  "نقوم بتنظيم أنشطة تربوية وثقافية تهدف إلى تطوير مهارات التلاميذ وتعزيز التعلم الفعال",
                  "Nous organisons des activités éducatives et culturelles visant à développer les compétences des élèves et à renforcer l'apprentissage actif",
                  "We organize educational and cultural activities aimed at developing students' skills and enhancing active learning"
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educational Projects */}
      <section className="bg-muted/30 py-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("المشاريع التعليمية", "Projets Éducatifs", "Educational Projects")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                "نستعرض مشاريع تهدف لتحسين جودة التعليم في المنطقة.",
                "Nous présentons des projets visant à améliorer la qualité de l'éducation dans la région.",
                "We showcase projects aimed at improving the quality of education in the region."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projectLeading}
                  alt={t("مشروع المؤسسة الرائدة", "Projet Institution Pionnière", "Leading Institution Project")}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="px-6 pb-3">
                <div className="flex align-center items-center content-center gap-2 mb-3">
                <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t("مشروع المؤسسة الرائدة", "Projet Institution Pionnière", "Leading Institution")}
                </h3>
                </div>
                <p className="text-base text-muted-foreground">
                  {t(
                    "تنظيم أنشطة ثقافية لتعزيز التفاعل بين التلاميذ",
                    "Organisation d'activités culturelles pour renforcer l'interaction entre les élèves",
                    "Organizing cultural activities to enhance student interaction"
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projectEcological}
                  alt={t("مشروع المدرسة الإيكولوجية", "Projet École Écologique", "Ecological School Project")}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="px-6 pb-3">
                <div className="flex align-center items-center content-center gap-2 mb-3">
                <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white">
                  <Sprout className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t("مشروع المدرسة الإيكولوجية", "Projet École Écologique", "Ecological School")}
                </h3>
                </div>
                <p className="text-base text-muted-foreground">
                  {t(
                    "تحسين بيئة التعلم وتعزيز التواصل بين الجميع.",
                    "Amélioration de l'environnement d'apprentissage et renforcement de la communication.",
                    "Improving the learning environment and enhancing communication."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projectStaff}
                  alt={t("مجهودات الاطر الادارية والتربوية", "Efforts du Personnel", "Staff Efforts")}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="px-6 pb-3">
                <div className="flex align-center items-center content-center gap-2 mb-3">
                <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white">
                  <UsersRound className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t("مجهودات الأطر الإدارية والتربوية", "Efforts du Personnel", "Staff Efforts")}
                </h3>
                </div>
                <p className="text-base text-muted-foreground">
                  {t(
                    "تسليط الضوء على جهود المدير والاساتذة في تطوير التعليم.",
                    "Mise en lumière des efforts du directeur et des enseignants dans le développement de l'éducation.",
                    "Highlighting the efforts of the principal and teachers in developing education."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projectAchievements}
                  alt={t("مشروع إنجازات", "Projet Réalisations", "Achievements Project")}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="px-6 pb-3">
                <div className="flex align-center items-center content-center gap-2 mb-3">
                <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {t("مشروع إنجازات", "Projet Réalisations", "Achievements")}
                </h3>
                </div>
                <p className="text-base text-muted-foreground">
                  {t(
                    "توثيق إنجازات المتعلمين والمبادرات التعليمية المبتكرة.",
                    "Documentation des réalisations des apprenants et des initiatives éducatives innovantes.",
                    "Documenting learners' achievements and innovative educational initiatives."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{t("آخر الأخبار", "Dernières actualités", "Latest News")}</h2>
            <p className="text-muted-foreground">{t("تابع جديد المدرسة وأنشطتها", "Suivez les dernières nouvelles de l'école", "Follow the school's latest news")}</p>
          </div>
          <Link href="/news">
            <Button variant="outline">
              {t("عرض الكل", "Voir tout", "View All")}
              <ArrowRight className={`w-4 h-4 ${language === "ar" ? "mr-2" : "ml-2"}`} />
            </Button>
          </Link>
        </div>
        {latestNews &&
          (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>)
        }
      </section>

      {/* Upcoming Events */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">{t("الأنشطة القادمة", "Événements à venir", "Upcoming Events")}</h2>
              <p className="text-muted-foreground">{t("لا تفوت مشاركتنا في هذه الأنشطة", "Ne manquez pas nos activités", "Don't miss our activities")}</p>
            </div>
            <Link href="/events">
              <Button variant="outline">
                {t("عرض الكل", "Voir tout", "View All")}
                <ArrowRight className={`w-4 h-4 ${language === "ar" ? "mr-2" : "ml-2"}`} />
              </Button>
            </Link>
          </div>
          {upcomingEvents &&
            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>)
          }
        </div>
      </section>

      {/* Recent Gallery Album */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{t("لحظات من المدرسة", "Moments de l'école", "School Moments")}</h2>
            <p className="text-muted-foreground">{t("شاهد ذكريات وأنشطة طلابنا", "Découvrez les souvenirs de nos élèves", "See our students' memories")}</p>
          </div>
          <Link href="/gallery">
            <Button variant="outline">
              {t("المزيد من الصور", "Plus de photos", "More Photos")}
              <ArrowRight className={`w-4 h-4 ${language === "ar" ? "mr-2" : "ml-2"}`} />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recentAlbum.images?.slice(0, 4).map((image, index) => (
            <Link key={index} href="/gallery" className="aspect-square overflow-hidden rounded-lg shadow-soft hover-lift">
              <img
                src={"/storage/" + image.path}
                alt={`${albumTitle} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
