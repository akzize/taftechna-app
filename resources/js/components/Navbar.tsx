import { useState } from "react";
import { Link } from '@inertiajs/react';
import { Menu, X, Home, Newspaper, Calendar, ImageIcon, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/taftechna-logo-removebg.png";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("الرئيسية", "Accueil", "Home"), icon: Home },
    { to: "/news", label: t("الأخبار", "Actualités", "News"), icon: Newspaper },
    { to: "/events", label: t("الأنشطة", "Événements", "Events"), icon: Calendar },
    { to: "/gallery", label: t("المعرض", "Galerie", "Gallery"), icon: ImageIcon },
    { to: "/about", label: t("عن المدرسة", "À propos", "About"), icon: Info },
    { to: "/contact", label: t("اتصل بنا", "Contact", "Contact"), icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center align-center gap-2 font-bold text-xl text-primary">
            <img src={logo} alt="Taftechna School Logo" className="w-12 h-12 object-contain" />
            <span className="hidden sm:inline">{t("مدارس تفتشنا", "Taftechna", "Taftechna")}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.to} href={link.to}>
                <Button variant="ghost" className="gap-2">
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Button>
              </Link>
            ))}
            
            {/* Language Switcher */}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-smooth"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
