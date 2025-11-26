import { Link } from "@inertiajs/react";
import { Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const { language, t } = useLanguage();
  
  const title = language === "fr" ? news.titleFr : language === "en" ? news.title : news.titleAr;
  const excerpt = language === "fr" ? news.excerptFr : language === "en" ? news.excerpt : news.excerptAr;
  const category = language === "fr" ? news.categoryFr : language === "en" ? news.category : news.categoryAr;
  
  return (
    <Card className="py-0 overflow-hidden hover-lift">
      <div className="aspect-video overflow-hidden">
        <img
          src={"storage/" + news.coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="px-4 py-2">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="gap-1">
            <Tag className="w-3 h-3" />
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(news.publishedAt).toLocaleDateString(language === "ar" ? "ar-MA" : language === "fr" ? "fr-FR" : "en-US")}
          </span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/news/${news.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            {t("اقرأ المزيد", "Lire la suite", "Read more")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
