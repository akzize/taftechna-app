import { Award, BookOpen, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutSchoolImage from "@/assets/about-school.jpg";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "التعليم الجيد",
      description: "نوفّر تعليماً متميزاً يجمع بين الحداثة والتجذر الثقافي، ونحرص على تطوير مهارات التفكير والإبداع لدى المتعلمين.",
    },
    {
      icon: Users,
      title: "المجتمع",
      description: "نعمل على تعزيز التواصل بين المدرسة والأسرة والمجتمع المحلي، لبناء محيط تربوي داعم ومتكامل.",
    },
    {
      icon: Target,
      title: "التميز",
      description: "نسعى لتحقيق التميز في جميع جوانب العملية التعليمية والتربوية، ونشجع المبادرات الهادفة لتطوير الأداء.",
    },
    {
      icon: Award,
      title: "الإنجاز",
      description: "نحتفي بإنجازات طلبتنا ونشجعهم باستمرار على الإبداع والتفوق الدراسي والشخصي.",
    },
  ];

  const achievements = [
    "المركز الأول في المسابقة الإقليمية للعلوم 2024",
    "جائزة أفضل مبادرة تربوية على مستوى الإقليم",
    "شهادة التميز في التعليم الشامل",
    "تكريم من وزارة التربية الوطنية",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10" />
        <img
          src={aboutSchoolImage}
          alt="عن مدرسة تافتشنا"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">عن مدرسة تافتشنا</h1>
          <p className="text-xl">نبني المستقبل بجذور أصيلة</p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">من نحن</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                مدرسة تفتشنا هي مؤسسة تعليمية عمومية رائدة تقع بجماعة تفتشنا بإقليم زاكورة، تابعة للأكاديمية الجهوية للتربية والتكوين درعة–تافيلالت. تأسست سنة 1962 وافتتحت أبوابها سنة 1963، وتضم وحدتين دراسيتين: وحدة تبيديرت ووحدة تونا نعرابن.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                يبلغ عدد تلاميذ المؤسسة بجميع وحداتها 820 تلميذًا (427 ذكور و379 إناث)، ويشرف على تعليمهم وتربيتهم 28 أستاذًا (18 ذكور و10 إناث)، داخل 16 حجرة دراسية صالحة للاستعمال. توفر المؤسسة تعليماً ابتدائياً في بيئة محفزة وشاملة، وتحرص على ضمان الجودة وتكافؤ الفرص لجميع المتعلمين.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                انخرطت مدرسة تفتشنا في مشروع المدارس الرائدة منذ موسمه التجريبي الأول 2023/2024، وحققت نتائج ممتازة وفق التقويمات الوطنية والجهوية ولجنة التقويم التابعة للمجلس الأعلى للتربية والتكوين. وبفضل المقاربة التشاركية والمنهجية المنفتحة، نجحت المؤسسة في بناء علاقات تواصلية متميزة مع محيطها الاجتماعي.
              </p>
            </div>

            <Card className="shadow-elevated">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex align-center items-center content-center gap-2 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4">
                        <Target className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">رؤيتنا</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      أن نكون مؤسسة تعليمية نموذجية في المنطقة، معروفة بتميزها الأكاديمي وقيمها الثقافية، وقادرة على تخريج أجيال واعية، مبدعة، ومسؤولة تساهم في بناء مجتمع مزدهر.
                    </p>

                  </div>
                  <div>
                    <div className="flex align-center items-center content-center gap-2 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white mb-4">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">رسالتنا</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      أن نكون مؤسسة تعليمية نموذجية في المنطقة، معروفة بتميزها الأكاديمي وقيمها الثقافية، وقادرة على تخريج أجيال واعية، مبدعة، ومسؤولة تساهم في بناء مجتمع مزدهر.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
            <p className="text-lg text-muted-foreground">
              المبادئ التي نؤمن بها ونعمل بها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Principal's Message */}
        {/* <section className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">كلمة المدير</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                "يسعدني أن أرحب بكم في مدرسة تافتشنا، حيث نسعى جاهدين لتوفير بيئة
                تعليمية متميزة تجمع بين الأصالة والحداثة. نؤمن بأن كل طالب لديه إمكانات
                فريدة يجب رعايتها وتطويرها."
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                "نعمل على بناء شراكة قوية مع أولياء الأمور والمجتمع المحلي، لأننا نؤمن
                بأن نجاح الطالب يتحقق من خلال التعاون بين البيت والمدرسة والمجتمع."
              </p>
              <p className="font-semibold text-primary text-lg">
                أ. محمد الإدريسي - مدير المدرسة
              </p>
            </div>
          </div>
        </section> */}

        {/* Achievements */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">إنجازاتنا</h2>
            <p className="text-lg text-muted-foreground">
              نفخر بما حققته مدرستنا من جوائز وتكريمات
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <p className="text-lg">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
