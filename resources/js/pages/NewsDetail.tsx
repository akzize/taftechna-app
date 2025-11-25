import { Link } from "@inertiajs/react";
import { Calendar, Tag, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/data/mockData";
import { toast } from "sonner";

const NewsDetail = ({ articleId, article }) => {
  const { id } = articleId;
  const news = article;

  if (!news) {
    return <Navigate to="/news" replace />;
  }

  const relatedNews = newsItems
    .filter((n) => n.id !== id && n.categoryAr === news.categoryAr)
    .slice(0, 3);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: news.titleAr, url });
    } else {
      navigator.clipboard.writeText(url);
      toast.success("تم نسخ الرابط");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link href="/news" className="inline-block mb-6">
        <Button variant="ghost" className="gap-2">
          <ArrowRight className="w-4 h-4" />
          العودة للأخبار
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden shadow-elevated">
            {/* Featured Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={news.image}
                alt={news.titleAr}
                className="w-full h-full object-cover"
              />
            </div>

            <CardContent className="p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="gap-1">
                  <Tag className="w-3 h-3" />
                  {news.categoryAr}
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(news.date).toLocaleDateString("ar-MA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
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
              <h1 className="text-4xl font-bold mb-6">{news.titleAr}</h1>

              {/* Content - Blog Style */}
              <div className="prose prose-lg max-w-none">
                {/* Split content into paragraphs */}
                {news.contentAr.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Images embedded in content - Blog Style */}
              {news.images && news.images.length > 1 && (
                <div className="my-12 space-y-8">
                  {news.images.slice(1).map((image, index) => (
                    <div key={index} className="space-y-3">
                      <div className="overflow-hidden rounded-xl shadow-elevated">
                        <img
                          src={image}
                          alt={`${news.titleAr} - صورة ${index + 2}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center italic">
                        صورة {index + 2} من {news.images.length}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Additional content paragraphs can go here if needed */}
              <div className="mt-8 p-6 bg-muted/30 rounded-lg border-r-4 border-primary">
                <p className="text-foreground leading-relaxed">
                  للمزيد من المعلومات حول هذا الخبر، يرجى التواصل مع إدارة المدرسة.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related News */}
          {relatedNews.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">أخبار ذات صلة</h3>
              <div className="space-y-4">
                {relatedNews.map((relatedItem) => (
                  <Link key={relatedItem.id} to={`/news/${relatedItem.id}`}>
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
                          <span className="text-xs text-muted-foreground">
                            {new Date(relatedItem.date).toLocaleDateString("ar-MA")}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
