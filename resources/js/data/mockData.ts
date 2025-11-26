// Mock data for Taftechna School website

export interface NewsItem {
    id: string;
    title: string;
    titleAr: string;
    titleFr: string;
    date: string;
    category: string;
    categoryAr: string;
    categoryFr: string;
    excerpt: string;
    excerptAr: string;
    excerptFr: string;
    content: string;
    contentAr: string;
    contentFr: string;
    image: string;
    images?: string[];
}

export interface EventItem {
    id: string;
    title: string;
    titleAr: string;
    titleFr: string;
    date: string;
    time?: string;
    location?: string;
    locationAr?: string;
    locationFr?: string;
    category: string;
    categoryAr: string;
    categoryFr: string;
    description: string;
    descriptionAr: string;
    descriptionFr: string;
    image: string;
    images?: string[];
}

export interface GalleryAlbum {
    id: string;
    title: string;
    titleAr: string;
    titleFr: string;
    date: string;
    coverImage: string;
    images: string[];
}

export const newsItems: NewsItem[] = [
    {
        id: "1",
        title: "Start of New Academic Year",
        titleAr: "بداية السنة الدراسية الجديدة",
        titleFr: "Début de la nouvelle année scolaire",
        date: "2024-09-05",
        category: "Announcements",
        categoryAr: "إعلانات",
        categoryFr: "Annonces",
        excerpt: "Welcome back students! The new academic year starts with exciting programs.",
        excerptAr: "مرحباً بعودة الطلاب! السنة الدراسية الجديدة تبدأ ببرامج مثيرة.",
        excerptFr: "Bienvenue aux élèves! La nouvelle année scolaire commence avec des programmes passionnants.",
        content: "We are thrilled to welcome all our students back for the new academic year 2024-2025. This year promises to be filled with new learning opportunities, enhanced facilities, and engaging programs designed to nurture both academic excellence and personal growth.\n\nWe have opened new facilities this year including a modern science laboratory equipped with the latest equipment, an expanded library containing thousands of books, and a multipurpose hall for cultural and sports activities.\n\nWe are also offering innovative educational programs this year that focus on developing life skills and creativity, in addition to promoting cultural values and local identity for students.",
        contentAr: "يسعدنا الترحيب بجميع طلابنا للسنة الدراسية الجديدة 2024-2025. تعد هذه السنة بفرص تعليمية جديدة، ومرافق محسّنة، وبرامج جذابة مصممة لتعزيز التميز الأكاديمي والنمو الشخصي.\n\nافتتحنا هذا العام مرافق جديدة تشمل مختبر علوم حديث مجهز بأحدث المعدات، ومكتبة موسعة تحتوي على آلاف الكتب، وقاعة متعددة الأغراض للأنشطة الثقافية والرياضية.\n\nكما نقدم هذا العام برامج تعليمية مبتكرة تركز على تنمية المهارات الحياتية والإبداع، بالإضافة إلى تعزيز القيم الثقافية والهوية المحلية للطلاب.",
        contentFr: "Nous sommes ravis d'accueillir tous nos élèves pour la nouvelle année scolaire 2024-2025. Cette année promet d'être remplie de nouvelles opportunités d'apprentissage, d'installations améliorées et de programmes engageants conçus pour favoriser l'excellence académique et la croissance personnelle.\n\nNous avons ouvert cette année de nouvelles installations comprenant un laboratoire scientifique moderne équipé des derniers équipements, une bibliothèque agrandie contenant des milliers de livres et une salle polyvalente pour les activités culturelles et sportives.\n\nNous proposons également cette année des programmes éducatifs innovants axés sur le développement des compétences de vie et de la créativité, en plus de promouvoir les valeurs culturelles et l'identité locale des élèves.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        images: [
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
            "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
        ]
    },
    {
        id: "2",
        title: "Science Fair Winners Announced",
        titleAr: "إعلان الفائزين في معرض العلوم",
        titleFr: "Annonce des gagnants de la foire scientifique",
        date: "2024-10-15",
        category: "Achievements",
        categoryAr: "إنجازات",
        categoryFr: "Réalisations",
        excerpt: "Our talented students won first place in the regional science competition.",
        excerptAr: "طلابنا الموهوبون فازوا بالمركز الأول في مسابقة العلوم الإقليمية.",
        excerptFr: "Nos élèves talentueux ont remporté la première place au concours scientifique régional.",
        content: "Congratulations to our exceptional students who represented Taftechna School at the Regional Science Fair. Their innovative projects on renewable energy and water conservation earned them first place, making the entire school community proud.\n\nMore than 50 schools from across the region participated in this fair, and our students stood out with their creative scientific projects that addressed important environmental issues.\n\nThe students presented a project on generating energy from solar power, and another on water purification using local natural materials, both of which impressed the judging panel.",
        contentAr: "تهانينا الحارة لطلابنا المتميزين الذين مثلوا مدرسة تافتشنا في معرض العلوم الإقليمي. مشاريعهم المبتكرة حول الطاقة المتجددة والحفاظ على المياه حصدت المركز الأول، مما جعل مجتمع المدرسة بأكمله فخوراً.\n\nشارك في هذا المعرض أكثر من 50 مدرسة من مختلف أنحاء الإقليم، وتميز طلابنا بمشاريعهم العلمية الإبداعية التي تناولت قضايا بيئية مهمة.\n\nقدم الطلاب مشروعاً عن توليد الطاقة من الطاقة الشمسية، ومشروعاً آخر عن تنقية المياه باستخدام مواد طبيعية محلية، وقد أثار كلا المشروعين إعجاب لجنة التحكيم.",
        contentFr: "Félicitations à nos élèves exceptionnels qui ont représenté l'école Taftechna à la Foire scientifique régionale. Leurs projets innovants sur les énergies renouvelables et la conservation de l'eau leur ont valu la première place, rendant toute la communauté scolaire fière.\n\nPlus de 50 écoles de toute la région ont participé à cette foire, et nos élèves se sont démarqués par leurs projets scientifiques créatifs abordant des questions environnementales importantes.\n\nLes élèves ont présenté un projet sur la production d'énergie à partir de l'énergie solaire et un autre sur la purification de l'eau à l'aide de matériaux naturels locaux, qui ont tous deux impressionné le jury.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
        images: [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
            "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800",
            "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800"
        ]
    },
    {
        id: "3",
        title: "Parent-Teacher Meeting Scheduled",
        titleAr: "موعد اجتماع أولياء الأمور والمعلمين",
        titleFr: "Réunion parents-enseignants prévue",
        date: "2024-11-20",
        category: "Events",
        categoryAr: "أنشطة",
        categoryFr: "Événements",
        excerpt: "Join us for an important discussion about student progress and school updates.",
        excerptAr: "انضموا إلينا لمناقشة مهمة حول تقدم الطلاب وتحديثات المدرسة.",
        excerptFr: "Rejoignez-nous pour une discussion importante sur les progrès des élèves et les actualités de l'école.",
        content: "We cordially invite all parents to attend our quarterly parent-teacher meeting on November 20th. This is an excellent opportunity to discuss your child's academic progress, address any concerns, and learn about upcoming school activities.\n\nThe meeting will be organized throughout the day so that each parent can meet with their children's teachers and learn about their academic level.\n\nStudent achievements during the first semester will also be presented, and future plans for school development will be discussed.",
        contentAr: "ندعو جميع أولياء الأمور لحضور اجتماعنا الفصلي في 20 نوفمبر. هذه فرصة ممتازة لمناقشة التقدم الأكاديمي لأطفالكم ومعالجة أي مخاوف والتعرف على الأنشطة المدرسية القادمة.\n\nسيتم تنظيم الاجتماع على مدار اليوم بحيث يتمكن كل ولي أمر من مقابلة معلمي أبنائه والاطلاع على مستواهم الدراسي.\n\nكما سيتم عرض إنجازات الطلاب خلال الفصل الدراسي الأول، ومناقشة الخطط المستقبلية لتطوير المدرسة.",
        contentFr: "Nous invitons cordialement tous les parents à assister à notre réunion trimestrielle parents-enseignants le 20 novembre. C'est une excellente occasion de discuter des progrès académiques de votre enfant, d'aborder toute préoccupation et de vous informer des activités scolaires à venir.\n\nLa réunion sera organisée tout au long de la journée afin que chaque parent puisse rencontrer les enseignants de ses enfants et s'informer de leur niveau académique.\n\nLes réalisations des élèves au cours du premier semestre seront également présentées et les plans futurs de développement de l'école seront discutés.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
        images: [
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
        ]
    },
    {
        id: "4",
        title: "New Library Opening",
        titleAr: "افتتاح المكتبة الجديدة",
        titleFr: "Ouverture de la nouvelle bibliothèque",
        date: "2024-09-25",
        category: "Facilities",
        categoryAr: "مرافق",
        categoryFr: "Installations",
        excerpt: "Our newly renovated library is now open with thousands of books and digital resources.",
        excerptAr: "مكتبتنا المجددة مفتوحة الآن مع آلاف الكتب والموارد الرقمية.",
        excerptFr: "Notre bibliothèque récemment rénovée est maintenant ouverte avec des milliers de livres et ressources numériques.",
        content: "We are proud to announce the opening of our newly renovated library, featuring over 5,000 books in Arabic and French, comfortable reading spaces, and modern digital resources.\n\nThe library is equipped with computers for research and a dedicated storytelling corner for younger students. It also contains a spacious reading room with a beautiful view of the Atlas Mountains.\n\nWe encourage all students to visit the library and take advantage of its rich resources to enhance their knowledge and develop a love of reading.",
        contentAr: "نفخر بالإعلان عن افتتاح مكتبتنا المجددة، التي تضم أكثر من 5000 كتاب بالعربية والفرنسية، ومساحات قراءة مريحة، وموارد رقمية حديثة.\n\nالمكتبة مزودة بأجهزة كمبيوتر للبحث وركن مخصص لرواية القصص للطلاب الأصغر سناً. كما تحتوي على قاعة مطالعة واسعة بإطلالة جميلة على جبال الأطلس.\n\nنشجع جميع الطلاب على زيارة المكتبة والاستفادة من مواردها الغنية لتعزيز معارفهم وتنمية حب القراءة لديهم.",
        contentFr: "Nous sommes fiers d'annoncer l'ouverture de notre bibliothèque récemment rénovée, comprenant plus de 5 000 livres en arabe et en français, des espaces de lecture confortables et des ressources numériques modernes.\n\nLa bibliothèque est équipée d'ordinateurs pour la recherche et d'un coin lecture dédié pour les jeunes élèves. Elle contient également une salle de lecture spacieuse avec une belle vue sur les montagnes de l'Atlas.\n\nNous encourageons tous les élèves à visiter la bibliothèque et à profiter de ses riches ressources pour enrichir leurs connaissances et développer l'amour de la lecture.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800"
        ]
    }
];

export const events: EventItem[] = [
    {
        id: "1",
        title: "Cultural Heritage Day",
        titleAr: "يوم التراث الثقافي",
        titleFr: "Journée du patrimoine culturel",
        date: "2024-12-10",
        time: "09:00 - 15:00",
        location: "School Main Hall",
        locationAr: "القاعة الرئيسية للمدرسة",
        locationFr: "Salle principale de l'école",
        category: "Cultural",
        categoryAr: "ثقافي",
        categoryFr: "Culturel",
        description: "Join us for a celebration of local Amazigh culture with traditional music, dance performances, crafts workshops, and authentic cuisine. Students will showcase their research projects on local history.",
        descriptionAr: "انضموا إلينا للاحتفال بالثقافة الأمازيغية المحلية مع الموسيقى التقليدية وعروض الرقص وورش الحرف اليدوية والمأكولات الأصيلة. سيعرض الطلاب مشاريعهم البحثية عن التاريخ المحلي.",
        descriptionFr: "Rejoignez-nous pour une célébration de la culture amazighe locale avec de la musique traditionnelle, des spectacles de danse, des ateliers d'artisanat et une cuisine authentique. Les élèves présenteront leurs projets de recherche sur l'histoire locale.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
        images: [
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
        ]
    },
    {
        id: "2",
        title: "Annual Sports Day",
        titleAr: "اليوم الرياضي السنوي",
        titleFr: "Journée sportive annuelle",
        date: "2024-11-05",
        time: "08:00 - 16:00",
        location: "School Sports Field",
        locationAr: "الملعب الرياضي",
        locationFr: "Terrain de sport de l'école",
        category: "Sports",
        categoryAr: "رياضة",
        categoryFr: "Sport",
        description: "A day filled with athletic competitions, team sports, and fun activities for all ages. Parents are welcome to join and cheer for their children!",
        descriptionAr: "يوم مليء بالمنافسات الرياضية والألعاب الجماعية والأنشطة الممتعة لجميع الأعمار. أولياء الأمور مدعوون للانضمام والتشجيع لأطفالهم!",
        descriptionFr: "Une journée remplie de compétitions sportives, de sports d'équipe et d'activités amusantes pour tous les âges. Les parents sont invités à se joindre et à encourager leurs enfants!",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800"
    },
    {
        id: "3",
        title: "Science & Innovation Fair",
        titleAr: "معرض العلوم والابتكار",
        titleFr: "Foire des sciences et de l'innovation",
        date: "2024-10-28",
        time: "10:00 - 14:00",
        location: "Science Labs",
        locationAr: "مختبرات العلوم",
        locationFr: "Laboratoires scientifiques",
        category: "Academic",
        categoryAr: "أكاديمي",
        categoryFr: "Académique",
        description: "Students will present their innovative science projects, experiments, and research findings. Guest judges from local universities will evaluate the projects.",
        descriptionAr: "سيقدم الطلاب مشاريعهم العلمية المبتكرة والتجارب ونتائج الأبحاث. حكام ضيوف من الجامعات المحلية سيقيمون المشاريع.",
        descriptionFr: "Les élèves présenteront leurs projets scientifiques innovants, leurs expériences et les résultats de leurs recherches. Des juges invités des universités locales évalueront les projets.",
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800"
    },
    {
        id: "4",
        title: "End of Year Celebration",
        titleAr: "حفل نهاية العام",
        titleFr: "Célébration de fin d'année",
        date: "2024-06-25",
        time: "18:00 - 21:00",
        location: "School Courtyard",
        locationAr: "ساحة المدرسة",
        locationFr: "Cour de l'école",
        category: "Celebration",
        categoryAr: "احتفال",
        categoryFr: "Célébration",
        description: "Join us for our annual end-of-year celebration featuring student performances, awards ceremony, and a community dinner under the stars.",
        descriptionAr: "انضموا إلينا في احتفالنا السنوي بنهاية العام الذي يتضمن عروض الطلاب وحفل توزيع الجوائز وعشاء مجتمعي تحت النجوم.",
        descriptionFr: "Rejoignez-nous pour notre célébration annuelle de fin d'année avec des spectacles d'élèves, une cérémonie de remise de prix et un dîner communautaire sous les étoiles.",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800"
    }
];

export const galleryAlbums: GalleryAlbum[] = [
    {
        id: "1",
        title: "School Opening Ceremony 2024",
        titleAr: "حفل افتتاح المدرسة 2024",
        titleFr: "Cérémonie d'ouverture de l'école 2024",
        date: "2024-09-05",
        coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        images: [
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
            "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
        ]
    },
    {
        id: "2",
        title: "Sports Day 2024",
        titleAr: "اليوم الرياضي 2024",
        titleFr: "Journée sportive 2024",
        date: "2024-05-15",
        coverImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
        images: [
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800",
            "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800"
        ]
    },
    {
        id: "3",
        title: "Science Fair Winners",
        titleAr: "الفائزون بمعرض العلوم",
        titleFr: "Gagnants de la foire scientifique",
        date: "2024-10-15",
        coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
        images: [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
            "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800",
            "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800"
        ]
    },
    {
        id: "4",
        title: "Cultural Heritage Day",
        titleAr: "يوم التراث الثقافي",
        titleFr: "Journée du patrimoine culturel",
        date: "2024-03-20",
        coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
        images: [
            "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
            "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800"
        ]
    }
];

export const schoolInfo = {
    name: "مجموعة مدارس تفتشنا",
    nameEn: "Taftechna School",
    slogan: "نبني المستقبل بجذور أصيلة",
    sloganEn: "Building the Future with Authentic Roots",
    mission: "تقديم تعليم عالي الجودة يجمع بين الحداثة والتراث الثقافي",
    missionEn: "Providing quality education that bridges modernity and cultural heritage",
    address: "مجموعة مدارس تفتشنا",
    addressEn: "Taftechna Village, Azilal Province, Morocco",
    phone: "+2126 61915495",
    email: "ss.taftechna@gmail.com",
    coordinates: {
        lat: 32.0,
        lng: -6.5
    }
};
