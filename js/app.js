/* Page d'accueil : carte générale + tableau des monuments */
(function () {
  "use strict";

  // ---- Carte ----
  var map = L.map("map", { scrollWheelZoom: false }).setView(
    [BAB_BOUJLOUD.lat, BAB_BOUJLOUD.lon],
    15
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var starIcon = function (color) {
    return L.divIcon({
      className: "",
      html:
        '<svg width="26" height="26" viewBox="0 0 48 48" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))">' +
        '<path d="M24 2 L29 17 L45 17 L32 27 L37 43 L24 33 L11 43 L16 27 L3 17 L19 17 Z" fill="' +
        color +
        '" stroke="#2b241c" stroke-width="1"/></svg>',
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -10]
    });
  };

  var icon = starIcon("#c1622d");
  var boujloudIcon = starIcon("#10577f");

  MONUMENTS.forEach(function (m) {
    var isStart = m.id === BAB_BOUJLOUD.id;
    var marker = L.marker([m.lat, m.lon], {
      icon: isStart ? boujloudIcon : icon,
      title: m.nom
    }).addTo(map);

    marker
      .bindTooltip(m.nom, {
        permanent: true,
        direction: "right",
        offset: [10, 0],
        className: "map-label"
      })
      .openTooltip();

    marker.bindPopup(
      '<p class="popup-cat">' +
        m.categorie +
        "</p>" +
        '<p class="popup-title">' +
        m.nom +
        "</p>" +
        '<a class="popup-link" href="monument.html?id=' +
        encodeURIComponent(m.id) +
        '">Voir la fiche →</a>'
    );
  });

  // ---- Tableau ----
  var tbody = document.querySelector("#monuments-table tbody");
  var rows = MONUMENTS.slice()
    .sort(function (a, b) { return a.nom.localeCompare(b.nom, "fr"); })
    .map(function (m) {
      var tr = document.createElement("tr");

      var tdName = document.createElement("td");
      tdName.className = "mon-name";
      tdName.textContent = m.nom;

      var tdCat = document.createElement("td");
      var badge = document.createElement("span");
      badge.className = "mon-badge";
      badge.textContent = m.categorie;
      tdCat.appendChild(badge);

      var tdCoords = document.createElement("td");
      tdCoords.className = "mon-coords";
      tdCoords.textContent = m.lat.toFixed(5) + ", " + m.lon.toFixed(5);

      var tdLink = document.createElement("td");
      tdLink.className = "mon-link";
      var a = document.createElement("a");
      a.href = "monument.html?id=" + encodeURIComponent(m.id);
      a.textContent = "Voir la fiche →";
      tdLink.appendChild(a);

      tr.appendChild(tdName);
      tr.appendChild(tdCat);
      tr.appendChild(tdCoords);
      tr.appendChild(tdLink);
      return tr;
    });

  rows.forEach(function (tr) { tbody.appendChild(tr); });
})();
