<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    {{-- <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])> --}}

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? 'system' }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;

                    //  if (prefersDark) {
                    //      document.documentElement.classList.add('light');
                    //  }
                }
            })();
        </script>

        <!-- ====================== SEO META TAGS ====================== -->
        <title inertia>مدارس تفتشنا | Taftechna School – تعليم ذو جودة للجميع</title>

        <meta name="description"
            content="مدارس تفتشنا مؤسسة تعليمية عمومية رائدة بتافتشنا، إقليم زاكورة. توفر تعليماً ابتدائياً عالي الجودة، وتعمل على تعزيز التواصل، تنمية المهارات، وتنفيذ مشاريع تربوية رائدة." />

        <meta name="keywords"
            content="مدرسة تافتشنا, مدارس تفتشنا, Taftechna School, التعليم في زاكورة, المدارس الرائدة, التعليم الابتدائي, مشروع المؤسسة, مشروع المدرسة الإيكولوجية, التعليم بالمغرب" />

        <meta name="author" content="Taftechna School" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ss.taftechna.com/" />

        <!-- Language tags -->
        <meta http-equiv="Content-Language" content="ar, fr, en" />
        <meta name="og:locale" content="ar_AR" />
        <meta name="og:locale:alternate" content="fr_FR" />
        <meta name="og:locale:alternate" content="en_US" />

        <!-- ====================== OPEN GRAPH (FACEBOOK/WHATSAPP) ====================== -->
        <meta property="og:title" content="مدارس تفتشنا | Taftechna School – تعليم ذو جودة للجميع" />
        <meta property="og:description"
            content="مؤسسة تعليمية رائدة في جماعة تافتشنا. تأسست سنة 1962 وتضم 820 تلميذاً، وتشارك في مشاريع تربوية رائدة لتحقيق تعليم ذو جودة للجميع." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ss.taftechna.com/" />
        <meta property="og:image" content="https://ss.taftechna.com/taftechna-og-image.png" />
        <meta property="og:site_name" content="Taftechna School" />

        <!-- ====================== TWITTER CARD ====================== -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مدارس تفتشنا | Taftechna School – تعليم ذو جودة للجميع" />
        <meta name="twitter:description"
            content="مدرسة تافتشنا: مؤسسة تعليمية عمومية رائدة تقدم تعليماً حديثاً بجذور ثقافية أصيلة، وتعمل على تطوير المتعلمين والبيئة المدرسية." />
        <meta name="twitter:image" content="https://ss.taftechna.com/taftechna-og-image.png" />

        <!-- =========================================================== -->


        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="manifest" href="/site.webmanifest" />



        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- ====================== STRUCTURED DATA (JSON-LD) ====================== -->
        <script type="application/ld+json">
        {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "مدارس تفتشنا - Taftechna School",
        "description": "مدرسة تافتشنا هي مؤسسة تعليمية رائدة بتافتشنا، إقليم زاكورة. تأسست سنة 1962 وتوفر تعليماً ابتدائياً عالي الجودة ضمن مشاريع تربوية رائدة.",
        "image": "https://ss.taftechna.com/taftechna-og-image.png",
        "url": "https://ss.taftechna.com/",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "تافتشنا",
            "addressRegion": "زاكورة",
            "addressCountry": "MA"
        },
        "foundingDate": "1962",
        "numberOfStudents": "820",
        "founder": "الأكاديمية الجهوية للتربية والتكوين درعة–تافيلالت",
        "sameAs": [
            "https://facebook.com",
            "https://instagram.com"
        ]
        }
        </script>
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>

    <body class="font-sans">
        @inertia
    </body>

</html>
