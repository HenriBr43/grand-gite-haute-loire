// 1. Le code HTML du HEADER
const headerHTML = `
<style>
    /* Style spécifique pour mettre en avant le bouton Découvrir */
    .nav-highlight {
        background-color: #ff9800 !important; /* Orange vif pour ressortir sur le vert */
        color: white !important;
        border-radius: 20px;
        box-shadow: 0 0 5px rgba(255, 152, 0, 0.4); /* Ombre réduite pour éviter le chevauchement */
        position: relative;
        overflow: hidden;
        border: 1px solid #f57c00;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        display: inline-block; /* Sécurité */
        vertical-align: middle;
    }
    
    .nav-highlight:hover {
        background-color: #f57c00 !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(255, 152, 0, 0.5); /* Ombre au survol contenue */
    }

    /* Animation de reflet (Faisceau fin) */
    .nav-highlight::after {
        content: '';
        position: absolute;
        top: 0;
        left: -70px; /* Départ hors champ */
        width: 50px; /* Largeur fixe (faisceau) au lieu de 100% */
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
        transform: skewX(-20deg); /* Inclinaison pour un effet dynamique */
        animation: shine 4s infinite; /* Animation fluide avec pause */
    }

    @keyframes shine {
        0% { left: -70px; }
        20% { left: 150%; } /* Traverse rapidement */
        100% { left: 150%; } /* Pause avant de recommencer */
    }
</style>
<header>
    <h1>NOS GÎTES EN HAUTE-LOIRE</h1>
    <nav>
        <a href="index.html">Accueil</a>
        <a href="decouvrir.html" class="nav-highlight">✨ Découvrir le coin</a>
        <a href="lessources.html">Les Sources</a>
        <a href="estaou.html">L'Estaou</a>
        <a href="rabiouze.html">Le Rabiouze</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>
`;

// 2. Le code HTML du FOOTER
const footerHTML = `
<footer>
    <p>© 2025 – Gîtes en Haute-Loire | <a href="mentions.html" style="color:inherit;">Mentions légales</a></p>
</footer>
`;

// 3. Fonction qui injecte le code au bon endroit
document.addEventListener("DOMContentLoaded", function() {
    // Insérer le Header
    const headerPlace = document.getElementById("header-placeholder");
    if(headerPlace) headerPlace.innerHTML = headerHTML;

    // Insérer le Footer
    const footerPlace = document.getElementById("footer-placeholder");
    if(footerPlace) footerPlace.innerHTML = footerHTML;

    // 4. Petit bonus : Surligner la page active automatiquement
    const currentPage = window.location.pathname.split("/").pop(); // Récupère le nom du fichier (ex: rabiouze.html)
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        // Si le lien correspond à la page actuelle, on ajoute la classe "active"
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});