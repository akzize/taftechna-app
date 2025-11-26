import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NewsCard from "@/components/NewsCard";
import { NewsItem } from "@/types";
// import { newsItems } from "@/data/mockData";

interface NewsProps {
  newsItems: NewsItem[]; // Assuming EventItem is a defined type/interface
}

const News:React.FC<NewsProps> = ({newsItems}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  console.log(newsItems);
  const categories = ["الكل", ...Array.from(new Set(newsItems.map((n) => n.categoryAr)))];

  const filteredNews = newsItems.filter((news) => {
    const matchesSearch =
      news.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerptAr.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "الكل" || news.categoryAr === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">أخبار المدرسة</h1>
        <p className="text-muted-foreground text-lg">
          تابع آخر أخبار وإعلانات مدرسة تافتشنا
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="ابحث عن خبر..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>

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
          <span className="font-semibold text-foreground">{filteredNews.length}</span> خبر
        </p>
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">لم يتم العثور على أخبار مطابقة للبحث</p>
        </div>
      )}
    </div>
  );
};

export default News;
