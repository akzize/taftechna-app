import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { schoolInfo } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shadow-soft">
                ت
              </div>
              <h3 className="font-bold text-lg">{t(schoolInfo.name, "École Taftechna", schoolInfo.nameEn)}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">{t(schoolInfo.slogan, "Construire l'avenir avec des racines authentiques", schoolInfo.sloganEn)}</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("روابط سريعة", "Liens rapides", "Quick Links")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary transition-smooth">
                  {t("الأخبار", "Actualités", "News")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-smooth">
                  {t("الفعاليات", "Événements", "Events")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-smooth">
                  {t("معرض الصور", "Galerie", "Gallery")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  {t("عن المدرسة", "À propos", "About")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t("اتصل بنا", "Contactez-nous", "Contact Us")}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>{t(schoolInfo.address, "Village de Taftechna, Province d'Azilal, Maroc", schoolInfo.addressEn)}</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-primary transition-smooth">
                  {schoolInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-primary transition-smooth">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {t(schoolInfo.name, "École Taftechna", schoolInfo.nameEn)}. {t("جميع الحقوق محفوظة", "Tous droits réservés", "All rights reserved")}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
