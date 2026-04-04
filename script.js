// I Gnewuch 
// ITMD 441-01 Undergraduate Student

(function () {
  console.log("Lab 4 script running...");

  
  // 1. HERO CHANGES
  // =========================

  // 1a. Change the main headline text in the hero section.
  const heroHeadline = document.querySelector(".hero h1");
  if (heroHeadline) {
    heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
  }

  // 1b. Change the subheadline text (with bold + italic styling).
  const heroSubText = document.querySelector(".hero p");
  if (heroSubText) {
    heroSubText.innerHTML =
      "<strong><em>Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.</em></strong>";
  }

  // 1c. Change the background image of the hero section.
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.style.backgroundImage =
      "url('https://picsum.photos/id/683/1280/720')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
  }

  // 1d. Remove the “Get Started” CTA button.
  const ctaButton = document.querySelector(".hero a");
  if (ctaButton) {
    ctaButton.remove();
  }

  // 1e. Change navbar background color to match footer.
  const navbar = document.querySelector("nav");
  const footer = document.querySelector("footer");
  if (navbar && footer) {
    const footerStyle = window.getComputedStyle(footer);
    navbar.style.backgroundColor = footerStyle.backgroundColor;
  }


  // 2. OUR SERVICES SECTION
  // =========================

  // 2a. Change all service icons color to #47C714.
  const serviceIcons = document.querySelectorAll(".material-symbols-outlined");
  serviceIcons.forEach((icon) => {
    icon.style.color = "#47C714";
  });

  // 2b. Change the digital marketing icon to 'ads_click'.
  const serviceCards = document.querySelectorAll(".service");
  serviceCards.forEach((card) => {
    const title = card.querySelector("h3");
    const icon = card.querySelector(".material-symbols-outlined");

    if (title && title.textContent.toLowerCase().includes("digital")) {
      if (icon) {
        icon.textContent = "ads_click";
      }
    }
  });

  
  // 3. SPECIALIZED MARKETING SOLUTIONS
  // =========================

  // 3a. Change layout to 4 columns at >= 1024px using injected CSS.
  const style = document.createElement("style");
  style.textContent = `
    @media (min-width: 1024px) {
      .solutions {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 20px;
      }
    }
  `;
  document.head.appendChild(style);

  // 3b. Change the Musicians image.
  const solutionCards = document.querySelectorAll(".solutions .card");
  solutionCards.forEach((card) => {
    const title = card.querySelector("h3");
    const img = card.querySelector("img");

    if (title && title.textContent.toLowerCase().includes("musician")) {
      if (img) {
        img.src = "https://picsum.photos/id/453/400/300";
      }
    }
  });


  // TEST OUTPUT
  // =========================
  console.log("All DOM updates applied successfully.");
})();
