import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { schoolInfo } from "@/data/mockData";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          نحن هنا للإجابة على استفساراتكم ومساعدتكم. لا تترددوا في التواصل معنا
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">العنوان</h3>
                  <p className="text-muted-foreground">{schoolInfo.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">الهاتف</h3>
                  <a
                    href={`tel:${schoolInfo.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {schoolInfo.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">البريد الإلكتروني</h3>
                  <a
                    href={`mailto:${schoolInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {schoolInfo.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="shadow-soft overflow-hidden">
            <div className="aspect-video bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106438.81099158225!2d-6.5!3d32.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAwJzAwLjAiTiA2wrAzMCcwMC4wIlc!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input id="name" required placeholder="أدخل اسمك الكامل" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <Input id="phone" type="tel" placeholder="+212 600-000000" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    الموضوع
                  </label>
                  <Input id="subject" required placeholder="موضوع الرسالة" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
