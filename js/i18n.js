/* =========================================================
   Internationalisation (FR / AR) du site
   - dictionnaire de textes fixes (UI_STRINGS)
   - table de correspondance des catégories (CATEGORY_AR)
   - fonctions utilitaires : getLang(), t(), applyI18n(), initLangToggle()
   ========================================================= */

const CATEGORY_AR = {
  "Porte monumentale": "باب (بوابة تاريخية)",
  "Forteresse": "قصبة (حصن)",
  "Médersa": "مدرسة",
  "Site historique": "موقع تاريخي",
  "Palais": "قصر",
  "Bastion": "برج دفاعي",
  "Musée": "متحف",
  "mosquée": "مسجد",
  "Tannerie": "دباغة (مدبغة)",
  "Jardin historique": "حديقة تاريخية"
};

const UI_STRINGS = {
  fr: {
    brand_1: "Fès",
    brand_2: "el-Bali",
    tagline: "Monuments historiques & itinéraires depuis Bab Boujloud",
    nav_map: "Carte",
    nav_monuments: "Monuments",
    eyebrow: "Guide de la médina",
    hero_title: "Portes, écoles et palais qui racontent Fès",
    hero_lede:
      "Fondée en 789, Fès el-Bali reste l'un des plus vastes ensembles urbains piétons au monde. Cette carte rassemble ses monuments repérés avec leurs coordonnées exactes ; chaque fiche indique ensuite l'itinéraire à pied depuis Bab Boujloud, la porte bleue par laquelle commence traditionnellement toute visite.",
    section_map_title: "Carte générale",
    section_list_title: "Liste des monuments",
    th_monument: "Monument",
    th_categorie: "Catégorie",
    th_coords: "Coordonnées",
    th_fiche: "Fiche",
    link_voir_fiche: "Voir la fiche →",
    footer_line: "Site pédagogique des monuments historiques de Fès — hébergement local XAMPP.",
    footer_source: "Coordonnées géographiques établies à partir de la « Liste des monuments de Fès ».",
    footer_author_label: "Auteur : ",
    footer_contact_label: " — Contact : ",
    breadcrumb_back: "← Retour à la liste des monuments",
    route_section_title: "Itinéraire à pied depuis Bab Boujloud",
    route_hint:
      "Le calcul d'itinéraire piéton est fourni à titre indicatif ; la médina compte de nombreuses ruelles trop étroites pour être toutes cartographiées.",
    route_calculating: "Calcul de l'itinéraire à pied en cours…",
    route_start_hint: "Bab Boujloud est le point de départ de référence : c'est ici que commencent tous les itinéraires du site.",
    route_start_summary: "Vous êtes au point de départ : distance 0 km.",
    route_unavailable_prefix: "Itinéraire piéton indisponible pour le moment (connexion Internet requise) : à vol d'oiseau, ",
    route_unavailable_middle: " se trouve à environ ",
    route_unavailable_middle2: " km de Bab Boujloud, soit environ ",
    route_unavailable_suffix: " de marche dans la médina.",
    route_found_prefix: "À pied depuis Bab Boujloud : environ ",
    route_found_middle: " km, soit ",
    route_found_suffix: " de marche.",
    duration_min: "min",
    duration_hour: "h",
    photo_placeholder: "Photo à ajouter",
    not_found_title: "Monument introuvable",
    not_found_text: "Le lien utilisé ne correspond à aucune fiche. Retournez à la liste des monuments.",
    title_suffix: " — Fès el-Bali",
    routing_close_title: "Fermer",
    routing_reopen_label: "Afficher l'itinéraire",
    dep_label: "Départ : ",
    arr_label: "Arrivée : ",
    lang_switch_to: "العربية"
  },
  ar: {
    brand_1: "فاس",
    brand_2: "البالي",
    tagline: "معالم تاريخية ومسارات سيرًا على الأقدام انطلاقًا من باب بوجلود",
    nav_map: "الخريطة",
    nav_monuments: "المعالم",
    eyebrow: "دليل المدينة العتيقة",
    hero_title: "أبواب ومدارس وقصور تحكي قصة فاس",
    hero_lede:
      "تأسست فاس البالي سنة 789، ولا تزال من أوسع المدن العتيقة المخصصة للمشاة في العالم. تجمع هذه الخريطة معالمها المحددة بإحداثياتها الدقيقة؛ وتشير كل بطاقة بعد ذلك إلى المسار سيرًا على الأقدام انطلاقًا من باب بوجلود، الباب الأزرق الذي تبدأ منه تقليديًا كل زيارة.",
    section_map_title: "الخريطة العامة",
    section_list_title: "قائمة المعالم",
    th_monument: "المعلمة",
    th_categorie: "الفئة",
    th_coords: "الإحداثيات",
    th_fiche: "البطاقة",
    link_voir_fiche: "عرض البطاقة ←",
    footer_line: "موقع تعليمي عن المعالم التاريخية لفاس — استضافة محلية عبر XAMPP.",
    footer_source: "الإحداثيات الجغرافية مستخرجة من «قائمة معالم فاس».",
    footer_author_label: "المؤلف: ",
    footer_contact_label: " — للتواصل: ",
    breadcrumb_back: "→ العودة إلى قائمة المعالم",
    route_section_title: "المسار سيرًا على الأقدام انطلاقًا من باب بوجلود",
    route_hint:
      "حساب المسار سيرًا على الأقدام يُقدَّم على سبيل الاسترشاد فقط؛ فالمدينة العتيقة تضم أزقة عديدة أضيق من أن تُرسم جميعها على الخريطة.",
    route_calculating: "جارٍ حساب المسار سيرًا على الأقدام…",
    route_start_hint: "باب بوجلود هو نقطة الانطلاق المرجعية: فمنه تبدأ جميع مسارات هذا الموقع.",
    route_start_summary: "أنت في نقطة الانطلاق: المسافة 0 كم.",
    route_unavailable_prefix: "المسار سيرًا على الأقدام غير متوفر حاليًا (يتطلب اتصالاً بالإنترنت): على خط مستقيم، تبعد ",
    route_unavailable_middle: " عن باب بوجلود بنحو ",
    route_unavailable_middle2: " كم، أي نحو ",
    route_unavailable_suffix: " من المشي داخل المدينة.",
    route_found_prefix: "سيرًا على الأقدام من باب بوجلود: نحو ",
    route_found_middle: " كم، أي ",
    route_found_suffix: " من المشي.",
    duration_min: "د",
    duration_hour: "س",
    photo_placeholder: "الصورة غير متوفرة بعد",
    not_found_title: "المعلمة غير موجودة",
    not_found_text: "لا يوجد رابط مطابق لأي بطاقة. عد إلى قائمة المعالم.",
    title_suffix: " — فاس البالي",
    routing_close_title: "إغلاق",
    routing_reopen_label: "إظهار المسار",
    dep_label: "الانطلاق: ",
    arr_label: "الوصول: ",
    lang_switch_to: "Français"
  }
};

function getLang() {
  return localStorage.getItem("fes-lang") === "ar" ? "ar" : "fr";
}

function setLang(lang) {
  localStorage.setItem("fes-lang", lang === "ar" ? "ar" : "fr");
}

function t(key) {
  var lang = getLang();
  return (UI_STRINGS[lang] && UI_STRINGS[lang][key] !== undefined) ? UI_STRINGS[lang][key] : key;
}

function categoryLabel(categorie) {
  if (getLang() === "ar") {
    return CATEGORY_AR[categorie] || categorie;
  }
  return categorie;
}

function monumentName(monument) {
  return getLang() === "ar" && monument.nom_ar ? monument.nom_ar : monument.nom;
}

function monumentDescription(monument) {
  if (getLang() === "ar" && Array.isArray(monument.description_ar)) {
    return monument.description_ar;
  }
  return Array.isArray(monument.description) ? monument.description : [monument.description];
}

// Applique le sens de lecture et la langue au document dès que possible.
function applyDocumentDirection() {
  var lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}
applyDocumentDirection();

// Remplit tous les éléments marqués par un attribut data-i18n="clé".
function applyI18n() {
  applyDocumentDirection();
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  var toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = t("lang_switch_to");
}

// Met en place le bouton de bascule de langue : au clic, on change la
// langue mémorisée puis on recharge la page pour tout régénérer proprement.
function initLangToggle() {
  var toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  toggle.textContent = t("lang_switch_to");
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    setLang(getLang() === "ar" ? "fr" : "ar");
    window.location.reload();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyI18n();
  initLangToggle();
});
