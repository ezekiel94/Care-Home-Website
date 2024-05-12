const menuBtn = document.getElementById("nav-menu-btn");
const navLinks = document.getElementById("nav-bar-pages-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});


const housingSupportAnswer = document.querySelectorAll(".right-side-support-section");


housingSupportAnswer.forEach(housingSupportAnswer => {
    housingSupportAnswer.addEventListener("click", () => {
        housingSupportAnswer.classList.toggle("active"); 
    })
   
})

// Using JS for the scroll


    const whyUsLink = document.querySelector('.footer-links a[href="#why-us"]'); // Select the "Why Us" link

    whyUsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (scrolling to top)
        const whyUsSection = document.getElementById('why-us');
        whyUsSection.scrollIntoView({ behavior: 'smooth' });  // Smoothly scroll to the section
    });



// Header text scrolling
const scrollRevealOption = {
    distance : "50px",
    origin : "bottom",
    duration : 1000,
};

// Header container text scrolling

ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header-container p", {
    ...scrollRevealOption,
    // delay: 500,
    delay: 200,
  });
  
  // Reveal button last (optional for visual order)
  ScrollReveal().reveal(".header-container button", {
    ...scrollRevealOption,
    delay: 800,
  });


  // Who We Are

  ScrollReveal().reveal(".who-we-are-content .section-header", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".who-we-are-content .section-description", {
    ...scrollRevealOption,
    delay: 2000,
  });

  // Why Choose Evergreen section

  ScrollReveal().reveal(".why-choose-evergreen .section-header", {
    ...scrollRevealOption,
    // delay: 2900,
    delay: 2800,
  });

  ScrollReveal().reveal(".why-choose-evergreen .new-section-description", {
    ...scrollRevealOption,
    // delay: 2500,
    delay: 2800,
  });

  ScrollReveal().reveal(".why-choose-evergreen .why-they-choose-us", {
    ...scrollRevealOption,
    // delay: 3000,
    delay: 3200,
  });

  // About Us Section

  ScrollReveal().reveal(".services-container", scrollRevealOption);

  ScrollReveal().reveal(".services-container-for-img-and-text .why-they-choose-us-services-container", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".services-img img", {
    ...scrollRevealOption,
    origin: "right",
  });

   // Testimonies Section

   ScrollReveal().reveal(".testimonies-container-for-text-and-avatar .top-testimonies-cotent", {
    ...scrollRevealOption,
    origin: "left",
  });

   ScrollReveal().reveal(".testimonies-container-for-text-and-avatar .top-testimonies-cotent", {
    ...scrollRevealOption,
    origin: "left",
  });

   ScrollReveal().reveal(".testimonies-container-for-text-and-avatar .testimonies-quotes-container", {
    ...scrollRevealOption,
    origin: "left",
  });

   ScrollReveal().reveal(".testimonies-container-for-text-and-avatar .testimonies-text-avatar-section", {
    ...scrollRevealOption,
    origin: "left",
  });

  
  ScrollReveal().reveal(".testimonies-img img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".scrolling-container", {
    ...scrollRevealOption,
    origin: "bottom",
  });

// Support Section

  ScrollReveal().reveal(".support-section .support-content", {
    ...scrollRevealOption,
    origin: "bottom",
  });





