// 1. Le code HTML du HEADER
const headerHTML = `
<header>
    <h1>NOS GÎTES EN HAUTE-LOIRE</h1>
    <nav>
        <a href="index.html">Accueil</a>
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