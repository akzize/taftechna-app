import { Link, router } from "@inertiajs/react";
import { Calendar, Clock, MapPin, Tag, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import { events } from "@/data/mockData";
import { toast } from "sonner";
import { EventItem } from "@/types";

interface EventProps {
  event: EventItem; // Assuming EventItem is a defined type/interface
}

const EventDetail: React.FC<EventProps> = ({ event }) => {
  const { id } = event.id;

  if (!event) {
    router.replace("/events");
    return null
  }

  // const relatedEvents = events
  //   .filter((e) => e.id !== id && e.categoryAr === event.categoryAr)
  //   .slice(0, 3);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: event.titleAr, url });
    } else {
      navigator.clipboard.writeText(url);
      toast.success("تم نسخ الرابط");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link href="/events" className="inline-block mb-6">
        <Button variant="ghost" className="gap-2">
          <ArrowRight className="w-4 h-4" />
          العودة للأنشطة
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden py-0 shadow-elevated">
            {/* Featured Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={event.coverImage}
                alt={event.titleAr}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="gap-1">
                  <Tag className="w-3 h-3" />
                  {event.categoryAr}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="mr-auto gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  مشاركة
                </Button>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold mb-6">{event.titleAr}</h1>

              {/* Event Details */}
              <div className="bg-muted/50 rounded-lg p-6 mb-8 space-y-3">
                {event.date &&
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    (<div>
                      <div className="font-semibold">التاريخ</div>
                      <div className="text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("ar-MA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          weekday: "long",
                        })}
                      </div>
                    </div>)
                  </div>
                }
                {event.time && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">التوقيت</div>
                      <div className="text-muted-foreground">{event.time}</div>
                    </div>
                  </div>
                )}
                {event.locationAr && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">المكان</div>
                      <div className="text-muted-foreground">{event.locationAr}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-4">عن الفعالية</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  {event.content}
                </p>
              </div>

              {/* Gallery */}
              {event.images && event.images.length > 1 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">صور من الفعالية</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {event.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video overflow-hidden rounded-lg shadow-soft hover-lift"
                      >
                        <img
                          src={image}
                          alt={`${event.titleAr} ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related Events */}
          {/* {relatedEvents.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">أنشطة مشابهة</h3>
              <div className="space-y-4">
                {relatedEvents.map((relatedItem) => (
                  <Link key={relatedItem.id} href={`/events/${relatedItem.id}`}>
                    <Card className="hover-lift overflow-hidden">
                      <div className="flex gap-4 p-4">
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={relatedItem.image}
                            alt={relatedItem.titleAr}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                            {relatedItem.titleAr}
                          </h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(relatedItem.date).toLocaleDateString("ar-MA")}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
