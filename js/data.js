/* =========================================================
   Données des monuments historiques de Fès
   Coordonnées converties depuis la liste des monuments de Fès
   (degrés/minutes/secondes -> décimal)
   Point de référence pour les itinéraires : Bab Boujloud

   Chaque monument a une description composée de plusieurs
   paragraphes (tableau de chaînes) affichés tels quels sur
   sa fiche.
   ========================================================= */

const BAB_BOUJLOUD = { id: "bab-boujloud", lat: 34.061667, lon: -4.984167 };

const SITE_AUTHOR = {
  nom: "Mr Ghazi Aziz",
  email: "aziz.ghazi40@gmail.com"
};

const MONUMENTS = [
  {
    id: "bab-boujloud",
    nom: "Bab Boujloud",
    nom_ar: "باب بوجلود",
    categorie: "Porte monumentale",
    lat: 34.061667,
    lon: -4.984167,
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab%20Bou%20Jeloud.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (CC BY-SA 4.0)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_Bou_Jeloud.jpg"
    },
    description: [
      "Bab Boujloud est la porte la plus photographiée de Fès et le point de repère par lequel commence traditionnellement toute visite de la médina. L'édifice actuel a été construit en 1913, sous le protectorat français, en remplacement d'une porte plus ancienne située légèrement en retrait, mais son style reste fidèle à l'art almohade et mérinide dont Fès s'est toujours réclamée.",
      "Son originalité tient au contraste entre ses deux faces : côté ville nouvelle, un habillage de zelliges d'un bleu profond, le fameux « bleu de Fès », rappelle la couleur historique de la céramique fassie ; côté médina, le décor bascule vers un vert éclatant, couleur traditionnellement associée à l'islam. Le grand arc en fer à cheval, encadré de motifs géométriques et de calligraphies coraniques, est surmonté de créneaux et de deux tourelles latérales.",
      "Aujourd'hui encore, Bab Boujloud reste le carrefour vivant de Fès el-Bali : elle ouvre directement sur Talaa Kebira, l'artère commerçante qui traverse toute la médina, et sur une place animée où se croisent vendeurs de jus d'orange, calèches et premiers effluves des gargotes. C'est pour cette raison qu'elle sert ici de point de départ à tous les itinéraires piétons proposés sur ce site."
    ]
  ,
  description_ar: [
      "باب بوجلود هو أكثر أبواب فاس تصويرًا، ونقطة الانطلاق التقليدية لأي زيارة للمدينة العتيقة. شُيِّد الباب الحالي سنة 1913 في عهد الحماية الفرنسية، ليحل محل باب أقدم كان يقع قريبًا منه قليلاً، لكنه ظل وفيًا في أسلوبه للفن الموحدي والمريني الذي اشتهرت به فاس على الدوام.",
      "تكمن أصالته في التباين بين واجهتيه: من جهة المدينة الجديدة، يكسوه الزليج الأزرق الغامق، «الأزرق الفاسي» الشهير الذي يذكّر بلون الخزف الفاسي التقليدي؛ ومن جهة المدينة العتيقة، يتحول الزخرف إلى أخضر زاهٍ، وهو اللون المرتبط تقليديًا بالإسلام. ويعلو القوسَ الكبير على شكل حدوة الفرس، المؤطر بأشكال هندسية وكتابات قرآنية، شرفاتٌ وبرجان صغيران جانبيان.",
      "لا يزال باب بوجلود إلى اليوم الملتقى النابض بالحياة في فاس البالي: فهو يفتح مباشرة على طلعة كبيرة، الشارع التجاري الذي يخترق المدينة بأكملها، وعلى ساحة نابضة يلتقي فيها باعة عصير البرتقال والعربات التقليدية وروائح المطاعم الشعبية الأولى. لهذا السبب يُعتمد هنا كنقطة انطلاق لجميع مسارات المشي المقترحة في هذا الموقع."
  ]
  },
  {
    id: "bab-semarine",
    nom: "Bab Semmarine",
    nom_ar: "باب السمارين",
    categorie: "Porte monumentale",
    lat: 34.054167,
    lon: -4.990000,
    image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab_Semmarine_Fez.jpg?width=960&height=373?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_Semmarine_Fez.jpg"
    },
    
    description: [
      "Bab Semmarine ouvre l'accès méridional de Fès Jdid et conduit directement vers le Mellah, l'ancien quartier juif de la ville. Son nom, qui évoque les cloutiers et ferronniers (« semmarine »), rappelle qu'un artisanat spécialisé s'était installé à proximité de ses abords dès l'époque mérinide.",
      "La porte présente un arc outrepassé en fer à cheval, caractéristique de l'architecture défensive nord-africaine, encadré de bastions massifs destinés autrefois à surveiller les allées et venues entre Fès Jdid, la ville royale fondée au XIIIe siècle, et les quartiers plus anciens de Fès el-Bali.",
      "Elle marque aujourd'hui une transition symbolique forte : franchir Bab Semmarine, c'est passer du tissu administratif et palatial de Fès Jdid à l'atmosphère plus intime du Mellah, avec ses maisons aux balcons de fer forgé si différentes de l'architecture tournée vers l'intérieur du reste de la médina. Les visiteurs y trouvent un point de repère commode avant de rejoindre les synagogues et le cimetière juif voisins."
    ]
  ,
  description_ar: [
      "يفتح باب السمارين المدخل الجنوبي لفاس الجديد ويؤدي مباشرة إلى الملاح، الحي اليهودي القديم للمدينة. واسمه، الذي يشير إلى الحدادين وصناع المسامير («السمارين»)، يذكّر بأن حرفة متخصصة استقرت قرب مداخله منذ العهد المريني.",
      "يتميز الباب بقوس بارز على شكل حدوة الفرس، وهو سمة العمارة الدفاعية بشمال إفريقيا، تؤطره أبراج ضخمة كانت تُستخدم قديمًا لمراقبة التنقل بين فاس الجديد، المدينة الملكية التي تأسست في القرن الثالث عشر، والأحياء الأقدم من فاس البالي.",
      "يمثل اليوم عبورًا رمزيًا قويًا: فاجتياز باب السمارين يعني الانتقال من النسيج الإداري والقصري لفاس الجديد إلى الأجواء الأكثر حميمية للملاح، بمنازله ذات الشرفات الحديدية المختلفة كليًا عن العمارة المنغلقة على الداخل في بقية المدينة. ويجد الزوار فيه نقطة مرجعية عملية قبل التوجه إلى الكنس اليهودية والمقبرة اليهودية المجاورة."
  ]
  },
  {
    id: "kasbah-cherarda",
    nom: "Kasbah Cherarda",
    nom_ar: "قصبة الشراردة",
    categorie: "Forteresse",
    lat: 34.0625,
    lon: -4.991389,
    image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fes_-_Kasba_Cherarda.JPG?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Fes_-_Kasba_Cherarda.JPG"

    },


    description: [
      "La Kasbah Cherarda, parfois appelée Kasbah des Cherarda, est une vaste enceinte fortifiée édifiée à la fin du XVIIe siècle par le sultan alaouite Moulay Ismaïl, puis renforcée par son successeur Moulay Rachid, afin d'y cantonner les contingents de cavaliers guich chargés de maintenir l'ordre dans la région de Fès.",
      "Perchée sur les hauteurs qui dominent Fès Jdid, la kasbah déploie de longues courtines crénelées en pisé, ponctuées de tours d'angle massives, typiques de l'architecture militaire alaouite. Son plan quadrangulaire, pensé pour loger plusieurs milliers d'hommes et leurs montures, en fait l'une des plus grandes enceintes militaires historiques du Maroc.",
      "Aujourd'hui, une partie de la kasbah abrite encore des habitations et un cimetière, tandis que ses remparts extérieurs offrent un point de vue saisissant sur la médina et les collines environnantes. Elle constitue une étape appréciée des visiteurs qui souhaitent comprendre la dimension militaire et défensive de l'histoire fassie, souvent éclipsée par les monuments religieux et marchands du centre-ville."
    ]
  ,
  description_ar: [
      "قصبة الشراردة، التي يُطلق عليها أحيانًا قصبة الشراردة، هي سور محصّن واسع شُيِّد في أواخر القرن السابع عشر على يد السلطان العلوي مولاي إسماعيل، ثم عززه خلفه مولاي رشيد، لإيواء فرق الفرسان «الكيش» المكلفين بحفظ الأمن في منطقة فاس.",
      "تنتصب القصبة فوق مرتفعات تطل على فاس الجديد، وتمتد على طول أسوارها المسننة المبنية باللبن المدكوك، وتتخللها أبراج زاوية ضخمة تميز العمارة العسكرية العلوية. ومخططها الرباعي، المصمم لإيواء آلاف الجنود وخيولهم، يجعلها من أكبر الأسوار العسكرية التاريخية في المغرب.",
      "تحتضن القصبة اليوم جزءًا من المساكن ومقبرة، بينما توفر أسوارها الخارجية إطلالة خلابة على المدينة والتلال المحيطة بها. وهي محطة يقدرها الزوار الراغبون في فهم البعد العسكري والدفاعي لتاريخ فاس، الذي كثيرًا ما يطغى عليه الطابع الديني والتجاري لوسط المدينة."
  ]
  },
  {
    id: "medersa-mesbahia",
    nom: "Médersa El Mesbahia",
    nom_ar: "المدرسة المصباحية",
    categorie: "Médersa",
    lat: 34.065278,
    lon: -4.973056,
    image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Les_monuments_mauresques_du_Maroc_1921_%28147187424%29_%28cropped_and_slight_size_reduction%29.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Les_monuments_mauresques_du_Maroc_1921_%28147187424%29_%28cropped_and_slight_size_reduction%29.jpg"

    },
    
    description: [
      "La médersa El Mesbahia fut fondée au XIVe siècle par le sultan mérinide Abou al-Hassan, dans la continuité de la grande politique de construction de collèges coraniques qui a fait la renommée architecturale de Fès à cette époque. Elle doit son nom à un érudit fassi, Al-Mesbahi, qui y enseigna et dont la mémoire est restée attachée à l'édifice.",
      "Comme les autres médersas mérinides, elle s'organise autour d'un patio central entouré de galeries et de cellules destinées aux étudiants venus de tout le Maroc, voire d'Afrique subsaharienne, pour suivre les enseignements dispensés à la mosquée-université voisine d'Al Quaraouiyine. Les boiseries sculptées de cèdre, les moucharabiehs et les frises de stuc qui subsistent témoignent d'un savoir-faire artisanal d'une grande finesse.",
      "Moins visitée que Bou Inania ou Al-Attarine, la médersa El Mesbahia séduit justement par sa relative discrétion : elle permet d'apprécier, loin de l'affluence touristique, l'atmosphère studieuse et recueillie qui caractérisait la vie de ces collèges religieux médiévaux, cœur battant de la vie intellectuelle de la Fès mérinide."
    ]
  ,
  description_ar: [
      "تأسست المدرسة المصباحية في القرن الرابع عشر على يد السلطان المريني أبي الحسن، امتدادًا للسياسة الكبرى لبناء المدارس القرآنية التي أكسبت فاس شهرتها المعمارية في تلك الحقبة. وتحمل اسم عالم فاسي، المصباحي، درّس فيها وبقيت ذكراه مرتبطة بالمبنى.",
      "كسائر المدارس المرينية، تتمحور حول صحن مركزي تحيط به أروقة وحجرات مخصصة للطلبة القادمين من مختلف أنحاء المغرب، بل ومن جنوب الصحراء، لمتابعة الدروس الملقاة في جامع القرويين المجاور. وتشهد الأخشاب المنحوتة من الأرز، والمشربيات، وأشرطة الجص المتبقية على براعة حرفية فائقة الدقة.",
      "وبخلاف مدرستي بوعنانية والعطارين، تجذب المدرسة المصباحية بهدوئها النسبي: فهي تتيح، بعيدًا عن الازدحام السياحي، الإحساس بالأجواء العلمية والمتأملة التي طبعت حياة هذه المدارس الدينية في العصور الوسطى، والتي كانت قلب الحياة الفكرية النابض في فاس المرينية."
  ]
  },
  {
    id: "bab-lhadid",
    nom: "Bab El Hadid",
    nom_ar: "باب الحديد",
    categorie: "Porte monumentale",
    lat: 34.057222,
    lon: -4.979722,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab_Hadid.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_Hadid.jpg"

    },


    description: [
      "Bab El Hadid, littéralement la « porte du fer », doit son nom aux ateliers de forgerons et de ferronniers qui s'étaient historiquement installés à proximité de son passage, profitant de la circulation constante des caravanes et des marchands entrant dans la médina.",
      "Comme la plupart des portes secondaires de Fès el-Bali, elle présente une structure défensive simple mais efficace : un passage coudé destiné à ralentir d'éventuels assaillants, surmonté d'un chemin de ronde et flanqué de murs en pisé caractéristiques de l'architecture fortifiée nord-africaine des XIIe et XIIIe siècles.",
      "Elle s'inscrit dans le vaste système de fortifications qui ceinture la médina sur près de dix kilomètres, un réseau de plus d'une douzaine de portes conçu pour contrôler les flux commerciaux tout en protégeant la ville des incursions. Bab El Hadid permet aujourd'hui de rejoindre discrètement les quartiers artisanaux situés à l'est du centre historique."
    ]
  ,
  description_ar: [
      "يدين باب الحديد باسمه لورش الحدادين وصناع الحديد الذين استقروا تاريخيًا قرب ممره، مستفيدين من الحركة الدائمة للقوافل والتجار الداخلين إلى المدينة.",
      "كمعظم الأبواب الثانوية في فاس البالي، يتميز بهيكل دفاعي بسيط لكنه فعال: ممر منكسر يهدف إلى إبطاء أي مهاجمين محتملين، يعلوه ممر للحراسة وتحيط به جدران من اللبن المميزة للعمارة المحصنة بشمال إفريقيا في القرنين الثاني عشر والثالث عشر.",
      "يندرج ضمن المنظومة الواسعة للتحصينات التي تحيط بالمدينة على طول قرابة عشرة كيلومترات، وهي شبكة تضم أكثر من اثني عشر بابًا صُممت للتحكم في التدفقات التجارية مع حماية المدينة من الغارات. ويتيح باب الحديد اليوم الوصول بهدوء إلى الأحياء الحرفية الواقعة شرق المركز التاريخي."
  ]
  },
  {
    id: "bab-khokha",
    nom: "Bab El Khokha",
    nom_ar: "باب الخوخة",
    categorie: "Porte monumentale",
    lat: 34.064444,
    lon: -4.963056,
    description: [
      "Bab El Khokha se dresse à l'est de la médina et constitue historiquement l'un des points de passage entre Fès el-Bali et ses faubourgs périphériques, à une époque où la ville continuait de s'étendre au-delà de son enceinte mérinide d'origine.",
      "Restaurée à plusieurs reprises au fil des siècles, la porte a conservé son arc en fer à cheval et ses contreforts en pisé damé, matériau traditionnel obtenu par compression de terre crue, encore visible sur de nombreux tronçons des remparts de Fès.",
      "Moins connue que Bab Boujloud ou Bab Ftouh, Bab El Khokha reste un témoin discret de l'extension progressive de la ville et de l'adaptation constante de son système défensif aux besoins d'une cité marchande en pleine expansion démographique et économique du Moyen Âge jusqu'à l'époque moderne."
    ]
  ,
  description_ar: [
      "ينتصب باب الخوخة شرق المدينة، ويُعد تاريخيًا أحد نقاط العبور بين فاس البالي وضواحيها المحيطة، في زمن كانت فيه المدينة تواصل التوسع خارج سورها المريني الأصلي.",
      "رُمِّم الباب مرات عدة عبر القرون، وحافظ على قوسه على شكل حدوة الفرس ودعاماته من اللبن المدكوك، وهي مادة تقليدية تُصنع بضغط التراب الخام، لا تزال ظاهرة على أجزاء كثيرة من أسوار فاس.",
      "وبخلاف باب بوجلود أو باب الفتوح، يبقى باب الخوخة شاهدًا هادئًا على التوسع التدريجي للمدينة والتكيف المستمر لنظامها الدفاعي مع احتياجات مدينة تجارية في تنامٍ ديموغرافي واقتصادي مستمر من العصور الوسطى إلى العصر الحديث."
  ]
  },
  {
    id: "bab-dekkakin",
    nom: "Bab Dekkakin",
    nom_ar: "باب الدكاكين",
    categorie: "Porte monumentale",
    lat: 34.058611,
    lon: -4.991389,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fez_%281983%29_03.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Fez_%281983%29_03.jpg"
    },


    description: [
      "Bab Dekkakin, la « porte des étals », tire son nom des échoppes en bois (« dekkakin » en arabe dialectal) qui bordaient autrefois son passage, où marchands ambulants et petits artisans proposaient leurs produits aux caravanes entrant en ville depuis le nord-ouest.",
      "Située à proximité immédiate de la Kasbah Cherarda, elle faisait partie d'un dispositif défensif combiné où la porte elle-même, ses tours de guet et la caserne voisine assuraient un contrôle étroit des allées et venues vers cette partie sensible de la ville, alors frontière entre zone militaire et zone civile.",
      "La porte a conservé l'essentiel de sa silhouette d'origine, avec son arc surbaissé et ses murs épais en pisé, matériaux qui ont permis à ces structures de traverser les siècles malgré les tremblements de terre et les guerres successives qu'a connus la région de Fès."
    ]
  ,
  description_ar: [
      "يستمد باب الدكاكين اسمه من الدكاكين الخشبية التي كانت تصطف على طول ممره، حيث كان الباعة المتجولون والحرفيون الصغار يعرضون بضائعهم على القوافل الداخلة إلى المدينة من الشمال الغربي.",
      "يقع بالقرب المباشر من قصبة الشراردة، وكان جزءًا من منظومة دفاعية مشتركة يضمن فيها الباب نفسه، وأبراج المراقبة والثكنة المجاورة، مراقبة صارمة للتنقل نحو هذا الجزء الحساس من المدينة، الذي كان آنذاك حدًا فاصلاً بين المنطقة العسكرية والمدنية.",
      "حافظ الباب على معظم ملامحه الأصلية، بقوسه المنخفض وجدرانه السميكة من اللبن، وهي مواد سمحت لهذه البنايات بالصمود عبر القرون رغم الزلازل والحروب المتعاقبة التي عرفتها منطقة فاس."
  ]
  },
  {
    id: "bab-ftouh",
    nom: "Bab Ftouh",
    nom_ar: "باب الفتوح",
    categorie: "Porte monumentale",
    lat: 34.06,
    lon: -4.964444,
   image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab_Ftouh.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_Ftouh.jpg"
    },


    description: [
      "Bab Ftouh, la porte orientale de la médina, fut longtemps le point de départ des grandes caravanes commerciales reliant Fès à l'est du Maroc, à l'Algérie et, plus loin, aux routes transsahariennes qui firent la richesse de la ville aux XIVe et XVe siècles.",
      "Son nom, qui signifie « porte des conquêtes » ou « porte de l'ouverture », rappelle le rôle stratégique qu'elle a joué dans l'histoire militaire et commerciale de Fès, en tant que seuil vers les territoires situés au-delà des montagnes du Moyen Atlas.",
      "Elle donne aujourd'hui accès à l'un des plus vastes cimetières traditionnels de la ville, où se mêlent tombes anciennes et sanctuaires de saints locaux (les « chorfa »), perpétuant une pratique funéraire et spirituelle propre aux cités impériales marocaines. C'est également depuis les hauteurs proches de Bab Ftouh que l'on obtient l'une des vues les plus complètes sur l'ensemble de la médina."
    ]
  ,
  description_ar: [
      "كان باب الفتوح، الباب الشرقي للمدينة، لزمن طويل نقطة انطلاق القوافل التجارية الكبرى الرابطة بين فاس وشرق المغرب والجزائر، وأبعد من ذلك، طرق القوافل العابرة للصحراء التي صنعت ثراء المدينة في القرنين الرابع عشر والخامس عشر.",
      "واسمه، الذي يعني «باب الفتوحات» أو «باب الانفتاح»، يذكّر بالدور الاستراتيجي الذي لعبه في التاريخ العسكري والتجاري لفاس، بوصفه عتبة نحو الأقاليم الواقعة خلف جبال الأطلس المتوسط.",
      "يتيح اليوم الوصول إلى إحدى أوسع المقابر التقليدية بالمدينة، حيث تتجاور القبور القديمة وأضرحة الأولياء المحليين («الشرفاء»)، في استمرار لتقليد جنائزي وروحي يميز المدن الإمبراطورية المغربية. ومن مرتفعات باب الفتوح القريبة تُطل أيضًا إحدى أشمل الإطلالات على المدينة بأكملها."
  ]
  },
  {
    id: "bab-mahrouk",
    nom: "Bab Mahrouk",
    nom_ar: "باب المحروق",
    categorie: "Porte monumentale",
    lat: 34.0625,
    lon: -4.985556,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab_mahrouk.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_mahrouk.jpg"
    },


    description: [
      "Bab Mahrouk, la « porte brûlée », doit vraisemblablement son nom à un incendie survenu au cours de son histoire, ou à la teinte rougeâtre de sa pierre, les deux explications circulant depuis longtemps parmi les historiens locaux sans qu'un consensus définitif n'ait été établi.",
      "Édifiée à l'époque almohade, au XIIe siècle, elle est considérée comme l'une des portes les mieux préservées de ce style architectural à Fès, avec son arc en fer à cheval brisé légèrement pointu, ses bastions latéraux robustes et l'absence de décor superflu, signature de la sobriété almohade par opposition à l'exubérance mérinide qui suivra.",
      "Bab Mahrouk se situe non loin du tombeau des Mérinides et du Borj Nord, formant avec eux un ensemble monumental sur les hauteurs qui surplombent la médina. Elle demeure un point de passage utilisé quotidiennement par les habitants du quartier, loin de l'agitation touristique concentrée autour de Bab Boujloud."
    ]
  ,
  description_ar: [
      "يدين باب المحروق باسمه على الأرجح لحريق وقع خلال تاريخه، أو للون حجارته المائل إلى الحمرة، وكلا التفسيرين متداولان منذ زمن طويل بين المؤرخين المحليين دون التوصل إلى إجماع نهائي.",
      "شُيِّد في العهد الموحدي، في القرن الثاني عشر، ويُعد من أفضل الأبواب المحافَظ عليها من هذا الطراز المعماري بفاس، بقوسه على شكل حدوة فرس مكسورة مدببة قليلاً، وأبراجه الجانبية القوية، وغياب الزخرفة الزائدة، وهو ما يميز البساطة الموحدية في مقابل الفخامة المرينية التي ستليها.",
      "يقع باب المحروق قرب مقابر المرينيين وبرج الشمال، مكونًا معهما مجموعة أثرية على المرتفعات المطلة على المدينة. ولا يزال ممرًا يستخدمه سكان الحي يوميًا، بعيدًا عن الزحام السياحي المتركز حول باب بوجلود."
  ]
  },
  {
    id: "medersa-seffarine",
    nom: "Médersa Seffarine",
    nom_ar: "مدرسة الصفارين",
    categorie: "Médersa",
    lat: 34.064167,
    lon: -4.9725,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Place_es_Seffarine_%28588955430%29.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Place_es_Seffarine_%28588955430%29.jpg"
    },


    description: [
      "La médersa Seffarine, fondée en 1271 sous le règne du sultan mérinide Abou Youssouf Yaqoub, est considérée par de nombreux historiens comme la plus ancienne médersa encore en activité au Maroc, antérieure même aux grandes fondations d'Abou Inan et d'Al-Attarine qui suivront un siècle plus tard.",
      "Son architecture, plus dépouillée que celle des médersas postérieures, témoigne des débuts de ce type d'établissement au Maghreb : un patio modeste entouré de galeries sur deux niveaux, une fontaine centrale et des cellules simples pour les étudiants, annonçant les formes qui seront ensuite magnifiées à Bou Inania ou Al-Attarine.",
      "Elle doit son nom à la place des Seffarine toute proche, la place des dinandiers, où résonne encore aujourd'hui le martèlement des artisans travaillant le cuivre et le laiton selon des techniques transmises de génération en génération. Cette proximité entre lieu de savoir et lieu de métier illustre bien l'organisation traditionnelle de la médina, où quartiers religieux, éducatifs et artisanaux se côtoient étroitement."
    ]
  ,
  description_ar: [
      "تأسست مدرسة الصفارين سنة 1271 في عهد السلطان المريني أبي يوسف يعقوب، ويعتبرها كثير من المؤرخين أقدم مدرسة لا تزال قائمة بالمغرب، سابقة حتى على التأسيسات الكبرى لأبي عنان والعطارين اللتين ستُبنيان بعد قرن من الزمن.",
      "تعكس عمارتها، الأكثر تقشفًا مقارنة بالمدارس اللاحقة، بدايات هذا النوع من المؤسسات بالمغرب الكبير: صحن متواضع تحيط به أروقة على طابقين، ونافورة مركزية، وحجرات بسيطة للطلبة، تمهيدًا للأشكال التي ستُصقل لاحقًا في بوعنانية والعطارين.",
      "تدين باسمها لساحة الصفارين المجاورة، ساحة صناع النحاس، حيث لا يزال يتردد صدى طرق الحرفيين على النحاس والصفر بتقنيات متوارثة جيلاً بعد جيل. وهذا التجاور بين مكان العلم ومكان الحرفة يجسد جيدًا التنظيم التقليدي للمدينة، حيث تتلاصق الأحياء الدينية والتعليمية والحرفية."
  ]
  },
  {
    id: "bab-chorfa",
    nom: "Bab Chorfa",
    nom_ar: "باب الشرفاء",
    categorie: "Porte monumentale",
    lat: 34.062222,
    lon: -4.985556,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab_Chorfa_IMG_3416_%287132378707%29.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_Chorfa_IMG_3416_%287132378707%29.jpg"
    },


    description: [
      "Bab Chorfa est une petite porte fortifiée dont le nom renvoie directement au quartier voisin des chorfa, terme désignant au Maroc les descendants du Prophète Mahomet, dont plusieurs familles s'étaient installées dans ce secteur de la médina dès l'époque médiévale.",
      "De dimensions plus modestes que les grandes portes cérémonielles comme Bab Boujloud ou Bab Mansour, elle appartient à cette catégorie de portes de quartier qui structuraient la vie quotidienne des habitants sans nécessairement jouer de rôle défensif majeur à l'échelle de la ville entière.",
      "Sa proximité avec Bab Boujloud en fait un point de repère pratique pour les visiteurs souhaitant explorer les ruelles résidentielles situées juste au sud de l'entrée principale de la médina, loin des axes commerçants les plus fréquentés, dans un tissu urbain resté largement authentique."
    ]
  ,
  description_ar: [
      "باب الشرفاء باب محصّن صغير يعود اسمه مباشرة إلى الحي المجاور، حي الشرفاء، وهو مصطلح يُطلق بالمغرب على سلالة النبي محمد، وقد استقرت فيه عدة أسر منذ العصور الوسطى.",
      "بأبعاد أكثر تواضعًا مقارنة بالأبواب الاحتفالية الكبرى مثل باب بوجلود أو باب المنصور، ينتمي إلى فئة أبواب الأحياء التي كانت تنظم الحياة اليومية للسكان دون أن تلعب بالضرورة دورًا دفاعيًا كبيرًا على مستوى المدينة بأكملها.",
      "قربه من باب بوجلود يجعله نقطة مرجعية عملية للزوار الراغبين في استكشاف الأزقة السكنية الواقعة جنوب المدخل الرئيسي للمدينة مباشرة، بعيدًا عن المحاور التجارية الأكثر ازدحامًا، ضمن نسيج عمراني ظل أصيلاً إلى حد كبير."
  ]
  },
  {
    id: "bab-amer",
    nom: "Bab Al-Amer",
    nom_ar: "باب العامر",
    categorie: "Porte monumentale",
    lat: 34.051389,
    lon: -4.994167,
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bab%20al-amer.jpg?width=960",
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Bab_al-amer.jpg"
    },
    description: [
      "Bab Al-Amer est une porte discrète percée dans la section nord-ouest des remparts de la médina, moins documentée que les grandes portes historiques mais tout aussi représentative du maillage défensif dense qui caractérise l'urbanisme de Fès el-Bali.",
      "Son emplacement, à l'écart des principaux circuits touristiques, en fait un passage essentiellement emprunté par les habitants des quartiers avoisinants, ce qui lui a permis de conserver un caractère authentique, loin des aménagements parfois plus muséifiés des portes les plus célèbres.",
      "Comme beaucoup de portes secondaires de la médina, elle illustre la philosophie défensive mérinide et alaouite : multiplier les points de contrôle plutôt que concentrer les entrées, afin de mieux surveiller les flux de population tout en facilitant la vie quotidienne des différents quartiers de la ville."
    ]
  ,
  description_ar: [
      "باب العامر باب متواضع مفتوح في القسم الشمالي الغربي من أسوار المدينة، وهو أقل توثيقًا من الأبواب التاريخية الكبرى لكنه يمثل بنفس القدر النسيج الدفاعي الكثيف الذي يميز عمران فاس البالي.",
      "موقعه بعيدًا عن المسارات السياحية الرئيسية يجعله ممرًا يستخدمه أساسًا سكان الأحياء المجاورة، ما سمح له بالحفاظ على طابع أصيل، بعيدًا عن التهيئات التي غالبًا ما تحوّل الأبواب الأشهر إلى معالم متحفية.",
      "كالعديد من الأبواب الثانوية بالمدينة، يجسد الفلسفة الدفاعية المرينية والعلوية: تعدد نقاط المراقبة بدل تركيز المداخل، لمراقبة أفضل لتنقل السكان مع تسهيل الحياة اليومية لمختلف أحياء المدينة."
  ]
  },
  {
    id: "bab-hamra",
    nom: "Bab El Hamra",
    nom_ar: "باب الحمراء",
    categorie: "Porte monumentale",
    lat: 34.060278,
    lon: -4.970278,
    description: [
      "Bab El Hamra, la « porte rouge », se situe dans une section des remparts proche du quartier de Sidi Boujida, le saint patron vénéré de la ville de Fès, dont le sanctuaire attire encore aujourd'hui de nombreux visiteurs et pèlerins locaux.",
      "Son appellation renvoie probablement à la teinte ocre-rouge de la terre damée utilisée pour édifier les murailles à cet endroit précis, un matériau dont la couleur varie légèrement selon les carrières locales exploitées au fil des siècles de construction et de réfection des remparts.",
      "Peu spectaculaire au premier regard, cette porte constitue néanmoins un jalon utile pour comprendre la topographie religieuse de Fès, où chaque quartier s'organise souvent autour d'un saint local et de son sanctuaire, tissant un réseau de dévotions populaires parallèle à l'enseignement savant dispensé dans les grandes médersas."
    ]
  ,
  description_ar: [
      "يقع باب الحمراء في قسم من الأسوار قريب من حي سيدي بوجيدة، الولي الصالح المُبجّل لمدينة فاس، الذي لا يزال ضريحه يجذب اليوم العديد من الزوار والحجاج المحليين.",
      "يعود اسمه على الأرجح إلى اللون الأحمر المائل إلى الأصفر للتراب المدكوك المستخدم في بناء الأسوار بهذا الموضع بالذات، وهي مادة يختلف لونها قليلاً حسب المحاجر المحلية المستغلة عبر قرون البناء والترميم.",
      "رغم أنه لا يبدو مثيرًا للانتباه للوهلة الأولى، يشكل هذا الباب معلمًا مفيدًا لفهم الجغرافيا الدينية لفاس، حيث ينتظم كل حي غالبًا حول ولي محلي وضريحه، منسوجًا شبكة من التدين الشعبي موازية للتعليم العلمي الذي تقدمه المدارس الكبرى."
  ]
  },
  {
    id: "bab-segma",
    nom: "Bab Segma",
    nom_ar: "باب السكمة",
    categorie: "Porte monumentale",
    lat: 34.06,
    lon: -4.9925,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/B%C3%A2b_Segma_de_F%C3%A8s_el_J%C3%A9did_-_A818.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:B%C3%A2b_Segma_de_F%C3%A8s_el_J%C3%A9did_-_A818.jpg"
    },
   
    description: [
      "Bab Segma se distingue par sa structure double : deux portes jumelles édifiées à quelques mètres l'une de l'autre, formant un ensemble monumental unique à Fès, conçu à l'origine pour marquer solennellement l'entrée nord vers Fès Jdid, la ville royale fondée par les Mérinides.",
      "Cette configuration en double porte permettait un contrôle renforcé des flux, en particulier lors des déplacements de la cour royale entre le palais et le reste de la ville, tout en offrant une mise en scène architecturale digne de l'importance politique du quartier qu'elle protégeait.",
      "Restaurée à plusieurs reprises, Bab Segma demeure aujourd'hui un axe de circulation important entre les quartiers nord de Fès Jdid et la médina historique, et continue de témoigner de la grandeur monumentale que les souverains mérinides puis alaouites ont voulu donner aux accès de leur capitale."
    ]
  ,
  description_ar: [
      "يتميز باب السكمة ببنية مزدوجة: بابان توأمان شُيِّدا على بعد أمتار قليلة من بعضهما، مكونين مجموعة أثرية فريدة بفاس، صُممت أصلاً للإعلان رسميًا عن المدخل الشمالي نحو فاس الجديد، المدينة الملكية التي أسسها المرينيون.",
      "هذا التصميم المزدوج كان يتيح مراقبة أكثر إحكامًا للتنقل، خاصة أثناء تحركات البلاط الملكي بين القصر وبقية المدينة، مع تقديم مشهد معماري يليق بالأهمية السياسية للحي الذي كان يحميه.",
      "بعد ترميمه مرات عدة، لا يزال باب السكمة اليوم محورًا مهمًا للتنقل بين أحياء فاس الجديد الشمالية والمدينة التاريخية، ويظل شاهدًا على العظمة المعمارية التي أراد الحكام المرينيون ثم العلويون إضفاءها على مداخل عاصمتهم."
  ]
  },
  {
    id: "bab-guissa",
    nom: "Bab Guissa",
    nom_ar: "باب كيسة",
    categorie: "Porte monumentale",
    lat: 34.068889,
    lon: -4.975833,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fes_-_Gate.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Fes_-_Gate.jpg"
    },


    description: [
      "Bab Guissa marque l'entrée nord de la médina et tire son nom du quartier et du sanctuaire éponymes qui s'étendent à ses abords, un secteur traditionnellement associé à la fabrication de la poterie et de la céramique, artisanats emblématiques de Fès.",
      "La porte elle-même conserve un arc en fer à cheval sobre, typique des ouvrages défensifs mérinides, encadré de murs en pisé qui ont résisté aux outrages du temps grâce à des campagnes successives de restauration menées par les autorités du patrimoine marocain.",
      "C'est depuis les abords de Bab Guissa, sur les hauteurs qui dominent la médina côté nord, que l'on découvre l'un des panoramas les plus photographiés de Fès : un océan de toits en terrasse, de minarets et de collines qui donne une idée saisissante de l'ampleur du tissu urbain historique."
    ]
  ,
  description_ar: [
      "يشكل باب كيسة المدخل الشمالي للمدينة، ويستمد اسمه من الحي والضريح المسميين على اسمه الممتدين حوله، وهي منطقة ارتبطت تقليديًا بصناعة الفخار والخزف، من الحرف التي اشتهرت بها فاس.",
      "يحافظ الباب نفسه على قوس بسيط على شكل حدوة الفرس، نموذجي للأبنية الدفاعية المرينية، تؤطره جدران من اللبن صمدت أمام عوادي الزمن بفضل حملات الترميم المتعاقبة التي قامت بها سلطات التراث المغربية.",
      "من محيط باب كيسة، فوق المرتفعات المطلة على المدينة من الجهة الشمالية، تُكتشف واحدة من أكثر المناظر البانورامية تصويرًا في فاس: بحر من الأسطح المسطحة والمآذن والتلال يعطي فكرة مذهلة عن اتساع النسيج العمراني التاريخي."
  ]
  },
  {
    id: "bab-sidi-boujida",
    nom: "Bab Sidi Boujida",
    nom_ar: "باب سيدي بوجيدة",
    categorie: "Porte monumentale",
    lat: 34.068056,
    lon: -4.966667,
    description: [
      "Bab Sidi Boujida tire son nom du saint patron vénéré de la ville de Fès, Sidi Boujida, dont le mausolée voisin fait l'objet d'une dévotion populaire toujours vivace, en particulier lors de moussems et de visites individuelles tout au long de l'année.",
      "Cette porte, plus modeste dans ses dimensions que les grandes entrées cérémonielles, appartient au réseau des accès secondaires situés sur la façade nord-est de la médina, une zone historiquement liée aux activités artisanales et au commerce de proximité plutôt qu'au grand commerce caravanier.",
      "Elle illustre la manière dont la topographie religieuse et la topographie défensive de Fès se recoupent en permanence : chaque quartier, chaque porte, semble porter le nom d'un saint, d'un métier ou d'un événement qui a marqué durablement la mémoire collective des Fassis."
    ]
  ,
  description_ar: [
      "يستمد باب سيدي بوجيدة اسمه من الولي الصالح المُبجّل لمدينة فاس، سيدي بوجيدة، الذي لا يزال ضريحه المجاور موضع تدين شعبي حيوي، خصوصًا خلال المواسم والزيارات الفردية على مدار السنة.",
      "هذا الباب، الأكثر تواضعًا في أبعاده مقارنة بالمداخل الاحتفالية الكبرى، ينتمي إلى شبكة المداخل الثانوية الواقعة على الواجهة الشمالية الشرقية للمدينة، وهي منطقة ارتبطت تاريخيًا بالأنشطة الحرفية والتجارة المحلية أكثر من ارتباطها بتجارة القوافل الكبرى.",
      "يجسد الطريقة التي تتقاطع بها الجغرافيا الدينية والجغرافيا الدفاعية لفاس بشكل دائم: فكل حي، وكل باب، يبدو وكأنه يحمل اسم ولي، أو حرفة، أو حدث ترك أثرًا دائمًا في الذاكرة الجماعية للفاسيين."
  ]
  },
  {
    id: "medina-fes",
    nom: "Médina de Fès (Fès el-Bali)",
    nom_ar: "مدينة فاس العتيقة (فاس البالي)",
    categorie: "Site historique",
    lat: 34.0625,
    lon: -4.9725,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Medina_of_Fes%2C_Marocco.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Medina_of_Fes%2C_Marocco.jpg"
    },


    description: [
      "Fondée en 789 par Moulay Idriss Ier sur la rive droite de l'oued Fès, puis agrandie sur la rive gauche par son fils Moulay Idriss II en 809, la médina de Fès el-Bali est l'une des plus anciennes villes impériales du Maroc et le berceau de son identité culturelle et religieuse.",
      "Classée au patrimoine mondial de l'UNESCO depuis 1981, elle constitue l'un des plus vastes ensembles urbains entièrement piétons au monde, avec un labyrinthe estimé à plus de 9 000 ruelles où se côtoient mosquées, médersas, fondouks, souks spécialisés et habitations traditionnelles organisées autour de patios.",
      "Ce tissu urbain médiéval, resté remarquablement intact malgré les siècles, continue d'abriter une vie quotidienne intense : artisans du cuir, du bois et du métal, commerçants, écoliers et familles y vivent selon des usages qui ont peu varié depuis l'époque mérinide, faisant de la médina un patrimoine vivant plutôt qu'un simple musée à ciel ouvert."
    ]
  ,
  description_ar: [
      "تأسست سنة 789 على يد مولاي إدريس الأول على الضفة اليمنى لوادي فاس، ثم وسّعها ابنه مولاي إدريس الثاني على الضفة اليسرى سنة 809، وتُعد مدينة فاس البالي من أقدم المدن الإمبراطورية بالمغرب ومهد هويتها الثقافية والدينية.",
      "مصنّفة ضمن التراث العالمي لليونسكو منذ سنة 1981، وتُشكل واحدة من أوسع المدن العتيقة المخصصة كليًا للمشاة في العالم، بمتاهة تُقدَّر بأكثر من 9000 زقاق، تتجاور فيها المساجد والمدارس والفنادق التقليدية والأسواق المتخصصة والمساكن التقليدية المنظمة حول الأفنية.",
      "هذا النسيج العمراني القروسطي، الذي ظل محافظًا على سلامته بشكل لافت رغم القرون، لا يزال يحتضن حياة يومية نابضة: حرفيو الجلد والخشب والمعدن، والتجار، وأطفال المدارس، والأسر يعيشون وفق عادات لم تتغير كثيرًا منذ العهد المريني، ما يجعل المدينة تراثًا حيًا وليس مجرد متحف مفتوح."
  ]
  },
  {
    id: "medersa-cherratine",
    nom: "Médersa Cherratine",
    nom_ar: "مدرسة الشراطين",
    categorie: "Médersa",
    lat: 34.064167,
    lon: -4.973889,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D8%B7%D9%8A%D9%86_%D8%A8%D9%81%D8%A7%D8%B3.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D9%84%D8%B4%D8%B1%D8%A7%D8%B7%D9%8A%D9%86_%D8%A8%D9%81%D8%A7%D8%B3.jpg"
    },

    description: [
      "La médersa Cherratine fut fondée en 1670 par le sultan alaouite Moulay Rachid, soucieux de perpétuer la tradition d'accueil des étudiants venus suivre l'enseignement de la mosquée-université Al Quaraouiyine, plus de trois siècles après les premières fondations mérinides.",
      "Son architecture tranche volontairement avec l'exubérance décorative des médersas mérinides comme Bou Inania ou Al-Attarine : les alaouites privilégient ici une sobriété fonctionnelle, avec des cours plus étroites et des cellules réparties sur plusieurs étages, afin de loger un nombre bien plus important d'étudiants.",
      "Avec plus d'une centaine de chambres réparties sur quatre niveaux, elle fut en son temps l'une des plus grandes résidences universitaires de la médina, capable d'accueillir plusieurs centaines de talibs venus de tout le Maroc et au-delà pour étudier le droit, la théologie et les sciences religieuses."
    ]
  ,
  description_ar: [
      "تأسست مدرسة الشراطين سنة 1670 على يد السلطان العلوي مولاي رشيد، حرصًا منه على مواصلة تقليد استقبال الطلبة القادمين لمتابعة تعليم جامع القرويين، بعد أكثر من ثلاثة قرون من التأسيسات المرينية الأولى.",
      "تختلف عمارتها عمدًا عن الفخامة الزخرفية للمدارس المرينية كبوعنانية والعطارين: يفضل العلويون هنا بساطة وظيفية، بأفنية أضيق وحجرات موزعة على عدة طوابق، لإيواء عدد أكبر بكثير من الطلبة.",
      "بأكثر من مائة حجرة موزعة على أربعة طوابق، كانت في زمنها من أكبر المساكن الجامعية بالمدينة، قادرة على استقبال المئات من الطلبة القادمين من جميع أنحاء المغرب وخارجه لدراسة الفقه واللاهوت والعلوم الدينية."
  ]
  },
  {
    id: "palais-jamai",
    nom: "Palais Jamaï",
    nom_ar: "قصر الجامعي",
    categorie: "Palais",
    lat: 34.069167,
    lon: -4.974167,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/29610-Fez_%2828134041211%29_%28Jamai_crop%29.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:29610-Fez_%2828134041211%29_%28Jamai_crop%29.jpg"
    },

    description: [
      "Le Palais Jamaï fut construit à la fin du XIXe siècle, entre 1879 et 1882, pour Si Mohammed ben Arbi Jamaï et son frère, deux vizirs puissants et influents à la cour du sultan Moulay Hassan Ier, avant que leur disgrâce ne les prive de leur demeure.",
      "L'édifice illustre l'apogée de l'architecture domestique fassie de la fin du XIXe siècle : cours intérieures ornées de zelliges polychromes, plafonds de cèdre peints à la main, jardins à l'andalouse structurés autour de bassins et d'orangers, le tout organisé selon une hiérarchie stricte entre espaces de réception et espaces privés.",
      "Transformé en hôtel de luxe au XXe siècle, le Palais Jamaï demeure aujourd'hui l'un des lieux les plus emblématiques de Fès pour admirer, dans un cadre encore habité et entretenu, la splendeur de l'architecture palatiale marocaine et la vue plongeante qu'il offre sur l'ensemble de la médina depuis ses jardins en terrasses."
    ]
  ,
  description_ar: [
      "شُيِّد قصر الجامعي في أواخر القرن التاسع عشر، بين 1879 و1882، للسيد محمد بن العربي الجامعي وأخيه، وهما وزيران قويان ومؤثران في بلاط السلطان مولاي الحسن الأول، قبل أن يحرمهما غضب السلطان من قصرهما.",
      "يجسد المبنى أوج العمارة المنزلية الفاسية في أواخر القرن التاسع عشر: أفنية داخلية مزينة بالزليج متعدد الألوان، وأسقف من خشب الأرز مرسومة يدويًا، وحدائق أندلسية منظمة حول الأحواض المائية وأشجار البرتقال، وكل ذلك منظم وفق تراتبية صارمة بين فضاءات الاستقبال والفضاءات الخاصة.",
      "تحوّل في القرن العشرين إلى فندق فاخر، ولا يزال قصر الجامعي اليوم من أبرز الأماكن بفاس للإعجاب، في إطار لا يزال مأهولاً ومصانًا، بروعة العمارة القصرية المغربية وبالإطلالة الساحرة التي يوفرها على المدينة بأكملها من حدائقه المتدرجة."
  ]
  },
  {
    id: "borj-nord",
    nom: "Borj Nord",
    nom_ar: "البرج الشمالي",
    categorie: "Bastion",
    lat: 34.067222,
    lon: -4.985,
   image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/BurjNord.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:BurjNord.jpg"
    },

    description: [
      "Le Borj Nord fut édifié en 1582 sur ordre du sultan saadien Ahmed al-Mansour, dans le cadre d'une politique de renforcement des défenses de Fès destinée autant à protéger la ville des menaces extérieures qu'à surveiller une population parfois rétive au pouvoir saadien nouvellement installé.",
      "Ce bastion massif, de plan carré et flanqué de tours d'angle, reprend des techniques de fortification alors récentes, inspirées en partie des progrès de l'artillerie européenne, ce qui en fait un témoignage architectural précieux de la circulation des savoir-faire militaires en Méditerranée au XVIe siècle.",
      "Depuis plusieurs décennies, le Borj Nord abrite le musée des armes anciennes du Maroc, qui présente une riche collection d'armes blanches et à feu couvrant plusieurs siècles d'histoire militaire marocaine. La terrasse du bastion offre par ailleurs l'une des plus belles vues panoramiques sur l'ensemble de la médina."
    ]
  ,
  description_ar: [
      "شُيِّد البرج الشمالي سنة 1582 بأمر من السلطان السعدي أحمد المنصور، في إطار سياسة لتعزيز دفاعات فاس تهدف إلى حماية المدينة من التهديدات الخارجية بقدر ما تهدف إلى مراقبة سكان كانوا أحيانًا متمردين على السلطة السعدية الجديدة.",
      "يعتمد هذا البرج الضخم، ذو المخطط المربع والمحاط بأبراج زاوية، تقنيات تحصين كانت حديثة آنذاك، مستوحاة جزئيًا من تطور المدفعية الأوروبية، ما يجعله شاهدًا معماريًا ثمينًا على تبادل المعارف العسكرية في البحر الأبيض المتوسط في القرن السادس عشر.",
      "يحتضن البرج الشمالي منذ عقود متحف الأسلحة القديمة بالمغرب، الذي يعرض مجموعة غنية من الأسلحة البيضاء والنارية تغطي عدة قرون من التاريخ العسكري المغربي. كما توفر شرفة البرج إحدى أجمل الإطلالات البانورامية على المدينة بأكملها."
  ]
  },
  {
    id: "medersa-bou-inania",
    nom: "Médersa Bou Inania",
    nom_ar: "مدرسة بوعنانية",
    categorie: "Médersa",
    lat: 34.062222,
    lon: -4.982778,
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bou%20Inania%20Madrasa%202011.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Category:Bou_Inania_Madrasa,_Fes"
    },
    description: [
      "La médersa Bou Inania fut édifiée entre 1350 et 1355 par le sultan mérinide Abu Inan Faris, qui voulut en faire la plus somptueuse des médersas de son royaume, capable de rivaliser en beauté avec la grande mosquée-université Al Quaraouiyine elle-même.",
      "Elle se distingue de toutes les autres médersas de Fès par un statut unique : dotée d'un minaret et d'une fonction de mosquée du vendredi, elle pouvait accueillir la prière collective, un privilège habituellement réservé aux seules grandes mosquées congrégationnelles de la ville.",
      "Son décor est considéré comme l'un des sommets de l'art mérinide : zelliges aux motifs géométriques d'une précision remarquable, stucs sculptés couvrant les murs de calligraphies coraniques, boiseries de cèdre finement ajourées et bassin de marbre au centre de la cour. Chaque élément décoratif obéit à une hiérarchie symbolique, du minéral au sol vers le végétal sculpté puis le bois gravé, culminant vers le ciel.",
      "Aujourd'hui ouverte à la visite, la médersa Bou Inania demeure l'un des monuments les plus visités de Fès et un passage quasi obligé pour comprendre l'apogée artistique de la dynastie mérinide au XIVe siècle."
    ]
  ,
  description_ar: [
      "شُيِّدت مدرسة بوعنانية بين 1350 و1355 على يد السلطان المريني أبي عنان فارس، الذي أراد أن تكون الأفخم بين مدارس مملكته، قادرة على منافسة جامع القرويين نفسه في الجمال.",
      "تتميز عن جميع مدارس فاس الأخرى بمكانة فريدة: فهي مزودة بمئذنة ووظيفة مسجد للصلاة الجمعة، ما مكّنها من استقبال الصلاة الجماعية، وهو امتياز كان يُقتصر عادة على الجوامع الكبرى وحدها بالمدينة.",
      "يُعتبر زخرفها من أرقى ما بلغه الفن المريني: زليج بأشكال هندسية بالغة الدقة، وجص منحوت يغطي الجدران بكتابات قرآنية، وأخشاب أرز منقوشة بدقة متناهية، وحوض رخامي في وسط الصحن. ويخضع كل عنصر زخرفي لتراتبية رمزية، من المعدن على الأرض إلى النبات المنحوت ثم الخشب المحفور، صعودًا نحو السماء.",
      "مفتوحة اليوم للزيارة، لا تزال مدرسة بوعنانية من أكثر معالم فاس زيارة، ومحطة شبه إلزامية لفهم الأوج الفني للدولة المرينية في القرن الرابع عشر."
  ]
  },
  {
    id: "musee-batha",
    nom: "Musée du Batha",
    nom_ar: "متحف البطحاء",
    categorie: "Musée",
    lat: 34.060556,
    lon: -4.982778,
  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Batha_Museum_%284317468784%29.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Category:Batha_Museum_%284317468784%29.jpg"
    },

    description: [
      "Le musée du Batha est installé dans un ancien palais andalou construit à la fin du XIXe siècle pour le prince héritier Moulay El Hassan, avant d'être transformé en musée d'arts et traditions populaires marocaines au tout début du XXe siècle.",
      "Le bâtiment lui-même constitue une œuvre architecturale à part entière : ses salles s'organisent autour d'un vaste jardin andalou planté de cèdres centenaires, de rosiers et de bassins, offrant un cadre paisible qui tranche avec l'agitation des ruelles environnantes.",
      "Les collections rassemblent des pièces exceptionnelles d'artisanat marocain traditionnel : céramique bleue de Fès, tapis du Moyen Atlas, bois sculptés provenant de médersas aujourd'hui disparues, instruments de musique andalous et manuscrits calligraphiés, offrant un panorama complet des savoir-faire qui ont fait la renommée artisanale de la ville depuis le Moyen Âge.",
      "Le musée constitue une étape appréciée des visiteurs souhaitant approfondir leur compréhension des arts décoratifs fassis avant ou après avoir arpenté les souks et médersas où ces mêmes techniques sont encore mises en œuvre par des artisans contemporains."
    ]
  ,
  description_ar: [
      "أُقيم متحف البطحاء في قصر أندلسي قديم بُني في أواخر القرن التاسع عشر لولي العهد مولاي الحسن، قبل أن يتحول في مطلع القرن العشرين إلى متحف للفنون والتقاليد الشعبية المغربية.",
      "يشكل المبنى نفسه عملاً معماريًا قائمًا بذاته: تتوزع قاعاته حول حديقة أندلسية واسعة مزروعة بأشجار أرز معمّرة وورود وأحواض مائية، توفر إطارًا هادئًا يتناقض مع صخب الأزقة المحيطة.",
      "تضم المجموعات قطعًا استثنائية من الحرف المغربية التقليدية: خزف فاسي أزرق، وسجاد من الأطلس المتوسط، وأخشاب منحوتة من مدارس اندثرت اليوم، وآلات موسيقية أندلسية ومخطوطات مزخرفة بالخط، ما يوفر لوحة شاملة للمهارات الحرفية التي صنعت شهرة المدينة منذ العصور الوسطى.",
      "يشكل المتحف محطة يقدرها الزوار الراغبون في تعميق فهمهم للفنون الزخرفية الفاسية قبل أو بعد التجول في الأسواق والمدارس حيث لا تزال هذه التقنيات نفسها يمارسها حرفيون معاصرون."
  ]
  },
  {
    id: "mosquée-quaraouine",
    nom: "Mosquée quaraouine",
    nom_ar: "جامع القرويين",
    categorie: "mosquée",
    lat: 34.065116,
    lon: -4.973406,
  image: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Quaraouiyine%2CF%C3%A8z_Morroco._2.jpg?width=960" ,
      credit: "Photo : Wikimedia Commons (licence à vérifier sur la page du fichier)",
      creditUrl: "https://commons.wikimedia.org/wiki/File:Quaraouiyine%2CF%C3%A8z_Morroco._2.jpg"
    },
    description: [
      "Al Quaraouiyine est une mosquée et université située à Fès, au Maroc. Selon la tradition, sa construction débute en 859 sous le règne de la dynastie idrisside.",
      "Elle est considérée comme la plus anciennes universités au monde encore en activité pour l'UNESCO.",
      "Au XIIe siècle, toute une série de noms parmi les plus grands sont associés d'une manière ou d'une autre à la Quaraouiyine : les grands précurseurs du soufisme, tels Ibn Harzihim (en), Abou Madyane, Abdeslam Ben Mchich Alami, les philosophes Avenpace et Averroès, le géographe Al Idrissi mais aussi Maïmonide, Ibn Khaldoun et Léon l'Africain pour ne citer qu'eux."
    ]
  ,
  description_ar: [
      "القرويين مسجد وجامعة تقع في فاس بالمغرب. وحسب التقليد، بدأ بناؤه سنة 859 في عهد الدولة الإدريسية.",
      "تعتبره اليونسكو أقدم جامعة في العالم لا تزال في نشاطها.",
      "في القرن الثاني عشر، ارتبطت أسماء من أعظم الشخصيات بجامع القرويين بشكل أو بآخر: كبار روّاد التصوف، مثل ابن حرزهم وأبو مدين وعبد السلام بن مشيش العلمي، والفيلسوفان ابن باجة وابن رشد، والجغرافي الإدريسي، وكذلك موسى بن ميمون وابن خلدون وليون الإفريقي، على سبيل الذكر لا الحصر."
  ]
  },
  {
    id: "medersa-attarine",
    nom: "Médersa Al-Attarine",
    nom_ar: "مدرسة العطارين",
    categorie: "Médersa",
    lat: 34.065278,
    lon: -4.973611,
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Medresa%20Al-Attarin(js)3.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Category:Al-Attarine_Madrasa"
    },
    description: [
      "La médersa Al-Attarine fut édifiée entre 1323 et 1325 par le sultan mérinide Abou Said Othman, à quelques pas de la mosquée-université Al Quaraouiyine et des souks aux épices dont elle tire son nom (« attarine » signifiant « parfumeurs » ou « épiciers » en arabe).",
      "Considérée par de nombreux spécialistes comme l'une des réalisations les plus abouties de l'architecture mérinide, elle concentre sur une surface relativement modeste un décor d'une densité et d'une finesse exceptionnelles : zelliges aux motifs étoilés, stucs sculptés en dentelle de plâtre, bandeaux de calligraphie coufique et boiseries de cèdre finement ciselées.",
      "Son patio central, organisé autour d'un bassin d'ablutions en marbre, illustre à merveille l'équilibre recherché par les architectes mérinides entre géométrie rigoureuse et raffinement ornemental. La médersa reste aujourd'hui l'un des exemples les plus souvent cités pour illustrer l'apogée artistique de Fès au XIVe siècle, aux côtés de sa voisine Bou Inania."
    ]
  ,
  description_ar: [
      "شُيِّدت مدرسة العطارين بين 1323 و1325 على يد السلطان المريني أبي سعيد عثمان، على مقربة من جامع القرويين وأسواق العطارة التي تستمد منها اسمها.",
      "تُعد في نظر العديد من المختصين من أرقى إنجازات العمارة المرينية، إذ تجمع على مساحة متواضعة نسبيًا زخرفة بالغة الكثافة والدقة: زليج بأشكال نجمية، وجص منحوت كالدانتيل، وأشرطة من الخط الكوفي، وأخشاب أرز منقوشة بعناية فائقة.",
      "صحنها المركزي، المنظم حول حوض رخامي للوضوء، يجسد ببراعة التوازن الذي سعى إليه المعماريون المرينيون بين الهندسة الصارمة والرقي الزخرفي. ولا تزال المدرسة اليوم من الأمثلة الأكثر استشهادًا بها لتوضيح الأوج الفني لفاس في القرن الرابع عشر، إلى جانب جارتها بوعنانية."
  ]
  },
  {
    id: "medersa-sahrij",
    nom: "Médersa Sahrij",
    nom_ar: "مدرسة الصهريج",
    categorie: "Médersa",
    lat: 34.063056,
    lon: -4.968611,
  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sahrij_Medersa%2C_Fes%2C_Morocco-1.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Sahrij_Medersa%2C_Fes%2C_Morocco-1.jpg"
    },
    description: [
      "La médersa Sahrij fut construite au début du XIVe siècle sous le règne du sultan mérinide Abou Said Othman, en tant qu'annexe pédagogique de la mosquée Andalouse, l'une des deux grandes mosquées historiques de Fès avec Al Quaraouiyine.",
      "Elle tire son nom du grand bassin rectangulaire (« sahrij » en arabe) qui occupe le centre de sa cour, un élément architectural rare parmi les médersas de Fès et qui confère à l'ensemble une atmosphère particulièrement sereine, propice à la réflexion et à l'étude.",
      "Située sur la rive est de l'oued Fès, dans le quartier andalou fondé par les réfugiés venus de Cordoue et d'autres villes d'Al-Andalus au IXe siècle, la médersa Sahrij témoigne des liens architecturaux et culturels étroits qui unissaient Fès à l'Espagne musulmane, dont l'influence se retrouve dans de nombreux détails décoratifs de la ville."
    ]
  ,
  description_ar: [
      "بُنيت مدرسة الصهريج في مطلع القرن الرابع عشر في عهد السلطان المريني أبي سعيد عثمان، كملحق تعليمي لجامع الأندلس، أحد الجامعين التاريخيين الكبيرين بفاس إلى جانب القرويين.",
      "تستمد اسمها من الحوض المستطيل الكبير («الصهريج») الذي يتوسط صحنها، وهو عنصر معماري نادر بين مدارس فاس يضفي على المجموع أجواء هادئة بشكل خاص، مواتية للتأمل والدراسة.",
      "تقع على الضفة الشرقية لوادي فاس، في الحي الأندلسي الذي أسسه لاجئون قدموا من قرطبة ومدن أخرى بالأندلس في القرن التاسع، وتشهد مدرسة الصهريج على الروابط المعمارية والثقافية الوثيقة التي جمعت فاس بإسبانيا الإسلامية، والتي يتجلى أثرها في العديد من التفاصيل الزخرفية بالمدينة."
  ]
  },
  {
    id: "Mosquée-des-Andalous",
    nom: "Mosquée des Andalous",
    nom_ar: "مسجد الأندلس",
    categorie: "mosquée",
    lat: 34.063266,
    lon: -4.968126,

  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Andalous_mosque_portal.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Andalous_mosque_portal.jpg"
    },

    description: [
      "La Mosquée des Andalous est un ancien lieu de culte musulman et lieu historique situé dans le quartier auquel elle a donné son nom, à Fès au Maroc",
      "Elle est située sur la rive droite de l'oued de Fès, à proximité de la medersa Sahrij. Elle doit son nom aux familles andalouses chassées de Cordoue par les Omeyyades et qui ont fondé le quartier des Andalous en 818",
      "Cette mosquée fut érigée en 859-860 sous la dynastie idrisside par une femme originaire de Kairouan, Mariyam al Fihriya, sœur de Fatima al Fihriya, fondatrice de la mosquée al Qarawiyyîn, l'autre grande mosquée historique de Fès.",
      "La dynastie des Mérinides la dota d'une fontaine dans la cour intérieure ainsi que d'une bibliothèque. Elle fut rénovée sous les Alaouites par Moulay Ismaïl. Le lieu, toujours en activité religieuse, est aujourd'hui un des multiples lieux de tourisme de Fès et est souvent cité quand il est question de l'histoire du Maroc."
    ]
  ,
  description_ar: [
      "مسجد الأندلس مكان عبادة إسلامي قديم ومعلمة تاريخية تقع في الحي الذي يحمل اسمها بفاس، المغرب.",
      "يقع على الضفة اليمنى لوادي فاس، بالقرب من مدرسة الصهريج. ويدين باسمه للأسر الأندلسية التي طردها الأمويون من قرطبة والتي أسست حي الأندلسيين سنة 818.",
      "شُيِّد هذا المسجد سنة 859-860 في عهد الدولة الإدريسية على يد امرأة من أصل قيرواني، مريم الفهرية، شقيقة فاطمة الفهرية مؤسِّسة جامع القرويين، الجامع التاريخي الكبير الآخر بفاس.",
      "زوّدته الدولة المرينية بنافورة في صحنه الداخلي وكذا بخزانة كتب. وجُدد في عهد العلويين على يد مولاي إسماعيل. ولا يزال المكان نشطًا دينيًا إلى اليوم، وهو أحد المعالم السياحية العديدة بفاس، كثيرًا ما يُستشهد به عند الحديث عن تاريخ المغرب."
  ]
  },
  {
    id: "medersa-sept",
    nom: "Medersa Sba'iyyin (des Sept)",
    nom_ar: "مدرسة السبعيين",
    categorie: "Médersa",
    lat: 34.063056,
    lon: -4.968333,
  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Medina_of_Fez_082023_028.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Medina_of_Fez_082023_028.jpg"
    },

    description: [
      "La médersa Sba'iyyin, littéralement « médersa des Sept », tire son nom singulier des sept lecteurs canoniques du Coran (« sab'a qurra' ») dont l'enseignement des différentes récitations coraniques y était traditionnellement dispensé, une spécialité rare parmi les établissements religieux de la médina.",
      "Beaucoup plus discrète que ses voisines Bou Inania ou Al-Attarine, elle demeure largement méconnue des circuits touristiques classiques, ce qui lui a permis de conserver un caractère authentique et une atmosphère de recueillement propice à l'étude, telle qu'elle devait exister à l'époque de sa fondation.",
      "Située à proximité immédiate de la médersa Sahrij et du quartier andalou, elle s'inscrit dans un ensemble éducatif et religieux cohérent qui illustre la densité exceptionnelle d'institutions savantes que comptait Fès au Moyen Âge, faisant de la ville l'un des grands centres intellectuels du monde musulman de son temps."
    ]
  ,
  description_ar: [
      "تستمد مدرسة السبعيين، أي «مدرسة السبعة» حرفيًا، اسمها المميز من القراء السبعة المعتمدين للقرآن الكريم («سبعة قراء»)، الذين كان تعليم مختلف رواياتهم القرآنية يُلقَّن فيها تقليديًا، وهي تخصص نادر بين المؤسسات الدينية بالمدينة.",
      "أكثر تواضعًا بكثير من جارتيها بوعنانية والعطارين، لا تزال إلى حد كبير مجهولة عن المسارات السياحية التقليدية، ما سمح لها بالحفاظ على طابع أصيل وأجواء تأمل مواتية للدراسة، كما كانت عليه في زمن تأسيسها.",
      "تقع بالقرب المباشر من مدرسة الصهريج والحي الأندلسي، وتندرج ضمن مجموعة تعليمية ودينية متماسكة تجسد الكثافة الاستثنائية للمؤسسات العلمية التي عرفتها فاس في العصور الوسطى، ما جعل المدينة أحد المراكز الفكرية الكبرى في العالم الإسلامي في زمانها."
  ]
  },
  {
    id: "borj-sud",
    nom: "Borj Sud",
    nom_ar: "البرج الجنوبي",
    categorie: "Bastion",
    lat: 34.053972,
    lon: -4.970250,
  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Borj_sud1.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Borj_sud1.jpg"
    },

    description: [
      "Le Borj Sud fut édifié vers 1582 sur ordre du sultan saadien Ahmed al-Mansour, dans le même élan de fortification que son pendant symétrique, le Borj Nord, construit pour surveiller la ville depuis les hauteurs opposées et affirmer l'autorité saadienne sur une cité fraîchement reprise aux Mérinides puis aux Wattassides.",
      "De plan carré et flanqué de tours d'angle massives, il reprend des techniques défensives inspirées des progrès de l'artillerie de l'époque, avec des murs épais capables de résister aux tirs de canon, une évolution notable par rapport aux fortifications purement almohades ou mérinides des siècles précédents.",
      "Situé au sud de la médina, non loin de Bab Ftouh et du palais Dar Moqri, le Borj Sud domine un vaste panorama sur Fès el-Bali et sur la vallée de l'oued Fès. Moins visité que son homologue nord, il reste un témoin précieux de la politique de fortification menée par les Saadiens pour contrôler la capitale spirituelle du royaume."
    ]
  ,
  description_ar: [
      "شُيِّد البرج الجنوبي نحو سنة 1582 بأمر من السلطان السعدي أحمد المنصور، في نفس زخم التحصين الذي شُيِّد فيه نظيره المتماثل، البرج الشمالي، لمراقبة المدينة من المرتفعات المقابلة وتأكيد السلطة السعدية على مدينة استُرجعت حديثًا من المرينيين ثم الوطاسيين.",
      "بمخططه المربع وأبراجه الزاوية الضخمة، يعتمد تقنيات دفاعية مستوحاة من تطور المدفعية في ذلك العصر، بجدران سميكة قادرة على مقاومة قذائف المدافع، وهو تطور ملحوظ مقارنة بالتحصينات الموحدية أو المرينية الخالصة في القرون السابقة.",
      "يقع جنوب المدينة، على مقربة من باب الفتوح وقصر دار المقري، ويطل البرج الجنوبي على بانوراما واسعة لفاس البالي ووادي فاس. وهو أقل زيارة من نظيره الشمالي، ويبقى شاهدًا ثمينًا على سياسة التحصين التي انتهجها السعديون للسيطرة على العاصمة الروحية للمملكة."
  ]
  },
  {
    id: "jnane-sbile",
    nom: "Jnane Sbile (Jardin Jnan Sbil)",
    nom_ar: "جنان السبيل",
    categorie: "Jardin historique",
    lat: 34.058278,
    lon: -4.986806,
  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jnan_sbil_2.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Jnan_sbil_2.jpg"
    },

    description: [
      "Le jardin de Jnane Sbile, aussi appelé jardin Bou Jeloud, fut aménagé au XVIIIe siècle sous le règne du sultan alaouite Moulay Abdallah, avant d'être intégré au XIXe siècle par le sultan Moulay Hassan Ier dans l'enceinte fortifiée reliant Fès Jdid à Fès el-Bali, ce qui en fait le plus ancien jardin public de la ville.",
      "Réservé à l'origine à la seule famille royale, reliée au palais par un passage souterrain, il ne fut ouvert au grand public qu'en 1917. S'étendant sur environ 7,5 hectares, il abrite plus de 3 000 espèces végétales réparties en parcelles thématiques : bambouseraie, jardin andalou, allées de palmiers centenaires, norias traditionnelles et grand bassin dominé par les remparts et le bastion saadien voisin de Borj Cheikh Ahmed.",
      "Laissé à l'abandon pendant plusieurs décennies, le jardin a bénéficié d'un vaste programme de réhabilitation mené entre 2006 et 2010 par la Fondation Mohammed VI pour la protection de l'environnement, avant de rouvrir ses portes en 2011. Situé à quelques pas de Bab Boujloud, il constitue aujourd'hui une pause verdoyante appréciée des habitants comme des visiteurs, loin de l'agitation de la médina."
    ]
  ,
  description_ar: [
      "أُنشئت حديقة جنان السبيل، المعروفة أيضًا بحديقة بوجلود، في القرن الثامن عشر في عهد السلطان العلوي مولاي عبد الله، قبل أن يدمجها السلطان مولاي الحسن الأول في القرن التاسع عشر ضمن السور المحصّن الرابط بين فاس الجديد وفاس البالي، ما يجعلها أقدم حديقة عمومية بالمدينة.",
      "كانت مخصصة في الأصل للعائلة الملكية وحدها، وتربطها بالقصر ممرات تحت أرضية، ولم تُفتح للعموم إلا سنة 1917. تمتد على مساحة نحو 7.5 هكتارات، وتضم أكثر من 3000 نوع نباتي موزعة على قطع موضوعية: غابة خيزران، وحديقة أندلسية، وأزقة نخيل معمّر، ونواعير تقليدية، وحوض كبير تطل عليه الأسوار والبرج السعدي المجاور، برج الشيخ أحمد.",
      "بعد أن تُركت للإهمال لعقود، استفادت الحديقة من برنامج ترميم واسع نفذته مؤسسة محمد السادس لحماية البيئة بين 2006 و2010، قبل أن تعيد فتح أبوابها سنة 2011. وتشكل اليوم، بموقعها القريب من باب بوجلود، استراحة خضراء يقدرها السكان والزوار على حد سواء، بعيدًا عن صخب المدينة."
  ]
  },
  {
    id: "tannerie-chouara",
    nom: "Tannerie Chouara",
    nom_ar: "دباغة الشوارة",
    categorie: "Tannerie",
    lat: 34.066167,
    lon: -4.971167,
  image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chouara_Tannery_-_155_-_Marokko_Handybilder_2018_-_Fes_%2827347719327%29.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Chouara_Tannery_-_155_-_Marokko_Handybilder_2018_-_Fes_%2827347719327%29.jpg"
    },

    description: [
      "La tannerie Chouara est la plus grande et la plus ancienne des tanneries encore en activité à Fès, avec une histoire qui remonterait à la fondation même de la ville par Moulay Idriss II au IXe siècle. Installée au bord de l'oued Fès, dont l'eau est indispensable au tannage, elle se situe à proximité immédiate de la médersa Seffarine et de la place des dinandiers.",
      "Le site frappe d'abord par son image emblématique : des dizaines de cuves rondes en pierre, remplies de teintures naturelles aux couleurs vives (indigo, henné, safran, fleur de pavot), où des artisans travaillent encore selon des méthodes restées pratiquement inchangées depuis le Moyen Âge. Les peaux de mouton, de vache, de chèvre et de chameau y sont successivement trempées, dégraissées puis teintes avant d'être séchées au soleil.",
      "Plus de cinq cents maîtres artisans se relaient chaque jour autour d'environ mille deux cents bassins, perpétuant un savoir-faire transmis de génération en génération et qui a valu au cuir marocain, le fameux « maroquin », une réputation internationale depuis le Moyen Âge jusqu'à Bagdad. Les boutiques de cuir qui entourent le site offrent des terrasses d'où l'on peut observer l'ensemble du processus, moyennant un petit pourboire au guide qui y conduit."
    ]
  ,
  description_ar: [
      "دباغة الشوارة هي أكبر وأقدم الدباغات التي لا تزال نشطة بفاس، ويعود تاريخها، حسب الرواية، إلى تأسيس المدينة نفسها على يد مولاي إدريس الثاني في القرن التاسع. تقع على ضفة وادي فاس، الذي يُعد ماؤه ضروريًا للدباغة، وتجاور مباشرة مدرسة الصفارين وساحة الصفارين.",
      "يلفت الموقع الانتباه أولاً بصورته الرمزية: عشرات الأحواض الحجرية الدائرية المملوءة بأصباغ طبيعية زاهية الألوان (النيلة، الحناء، الزعفران، زهرة الخشخاش)، حيث لا يزال الحرفيون يعملون وفق طرق تكاد تكون بلا تغيير منذ العصور الوسطى. تُنقع جلود الأغنام والأبقار والماعز والإبل تباعًا، ثم تُنزع دهونها وتُصبغ قبل أن تُجفف تحت الشمس.",
      "يتناوب أكثر من خمسمائة معلّم حرفي يوميًا حول نحو ألف ومائتي حوض، حافظين على مهارة متوارثة جيلاً بعد جيل أكسبت الجلد المغربي، «المغربية» الشهيرة، شهرة عالمية منذ العصور الوسطى وحتى بغداد. وتوفر محلات الجلد المحيطة بالموقع شرفات يمكن منها مشاهدة العملية بأكملها، مقابل إكرامية بسيطة للدليل الذي يقود الزيارة."
  ]
  },
  {
    id: "dar-dbagh",
    nom: "Dar Dbagh",
    nom_ar: "دار الدباغ",
    categorie: "Tannerie",
    lat: 34.06665,
    lon: -4.97145,
    description: [
      "Dar Dbagh, littéralement « la maison du tannage », désigne le bâtiment historique qui abrite et administre le complexe de la tannerie Chouara ; le nom est d'ailleurs très souvent utilisé par les Fassis pour parler de l'ensemble du site, tant les deux appellations sont imbriquées dans la mémoire locale.",
      "L'édifice, dont l'entrée principale donne sur la rue Chouara, organise l'activité de la coopérative de tanneurs qui exploite aujourd'hui le site : gestion des livraisons de peaux brutes, ventes aux enchères traditionnelles façon marché aux poissons, répartition du travail entre les artisans et accueil des visiteurs souhaitant découvrir le processus de tannage depuis les terrasses environnantes.",
      "Comme les deux autres tanneries historiques de la ville, Sidi Moussa et Aïn Azliten, Dar Dbagh fonctionne aujourd'hui comme une coopérative à grande échelle dotée de sa propre administration, tout en conservant les gestes ancestraux du tannage végétal qui ont fait la renommée du cuir de Fès à travers le monde.",
      "Coordonnées approximatives : ce point situe l'entrée principale du complexe, à quelques mètres seulement des cuves de teinture de la tannerie Chouara proprement dite."
    ]
  ,
  description_ar: [
      "دار الدباغ، أي «بيت الدباغة» حرفيًا، تسمية تُطلق على المبنى التاريخي الذي يحتضن ويدير مجمّع دباغة الشوارة؛ والاسم يُستخدم في الغالب من طرف الفاسيين للحديث عن الموقع بأكمله، لدرجة تداخل التسميتين في الذاكرة المحلية.",
      "ينظم المبنى، الذي يفتح مدخله الرئيسي على شارع الشوارة، نشاط تعاونية الدباغين التي تستغل الموقع اليوم: تسيير توريد الجلود الخام، والمزادات التقليدية على طريقة أسواق السمك، وتوزيع العمل بين الحرفيين، واستقبال الزوار الراغبين في اكتشاف عملية الدباغة من الشرفات المحيطة.",
      "كسائر الدباغتين التاريخيتين الأخريين بالمدينة، سيدي موسى وعين عزليتن، تعمل دار الدباغ اليوم كتعاونية واسعة النطاق ذات إدارة خاصة بها، مع الحفاظ على الحركات الحرفية الموروثة للدباغة النباتية التي أكسبت جلد فاس شهرته حول العالم.",
      "إحداثيات تقريبية: تحدد هذه النقطة المدخل الرئيسي للمجمّع، على بعد أمتار قليلة فقط من أحواض الصباغة الخاصة بدباغة الشوارة نفسها."
  ]
  },
  {
    id: "tannerie-sidi-moussa",
    nom: "Tannerie Sidi Moussa",
    nom_ar: "دباغة سيدي موسى",
    categorie: "Tannerie",
    lat: 34.064484,
    lon: -4.975961,

   image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Medina_Fez_7.jpg?width=960",
      credit: "Photo : Wikimedia Commons (CC BY-SA)",
      creditUrl: "https://commons.wikimedia.org/wiki/Medina_Fez_7.jpg"
    },
    description: [
      "La tannerie Sidi Moussa, également appelée tannerie Guerniz du nom du quartier qui l'abrite, est considérée par la tradition locale comme la plus ancienne tannerie de Fès avec Chouara, ses origines remontant elles aussi à la fondation de la ville par Idriss II au début du IXe siècle. Une chronique historique, le Rawd al-Qirtas, atteste plus formellement de son existence dès le début du XIIe siècle.",
      "Elle est bâtie sur le site d'une source d'eau naturelle, appelée Ayn ad-Debbaghin (« la source des tanneurs »), qui alimentait déjà les bassins de tannage à l'époque médiévale. Historiquement spécialisée dans le traitement des peaux de vache, elle se situe dans le quartier du Guerniz, au cœur de Fès el-Bali, non loin de la zaouïa de Moulay Idriss II et du musée Nejjarine.",
      "Moins fréquentée par les touristes que sa grande voisine Chouara, la tannerie Sidi Moussa a bénéficié d'une importante rénovation en 2015 qui a permis d'améliorer les conditions de travail des artisans tout en préservant les méthodes traditionnelles de tannage. Elle témoigne, avec Chouara et Dar Dbagh, de l'importance économique et sociale qu'a toujours occupée l'industrie du cuir dans l'histoire de Fès, où les chroniques almohades dénombraient déjà plus de quatre-vingts ateliers de tannage actifs."
    ]
  ,
  description_ar: [
      "دباغة سيدي موسى، المعروفة أيضًا بدباغة الكرنيز نسبة إلى الحي الذي تحتضنها، تعتبرها الرواية المحلية، إلى جانب الشوارة، أقدم دباغة بفاس، إذ تعود أصولها هي الأخرى إلى تأسيس المدينة على يد إدريس الثاني في مطلع القرن التاسع. وتؤكد وقائع تاريخية، في «روض القرطاس»، وجودها بشكل أكثر رسمية منذ مطلع القرن الثاني عشر.",
      "بُنيت على موقع عين ماء طبيعية، تُدعى «عين الدباغين»، كانت تغذي أحواض الدباغة منذ العصور الوسطى. وقد تخصصت تاريخيًا في معالجة جلود الأبقار، وتقع في حي الكرنيز، في قلب فاس البالي، على مقربة من زاوية مولاي إدريس الثاني ومتحف النجارين.",
      "أقل ازدحامًا بالسياح من جارتها الكبرى الشوارة، استفادت دباغة سيدي موسى من ترميم مهم سنة 2015 حسّن ظروف عمل الحرفيين مع الحفاظ على طرق الدباغة التقليدية. وهي تشهد، إلى جانب الشوارة ودار الدباغ، على الأهمية الاقتصادية والاجتماعية التي احتلتها صناعة الجلد دومًا في تاريخ فاس، حيث كانت السجلات الموحدية تُحصي بالفعل أكثر من ثمانين ورشة دباغة نشطة."
  ]
  }
];
