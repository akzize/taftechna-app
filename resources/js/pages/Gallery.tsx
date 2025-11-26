import { useState } from "react";
import { Calendar, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryAlbums } from "@/data/mockData";

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentAlbum = selectedAlbum
    ? galleryAlbums.find((a) => a.id === selectedAlbum)
    : null;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">معرض الصور</h1>
        <p className="text-muted-foreground text-lg">
          شاهد لحظات وذكريات مدرسة تافتشنا
        </p>
      </div>

      {selectedAlbum ? (
        /* Album View */
        <div>
          <button
            onClick={() => setSelectedAlbum(null)}
            className="mb-6 text-primary hover:underline"
          >
            ← العودة للألبومات
          </button>

          {currentAlbum && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">{currentAlbum.titleAr}</h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(currentAlbum.date).toLocaleDateString("ar-MA")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentAlbum.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxImage(image)}
                    className="aspect-square overflow-hidden rounded-lg shadow-soft hover-lift group"
                  >
                    <img
                      src={image}
                      alt={`${currentAlbum.titleAr} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Albums Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryAlbums.map((album) => (
            <Card
              key={album.id}
              className="overflow-hidden hover-lift cursor-pointer group py-0"
              onClick={() => setSelectedAlbum(album.id)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={album.coverImage}
                  alt={album.titleAr}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="px-4 py-2">
                <h3 className="font-bold text-lg mb-2">{album.titleAr}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(album.date).toLocaleDateString("ar-MA")}
                  </span>
                  <span>{album.images.length} صور</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-0">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/10 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {lightboxImage && (
            <img
              src={lightboxImage}
              alt="Full size"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
