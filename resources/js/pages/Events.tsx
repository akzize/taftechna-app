import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { EventItem } from "@/types";

interface EventsProps {
  events: EventItem[]; // Assuming EventItem is a defined type/interface
}
const Events: React.FC<EventsProps> = ({ events}) => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  console.log(events)
  const categories = ["الكل", ...Array.from(new Set(events.map((e) => e.categoryAr)))];

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "الكل" || event.categoryAr === selectedCategory;
    return matchesCategory;
  });

  // Sort by date (upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">فعاليات المدرسة</h1>
        <p className="text-muted-foreground text-lg">
          تابع وشارك في فعالياتنا وأنشطتنا المدرسية
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{sortedEvents.length}</span> فعالية
        </p>
      </div>

      {/* Events Grid */}
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">لا توجد فعاليات مطابقة</p>
        </div>
      )}
    </div>
  );
};

export default Events;
