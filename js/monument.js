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

  // ---- Photo du monument (ou repli si aucune photo n'est renseignée) ----
  var photoImg = document.getElementById("m-photo");
  var photoPlaceholder = document.getElementById("m-photo-placeholder");
  var photoCredit = document.getElementById("m-photo-credit");
  if (monument.image && monument.image.url) {
    photoImg.src = monument.image.url;
    photoImg.alt = monument.nom;
    photoImg.hidden = false;
    photoImg.onerror = function () {
      // L'image n'a pas pu être chargée (pas de connexion, fichier déplacé…) : repli propre.
      photoImg.hidden = true;
      photoPlaceholder.hidden = false;
      photoCredit.innerHTML = "";
    };
    photoPlaceholder.hidden = true;
    if (monument.image.credit) {
      photoCredit.innerHTML = monument.image.creditUrl
        ? '<a href="' + monument.image.creditUrl + '" target="_blank" rel="noopener">' + monument.image.credit + "</a>"
        : monument.image.credit;
    }
  } else {
    photoImg.hidden = true;
    photoPlaceholder.hidden = false;
    photoCredit.innerHTML = "";
  }

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
    var summaryStart = document.getElementById("route-summary");
    if (summaryStart) summaryStart.textContent = "Vous êtes au point de départ : distance 0 km.";
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

  // Distance à vol d'oiseau (formule de haversine) utilisée pour une
  // estimation de secours si le service de calcul d'itinéraire est indisponible.
  function distanceMetres(lat1, lon1, lat2, lon2) {
    var R = 6371000;
    var toRad = function (d) { return (d * Math.PI) / 180; };
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }

  function formatDuree(minutesTotal) {
    var m = Math.round(minutesTotal);
    if (m < 60) return m + " min";
    var h = Math.floor(m / 60);
    var reste = m % 60;
    return h + " h" + (reste ? " " + reste + " min" : "");
  }

  var summaryEl = document.getElementById("route-summary");

  // Tente d'utiliser le service de calcul d'itinéraire piéton (serveur OSRM
  // dédié « à pied » de FOSSGIS/OpenStreetMap.de). En cas d'échec (pas de
  // connexion Internet), on affiche un repli : ligne droite entre les deux
  // points et estimation de la durée de marche à vol d'oiseau.
  var control;
  try {
    control = L.Routing.control({
      waypoints: [
        L.latLng(BAB_BOUJLOUD.lat, BAB_BOUJLOUD.lon),
        L.latLng(monument.lat, monument.lon)
      ],
      router: L.Routing.osrmv1({
        serviceUrl: "https://routing.openstreetmap.de/routed-foot/route/v1",
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
      collapsible: false,
      language: "fr"
    });
    control.on("routesfound", function (e) {
      var route = e.routes[0];
      if (summaryEl && route && route.summary) {
        summaryEl.textContent =
          "À pied depuis Bab Boujloud : environ " +
          (route.summary.totalDistance / 1000).toFixed(1) +
          " km, soit " +
          formatDuree(route.summary.totalTime / 60) +
          " de marche.";
      }
    });
    control.on("routingerror", function () {
      fallbackStraightLine();
    });
    control.addTo(routeMap);
    addRoutingCloseButton(control, routeMap);
  } catch (e) {
    fallbackStraightLine();
  }

  // Ajoute une croix « × » en haut de la boîte d'itinéraire pour la fermer,
  // ainsi qu'un petit bouton flottant permettant de la rouvrir ensuite.
  function addRoutingCloseButton(ctrl, map) {
    var container = ctrl.getContainer();
    if (!container) return;

    var closeBtn = document.createElement("a");
    closeBtn.href = "#";
    closeBtn.className = "routing-close";
    closeBtn.setAttribute("aria-label", "Fermer la fenêtre d'itinéraire");
    closeBtn.setAttribute("title", "Fermer");
    closeBtn.innerHTML = "&times;";
    container.insertBefore(closeBtn, container.firstChild);

    var reopenControl = L.control({ position: "topright" });
    reopenControl.onAdd = function () {
      var wrap = L.DomUtil.create("div", "routing-reopen-wrap");
      var btn = L.DomUtil.create("button", "routing-reopen", wrap);
      btn.type = "button";
      btn.textContent = "Afficher l'itinéraire";
      wrap.hidden = true;
      L.DomEvent.disableClickPropagation(wrap);
      L.DomEvent.on(btn, "click", function () {
        container.style.display = "";
        wrap.hidden = true;
      });
      wrap._toggle = wrap;
      return wrap;
    };
    reopenControl.addTo(map);
    var reopenWrap = reopenControl.getContainer();

    L.DomEvent.on(closeBtn, "click", function (e) {
      L.DomEvent.stop(e);
      container.style.display = "none";
      reopenWrap.hidden = false;
    });
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

    if (summaryEl) {
      var vol = distanceMetres(BAB_BOUJLOUD.lat, BAB_BOUJLOUD.lon, monument.lat, monument.lon);
      var minutesEstimees = (vol / 1000 / 4.5) * 60; // vitesse de marche moyenne 4,5 km/h
      summaryEl.textContent =
        "Itinéraire piéton indisponible pour le moment (connexion Internet requise) : " +
        "à vol d'oiseau, " +
        monument.nom +
        " se trouve à environ " +
        (vol / 1000).toFixed(1) +
        " km de Bab Boujloud, soit environ " +
        formatDuree(minutesEstimees) +
        " de marche dans la médina.";
    }
  }
})();
