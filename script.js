document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons and sections
    const buttons = document.querySelectorAll(".timebtn button");
    const sections = document.querySelectorAll(".menu");

    // Hide all sections except the first one (optional: depends on what you want to show initially)
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? "block" : "none";
    });

    // Add event listeners to each button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the clicked section
            const targetSection = document.querySelector(`#${this.innerText}`);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the Contacts button and footer
    const contactsButton = document.querySelector('a[href="#contacts"]');
    const footer = document.getElementById('#contacts');

    // Add click event listener to the Contacts button
    contactsButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Scroll to the footer section smoothly
        footer.scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Adjust offset if necessary
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });