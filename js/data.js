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
    categorie: "Porte monumentale",
    lat: 34.061667,
    lon: -4.984167,
    description: [
      "Bab Boujloud est la porte la plus photographiée de Fès et le point de repère par lequel commence traditionnellement toute visite de la médina. L'édifice actuel a été construit en 1913, sous le protectorat français, en remplacement d'une porte plus ancienne située légèrement en retrait, mais son style reste fidèle à l'art almohade et mérinide dont Fès s'est toujours réclamée.",
      "Son originalité tient au contraste entre ses deux faces : côté ville nouvelle, un habillage de zelliges d'un bleu profond, le fameux « bleu de Fès », rappelle la couleur historique de la céramique fassie ; côté médina, le décor bascule vers un vert éclatant, couleur traditionnellement associée à l'islam. Le grand arc en fer à cheval, encadré de motifs géométriques et de calligraphies coraniques, est surmonté de créneaux et de deux tourelles latérales.",
      "Aujourd'hui encore, Bab Boujloud reste le carrefour vivant de Fès el-Bali : elle ouvre directement sur Talaa Kebira, l'artère commerçante qui traverse toute la médina, et sur une place animée où se croisent vendeurs de jus d'orange, calèches et premiers effluves des gargotes. C'est pour cette raison qu'elle sert ici de point de départ à tous les itinéraires piétons proposés sur ce site."
    ]
  },
  {
    id: "bab-semarine",
    nom: "Bab Semmarine",
    categorie: "Porte monumentale",
    lat: 34.054167,
    lon: -4.990000,
    description: [
      "Bab Semmarine ouvre l'accès méridional de Fès Jdid et conduit directement vers le Mellah, l'ancien quartier juif de la ville. Son nom, qui évoque les cloutiers et ferronniers (« semmarine »), rappelle qu'un artisanat spécialisé s'était installé à proximité de ses abords dès l'époque mérinide.",
      "La porte présente un arc outrepassé en fer à cheval, caractéristique de l'architecture défensive nord-africaine, encadré de bastions massifs destinés autrefois à surveiller les allées et venues entre Fès Jdid, la ville royale fondée au XIIIe siècle, et les quartiers plus anciens de Fès el-Bali.",
      "Elle marque aujourd'hui une transition symbolique forte : franchir Bab Semmarine, c'est passer du tissu administratif et palatial de Fès Jdid à l'atmosphère plus intime du Mellah, avec ses maisons aux balcons de fer forgé si différentes de l'architecture tournée vers l'intérieur du reste de la médina. Les visiteurs y trouvent un point de repère commode avant de rejoindre les synagogues et le cimetière juif voisins."
    ]
  },
  {
    id: "kasbah-cherarda",
    nom: "Kasbah Cherarda",
    categorie: "Forteresse",
    lat: 34.0625,
    lon: -4.991389,
    description: [
      "La Kasbah Cherarda, parfois appelée Kasbah des Cherarda, est une vaste enceinte fortifiée édifiée à la fin du XVIIe siècle par le sultan alaouite Moulay Ismaïl, puis renforcée par son successeur Moulay Rachid, afin d'y cantonner les contingents de cavaliers guich chargés de maintenir l'ordre dans la région de Fès.",
      "Perchée sur les hauteurs qui dominent Fès Jdid, la kasbah déploie de longues courtines crénelées en pisé, ponctuées de tours d'angle massives, typiques de l'architecture militaire alaouite. Son plan quadrangulaire, pensé pour loger plusieurs milliers d'hommes et leurs montures, en fait l'une des plus grandes enceintes militaires historiques du Maroc.",
      "Aujourd'hui, une partie de la kasbah abrite encore des habitations et un cimetière, tandis que ses remparts extérieurs offrent un point de vue saisissant sur la médina et les collines environnantes. Elle constitue une étape appréciée des visiteurs qui souhaitent comprendre la dimension militaire et défensive de l'histoire fassie, souvent éclipsée par les monuments religieux et marchands du centre-ville."
    ]
  },
  {
    id: "medersa-mesbahia",
    nom: "Médersa El Mesbahia",
    categorie: "Médersa",
    lat: 34.065278,
    lon: -4.973056,
    description: [
      "La médersa El Mesbahia fut fondée au XIVe siècle par le sultan mérinide Abou al-Hassan, dans la continuité de la grande politique de construction de collèges coraniques qui a fait la renommée architecturale de Fès à cette époque. Elle doit son nom à un érudit fassi, Al-Mesbahi, qui y enseigna et dont la mémoire est restée attachée à l'édifice.",
      "Comme les autres médersas mérinides, elle s'organise autour d'un patio central entouré de galeries et de cellules destinées aux étudiants venus de tout le Maroc, voire d'Afrique subsaharienne, pour suivre les enseignements dispensés à la mosquée-université voisine d'Al Quaraouiyine. Les boiseries sculptées de cèdre, les moucharabiehs et les frises de stuc qui subsistent témoignent d'un savoir-faire artisanal d'une grande finesse.",
      "Moins visitée que Bou Inania ou Al-Attarine, la médersa El Mesbahia séduit justement par sa relative discrétion : elle permet d'apprécier, loin de l'affluence touristique, l'atmosphère studieuse et recueillie qui caractérisait la vie de ces collèges religieux médiévaux, cœur battant de la vie intellectuelle de la Fès mérinide."
    ]
  },
  {
    id: "bab-lhadid",
    nom: "Bab El Hadid",
    categorie: "Porte monumentale",
    lat: 34.057222,
    lon: -4.979722,
    description: [
      "Bab El Hadid, littéralement la « porte du fer », doit son nom aux ateliers de forgerons et de ferronniers qui s'étaient historiquement installés à proximité de son passage, profitant de la circulation constante des caravanes et des marchands entrant dans la médina.",
      "Comme la plupart des portes secondaires de Fès el-Bali, elle présente une structure défensive simple mais efficace : un passage coudé destiné à ralentir d'éventuels assaillants, surmonté d'un chemin de ronde et flanqué de murs en pisé caractéristiques de l'architecture fortifiée nord-africaine des XIIe et XIIIe siècles.",
      "Elle s'inscrit dans le vaste système de fortifications qui ceinture la médina sur près de dix kilomètres, un réseau de plus d'une douzaine de portes conçu pour contrôler les flux commerciaux tout en protégeant la ville des incursions. Bab El Hadid permet aujourd'hui de rejoindre discrètement les quartiers artisanaux situés à l'est du centre historique."
    ]
  },
  {
    id: "bab-khokha",
    nom: "Bab El Khokha",
    categorie: "Porte monumentale",
    lat: 34.064444,
    lon: -4.963056,
    description: [
      "Bab El Khokha se dresse à l'est de la médina et constitue historiquement l'un des points de passage entre Fès el-Bali et ses faubourgs périphériques, à une époque où la ville continuait de s'étendre au-delà de son enceinte mérinide d'origine.",
      "Restaurée à plusieurs reprises au fil des siècles, la porte a conservé son arc en fer à cheval et ses contreforts en pisé damé, matériau traditionnel obtenu par compression de terre crue, encore visible sur de nombreux tronçons des remparts de Fès.",
      "Moins connue que Bab Boujloud ou Bab Ftouh, Bab El Khokha reste un témoin discret de l'extension progressive de la ville et de l'adaptation constante de son système défensif aux besoins d'une cité marchande en pleine expansion démographique et économique du Moyen Âge jusqu'à l'époque moderne."
    ]
  },
  {
    id: "bab-dekkakin",
    nom: "Bab Dekkakin",
    categorie: "Porte monumentale",
    lat: 34.058611,
    lon: -4.991389,
    description: [
      "Bab Dekkakin, la « porte des étals », tire son nom des échoppes en bois (« dekkakin » en arabe dialectal) qui bordaient autrefois son passage, où marchands ambulants et petits artisans proposaient leurs produits aux caravanes entrant en ville depuis le nord-ouest.",
      "Située à proximité immédiate de la Kasbah Cherarda, elle faisait partie d'un dispositif défensif combiné où la porte elle-même, ses tours de guet et la caserne voisine assuraient un contrôle étroit des allées et venues vers cette partie sensible de la ville, alors frontière entre zone militaire et zone civile.",
      "La porte a conservé l'essentiel de sa silhouette d'origine, avec son arc surbaissé et ses murs épais en pisé, matériaux qui ont permis à ces structures de traverser les siècles malgré les tremblements de terre et les guerres successives qu'a connus la région de Fès."
    ]
  },
  {
    id: "bab-ftouh",
    nom: "Bab Ftouh",
    categorie: "Porte monumentale",
    lat: 34.06,
    lon: -4.964444,
    description: [
      "Bab Ftouh, la porte orientale de la médina, fut longtemps le point de départ des grandes caravanes commerciales reliant Fès à l'est du Maroc, à l'Algérie et, plus loin, aux routes transsahariennes qui firent la richesse de la ville aux XIVe et XVe siècles.",
      "Son nom, qui signifie « porte des conquêtes » ou « porte de l'ouverture », rappelle le rôle stratégique qu'elle a joué dans l'histoire militaire et commerciale de Fès, en tant que seuil vers les territoires situés au-delà des montagnes du Moyen Atlas.",
      "Elle donne aujourd'hui accès à l'un des plus vastes cimetières traditionnels de la ville, où se mêlent tombes anciennes et sanctuaires de saints locaux (les « chorfa »), perpétuant une pratique funéraire et spirituelle propre aux cités impériales marocaines. C'est également depuis les hauteurs proches de Bab Ftouh que l'on obtient l'une des vues les plus complètes sur l'ensemble de la médina."
    ]
  },
  {
    id: "bab-mahrouk",
    nom: "Bab Mahrouk",
    categorie: "Porte monumentale",
    lat: 34.0625,
    lon: -4.985556,
    description: [
      "Bab Mahrouk, la « porte brûlée », doit vraisemblablement son nom à un incendie survenu au cours de son histoire, ou à la teinte rougeâtre de sa pierre, les deux explications circulant depuis longtemps parmi les historiens locaux sans qu'un consensus définitif n'ait été établi.",
      "Édifiée à l'époque almohade, au XIIe siècle, elle est considérée comme l'une des portes les mieux préservées de ce style architectural à Fès, avec son arc en fer à cheval brisé légèrement pointu, ses bastions latéraux robustes et l'absence de décor superflu, signature de la sobriété almohade par opposition à l'exubérance mérinide qui suivra.",
      "Bab Mahrouk se situe non loin du tombeau des Mérinides et du Borj Nord, formant avec eux un ensemble monumental sur les hauteurs qui surplombent la médina. Elle demeure un point de passage utilisé quotidiennement par les habitants du quartier, loin de l'agitation touristique concentrée autour de Bab Boujloud."
    ]
  },
  {
    id: "medersa-seffarine",
    nom: "Médersa Seffarine",
    categorie: "Médersa",
    lat: 34.064167,
    lon: -4.9725,
    description: [
      "La médersa Seffarine, fondée en 1271 sous le règne du sultan mérinide Abou Youssouf Yaqoub, est considérée par de nombreux historiens comme la plus ancienne médersa encore en activité au Maroc, antérieure même aux grandes fondations d'Abou Inan et d'Al-Attarine qui suivront un siècle plus tard.",
      "Son architecture, plus dépouillée que celle des médersas postérieures, témoigne des débuts de ce type d'établissement au Maghreb : un patio modeste entouré de galeries sur deux niveaux, une fontaine centrale et des cellules simples pour les étudiants, annonçant les formes qui seront ensuite magnifiées à Bou Inania ou Al-Attarine.",
      "Elle doit son nom à la place des Seffarine toute proche, la place des dinandiers, où résonne encore aujourd'hui le martèlement des artisans travaillant le cuivre et le laiton selon des techniques transmises de génération en génération. Cette proximité entre lieu de savoir et lieu de métier illustre bien l'organisation traditionnelle de la médina, où quartiers religieux, éducatifs et artisanaux se côtoient étroitement."
    ]
  },
  {
    id: "bab-chorfa",
    nom: "Bab Chorfa",
    categorie: "Porte monumentale",
    lat: 34.062222,
    lon: -4.985556,
    description: [
      "Bab Chorfa est une petite porte fortifiée dont le nom renvoie directement au quartier voisin des chorfa, terme désignant au Maroc les descendants du Prophète Mahomet, dont plusieurs familles s'étaient installées dans ce secteur de la médina dès l'époque médiévale.",
      "De dimensions plus modestes que les grandes portes cérémonielles comme Bab Boujloud ou Bab Mansour, elle appartient à cette catégorie de portes de quartier qui structuraient la vie quotidienne des habitants sans nécessairement jouer de rôle défensif majeur à l'échelle de la ville entière.",
      "Sa proximité avec Bab Boujloud en fait un point de repère pratique pour les visiteurs souhaitant explorer les ruelles résidentielles situées juste au sud de l'entrée principale de la médina, loin des axes commerçants les plus fréquentés, dans un tissu urbain resté largement authentique."
    ]
  },
  {
    id: "bab-amer",
    nom: "Bab Al-Amer",
    categorie: "Porte monumentale",
    lat: 34.051389,
    lon: -4.994167,
    description: [
      "Bab Al-Amer est une porte discrète percée dans la section nord-ouest des remparts de la médina, moins documentée que les grandes portes historiques mais tout aussi représentative du maillage défensif dense qui caractérise l'urbanisme de Fès el-Bali.",
      "Son emplacement, à l'écart des principaux circuits touristiques, en fait un passage essentiellement emprunté par les habitants des quartiers avoisinants, ce qui lui a permis de conserver un caractère authentique, loin des aménagements parfois plus muséifiés des portes les plus célèbres.",
      "Comme beaucoup de portes secondaires de la médina, elle illustre la philosophie défensive mérinide et alaouite : multiplier les points de contrôle plutôt que concentrer les entrées, afin de mieux surveiller les flux de population tout en facilitant la vie quotidienne des différents quartiers de la ville."
    ]
  },
  {
    id: "bab-hamra",
    nom: "Bab El Hamra",
    categorie: "Porte monumentale",
    lat: 34.060278,
    lon: -4.970278,
    description: [
      "Bab El Hamra, la « porte rouge », se situe dans une section des remparts proche du quartier de Sidi Boujida, le saint patron vénéré de la ville de Fès, dont le sanctuaire attire encore aujourd'hui de nombreux visiteurs et pèlerins locaux.",
      "Son appellation renvoie probablement à la teinte ocre-rouge de la terre damée utilisée pour édifier les murailles à cet endroit précis, un matériau dont la couleur varie légèrement selon les carrières locales exploitées au fil des siècles de construction et de réfection des remparts.",
      "Peu spectaculaire au premier regard, cette porte constitue néanmoins un jalon utile pour comprendre la topographie religieuse de Fès, où chaque quartier s'organise souvent autour d'un saint local et de son sanctuaire, tissant un réseau de dévotions populaires parallèle à l'enseignement savant dispensé dans les grandes médersas."
    ]
  },
  {
    id: "bab-segma",
    nom: "Bab Segma",
    categorie: "Porte monumentale",
    lat: 34.06,
    lon: -4.9925,
    description: [
      "Bab Segma se distingue par sa structure double : deux portes jumelles édifiées à quelques mètres l'une de l'autre, formant un ensemble monumental unique à Fès, conçu à l'origine pour marquer solennellement l'entrée nord vers Fès Jdid, la ville royale fondée par les Mérinides.",
      "Cette configuration en double porte permettait un contrôle renforcé des flux, en particulier lors des déplacements de la cour royale entre le palais et le reste de la ville, tout en offrant une mise en scène architecturale digne de l'importance politique du quartier qu'elle protégeait.",
      "Restaurée à plusieurs reprises, Bab Segma demeure aujourd'hui un axe de circulation important entre les quartiers nord de Fès Jdid et la médina historique, et continue de témoigner de la grandeur monumentale que les souverains mérinides puis alaouites ont voulu donner aux accès de leur capitale."
    ]
  },
  {
    id: "bab-guissa",
    nom: "Bab Guissa",
    categorie: "Porte monumentale",
    lat: 34.068889,
    lon: -4.975833,
    description: [
      "Bab Guissa marque l'entrée nord de la médina et tire son nom du quartier et du sanctuaire éponymes qui s'étendent à ses abords, un secteur traditionnellement associé à la fabrication de la poterie et de la céramique, artisanats emblématiques de Fès.",
      "La porte elle-même conserve un arc en fer à cheval sobre, typique des ouvrages défensifs mérinides, encadré de murs en pisé qui ont résisté aux outrages du temps grâce à des campagnes successives de restauration menées par les autorités du patrimoine marocain.",
      "C'est depuis les abords de Bab Guissa, sur les hauteurs qui dominent la médina côté nord, que l'on découvre l'un des panoramas les plus photographiés de Fès : un océan de toits en terrasse, de minarets et de collines qui donne une idée saisissante de l'ampleur du tissu urbain historique."
    ]
  },
  {
    id: "bab-sidi-boujida",
    nom: "Bab Sidi Boujida",
    categorie: "Porte monumentale",
    lat: 34.068056,
    lon: -4.966667,
    description: [
      "Bab Sidi Boujida tire son nom du saint patron vénéré de la ville de Fès, Sidi Boujida, dont le mausolée voisin fait l'objet d'une dévotion populaire toujours vivace, en particulier lors de moussems et de visites individuelles tout au long de l'année.",
      "Cette porte, plus modeste dans ses dimensions que les grandes entrées cérémonielles, appartient au réseau des accès secondaires situés sur la façade nord-est de la médina, une zone historiquement liée aux activités artisanales et au commerce de proximité plutôt qu'au grand commerce caravanier.",
      "Elle illustre la manière dont la topographie religieuse et la topographie défensive de Fès se recoupent en permanence : chaque quartier, chaque porte, semble porter le nom d'un saint, d'un métier ou d'un événement qui a marqué durablement la mémoire collective des Fassis."
    ]
  },
  {
    id: "medina-fes",
    nom: "Médina de Fès (Fès el-Bali)",
    categorie: "Site historique",
    lat: 34.0625,
    lon: -4.9725,
    description: [
      "Fondée en 789 par Moulay Idriss Ier sur la rive droite de l'oued Fès, puis agrandie sur la rive gauche par son fils Moulay Idriss II en 809, la médina de Fès el-Bali est l'une des plus anciennes villes impériales du Maroc et le berceau de son identité culturelle et religieuse.",
      "Classée au patrimoine mondial de l'UNESCO depuis 1981, elle constitue l'un des plus vastes ensembles urbains entièrement piétons au monde, avec un labyrinthe estimé à plus de 9 000 ruelles où se côtoient mosquées, médersas, fondouks, souks spécialisés et habitations traditionnelles organisées autour de patios.",
      "Ce tissu urbain médiéval, resté remarquablement intact malgré les siècles, continue d'abriter une vie quotidienne intense : artisans du cuir, du bois et du métal, commerçants, écoliers et familles y vivent selon des usages qui ont peu varié depuis l'époque mérinide, faisant de la médina un patrimoine vivant plutôt qu'un simple musée à ciel ouvert."
    ]
  },
  {
    id: "medersa-cherratine",
    nom: "Médersa Cherratine",
    categorie: "Médersa",
    lat: 34.064167,
    lon: -4.973889,
    description: [
      "La médersa Cherratine fut fondée en 1670 par le sultan alaouite Moulay Rachid, soucieux de perpétuer la tradition d'accueil des étudiants venus suivre l'enseignement de la mosquée-université Al Quaraouiyine, plus de trois siècles après les premières fondations mérinides.",
      "Son architecture tranche volontairement avec l'exubérance décorative des médersas mérinides comme Bou Inania ou Al-Attarine : les alaouites privilégient ici une sobriété fonctionnelle, avec des cours plus étroites et des cellules réparties sur plusieurs étages, afin de loger un nombre bien plus important d'étudiants.",
      "Avec plus d'une centaine de chambres réparties sur quatre niveaux, elle fut en son temps l'une des plus grandes résidences universitaires de la médina, capable d'accueillir plusieurs centaines de talibs venus de tout le Maroc et au-delà pour étudier le droit, la théologie et les sciences religieuses."
    ]
  },
  {
    id: "palais-jamai",
    nom: "Palais Jamaï",
    categorie: "Palais",
    lat: 34.069167,
    lon: -4.974167,
    description: [
      "Le Palais Jamaï fut construit à la fin du XIXe siècle, entre 1879 et 1882, pour Si Mohammed ben Arbi Jamaï et son frère, deux vizirs puissants et influents à la cour du sultan Moulay Hassan Ier, avant que leur disgrâce ne les prive de leur demeure.",
      "L'édifice illustre l'apogée de l'architecture domestique fassie de la fin du XIXe siècle : cours intérieures ornées de zelliges polychromes, plafonds de cèdre peints à la main, jardins à l'andalouse structurés autour de bassins et d'orangers, le tout organisé selon une hiérarchie stricte entre espaces de réception et espaces privés.",
      "Transformé en hôtel de luxe au XXe siècle, le Palais Jamaï demeure aujourd'hui l'un des lieux les plus emblématiques de Fès pour admirer, dans un cadre encore habité et entretenu, la splendeur de l'architecture palatiale marocaine et la vue plongeante qu'il offre sur l'ensemble de la médina depuis ses jardins en terrasses."
    ]
  },
  {
    id: "borj-nord",
    nom: "Borj Nord",
    categorie: "Bastion",
    lat: 34.067222,
    lon: -4.985,
    description: [
      "Le Borj Nord fut édifié en 1582 sur ordre du sultan saadien Ahmed al-Mansour, dans le cadre d'une politique de renforcement des défenses de Fès destinée autant à protéger la ville des menaces extérieures qu'à surveiller une population parfois rétive au pouvoir saadien nouvellement installé.",
      "Ce bastion massif, de plan carré et flanqué de tours d'angle, reprend des techniques de fortification alors récentes, inspirées en partie des progrès de l'artillerie européenne, ce qui en fait un témoignage architectural précieux de la circulation des savoir-faire militaires en Méditerranée au XVIe siècle.",
      "Depuis plusieurs décennies, le Borj Nord abrite le musée des armes anciennes du Maroc, qui présente une riche collection d'armes blanches et à feu couvrant plusieurs siècles d'histoire militaire marocaine. La terrasse du bastion offre par ailleurs l'une des plus belles vues panoramiques sur l'ensemble de la médina."
    ]
  },
  {
    id: "medersa-bou-inania",
    nom: "Médersa Bou Inania",
    categorie: "Médersa",
    lat: 34.062222,
    lon: -4.982778,
    description: [
      "La médersa Bou Inania fut édifiée entre 1350 et 1355 par le sultan mérinide Abu Inan Faris, qui voulut en faire la plus somptueuse des médersas de son royaume, capable de rivaliser en beauté avec la grande mosquée-université Al Quaraouiyine elle-même.",
      "Elle se distingue de toutes les autres médersas de Fès par un statut unique : dotée d'un minaret et d'une fonction de mosquée du vendredi, elle pouvait accueillir la prière collective, un privilège habituellement réservé aux seules grandes mosquées congrégationnelles de la ville.",
      "Son décor est considéré comme l'un des sommets de l'art mérinide : zelliges aux motifs géométriques d'une précision remarquable, stucs sculptés couvrant les murs de calligraphies coraniques, boiseries de cèdre finement ajourées et bassin de marbre au centre de la cour. Chaque élément décoratif obéit à une hiérarchie symbolique, du minéral au sol vers le végétal sculpté puis le bois gravé, culminant vers le ciel.",
      "Aujourd'hui ouverte à la visite, la médersa Bou Inania demeure l'un des monuments les plus visités de Fès et un passage quasi obligé pour comprendre l'apogée artistique de la dynastie mérinide au XIVe siècle."
    ]
  },
  {
    id: "musee-batha",
    nom: "Musée du Batha",
    categorie: "Musée",
    lat: 34.060556,
    lon: -4.982778,
    description: [
      "Le musée du Batha est installé dans un ancien palais andalou construit à la fin du XIXe siècle pour le prince héritier Moulay El Hassan, avant d'être transformé en musée d'arts et traditions populaires marocaines au tout début du XXe siècle.",
      "Le bâtiment lui-même constitue une œuvre architecturale à part entière : ses salles s'organisent autour d'un vaste jardin andalou planté de cèdres centenaires, de rosiers et de bassins, offrant un cadre paisible qui tranche avec l'agitation des ruelles environnantes.",
      "Les collections rassemblent des pièces exceptionnelles d'artisanat marocain traditionnel : céramique bleue de Fès, tapis du Moyen Atlas, bois sculptés provenant de médersas aujourd'hui disparues, instruments de musique andalous et manuscrits calligraphiés, offrant un panorama complet des savoir-faire qui ont fait la renommée artisanale de la ville depuis le Moyen Âge.",
      "Le musée constitue une étape appréciée des visiteurs souhaitant approfondir leur compréhension des arts décoratifs fassis avant ou après avoir arpenté les souks et médersas où ces mêmes techniques sont encore mises en œuvre par des artisans contemporains."
    ]
  },
  {
    id: "synagogue-aben-danan",
    nom: "Synagogue Aben Danan",
    categorie: "Synagogue",
    lat: 34.052778,
    lon: -4.991667,
    description: [
      "La synagogue Aben Danan, fondée au XVIIe siècle par une famille de marchands et de lettrés juifs installée à Fès, constitue l'un des témoignages les mieux conservés du riche patrimoine judéo-marocain qui a façonné le quartier du Mellah pendant des siècles.",
      "Restaurée dans les années 1990 grâce à un programme international de sauvegarde du patrimoine, elle a retrouvé son décor d'origine : zelliges polychromes au sol, plafond de bois peint, bimah central en marbre et arche sainte richement ornée, éléments typiques de l'architecture synagogale marocaine.",
      "Le Mellah de Fès, fondé au XIVe siècle, fut historiquement l'un des plus importants quartiers juifs du Maroc, abritant une communauté florissante de commerçants, d'artisans et de conseillers royaux. La synagogue Aben Danan, aujourd'hui ouverte à la visite, permet de mieux comprendre cette page essentielle et trop souvent méconnue de l'histoire plurielle de la ville."
    ]
  },
  {
    id: "medersa-attarine",
    nom: "Médersa Al-Attarine",
    categorie: "Médersa",
    lat: 34.065278,
    lon: -4.973611,
    description: [
      "La médersa Al-Attarine fut édifiée entre 1323 et 1325 par le sultan mérinide Abou Said Othman, à quelques pas de la mosquée-université Al Quaraouiyine et des souks aux épices dont elle tire son nom (« attarine » signifiant « parfumeurs » ou « épiciers » en arabe).",
      "Considérée par de nombreux spécialistes comme l'une des réalisations les plus abouties de l'architecture mérinide, elle concentre sur une surface relativement modeste un décor d'une densité et d'une finesse exceptionnelles : zelliges aux motifs étoilés, stucs sculptés en dentelle de plâtre, bandeaux de calligraphie coufique et boiseries de cèdre finement ciselées.",
      "Son patio central, organisé autour d'un bassin d'ablutions en marbre, illustre à merveille l'équilibre recherché par les architectes mérinides entre géométrie rigoureuse et raffinement ornemental. La médersa reste aujourd'hui l'un des exemples les plus souvent cités pour illustrer l'apogée artistique de Fès au XIVe siècle, aux côtés de sa voisine Bou Inania."
    ]
  },
  {
    id: "medersa-sahrij",
    nom: "Médersa Sahrij",
    categorie: "Médersa",
    lat: 34.063056,
    lon: -4.968611,
    description: [
      "La médersa Sahrij fut construite au début du XIVe siècle sous le règne du sultan mérinide Abou Said Othman, en tant qu'annexe pédagogique de la mosquée Andalouse, l'une des deux grandes mosquées historiques de Fès avec Al Quaraouiyine.",
      "Elle tire son nom du grand bassin rectangulaire (« sahrij » en arabe) qui occupe le centre de sa cour, un élément architectural rare parmi les médersas de Fès et qui confère à l'ensemble une atmosphère particulièrement sereine, propice à la réflexion et à l'étude.",
      "Située sur la rive est de l'oued Fès, dans le quartier andalou fondé par les réfugiés venus de Cordoue et d'autres villes d'Al-Andalus au IXe siècle, la médersa Sahrij témoigne des liens architecturaux et culturels étroits qui unissaient Fès à l'Espagne musulmane, dont l'influence se retrouve dans de nombreux détails décoratifs de la ville."
    ]
  },
  {
    id: "synagogue-sla-rebbi",
    nom: "Synagogue Slat al-Fassiyine",
    categorie: "Synagogue",
    lat: 34.053333,
    lon: -4.990833,
    description: [
      "La synagogue Slat al-Fassiyine, dont le nom signifie « synagogue des Fassis », figure parmi les plus anciennes synagogues encore debout du Mellah de Fès, certaines sources faisant remonter ses origines au XVIIe siècle, voire avant, selon les traditions orales de la communauté.",
      "Longtemps laissée à l'abandon après le départ massif de la communauté juive marocaine au XXe siècle, elle a fait l'objet d'un vaste chantier de restauration achevé au début du XXIe siècle, financé conjointement par des institutions marocaines et internationales soucieuses de préserver ce patrimoine.",
      "Sa réouverture a été saluée comme un symbole fort de la reconnaissance du caractère pluriel de l'identité fassie, mêlant héritages musulman et juif dans une même ville. La synagogue accueille aujourd'hui visiteurs et chercheurs venus découvrir un pan essentiel, longtemps négligé, de l'histoire culturelle et religieuse de Fès."
    ]
  },
  {
    id: "medersa-sept",
    nom: "Medersa Sba'iyyin (des Sept)",
    categorie: "Médersa",
    lat: 34.063056,
    lon: -4.968333,
    description: [
      "La médersa Sba'iyyin, littéralement « médersa des Sept », tire son nom singulier des sept lecteurs canoniques du Coran (« sab'a qurra' ») dont l'enseignement des différentes récitations coraniques y était traditionnellement dispensé, une spécialité rare parmi les établissements religieux de la médina.",
      "Beaucoup plus discrète que ses voisines Bou Inania ou Al-Attarine, elle demeure largement méconnue des circuits touristiques classiques, ce qui lui a permis de conserver un caractère authentique et une atmosphère de recueillement propice à l'étude, telle qu'elle devait exister à l'époque de sa fondation.",
      "Située à proximité immédiate de la médersa Sahrij et du quartier andalou, elle s'inscrit dans un ensemble éducatif et religieux cohérent qui illustre la densité exceptionnelle d'institutions savantes que comptait Fès au Moyen Âge, faisant de la ville l'un des grands centres intellectuels du monde musulman de son temps."
    ]
  },
  {
    id: "borj-sud",
    nom: "Borj Sud",
    categorie: "Bastion",
    lat: 34.053972,
    lon: -4.970250,
    description: [
      "Le Borj Sud fut édifié vers 1582 sur ordre du sultan saadien Ahmed al-Mansour, dans le même élan de fortification que son pendant symétrique, le Borj Nord, construit pour surveiller la ville depuis les hauteurs opposées et affirmer l'autorité saadienne sur une cité fraîchement reprise aux Mérinides puis aux Wattassides.",
      "De plan carré et flanqué de tours d'angle massives, il reprend des techniques défensives inspirées des progrès de l'artillerie de l'époque, avec des murs épais capables de résister aux tirs de canon, une évolution notable par rapport aux fortifications purement almohades ou mérinides des siècles précédents.",
      "Situé au sud de la médina, non loin de Bab Ftouh et du palais Dar Moqri, le Borj Sud domine un vaste panorama sur Fès el-Bali et sur la vallée de l'oued Fès. Moins visité que son homologue nord, il reste un témoin précieux de la politique de fortification menée par les Saadiens pour contrôler la capitale spirituelle du royaume."
    ]
  },
  {
    id: "jnane-sbile",
    nom: "Jnane Sbile (Jardin Jnan Sbil)",
    categorie: "Jardin historique",
    lat: 34.058278,
    lon: -4.986806,
    description: [
      "Le jardin de Jnane Sbile, aussi appelé jardin Bou Jeloud, fut aménagé au XVIIIe siècle sous le règne du sultan alaouite Moulay Abdallah, avant d'être intégré au XIXe siècle par le sultan Moulay Hassan Ier dans l'enceinte fortifiée reliant Fès Jdid à Fès el-Bali, ce qui en fait le plus ancien jardin public de la ville.",
      "Réservé à l'origine à la seule famille royale, reliée au palais par un passage souterrain, il ne fut ouvert au grand public qu'en 1917. S'étendant sur environ 7,5 hectares, il abrite plus de 3 000 espèces végétales réparties en parcelles thématiques : bambouseraie, jardin andalou, allées de palmiers centenaires, norias traditionnelles et grand bassin dominé par les remparts et le bastion saadien voisin de Borj Cheikh Ahmed.",
      "Laissé à l'abandon pendant plusieurs décennies, le jardin a bénéficié d'un vaste programme de réhabilitation mené entre 2006 et 2010 par la Fondation Mohammed VI pour la protection de l'environnement, avant de rouvrir ses portes en 2011. Situé à quelques pas de Bab Boujloud, il constitue aujourd'hui une pause verdoyante appréciée des habitants comme des visiteurs, loin de l'agitation de la médina."
    ]
  },
  {
    id: "tannerie-chouara",
    nom: "Tannerie Chouara",
    categorie: "Tannerie",
    lat: 34.066167,
    lon: -4.971167,
    description: [
      "La tannerie Chouara est la plus grande et la plus ancienne des tanneries encore en activité à Fès, avec une histoire qui remonterait à la fondation même de la ville par Moulay Idriss II au IXe siècle. Installée au bord de l'oued Fès, dont l'eau est indispensable au tannage, elle se situe à proximité immédiate de la médersa Seffarine et de la place des dinandiers.",
      "Le site frappe d'abord par son image emblématique : des dizaines de cuves rondes en pierre, remplies de teintures naturelles aux couleurs vives (indigo, henné, safran, fleur de pavot), où des artisans travaillent encore selon des méthodes restées pratiquement inchangées depuis le Moyen Âge. Les peaux de mouton, de vache, de chèvre et de chameau y sont successivement trempées, dégraissées puis teintes avant d'être séchées au soleil.",
      "Plus de cinq cents maîtres artisans se relaient chaque jour autour d'environ mille deux cents bassins, perpétuant un savoir-faire transmis de génération en génération et qui a valu au cuir marocain, le fameux « maroquin », une réputation internationale depuis le Moyen Âge jusqu'à Bagdad. Les boutiques de cuir qui entourent le site offrent des terrasses d'où l'on peut observer l'ensemble du processus, moyennant un petit pourboire au guide qui y conduit."
    ]
  },
  {
    id: "dar-dbagh",
    nom: "Dar Dbagh",
    categorie: "Tannerie",
    lat: 34.06665,
    lon: -4.97145,
    description: [
      "Dar Dbagh, littéralement « la maison du tannage », désigne le bâtiment historique qui abrite et administre le complexe de la tannerie Chouara ; le nom est d'ailleurs très souvent utilisé par les Fassis pour parler de l'ensemble du site, tant les deux appellations sont imbriquées dans la mémoire locale.",
      "L'édifice, dont l'entrée principale donne sur la rue Chouara, organise l'activité de la coopérative de tanneurs qui exploite aujourd'hui le site : gestion des livraisons de peaux brutes, ventes aux enchères traditionnelles façon marché aux poissons, répartition du travail entre les artisans et accueil des visiteurs souhaitant découvrir le processus de tannage depuis les terrasses environnantes.",
      "Comme les deux autres tanneries historiques de la ville, Sidi Moussa et Aïn Azliten, Dar Dbagh fonctionne aujourd'hui comme une coopérative à grande échelle dotée de sa propre administration, tout en conservant les gestes ancestraux du tannage végétal qui ont fait la renommée du cuir de Fès à travers le monde.",
      "Coordonnées approximatives : ce point situe l'entrée principale du complexe, à quelques mètres seulement des cuves de teinture de la tannerie Chouara proprement dite."
    ]
  },
  {
    id: "tannerie-sidi-moussa",
    nom: "Tannerie Sidi Moussa",
    categorie: "Tannerie",
    lat: 34.064484,
    lon: -4.975961,
    description: [
      "La tannerie Sidi Moussa, également appelée tannerie Guerniz du nom du quartier qui l'abrite, est considérée par la tradition locale comme la plus ancienne tannerie de Fès avec Chouara, ses origines remontant elles aussi à la fondation de la ville par Idriss II au début du IXe siècle. Une chronique historique, le Rawd al-Qirtas, atteste plus formellement de son existence dès le début du XIIe siècle.",
      "Elle est bâtie sur le site d'une source d'eau naturelle, appelée Ayn ad-Debbaghin (« la source des tanneurs »), qui alimentait déjà les bassins de tannage à l'époque médiévale. Historiquement spécialisée dans le traitement des peaux de vache, elle se situe dans le quartier du Guerniz, au cœur de Fès el-Bali, non loin de la zaouïa de Moulay Idriss II et du musée Nejjarine.",
      "Moins fréquentée par les touristes que sa grande voisine Chouara, la tannerie Sidi Moussa a bénéficié d'une importante rénovation en 2015 qui a permis d'améliorer les conditions de travail des artisans tout en préservant les méthodes traditionnelles de tannage. Elle témoigne, avec Chouara et Dar Dbagh, de l'importance économique et sociale qu'a toujours occupée l'industrie du cuir dans l'histoire de Fès, où les chroniques almohades dénombraient déjà plus de quatre-vingts ateliers de tannage actifs."
    ]
  }
];
