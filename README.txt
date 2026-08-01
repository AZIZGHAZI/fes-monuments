SITE — MONUMENTS HISTORIQUES DE FÈS
====================================

CONTENU DU DOSSIER
-------------------
index.html          Page d'accueil : carte générale + tableau des 27 monuments
monument.html        Modèle de fiche monument (le contenu change selon ?id=...)
css/style.css        Feuille de style du site
js/data.js            Données des monuments (nom, catégorie, coordonnées, description)
js/app.js             Script de la page d'accueil (carte + tableau)
js/monument.js        Script de la fiche monument (détail + itinéraire depuis Bab Boujloud)

INSTALLATION SOUS XAMPP
-------------------------
1. Copiez l'intégralité du dossier "fes-monuments" dans :
       C:\xampp\htdocs\fes-monuments        (Windows)
       /Applications/XAMPP/htdocs/fes-monuments   (macOS)
       /opt/lampp/htdocs/fes-monuments      (Linux)

2. Démarrez le module Apache depuis le panneau de contrôle XAMPP.

3. Ouvrez un navigateur à l'adresse :
       http://localhost/fes-monuments/

AUCUNE BASE DE DONNÉES NI PHP N'EST NÉCESSAIRE : le site est entièrement
statique (HTML/CSS/JavaScript). Apache sert simplement les fichiers.

CONNEXION INTERNET
-------------------
La carte (fond de carte OpenStreetMap) et le calcul d'itinéraire piéton
(service public OSRM) sont chargés depuis Internet au moment de l'affichage.
Un poste XAMPP sans accès Internet affichera les pages et le tableau, mais
pas les cartes. Si le service d'itinéraire est indisponible, la fiche
affiche automatiquement une ligne droite entre Bab Boujloud et le monument
avec les deux points marqués.

AJOUTER OU MODIFIER UN MONUMENT
---------------------------------
Ouvrez js/data.js et ajoutez un objet dans le tableau MONUMENTS, sur ce
modèle :

{
  id: "identifiant-unique-sans-espace",
  nom: "Nom affiché",
  categorie: "Porte monumentale | Médersa | Musée | ...",
  lat: 34.xxxxx,
  lon: -4.xxxxx,
  description: "Texte de présentation."
}

La page d'accueil (tableau + carte) et les fiches individuelles se mettent
à jour automatiquement, sans toucher au HTML.

CHANGER LE POINT DE DÉPART DES ITINÉRAIRES
---------------------------------------------
Modifiez la constante BAB_BOUJLOUD en haut de js/data.js.
