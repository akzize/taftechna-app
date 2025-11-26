import { Link } from "@inertiajs/react";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { EventItem } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { EventItem } from "@/types";

interface EventCardProps {
  event: EventItem;
}

const EventCard = ({ event }: EventCardProps) => {
  const { language, t } = useLanguage();

  const title = language === "fr" ? event.titleFr : language === "en" ? event.title : event.titleAr;
  // const content = language === "fr" ? event.contentFr : language === "en" ? event.content : event.contentAr;
  const content = event.content;
  const category = language === "fr" ? event.categoryFr : language === "en" ? event.category : event.categoryAr;
  const location = language === "fr" ? event.locationFr : language === "en" ? event.location : event.locationAr;

  return (
    <Card className="py-0 overflow-hidden hover-lift">
      <div className="aspect-video overflow-hidden">
        <img
          src={event.coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="px-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="gap-1">
            <Tag className="w-3 h-3" />
            {category}
          </Badge>
        </div>
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground mb-3">
          {event.date && (<div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{new Date(event.date).toLocaleDateString(language === "ar" ? "ar-MA" : language === "fr" ? "fr-FR" : "en-US")}</span>
          </div>)}
          {event.time && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>{event.time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{location}</span>
            </div>
          )}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/events/${event.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            {t("المزيد من التفاصيل", "Plus de détails", "More details")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
