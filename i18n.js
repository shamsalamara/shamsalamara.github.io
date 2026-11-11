(() => {
  const translations = {
    en: {
      common: {
        back: 'Back', menuOpen: 'Open menu', menuClose: 'Close menu', previous: 'Previous', next: 'Next',
        view: 'View', close: 'Close project', projectView: 'project view', explore: 'Explore selected projects',
        discuss: 'Discuss a similar project', whatsappMessage: 'Hello, I would like to discuss a similar project with Shams Al Amara.', selectedWork: 'SHAMS AL AMARA / SELECTED WORK',
        designPractice: 'SHAMS AL AMARA / DESIGN PRACTICE', projects: 'Projects', language: 'Available languages'
      },
      main: {
        skip: 'Skip to content', menu: 'Menu', nav: ['HOME','ABOUT SHAMS AL AMARA','OUR SERVICES','SELECTED WORK','OUR TEAM','ORGANISATIONS','ABOUT CEO','CONTACT'],
        heroTitle: 'ARCHITECTURE ROOTED IN PLACE', heroTitles: ["AUTHENTICITY IN EVERY DETAIL", "HARMONY OF THE INTERIOR SPACE", "DESIGNED BY NATURE, REFINED BY DESIGN", "VERNACULAR DESIGN FOR DAILY MEETINGS", "DESIGN FOR THE MODERN LIFE", "ROOTED IN PAST, DESIGNED FOR FUTURE", "MODERNITY IN THE HEART OF AUTHENTICITY"],
        heroNames: ["QATAR DIWAN AMIRI PALACE", "VILLA MOROCCO", "VILLA RAS", "DUBAI MARINE . OFFICE", "VILLA TALEGHAN", "LULU AL QAIS KISH ECOLODGE", "KISH FISH MARKET"],
        heroLocations: ["DOHA, QATAR", "DUBAI, UAE", "RAS AL KHAIMAH, UAE", "DUBAI, UAE", "TALEGHAN, IRAN", "KISH ISLAND, IRAN", "KISH ISLAND, IRAN"],
        aboutEyebrow: 'ABOUT SHAMS AL AMARA', aboutTitle: 'ABOUT SHAMS AL AMARA', aboutSummary: 'Shams Al Amara is a Dubai-based architectural team with a contextual approach to design. We work across interiors, renovation, architecture and urban design, guiding clients through every stage of a project.', aboutMore: 'EXPLORE OUR STORY ↗',
        servicesEyebrow: 'SERVICES', servicesTitle: 'QUALIFIED SERVICES TO CREATE YOUR CUSTOMIZED SPACE',
        servicesIntro: 'Architecture, interiors, urban design and landscape, from first concept to delivery.',
        serviceCards: {
          architecture: ['Architecture design','Buildings with a sense of belonging.'], interior: ['Interior design','Considered spaces for everyday life.'],
          urban: ['Urban design','Places that connect people and cities.'], landscape: ['Landscape design','Outdoor spaces.'],
          renovation: ['Renovation','Renewing existing spaces with clarity and care.'], consultation: ['Consultation','Focused guidance from first decision to delivery.']
        },
        teamEyebrow: 'OUR TEAM', teamTitle: 'MANY PERSPECTIVES.\nA SHARED PURPOSE.',
        teamIntro: 'Driven by passion, curiosity, and collaboration, we create architecture that connects contemporary life with the cultural roots of the Middle East',
        archiveCaption: '', studioName: 'SHAMS AL AMARA',
        teamHeading: 'Built on conversation.\nDriven by context.',
        teamBody: 'A Dubai-based studio with roots in Iran and a shared interest in the architecture of the region.',
        ceoName: 'Abolfazl Jafarpour', ceoRole: 'CEO', ceoBio: 'Abolfazl Jafarpour, University of Tehran Faculty of Fine Arts graduate master of architecture, inspired by art, music, traditional crafts, and the living heritage of contextual and vernacular architecture.', ceoMore: 'READ THE FULL CEO PROFILE ↗',
        teamProfiles: {
          abolfazl: ['Abolfazl Jafarpour','CEO · Head Architect','MA Architecture · University of Tehran'],
          negin: ['Negin Raoufi','Project Manager','PhD Architecture · IAU Kish Island Branch'],
          sina: ['Sina Pakand','Senior Architect','PhD Architecture · QIAU'],
          mahshad: ['Mahshad Rouzbahani','Architect · CG Artist','MA Architecture · Brajin IAU'],
          saleh: ['Saleh Ansari','Civil Engineer','MA Civil Engineering · Northern Arizona'],
          nizar: ['Nizar Jabbar','Civil Engineer','BA Civil Engineering · Mosul University'],
          sara: ['Sara Eyvaznezhad','Lawyer · Legal Advisor','PhD Attorney at Law · University of Tehran'],
          sam: ['Sam Akhzari','MEP Designer','MA Electrical Engineering · IAU Tehran Central Branch'],
          lina: ['Lina El Hajj','Interior Designer','BA Interior Design · Tripoli Manar University']
        },
        coreTeam: 'Core team', collaborators: 'Collaborators', teamMember: 'Team member', profileSoon: 'Profile coming soon', comingSoon: 'Coming soon',
        organisations: 'ORGANISATIONS WE HAVE WORKED WITH', contactEyebrow: 'CONTACT US',
        contactTitle: 'EVERY PLACE BEGINS\nWITH A CONVERSATION.', dubai: 'DUBAI / UAE & GCC', iran: 'IRAN', callWhatsapp: 'Call & WhatsApp', email: 'EMAIL',
        instagramKicker: 'LATEST FROM THE STUDIO', followInstagram: 'Follow us on Instagram', seeMore: 'See more +',
        footerStudio: 'Shams Al Amara Architecture Studio', footerLocation: 'Dubai, United Arab Emirates', backTop: 'Back to top',
        portfolioError: 'The portfolio could not load. Please refresh the page or request our portfolio by email.',
        studioMoments: 'Studio moments', studioImage: 'A moment from the Shams Al Amara studio archive'
      },
      groups: {
        architecture: ['Architecture design','Buildings & residences'], interior: ['Interior design','Spaces for everyday life'],
        urban: ['Urban design','Public realm & landmarks'], landscape: ['Landscape design','Outdoor spaces']
      },
      categories: {
        architecture: ['Architecture design','Buildings and residences shaped by climate, culture and context.'],
        interior: ['Interior design','Spaces for daily life, developed from concept through material and detail.'],
        urban: ['Urban design','Public places and landmarks that connect people with their cities.'],
        landscape: ['Landscape design','Courtyards and outdoor spaces balancing nature, shade and architecture.']
      },
      services: {
        architecture: ['Architecture design','BUILDINGS / CONTEXT / LIFE',['Buildings, whether private and small in scale or public and large, shape the experience of their users and the wider life of the city. Architectural design goes beyond a building’s volume and façade: it can create a landmark, complete an existing fabric or form a deliberate contrast through a clear design approach.','Shams Al Amara believes that every project should belong to its setting. Our architecture grows from climatic, cultural and social conditions, aiming for a lasting relationship with the surrounding city or landscape.']],
        interior: ['Interior design','SPACE / ATMOSPHERE / DETAIL',['Interior space is where much of the interaction between people and their environment takes place. Its quality affects daily life, comfort and the way a place is understood. A carefully designed interior can meet practical needs while becoming more useful, coherent and beautiful.','Our interior design team develops each project from the first concept through 2D and 3D drawings, visualisation, material direction and layout planning, creating spaces shaped around the people who use them.']],
        urban: ['Urban design','PUBLIC REALM / CITY / CONNECTION',['Urban spaces can become practical, welcoming places when they are designed with care. Combining knowledge from planning and architecture, urban design can improve the quality of the public realm and create stronger opportunities for citizens and city managers.','Shams Al Amara provides studies, design strategies and feasible solutions for public and private projects. We work with municipalities, urban managers and clients to turn complex conditions into clear and buildable proposals.']],
        landscape: ['Landscape design','NATURE / SHADE / BALANCE',['Landscape is an active part of architecture. Climate, shade, planting, water and movement come together to shape outdoor spaces that feel comfortable, connected and rooted in their setting.','Our landscape work responds to the character of each site and the needs of its users. From private courtyards to shared public spaces, we balance natural systems with practical use and the architectural identity of the project.']],
        renovation: ['RENOVATION','DESIGN / EXECUTION / SUPERVISION',['The renovation of residential units, villas, apartments, and other property types is one of the core services of Shams Al Amara, which includes the complete and professional renovation of the interior or exterior spaces of buildings.','The renovation process, carried out in three stages: Design, Execution, and Supervision, includes providing work permits, site visits and analysis of existing conditions, architectural design services and upgrading the style, purchasing and ordering the equipment for the renovation of kitchens, bathrooms, bedrooms, living rooms, and terraces, painting, wrapping or replacing wardrobes and cabinets, cleaning and repairing air-conditioning grills, modifying the electrical system, ceiling and flooring works, selecting and installing lighting equipment, and finally, arranging furniture, followed by the handover of the keys to the clients.']],
        consultation: ['Consultation','CLARITY / STRATEGY / DELIVERY',['Good decisions early in a project save time, cost and uncertainty later. Our consultation service provides clear architectural direction grounded in site, regulations, programme and budget.','We support clients through feasibility, concept review, design coordination and delivery, helping each project move forward with practical priorities and a coherent vision.']]
      }
    },
    fa: {
      common: {
        back: 'بازگشت', menuOpen: 'باز کردن منو', menuClose: 'بستن منو', previous: 'قبلی', next: 'بعدی',
        view: 'مشاهده', close: 'بستن پروژه', projectView: 'نمای پروژه', explore: 'مشاهده پروژه‌های منتخب',
        discuss: 'گفت‌وگو درباره پروژه‌ای مشابه', whatsappMessage: 'سلام، برای گفت‌وگو درباره پروژه‌ای مشابه با شمس‌العماره پیام می‌دهم.', selectedWork: 'شمس‌العماره / پروژه‌های منتخب',
        designPractice: 'شمس‌العماره / استودیوی طراحی', projects: 'پروژه‌ها', language: 'زبان‌های سایت'
      },
      main: {
        skip: 'رفتن به محتوای اصلی', menu: 'منو', nav: ['خانه','درباره شمس‌العماره','خدمات ما','پروژه‌های منتخب','تیم ما','سازمان‌های همکار','درباره مدیرعامل','تماس'],
        heroTitle: 'معماری ریشه‌گرفته از بستر', heroTitles: ["اصالت در تک‌تک جزئیات", "هماهنگی در فضای داخلی", "طراحی‌شده به دست طبیعت، پرداخت‌شده با طراحی", "طراحی بومی برای دیدارهای روزمره", "طراحی برای زندگی مدرن", "ریشه در گذشته، طراحی برای آینده", "مدرنیته در قلب اصالت"],
        heroNames: ["کاخ دیوان امیری قطر", "ویلای مراکش", "ویلای راس", "دفتر دبی مارین", "ویلای طالقان", "اقامتگاه بوم‌گردی لولو القیس کیش", "بازار ماهی کیش"],
        heroLocations: ["دوحه، قطر", "دبی، امارات متحده عربی", "راس‌الخیمه، امارات متحده عربی", "دبی، امارات متحده عربی", "طالقان، ایران", "جزیره کیش، ایران", "جزیره کیش، ایران"],
        aboutEyebrow: 'درباره شمس‌العماره', aboutTitle: 'درباره شمس‌العماره', aboutSummary: 'شمس‌العماره، تیمی متخصص و مستقر در دبی با رویکرد معماری زمینه‌گراست. ما در طراحی داخلی، بازسازی، طراحی معماری و شهری همراه کارفرمایان هستیم و به‌عنوان مشاوری قابل اعتماد، در تمام مراحل پروژه در کنار آن‌ها می‌مانیم.', aboutMore: 'داستان ما را بخوانید ↗',
        servicesEyebrow: 'خدمات', servicesTitle: 'خدمات تخصصی برای خلق فضای سفارشی شما',
        servicesIntro: 'خدماتی تخصصی برای خلق فضای سفارشی شما.',
        serviceCards: {
          architecture: ['طراحی معماری','ساختمان‌هایی با حس تعلق.'], interior: ['طراحی داخلی','فضاهایی سنجیده برای زندگی روزمره.'],
          urban: ['طراحی شهری','مکان‌هایی برای پیوند مردم و شهر.'], landscape: ['طراحی منظر','فضاهای باز.'],
          renovation: ['بازسازی','نوسازی فضاهای موجود با دقت و وضوح.'], consultation: ['مشاوره','راهنمایی متمرکز از تصمیم نخست تا اجرا.']
        },
        teamEyebrow: 'تیم ما', teamTitle: 'دیدگاه‌های گوناگون.\nهدفی مشترک.',
        teamIntro: 'با اشتیاق، کنجکاوی و همکاری، معماری‌ای خلق می‌کنیم که زندگی معاصر را به ریشه‌های فرهنگی خاورمیانه پیوند می‌دهد.',
        archiveCaption: '', studioName: 'شمس‌العماره',
        teamHeading: 'برآمده از گفت‌وگو.\nهدایت‌شده با شناخت بستر.',
        teamBody: 'استودیویی مستقر در دبی، با ریشه‌هایی در ایران و نگاهی مشترک به معماری منطقه.',
        ceoName: 'ابوالفضل جعفرپور', ceoRole: 'مدیرعامل', ceoBio: 'ابوالفضل جعفرپور، دانش‌آموخته کارشناسی ارشد معماری از پردیس هنرهای زیبای دانشگاه تهران، از هنر، موسیقی، صنایع‌دستی سنتی و میراث زنده معماری زمینه‌گرا و بومی الهام می‌گیرد.', ceoMore: 'معرفی کامل مدیرعامل ↗',
        teamProfiles: {
          abolfazl: ['ابوالفضل جعفرپور','مدیرعامل · معمار ارشد','کارشناسی ارشد معماری · دانشگاه تهران'],
          negin: ['نگین رئوفی','مدیر پروژه','دکتری معماری · دانشگاه آزاد اسلامی واحد کیش'],
          sina: ['سینا پاکند','معمار ارشد','PhD Architecture · QIAU'],
          mahshad: ['مهشاد روزبهانی','معمار · هنرمند CG','کارشناسی ارشد معماری · دانشگاه آزاد اسلامی براجین'],
          saleh: ['صالح انصاری','مهندس عمران','کارشناسی ارشد مهندسی عمران · دانشگاه آریزونای شمالی'],
          nizar: ['نزار جبار','مهندس عمران','کارشناسی مهندسی عمران · دانشگاه موصل'],
          sara: ['سارا عیوض‌نژاد','وکیل · مشاور حقوقی','دکتری حقوق · دانشگاه تهران'],
          sam: ['سام اخذری','طراح MEP','کارشناسی ارشد مهندسی برق · دانشگاه آزاد اسلامی تهران مرکزی'],
          lina: ['لینا الحاج','طراح داخلی','کارشناسی طراحی داخلی · دانشگاه المنار طرابلس']
        },
        coreTeam: 'تیم اصلی', collaborators: 'همکاران', teamMember: 'عضو تیم', profileSoon: 'اطلاعات به‌زودی تکمیل می‌شود', comingSoon: 'به‌زودی',
        organisations: 'سازمان‌هایی که با آن‌ها همکاری کرده‌ایم', contactEyebrow: 'تماس با ما',
        contactTitle: 'هر مکانی\nبا یک گفت‌وگو آغاز می‌شود.', dubai: 'دبی / امارات و کشورهای شورای همکاری خلیج فارس', iran: 'ایران', callWhatsapp: 'تماس و واتساپ', email: 'ایمیل',
        instagramKicker: 'تازه‌های استودیو', followInstagram: 'ما را در اینستاگرام دنبال کنید', seeMore: 'مشاهده بیشتر +',
        footerStudio: 'استودیوی معماری شمس‌العماره', footerLocation: 'دبی، امارات متحده عربی', backTop: 'بازگشت به بالا',
        portfolioError: 'بارگذاری پروژه‌ها انجام نشد. صفحه را تازه کنید یا مجموعه آثار را از طریق ایمیل درخواست دهید.',
        studioMoments: 'لحظه‌هایی از استودیو', studioImage: 'تصویری از آرشیو استودیوی شمس‌العماره'
      },
      groups: {
        architecture: ['طراحی معماری','ساختمان‌ها و فضاهای مسکونی'], interior: ['طراحی داخلی','فضاهایی برای زندگی روزمره'],
        urban: ['طراحی شهری','فضاهای عمومی و نشانه‌های شهری'], landscape: ['طراحی منظر','فضاهای باز']
      },
      categories: {
        architecture: ['طراحی معماری','ساختمان‌ها و فضاهای مسکونی شکل‌گرفته از اقلیم، فرهنگ و بستر.'],
        interior: ['طراحی داخلی','فضاهایی برای زندگی روزمره؛ از ایده اولیه تا انتخاب مصالح و جزئیات.'],
        urban: ['طراحی شهری','فضاهای عمومی و نشانه‌هایی که مردم را به شهر پیوند می‌دهند.'],
        landscape: ['طراحی منظر','حیاط‌ها و فضاهای بازی که طبیعت، سایه و معماری را متعادل می‌کنند.']
      },
      services: {
        architecture: ['طراحی معماری','ساختمان / بستر / زندگی',['ساختمان‌ها، چه خصوصی و کوچک‌مقیاس باشند و چه عمومی و بزرگ، بر تجربه کاربران و زندگی گسترده‌تر شهر اثر می‌گذارند. طراحی معماری فراتر از حجم و نماست؛ می‌تواند نشانه‌ای شهری بسازد، بافت موجود را کامل کند یا با رویکردی روشن، تضادی سنجیده پدید آورد.','در شمس‌العماره باور داریم هر پروژه باید به محیط خود تعلق داشته باشد. معماری ما از شرایط اقلیمی، فرهنگی و اجتماعی رشد می‌کند تا رابطه‌ای پایدار با شهر یا چشم‌انداز پیرامون برقرار کند.']],
        interior: ['طراحی داخلی','فضا / اتمسفر / جزئیات',['بخش بزرگی از تعامل انسان با محیط در فضای داخلی رخ می‌دهد. کیفیت این فضا بر زندگی روزمره، آسایش و درک ما از مکان اثر می‌گذارد. طراحی دقیق می‌تواند نیازهای عملی را پاسخ دهد و هم‌زمان فضایی کارآمد، منسجم و زیبا بسازد.','تیم طراحی داخلی ما هر پروژه را از ایده نخست تا نقشه‌های دوبعدی و سه‌بعدی، تصویرسازی، انتخاب مصالح و برنامه‌ریزی چیدمان پیش می‌برد و فضایی متناسب با کاربران آن شکل می‌دهد.']],
        urban: ['طراحی شهری','فضای عمومی / شهر / پیوند',['فضاهای شهری با طراحی دقیق می‌توانند به مکان‌هایی کاربردی و پذیرا تبدیل شوند. تلفیق دانش برنامه‌ریزی و معماری، کیفیت عرصه عمومی را ارتقا می‌دهد و فرصت‌های بهتری برای شهروندان و مدیران شهری فراهم می‌کند.','شمس‌العماره برای پروژه‌های عمومی و خصوصی، مطالعات، راهبردهای طراحی و راهکارهای اجرایی ارائه می‌دهد و همراه شهرداری‌ها، مدیران شهری و کارفرمایان، شرایط پیچیده را به پیشنهادهایی روشن و قابل ساخت تبدیل می‌کند.']],
        landscape: ['طراحی منظر','طبیعت / سایه / تعادل',['منظر بخشی فعال از معماری است. اقلیم، سایه، کاشت، آب و حرکت در کنار هم فضاهای بازی می‌سازند که آسوده، پیوسته و ریشه‌دار در بستر خود هستند.','طراحی منظر ما به شخصیت هر سایت و نیاز کاربران پاسخ می‌دهد. از حیاط‌های خصوصی تا فضاهای عمومی مشترک، نظام‌های طبیعی را با کارکرد عملی و هویت معماری پروژه متعادل می‌کنیم.']],
        renovation: ['بازسازی','طراحی / اجرا / نظارت',['بازسازی واحدهای مسکونی، ویلا و آپارتمان و دیگر کاربری‌ها از خدمات اصلی مجموعه شمس‌العماره است که شامل بازسازی کامل و اصولی فضای داخلی یا خارجی ساختمان و نیز بازسازی‌های کوچک‌مقیاس می‌شود.','فرایند بازسازی در سه بخش طراحی، اجرا و نظارت، شامل گرفتن مجوزها، بازدید و تحلیل وضع موجود، خدمات طراحی معماری و به‌روزرسانی سبک خانه، خرید و سفارش تجهیزات لازم برای بازسازی آشپزخانه، سرویس‌ها، اتاق‌های خواب، نشیمن و تراس، رنگ‌آمیزی، روکش کمدها و کابینت‌ها یا تعویض آن‌ها، پاکسازی و تعمیر دریچه‌های کولر، اصلاح سیستم برقی، اجرای سقف و کف، انتخاب و نصب تجهیزات روشنایی و در نهایت انتخاب و چیدمان مبلمان و تحویل کلید به کارفرمایان است.']],
        consultation: ['مشاوره','شفافیت / راهبرد / اجرا',['تصمیم‌های درست در آغاز پروژه، زمان، هزینه و ابهام مراحل بعد را کاهش می‌دهند. خدمات مشاوره ما بر پایه سایت، ضوابط، برنامه و بودجه، مسیر روشنی برای طراحی معماری ارائه می‌کند.','در امکان‌سنجی، بازبینی ایده، هماهنگی طراحی و اجرا همراه کارفرما هستیم تا پروژه با اولویت‌های عملی و چشم‌اندازی منسجم پیش برود.']]
      }
    },
    ar: {
      common: {
        back: 'عودة', menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة', previous: 'السابق', next: 'التالي',
        view: 'عرض', close: 'إغلاق المشروع', projectView: 'صورة من المشروع', explore: 'استكشف المشاريع المختارة',
        discuss: 'ناقش مشروعاً مماثلاً', whatsappMessage: 'مرحباً، أود مناقشة مشروع مماثل مع شمس العمارة.', selectedWork: 'شمس العمارة / أعمال مختارة',
        designPractice: 'شمس العمارة / استوديو التصميم', projects: 'المشاريع', language: 'لغات الموقع'
      },
      main: {
        skip: 'انتقل إلى المحتوى', menu: 'القائمة', nav: ['الرئيسية','عن شمس العمارة','خدماتنا','أعمال مختارة','فريقنا','جهات تعاونّا معها','عن المدير التنفيذي','اتصل بنا'],
        heroTitle: 'عمارة متجذّرة في المكان', heroTitles: ["الأصالة في كل تفصيل", "تناغم المساحات الداخلية", "تصوغه الطبيعة، ويصقله التصميم", "تصميم محلي للقاءات اليومية", "تصميم للحياة العصرية", "متجذّر في الماضي، مصمّم للمستقبل", "الحداثة في قلب الأصالة"],
        heroNames: ["قصر الديوان الأميري القطري", "فيلا المغرب", "فيلا رأس", "مكتب دبي مارين", "فيلا طالقان", "نزل لولو القيس البيئي في كيش", "سوق سمك كيش"],
        heroLocations: ["الدوحة، قطر", "دبي، الإمارات", "رأس الخيمة، الإمارات", "دبي، الإمارات", "طالقان، إيران", "جزيرة كيش، إيران", "جزيرة كيش، إيران"],
        aboutEyebrow: 'عن شمس العمارة', aboutTitle: 'عن شمس العمارة', aboutSummary: 'شمس العمارة فريق معماري متخصص مقره دبي، يتبع نهجاً معمارياً يستجيب لسياق المكان. نعمل في التصميم الداخلي والتجديد والتصميم المعماري والحضري، ونرافق عملاءنا بوصفنا مستشاراً موثوقاً في جميع مراحل المشروع.', aboutMore: 'اكتشف قصتنا ↗',
        servicesEyebrow: 'الخدمات', servicesTitle: 'خدمات مؤهلة لإنشاء مساحتك المخصصة',
        servicesIntro: 'خدمات مؤهلة لإنشاء مساحتك المخصصة.',
        serviceCards: {
          architecture: ['التصميم المعماري','مبانٍ تنتمي إلى مكانها.'], interior: ['التصميم الداخلي','مساحات مدروسة للحياة اليومية.'],
          urban: ['التصميم الحضري','أماكن تصل الناس بمدنهم.'], landscape: ['تصميم المناظر الطبيعية','توازن بين الطبيعة والظل والفراغ.'],
          renovation: ['التجديد','إحياء المساحات القائمة بوضوح وعناية.'], consultation: ['الاستشارات','توجيه مركز من القرار الأول حتى التنفيذ.']
        },
        teamEyebrow: 'فريقنا', teamTitle: 'رؤى متعددة.\nغاية واحدة.',
        teamIntro: 'بالشغف والفضول والتعاون، نصنع عمارة تربط الحياة المعاصرة بالجذور الثقافية للشرق الأوسط.',
        archiveCaption: '', studioName: 'شمس العمارة',
        teamHeading: 'نبدأ بالحوار.\nويقودنا فهم السياق.',
        teamBody: 'استوديو مقره دبي، جذوره في إيران ويجمعه اهتمام مشترك بعمارة المنطقة.',
        ceoName: 'ابوالفضل جعفربور', ceoRole: 'المدير التنفيذي', ceoBio: 'أبوالفضل جعفربور، خريج كلية الفنون الجميلة بجامعة طهران وحاصل على ماجستير في العمارة، يستلهم من الفن والموسيقى والحرف التقليدية والإرث الحي للعمارة السياقية والمحلية.', ceoMore: 'اقرأ السيرة الكاملة للمدير التنفيذي ↗',
        teamProfiles: {
          abolfazl: ['ابوالفضل جعفربور','المدير التنفيذي · كبير المعماريين','ماجستير عمارة · جامعة طهران'],
          negin: ['نيجين رؤوفي','مديرة المشاريع','دكتوراه عمارة · جامعة آزاد الإسلامية، فرع كيش'],
          sina: ['سينا باكند','معماري أول','PhD Architecture · QIAU'],
          mahshad: ['مهشاد روزبهاني','معمارية · فنانة رسوم حاسوبية','ماجستير عمارة · جامعة آزاد الإسلامية براجين'],
          saleh: ['صالح أنصاري','مهندس مدني','ماجستير هندسة مدنية · شمال أريزونا'],
          nizar: ['نزار جبار','مهندس مدني','بكالوريوس هندسة مدنية · جامعة الموصل'],
          sara: ['سارا إيفاز نجاد','محامية · مستشارة قانونية','دكتوراه في القانون · جامعة طهران'],
          sam: ['سام أخزاري','مصمم MEP','ماجستير هندسة كهربائية · جامعة آزاد الإسلامية، فرع طهران المركزي'],
          lina: ['لينا الحاج','مصممة داخلية','بكالوريوس تصميم داخلي · جامعة المنار، طرابلس']
        },
        coreTeam: 'الفريق الأساسي', collaborators: 'المتعاونون', teamMember: 'عضو الفريق', profileSoon: 'تُضاف المعلومات قريباً', comingSoon: 'قريباً',
        organisations: 'جهات تعاونّا معها', contactEyebrow: 'اتصل بنا',
        contactTitle: 'كل مكان يبدأ\nبحوار.', dubai: 'دبي / الإمارات ودول مجلس التعاون الخليجي', iran: 'إيران', callWhatsapp: 'اتصال وواتساب', email: 'البريد الإلكتروني',
        instagramKicker: 'أحدث أخبار الاستوديو', followInstagram: 'تابعونا على إنستغرام', seeMore: 'شاهد المزيد +',
        footerStudio: 'استوديو شمس العمارة للهندسة المعمارية', footerLocation: 'دبي، الإمارات العربية المتحدة', backTop: 'العودة إلى الأعلى',
        portfolioError: 'تعذّر تحميل المشاريع. يرجى تحديث الصفحة أو طلب ملف الأعمال عبر البريد الإلكتروني.',
        studioMoments: 'لحظات من الاستوديو', studioImage: 'صورة من أرشيف استوديو شمس العمارة'
      },
      groups: {
        architecture: ['التصميم المعماري','المباني والمساكن'], interior: ['التصميم الداخلي','مساحات للحياة اليومية'],
        urban: ['التصميم الحضري','الفضاء العام والمعالم'], landscape: ['تصميم المناظر الطبيعية','الأفنية والمساحات الخارجية']
      },
      categories: {
        architecture: ['التصميم المعماري','مبانٍ ومساكن تصوغها ظروف المناخ والثقافة والسياق.'],
        interior: ['التصميم الداخلي','مساحات للحياة اليومية، من الفكرة إلى المواد والتفاصيل.'],
        urban: ['التصميم الحضري','أماكن عامة ومعالم تربط الناس بمدنهم.'],
        landscape: ['تصميم المناظر الطبيعية','أفنية ومساحات خارجية توازن بين الطبيعة والظل والعمارة.']
      },
      services: {
        architecture: ['التصميم المعماري','المباني / السياق / الحياة',['تؤثر المباني، سواء كانت خاصة وصغيرة أو عامة وكبيرة، في تجربة مستخدميها وفي حياة المدينة. يتجاوز التصميم المعماري الكتلة والواجهة؛ إذ يمكنه صنع معلم، وإكمال نسيج قائم، أو خلق تباين مقصود من خلال رؤية تصميمية واضحة.','نؤمن في شمس العمارة بأن كل مشروع يجب أن ينتمي إلى محيطه. تنطلق عمارتنا من الظروف المناخية والثقافية والاجتماعية لبناء علاقة دائمة مع المدينة أو المشهد المحيط.']],
        interior: ['التصميم الداخلي','الفراغ / الأجواء / التفاصيل',['يحدث جزء كبير من تفاعل الإنسان مع بيئته داخل الفراغات الداخلية. وتؤثر جودتها في الحياة اليومية والراحة وفهم المكان. يستطيع التصميم المتأني تلبية الاحتياجات العملية وصنع فضاء أكثر فائدة واتساقاً وجمالاً.','يطوّر فريقنا كل مشروع من الفكرة الأولى مروراً بالرسومات ثنائية وثلاثية الأبعاد والتصور البصري وتوجيه المواد وتخطيط التوزيع، لنصنع مساحات تتمحور حول مستخدميها.']],
        urban: ['التصميم الحضري','الفضاء العام / المدينة / الاتصال',['يمكن للفضاءات الحضرية أن تصبح أماكن عملية ومرحبة حين تُصمّم بعناية. ويؤدي الجمع بين التخطيط والعمارة إلى تحسين المجال العام وخلق فرص أفضل للمواطنين ومديري المدن.','نقدّم دراسات واستراتيجيات تصميم وحلولاً قابلة للتنفيذ للمشاريع العامة والخاصة، ونعمل مع البلديات ومديري المدن والعملاء لتحويل الظروف المعقدة إلى مقترحات واضحة وقابلة للبناء.']],
        landscape: ['تصميم المناظر الطبيعية','الطبيعة / الظل / التوازن',['المنظر الطبيعي جزء فاعل من العمارة. يجتمع المناخ والظل والنبات والماء والحركة لصياغة مساحات خارجية مريحة ومترابطة ومتجذرة في موقعها.','يستجيب عملنا لطبيعة كل موقع واحتياجات مستخدميه. من الأفنية الخاصة إلى المساحات العامة المشتركة، نوازن بين الأنظمة الطبيعية والاستخدام العملي والهوية المعمارية للمشروع.']],
        renovation: ['التجديد','التصميم / التنفيذ / الإشراف',['يُعدّ تجديد الوحدات السكنية والفلل والشقق وغيرها من أنواع العقارات إحدى الخدمات الأساسية لشمس العمارة. وتشمل الخدمة التجديد الكامل والمدروس للمساحات الداخلية أو الخارجية للمباني، وكذلك أعمال التجديد محدودة النطاق.','تمر عملية التجديد بثلاث مراحل: التصميم والتنفيذ والإشراف. وتشمل استخراج التصاريح، وزيارة الموقع وتحليل حالته القائمة، وخدمات التصميم المعماري وتحديث أسلوب المنزل، وشراء المعدات وطلبها لتجديد المطابخ والحمامات وغرف النوم والمعيشة والشرفات، والطلاء، وتغليف الخزائن وخزائن المطبخ أو استبدالها، وتنظيف فتحات التكييف وإصلاحها، وتعديل الأنظمة الكهربائية، وأعمال الأسقف والأرضيات، واختيار معدات الإضاءة وتركيبها، وأخيراً اختيار الأثاث وتنسيقه وتسليم المفاتيح إلى العملاء.']],
        consultation: ['الاستشارات','الوضوح / الاستراتيجية / التنفيذ',['توفر القرارات الجيدة في بداية المشروع الوقت والتكلفة وتقلل الغموض لاحقاً. تقدم استشاراتنا توجيهاً معمارياً واضحاً يستند إلى الموقع والأنظمة والبرنامج والميزانية.','ندعم العملاء في دراسة الجدوى ومراجعة المفهوم وتنسيق التصميم والتنفيذ، لنمضي بالمشروع وفق أولويات عملية ورؤية متماسكة.']]
      }
    }
  };

  const projectTranslations = {
    fa: {
      lulu:['اقامتگاه بوم‌گردی لؤلؤ القیس','جزیره کیش، ایران','حیاط‌ها، بادگیرها و گذرهای سایه‌دار، معماری بومی جنوب ایران را با بیانی تازه بازتفسیر می‌کنند.'],
      chandal:['خانه چندال','جزیره قشم، ایران','اقامتگاهی بوم‌گردی و جمع‌وجور که با مصالح بومی، بادگیر و اقلیم جزیره شکل گرفته است.'],
      hayat:['مرکز درمانی الحیات','دوحه، قطر','خلوتگاهی خصوصی پیرامون حیاطی خنک‌کننده که تأثیرات معماری عربی و سیکلادی را در کنار هم می‌نشاند.'],
      kish:['بازار ماهی کیش','جزیره کیش، ایران','بازآفرینی یک بازار ساحلی فعال بر پایه نیازهای ماهیگیران، فروشندگان و بازدیدکنندگان.'],
      dhaid:['خانه‌باغ الذید','شارجه، امارات','چوب گرم، حصیر و رنگ‌های طبیعی، حال‌وهوای مزرعه را به ویلایی خانوادگی با پنج اتاق خواب می‌آورند.'],
      cafe:['کافه 66','مسقط، عمان','کافه‌ای 35 مترمربعی با قوس‌های نرم، بافت‌های طبیعی و فضایی صمیمی.'],
      medore:['اقامتگاه می‌دو‌ره','دبی، امارات','طراحی داخلی واحد 3208 با بافت‌های طبیعی و پالت رنگی آرام برای خانه‌ای در دبی.'],
      bath:['حمام سنتی اتحاد','دماوند، ایران','بازسازی حساس و دقیقی که شخصیت فضایی یک حمام تاریخی را حفظ می‌کند.'],
      bushehr:['فانوس دریایی بوشهر','بوشهر، ایران','نشانه‌ای ساحلی و فضای عمومی الهام‌گرفته از پنجره‌ها و معماری سنتی بوشهر.'],
      chabahar:['بازار ماهی چابهار','چابهار، ایران','پیشنهادی برای بازار که تجارت، فضاهای پشتیبان و زندگی عمومی را با سنت‌های معماری بومی پیوند می‌دهد.'],
      taleqan:['ویلای طالقان','طالقان، ایران','خانه‌ای دوطبقه با بام شیب‌دار، باغ و فضاهای باز متناسب با اقلیم معتدل.'],
      amiri:['اقامتگاه کویری دیوان امیری','لار، ایران','اقامتگاهی کویری که عناصر معماری عربی، صفحات سایه‌انداز و فضاهای معاصر را ترکیب می‌کند.']
      , 'kish-touristic-path':['مسیر گردشگری کیش','جزیره کیش، ایران','مسیری عمومی برای گردشگری که مقصدهای کوچک، منظر، خرده‌فروشی و فضاهای جمعی روزمره را در جزیره کیش به هم پیوند می‌دهد.'],
      "kish-turtle-monitoring-site": ["سایت پایش لاک‌پشت‌های کیش", "جزیره کیش، ایران", "پروژه معماری سایت پایش لاک‌پشت‌ها در جزیره کیش، ایران."],
      "mashe-mosque-landscape": ["طراحی منظر مسجد ماشه", "جزیره کیش، ایران", "طراحی منظر پیرامون مسجد ماشه در جزیره کیش، ایران."],
      "madinat-jumeirah-living-lamma-4": ["مدینة جمیرا لیوینگ LAMMA 4", "دبی، امارات", "طراحی داخلی مسکونی در مدینة جمیرا لیوینگ LAMMA 4 در دبی، امارات."],
      'villa-ras':['ویلای راس','راس‌الخیمه، امارات','طراحی داخلی مسکونی در راس‌الخیمه، با بازشوهای قوسی، پرداخت‌های بافت‌دار و مصالح طبیعی.'],
      'villa-morocco':['ویلای مراکش','دبی، امارات','مطالعه‌ای برای ویلایی با گرمای مصالح مراکشی، حیاط‌های سایه‌دار و زندگی معاصر خانوادگی.'],
      'villa-persia':['ویلای پارس','دبی، امارات','مفهومی برای ویلایی معاصر با الهام از الگوهای ایرانی، نور پالوده و توالی آرام فضاهای داخلی.'],
      'dashtestan-judiciary':['دادگستری دشتستان','بوشهر، ایران','پیشنهادی برای معماری مدنی دشتستان که شفافیت نهادی، حرکت سایه‌دار و لبه عمومی دعوت‌کننده را متعادل می‌کند.'],
      'beyt-al-atr':['بیت العطر','جزیره کیش، ایران','مطالعه‌ای برای مهمان‌پذیری و سکونت در کیش، با حیاط‌های روشن، مصالح ملموس و حال‌وهوای آرام جزیره.'],
      'jumeirah-villa':['ویلای جمیرا','دبی، امارات','ویلایی خانوادگی با آستانه‌های لایه‌لایه، اتاق‌های باغ و قاب‌بندی دقیق چشم‌اندازها.'],
      'mataam-kish-restaurant':['رستوران مطعم کیش','جزیره کیش، ایران','مفهومی برای رستورانی ریشه‌گرفته از زندگی اجتماعی کیش، با نمای عمومی روشن و نشیمن بیرونی سایه‌دار.'],
      'marina-office':['دفتر مارینا','دبی، امارات','طراحی داخلی دفتری در مارینای دبی با بافت‌های حصیری، فضاهای متمرکز کاری و حال‌وهوای گرم مهمان‌نوازی.'],
      'majlis-house':['خانه مجلس','دبی، امارات','خانه مجلسی معاصر که فضاهای جمعی بزرگ، جزئیات crafted و ارتباط سنجیده با باغ را در کنار هم قرار می‌دهد.']
    },
    ar: {
      lulu:['نُزل لؤلؤ القيس البيئي','جزيرة كيش، إيران','تعيد الأفنية وملاقف الهواء والممرات المظللة قراءة العمارة المحلية في جنوب إيران بروح معاصرة.'],
      chandal:['منزل تشاندال','جزيرة قشم، إيران','نُزل بيئي مدمج صاغته المواد المحلية وبرج الرياح ومناخ الجزيرة.'],
      hayat:['مركز الحياة للاستشفاء','الدوحة، قطر','ملاذ خاص ينتظم حول فناء مبرّد، ويجمع بين التأثيرات العربية والعمارة السيكلادية.'],
      kish:['سوق كيش للأسماك','جزيرة كيش، إيران','إعادة تصميم سوق ساحلي عامل حول احتياجات الصيادين والتجار والزوار.'],
      dhaid:['منزل الذيد الريفي','الشارقة، الإمارات','تُدخل الأخشاب الدافئة والخوص والألوان الطبيعية روح المزرعة إلى فيلا عائلية من خمس غرف.'],
      cafe:['مقهى 66','مسقط، عُمان','مقهى بمساحة 35 متراً مربعاً، بأقواس ناعمة وخامات طبيعية وأجواء حميمة.'],
      medore:['شقة مي دو ري','دبي، الإمارات','تصميم داخلي للوحدة 3208 يجمع الخامات الطبيعية ولوحة هادئة لمنزل في دبي.'],
      bath:['حمّام الاتحاد التقليدي','دماوند، إيران','تجديد حساس يحافظ على الطابع المكاني لحمّام تاريخي.'],
      bushehr:['منارة بوشهر','بوشهر، إيران','معلم ساحلي وفضاء عام مستلهم من النوافذ والعمارة التقليدية في بوشهر.'],
      chabahar:['سوق تشابهار للأسماك','تشابهار، إيران','مقترح سوق يربط التجارة والخدمات والحياة العامة عبر تقاليد العمارة المحلية.'],
      taleqan:['فيلا طالقان','طالقان، إيران','منزل من طابقين بسقف مائل وحديقة ومساحات خارجية تستجيب للمناخ المعتدل.'],
      amiri:['منتجع الديوان الأميري الصحراوي','لار، إيران','إقامة صحراوية تجمع العناصر المعمارية العربية والمشربيات المظللة والفضاءات المعاصرة.']
      , 'kish-touristic-path':['المسار السياحي في كيش','جزيرة كيش، إيران','مسار سياحي عام يجمع الوجهات الصغيرة والمناظر الطبيعية والتجزئة ومساحات التجمع اليومية في جزيرة كيش.'],
      "kish-turtle-monitoring-site": ["موقع رصد السلاحف في كيش", "جزيرة كيش، إيران", "مشروع معماري لموقع رصد السلاحف في جزيرة كيش، إيران."],
      "mashe-mosque-landscape": ["تصميم منظر مسجد ماشه", "جزيرة كيش، إيران", "تصميم المناظر الطبيعية حول مسجد ماشه في جزيرة كيش، إيران."],
      "madinat-jumeirah-living-lamma-4": ["مدينة جميرا ليفينغ LAMMA 4", "دبي، الإمارات", "تصميم داخلي سكني في مدينة جميرا ليفينغ LAMMA 4 في دبي، الإمارات."],
      'villa-ras':['فيلا رأس','رأس الخيمة، الإمارات','تصميم داخلي سكني في رأس الخيمة، يجمع الفتحات المقوسة والتشطيبات الملمسية والمواد الطبيعية.'],
      'villa-morocco':['فيلا المغرب','دبي، الإمارات','دراسة لفيلا تستلهم دفء المواد المغربية والأفنية المظللة والحياة العائلية المعاصرة.'],
      'villa-persia':['فيلا فارس','دبي، الإمارات','مفهوم لفيلا معاصرة تستلهم الأنماط الفارسية والضوء المصفّى وتسلسل المساحات الهادئة.'],
      'dashtestan-judiciary':['محكمة دستستان','بوشهر، إيران','مقترح لعمارة مدنية في دستستان يوازن بين الوضوح المؤسسي والحركة المظللة والحافة العامة المرحّبة.'],
      'beyt-al-atr':['بيت العطر','جزيرة كيش، إيران','دراسة للضيافة والسكن في كيش، بأفنية مشرقة ومواد ملمسية وشخصية جزيرية هادئة.'],
      'jumeirah-villa':['فيلا جميرا','دبي، الإمارات','فيلا عائلية واسعة تنتظم حول عتبات متدرجة وغرف حدائق وإطلالات مؤطرة بعناية.'],
      'mataam-kish-restaurant':['مطعم كيش','جزيرة كيش، إيران','مفهوم لمطعم متجذر في الحياة الاجتماعية في كيش، بواجهة عامة واضحة وجلوس خارجي مظلل.'],
      'marina-office':['مكتب مارينا','دبي، الإمارات','تصميم داخلي لمكتب في مرسى دبي يجمع الخامات المنسوجة ومناطق العمل المركزة وأجواء الضيافة الدافئة.'],
      'majlis-house':['بيت المجلس','دبي، الإمارات','بيت مجلس معاصر يوازن بين مساحات التجمع الرحبة والتفاصيل الحرفية والعلاقة الهادئة مع الحديقة.']
    }
  };

  const valid = ['en','ar','fa'];
  let language;
  try { language = localStorage.getItem('sa-language'); } catch (_) {}
  if (!valid.includes(language)) language = 'en';

  const applyDocument = () => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
    document.body?.classList.toggle('rtl-language', language !== 'en');
    document.querySelectorAll('[data-language]').forEach(button => {
      if (button.closest('.menu-language')) {
        button.textContent = {en:'EN',ar:'العربية',fa:'فارسی'}[button.dataset.language];
      } else if (!button.querySelector('img')) {
        const image = document.createElement('img');
        image.src = `assets/language-${button.dataset.language}.webp`;
        image.alt = '';
        button.replaceChildren(image);
      }
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const setLanguage = next => {
    if (!valid.includes(next) || next === language) return;
    language = next;
    try { localStorage.setItem('sa-language', language); } catch (_) {}
    applyDocument();
    document.dispatchEvent(new CustomEvent('sa:languagechange', { detail: { language } }));
  };

  const api = {
    get lang() { return language; },
    get rtl() { return language !== 'en'; },
    get common() { return translations[language].common; },
    get main() { return translations[language].main; },
    group(key) { return translations[language].groups[key]; },
    category(key) { return translations[language].categories[key]; },
    service(key) { return translations[language].services[key]; },
    project(base) {
      const local = projectTranslations[language]?.[base.id];
      return local ? { ...base, name: local[0], location: local[1], description: local[2] } : base;
    },
    setLanguage,
    applyDocument
  };

  window.SA_I18N = api;
  applyDocument();
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
})();
