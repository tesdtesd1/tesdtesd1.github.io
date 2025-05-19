// Add interactivity here if needed, e.g., smooth scrolling for navigation
   document.querySelectorAll('nav a').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
