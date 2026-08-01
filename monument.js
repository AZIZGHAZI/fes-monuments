/* Page fiche monument : détail + itinéraire piéton depuis Bab Boujloud */
(function () {
  "use strict";

  function getMonumentFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    return MONUMENTS.find(function (m) { return m.id === id; }) || null;
  }

  var monument = getMonumentFromUrl();
  var introEl = document.querySelector(".monument-intro");
  var routeEl = document.querySelector(".route-section");
  var notFoundEl = document.getElementById("not-found");

  if (!monument) {
    introEl.hidden = true;
    routeEl.hidden = true;
    notFoundEl.hidden = false;
    document.title = "Monument introuvable — Fès el-Bali";
    return;
  }

  // ---- Remplissage de la fiche ----
  document.getElementById("page-title").textContent = monument.nom + " — Fès el-Bali";
  document.getElementById("m-categorie").textContent = monument.categorie;
  document.getElementById("m-nom").textContent = monument.nom;

  var descContainer = document.getElementById("m-description");
  descContainer.innerHTML = "";
  var paragraphs = Array.isArray(monument.description)
    ? monument.description
    : [monument.description];
  paragraphs.forEach(function (paragraphText) {
    var p = document.createElement("p");
    p.textContent = paragraphText;
    descContainer.appendChild(p);
  });

  document.getElementById("m-coords").textContent =
    "Coordonnées : " + monument.lat.toFixed(5) + ", " + monument.lon.toFixed(5);

  // Cas particulier : la fiche EST Bab Boujloud, le point de départ lui-même
  if (monument.id === BAB_BOUJLOUD.id) {
    var hint = document.querySelector(".route-hint");
    hint.textContent =
      "Bab Boujloud est le point de départ de référence : c'est ici que commencent tous les itinéraires du site.";
    document.getElementById("route-map").innerHTML = "";
    var map = L.map("route-map").setView([monument.lat, monument.lon], 17);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([monument.lat, monument.lon]).addTo(map).bindPopup(monument.nom).openPopup();
    return;
  }

  // ---- Carte d'itinéraire ----
  var routeMap = L.map("route-map").setView(
    [
      (BAB_BOUJLOUD.lat + monument.lat) / 2,
      (BAB_BOUJLOUD.lon + monument.lon) / 2
    ],
    16
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(routeMap);

  var startIcon = L.divIcon({
    className: "",
    html: '<svg width="26" height="26" viewBox="0 0 48 48" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))"><path d="M24 2 L29 17 L45 17 L32 27 L37 43 L24 33 L11 43 L16 27 L3 17 L19 17 Z" fill="#10577f" stroke="#2b241c" stroke-width="1"/></svg>',
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });
  var endIcon = L.divIcon({
    className: "",
    html: '<svg width="26" height="26" viewBox="0 0 48 48" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))"><path d="M24 2 L29 17 L45 17 L32 27 L37 43 L24 33 L11 43 L16 27 L3 17 L19 17 Z" fill="#c1622d" stroke="#2b241c" stroke-width="1"/></svg>',
    iconSize: [26, 26],
    iconAnchor: [13, 13]
  });

  // Tente d'utiliser le service de calcul d'itinéraire piéton (OSRM public).
  // En cas d'échec (pas de connexion Internet), on affiche un repli simple :
  // une ligne droite entre les deux points avec les deux marqueurs.
  var control;
  try {
    control = L.Routing.control({
      waypoints: [
        L.latLng(BAB_BOUJLOUD.lat, BAB_BOUJLOUD.lon),
        L.latLng(monument.lat, monument.lon)
      ],
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1",
        profile: "foot"
      }),
      createMarker: function (i, wp) {
        return L.marker(wp.latLng, { icon: i === 0 ? startIcon : endIcon }).bindPopup(
          i === 0 ? "Départ : Bab Boujloud" : "Arrivée : " + monument.nom
        );
      },
      lineOptions: { styles: [{ color: "#c1622d", weight: 5, opacity: 0.85 }] },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: true,
      collapsible: true,
      language: "fr"
    });
    control.on("routingerror", function () {
      fallbackStraightLine();
    });
    control.addTo(routeMap);
  } catch (e) {
    fallbackStraightLine();
  }

  function fallbackStraightLine() {
    L.marker([BAB_BOUJLOUD.lat, BAB_BOUJLOUD.lon], { icon: startIcon })
      .addTo(routeMap)
      .bindPopup("Départ : Bab Boujloud");
    L.marker([monument.lat, monument.lon], { icon: endIcon })
      .addTo(routeMap)
      .bindPopup("Arrivée : " + monument.nom);
    var line = L.polyline(
      [
        [BAB_BOUJLOUD.lat, BAB_BOUJLOUD.lon],
        [monument.lat, monument.lon]
      ],
      { color: "#c1622d", weight: 4, dashArray: "6 8" }
    ).addTo(routeMap);
    routeMap.fitBounds(line.getBounds(), { padding: [40, 40] });
  }
})();
