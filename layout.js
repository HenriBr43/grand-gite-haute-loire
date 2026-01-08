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

    /* Style du logo dans le header */
    .logo-header {
        height: 80px; /* AGRANDI (était 60px) */
        width: auto;
        margin-right: 15px; /* Espace entre le logo et le texte */
        border-radius: 5px; /* Légers bords arrondis pour faire propre */
        border: 2px solid rgba(255,255,255,0.3); /* Petit contour discret */
        transition: transform 0.3s ease;
        padding: 2px; /* Padding réduit pour maximiser l'image */
        background-color: white; /* Fond blanc pour bien faire ressortir le logo */
    }

    .logo-header:hover {
        transform: scale(1.05); /* Petit effet au survol du logo */
    }
    
    .header-title-group {
        display: flex;
        align-items: center;
    }

    /* Lien autour du logo pour ne pas avoir de soulignement par défaut */
    .logo-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }
</style>
<header>
    <div class="header-title-group">
        <!-- LE LOGO EST ICI - CLIQUABLE VERS INDEX.HTML -->
        <a href="index.html" class="logo-link" title="Retour à l'accueil">
            <img src="images/logos/ancienlogogite.jpeg" alt="Logo Gîtes Boyer" class="logo-header">
        </a>
        <h1>NOS GÎTES EN HAUTE-LOIRE</h1>
    </div>
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
    const currentPage = window.location.pathname.split("/").pop(); // Récupère le nom du fichier
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        // Si le lien correspond à la page actuelle, on ajoute la classe "active"
        // On gère aussi le cas où "index.html" est la page par défaut (racine /)
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });

    // 5. AJOUT DU FAVICON (LOGO D'ONGLET) AUTOMATIQUE
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'images/logos/ancienlogogite.jpeg'; // Ton image
    document.head.appendChild(link);
});