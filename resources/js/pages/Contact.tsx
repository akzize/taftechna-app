import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from '@inertiajs/react'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { schoolInfo } from "@/data/mockData";
import { toast } from "sonner";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) {
      console.error("Form reference is missing.");
      return;
    }

    // 1. GATHER DATA (Using the browser's native FormData API)
    const formData = new FormData(form);

    // Convert FormData to a simple JSON object for the request body
    const data = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(data))
    // returnnode

    // Get the CSRF token from the meta tag
    const csrfTokenElement = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]');
    const csrfToken = csrfTokenElement ? csrfTokenElement.content : null;

    if (!csrfToken) {
      console.error("CSRF token not found. Check app.blade.php.");
      toast.error("خطأ في الأمان: لم يتم العثور على رمز الحماية.");
      return;
    }
    try {
      // 2. EXECUTE ASYNCHRONOUS FETCH REQUEST
      const response = await fetch("/email-send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
        },
        body: JSON.stringify(data),
      });

      // 3. CHECK RESPONSE STATUS
      if (!response.ok) {
        // Throw an error if the HTTP status is 4xx or 5xx
        const errorData = await response.json(); // Try to read the error body
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      // 4. SUCCESS: Show toast ONLY after the API confirms success
      toast.success("تم إرسال رسالتك بنجاح!"); // Your success message
      form.reset(); // Optional: Clear the form fields

    } catch (error) {
      // 5. ERROR HANDLING
      console.error("Submission failed:", error);
      toast.error("حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.");
    }
  }

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
                    href={`tel:${schoolInfo.phone}`} dir="ltr"
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
          <Card className="shadow-soft py-0 overflow-hidden">
            <div className="aspect-video bg-muted">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2862.6055174516705!2d-5.954627408662571!3d30.68440254996009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbc592be9de2309%3A0x995ede14a3777570!2z2YXYrNmF2YjYudipINmF2K_Yp9ix2LMg2KrZgdiq2LTZhtin!5e1!3m2!1sen!2sma!4v1764161931364!5m2!1sen!2sma"
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
              {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
              <form ref={formRef} action={'/email-send'} method="post" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input id="name" name="name" required placeholder="أدخل اسمك الكامل" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <Input id="phone" type="tel" name="phone" placeholder="+212 600-000000" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    الموضوع
                  </label>
                  <Input id="subject" name="subject" required placeholder="موضوع الرسالة" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" onClick={handleSubmit}>
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
