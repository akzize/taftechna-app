import { useState } from "react";
import { Link } from '@inertiajs/react';
import { Menu, X, Home, Newspaper, Calendar, ImageIcon, Info, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { to: "/", label: t("الرئيسية", "Accueil", "Home"), icon: Home },
    { to: "/news", label: t("الأخبار", "Actualités", "News"), icon: Newspaper },
    { to: "/events", label: t("الفعاليات", "Événements", "Events"), icon: Calendar },
    { to: "/gallery", label: t("المعرض", "Galerie", "Gallery"), icon: ImageIcon },
    { to: "/about", label: t("عن المدرسة", "À propos", "About"), icon: Info },
    { to: "/contact", label: t("اتصل بنا", "Contact", "Contact"), icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shadow-soft">
              ت
            </div>
            <span className="hidden sm:inline">{t("تافتشنا", "Taftechna", "Taftechna")}</span>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("ar")} className={language === "ar" ? "bg-accent" : ""}>
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-accent" : ""}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-accent" : ""}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            <div className="border-t border-border mt-2 pt-2 px-2">
              <p className="text-sm text-muted-foreground mb-2">{t("اللغة", "Langue", "Language")}</p>
              <div className="flex gap-2">
                <Button
                  variant={language === "ar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setLanguage("ar");
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1"
                >
                  العربية
                </Button>
                <Button
                  variant={language === "fr" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setLanguage("fr");
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1"
                >
                  FR
                </Button>
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setLanguage("en");
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1"
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
