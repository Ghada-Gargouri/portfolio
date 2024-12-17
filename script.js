function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


    // Initialiser EmailJS
    emailjs.init("niZUjqQzRkAVJpXW0");

    // Ajouter l'écouteur d'événements au formulaire
    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('contact-form');
      
      if (form) {
        form.addEventListener('submit', function(event) {
          event.preventDefault(); // Empêcher le rechargement de la page

          const formData = new FormData(form);

          // Envoyer les données via EmailJS
          emailjs.sendForm('service_gwqkz8o', 'template_o1qspya', form)
            .then(function(response) {
              console.log("SUCCESS!", response.status, response.text);
              alert("Votre message a été envoyé avec succès !");
              form.reset(); // Réinitialiser le formulaire
            })
            .catch(function(error) {
              console.error("FAILED...", error);
              alert("Une erreur est survenue. Veuillez réessayer.");
            });
        });
      } else {
        console.error("Formulaire introuvable !");
      }
    });
  

 

    
    