// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

const hiddenElements =
document.querySelectorAll(
"section, .skill-card, .service-card, .project-card"
);

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});


// =========================
// SMOOTH BUTTON EFFECT
// =========================

const buttons =
document.querySelectorAll(
".btn, .project-buttons a"
);

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform =
        "translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform =
        "translateY(0px)";

    });

});


// =========================
// CONSOLE MESSAGE 😎
// =========================

console.log(
"Welcome to Adan Fatima Portfolio 🚀"
);