document.addEventListener("DOMContentLoaded", () => {
    // Icons
    const sunIcon = document.querySelector(".sun");
    const moonIcon = document.querySelector(".moon");

    // Function to toggle theme
    const toggleTheme = () => {
        userTheme = userTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", userTheme);
        applyThemeStyles();
        iconToggle();
    };

    // Function to apply theme styles
    const applyThemeStyles = () => {
        const root = document.documentElement;
        if (userTheme === "dark") {
            root.style.setProperty("--color-background", "38deg 80% 2%");
            root.style.setProperty("--color-text", "42deg 74% 94%");
            root.style.setProperty("--color-secondary-100", "177deg 85% 8%");
            root.style.setProperty("--color-secondary-200", "176deg 74% 26%");
            root.style.setProperty("--color-accent", "223deg 75% 38%");
        } else {
            root.style.setProperty("--color-background", "37deg 80% 98%");
            root.style.setProperty("--color-text", "42deg 74% 6%");
            root.style.setProperty("--color-secondary-100", "209deg 100% 95%");
            root.style.setProperty("--color-secondary-200", "176deg 74% 74%");
            root.style.setProperty("--color-accent", "223deg 75% 62%");
            // ... add other light mode styles
        }
    };

    // Function to toggle icon visibility
    const iconToggle = () => {
        moonIcon.classList.toggle("hidden", userTheme === "dark");
        sunIcon.classList.toggle("hidden", userTheme === "light");
    };

    // Function to get system theme
    const getSystemTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    // Theme vars
    let userTheme = localStorage.getItem("theme") || getSystemTheme();

    // Initial Theme Check
    applyThemeStyles();

    // Initial Icon Display based on user's last choice
    iconToggle();

    // Manual Theme Switch
    const switchTheme = () => {
        toggleTheme();
    };

    // Call theme switch on clicking the buttons
    sunIcon.addEventListener("click", switchTheme);
    moonIcon.addEventListener("click", switchTheme);

    // SCROLLING 

    // Scroll home
    const homeButton = document.getElementById("homeButton");
    const logo = document.getElementById("logo");

    // Scroll to top when the logo is clicked
    if (logo) {
        logo.addEventListener("click", function () {
            scrollToTop();
        });
    }

    // Scroll to top when the home button is clicked
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default behavior of the anchor tag
            scrollToTop();
        });
    }

    // Function to scroll to top smoothly
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    /*========== CARDS SWIPER ==========*/
    let swiperCards = new Swiper('.card-content', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
      
        // Pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            600:{
                slidesPerView:2,
            },
            968:{
                slidesPerView:3,
            }
        }
      
      });

        

});
