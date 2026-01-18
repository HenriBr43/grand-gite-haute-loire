        let slideIndex = 1;
        let slideTimer;

        // Attendre que la page charge
        document.addEventListener("DOMContentLoaded", function() {
            if (document.getElementsByClassName("mySlides").length > 0) {
                showSlides(slideIndex);
                slideTimer = setInterval(function(){ plusSlides(1) }, 5000); // 5 secondes
            }
        });

        function plusSlides(n) {
            clearInterval(slideTimer); // Arrête le timer quand on clique
            showSlides(slideIndex += n);
            slideTimer = setInterval(function(){ plusSlides(1) }, 5000); // Relance
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (!slides || slides.length === 0) return;
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slides[slideIndex-1].style.display = "block";  
        }
