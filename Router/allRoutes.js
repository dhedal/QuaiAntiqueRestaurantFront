import Route from "./route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", ""),
    new Route("/galerie", "Galerie", "/pages/Galerie.html", ""),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ""),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ""),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", ""),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ""),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ""),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ""),
];

// Le titre s'affiche comme ceci: Route.titre - websitename
export const websiteName = "Quai Antique";