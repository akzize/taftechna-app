import { Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import notFoundImage from "@/assets/404-illustration.png";

const NotFound = () => {
  const location = usePage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:");
  });

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <img
            src={notFoundImage}
            alt="404 - الصفحة غير موجودة"
            className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
          />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-3xl font-bold">الصفحة غير موجودة</h2>
        <p className="mb-8 text-xl text-muted-foreground">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            <Home className="w-5 h-5" />
            العودة للصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
