// ===================== filtre de la galery ======================= //

/*const buttonsFiltre = document.querySelectorAll(".galerie-filtres button");

const photos = document.querySelectorAll(".photo-card");

buttonsFiltre.forEach(function(bouton){
    bouton.addEventListener("click", function(){

        // retirer le buton actif 
        buttonsFiltre.forEach(function(btn){
            btn.classList.remove("filtre-actif");
        })
        // activer le bouton cliquer 

        bouton.classList.add("filtre-actif");
        // recuperer la categorie 
        const categorie = bouton.textContent.toLowerCase().trim();

        // afficher ou cacher les photos 

        photos.forEach(function(photo){
            const categoriePhoto = photo.dataset.categorie
            if (categorie === "tous" || categoriePhoto === categorie){
                photo.style.display ="block";
            } else {
                photo.style.display = "none"
            }
        });
    });
});


// ==========================  ouvrir une photo en grand ========================== //

const photoModal = document.querySelector("#photoModal");

const modalImage = document.querySelector("#modalImage");

const modalCaption =document.querySelector("#modalCaption");

const modalClose = document.querySelector("#modalClose");

photos.forEach(function(photo){
    photo.addEventListener("click", function(){
        const image = photo.querySelector("img");
        const caption = photo.querySelector("figcaption");

        modalImage.src = image.src;
        modalCaption.textContent = caption.textContent;

        photoModal.style.display = "flex";
    });
});

modalClose.addEventListener("click", function(){
    photoModal.style.display = "none";
});

// ================= validation du formulaire contact ======================== //
/*
const contactForm = document.querySelector(".envoyer-button");

if (contactForm){
    contactForm.addEventListener("click", function (){
        //  empeche le rechargement de la page

        //event.preventDefault();

        const nom = document.querySelector("#nom").value.trim();
        const email = document.querySelector("#email").value.trim();
        const sujet = document.querySelector("#sujet").value.trim();
        const message = document.querySelector("#message").value.trim();
        const formMessage  = document.querySelector("#formMessage").value.trim();

        // verification du nom 

        if (nom === ""){
           formMessage.textContent="veuillez entrer votre nom.";
           alert("bonjour");
            return;
        }

        if (email === ""){
            formMessage.textContent="veuillez entrer votre email.";
            return;
        }

        if (sujet === ""){
            formMessage.textContent="veuillez choisir votre sujet.";
            return;
        }

        if (message === ""){
            formMessage.textContent="veuillez entrer votre message.";
            return;
        }

        // si tout est correct 

        formMessage.textContent = "votre message est pret a etre envoye.";

        //contactForm.reset();

    });
}*/

//=============================  menu mobile =======================================//

const boutonMenu = document.querySelector(".menu-toggle");

const menuNavigation = document.querySelector(".nav-links");

if (boutonMenu && menuNavigation){
    boutonMenu.addEventListener("click", function(){
        menuNavigation.classList.toggle("menu-ouvert");

        if (menuNavigation.classList.contains("menu-ouvert")) {

            boutonMenu.innerHTML =`<i class="fa-solid fa-xmark"></i>`;
            menuNavigation.style.display="block";
            boutonMenu.setAttribute("aria-label","fermer le menu");
        } else {
            fermerMenu();
        }
    })

    function fermerMenu() {
        menuNavigation.classList.remove("menu-ouvert");
            boutonMenu.innerHTML ='<i class="fa-solid fa-bars"></i>';
            menuNavigation.style.display="none"
            boutonMenu.setAttribute("aria-label", "ouvrir le menu")
    }

    // fermer le menu apres avoir clique sur un lien 

    const liensMenu = menuNavigation.querySelectorAll("a");
    liensMenu.forEach(function(lien) {
        lien.addEventListener("click",function(){
            fermerMenu()
        })
    })

    // fermer en cliquant en dehors 
    /*
    document.addEventListener("click", function (event){
        const clicSurMenu = menuNavigation.contains(event.target);
        const clicSurBouton = boutonMenu.contains(event.target);

        if (menuNavigation.classList.contains("menu-ouvert") && !clicSurMenu && !clicSurBouton){
            fermerMenu();
        }
    }) */


    //  fermer avec la touche echap 

    document.addEventListener("keydown", function(event){
        if (event.key === "Escape") {
            fermerMenu();
        };
    });

    // reinitialiser lorsque l'ecran redevient grand 

    window.addEventListener("resize", function(){
        if ( window.innerWidth > 800) {
            fermerMenu();
        }
    })

}