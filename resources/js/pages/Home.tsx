import { Link } from "@inertiajs/react";
import { ArrowRight, BookOpen, Users, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import { newsItems, events, galleryAlbums } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBanner from "@/assets/hero-banner.jpg";
import { EventItem, NewsItem } from '@/types';

interface HomeProps {
  pinnedNews: NewsItem[],
  pinnedEvents: EventItem[],
}

const Home: React.FC<HomeProps> = ({ pinnedNews, pinnedEvents }) => {
  const { language, t } = useLanguage();
  const latestNews = pinnedNews;
  const upcomingEvents = pinnedEvents;
  const recentAlbum = galleryAlbums[0];

  const albumTitle = language === "fr" ? recentAlbum.titleFr : language === "en" ? recentAlbum.title : recentAlbum.titleAr;

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
            { icon: Users, value: "500+", label: t("طالب وطالبة", "Élèves", "Students"), color: "from-primary to-primary/80" },
            { icon: BookOpen, value: "30+", label: t("معلم ومعلمة", "Enseignants", "Teachers"), color: "from-secondary to-secondary/80" },
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
          {recentAlbum.images.slice(0, 4).map((image, index) => (
            <Link key={index} href="/gallery" className="aspect-square overflow-hidden rounded-lg shadow-soft hover-lift">
              <img
                src={image}
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
