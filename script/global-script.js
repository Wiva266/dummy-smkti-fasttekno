window.addEventListener("load", function () {
    setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    }, 2000);
});

fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar-container").innerHTML = data;
    const script = document.createElement("script");
    script.src = "script/navbar.js";
    document.body.appendChild(script);

    // Burger Nav
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    if (burgerMenu && mobileNav) {
        burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.toggle("active");
            mobileNav.classList.toggle("active");
        });
    } else {
        console.warn("Elemen burger-menu atau mobile-nav tidak ditemukan");
    }

    const navbar = document.querySelector('.navbar');
    const showBtn = document.getElementById('showNavbarBtn');
    
    // Scrolled Navbar
    let lastScrollY = window.scrollY;
    let isNavbarHidden = false;
    let isAnimating = false;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (isAnimating) return;
        
        if (currentScroll > lastScrollY && currentScroll > 80 && !isNavbarHidden) {
            // scroll down
            isAnimating = true;
            navbar.classList.remove('show-on-scroll');
            navbar.classList.add('hide-on-scroll');
            isNavbarHidden = true;
        
            setTimeout(() => {
            showBtn.classList.add('visible');
            isAnimating = false;
            }, 200);
        }
        
        if (currentScroll < lastScrollY && isNavbarHidden) {
            // scroll up
            isAnimating = true;
            showBtn.classList.remove('visible');
        
            setTimeout(() => {
            navbar.classList.remove('hide-on-scroll');
            navbar.classList.add('show-on-scroll');
            isNavbarHidden = false;
            isAnimating = false;
            }, 0);
        }
        
        lastScrollY = currentScroll;
        });
        
        showBtn.addEventListener('click', () => {
        if (!isNavbarHidden || isAnimating) return;
        
        isAnimating = true;
        showBtn.classList.remove('visible');
        
        setTimeout(() => {
            navbar.classList.remove('hide-on-scroll');
            navbar.classList.add('show-on-scroll');
            isNavbarHidden = false;
            isAnimating = false;
        }, 100);
    });
});

// Get the button
let toTopBtn = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.classList.remove("hidden");
  } else {
    toTopBtn.classList.add("hidden");
  }
};

// Scroll to the top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
