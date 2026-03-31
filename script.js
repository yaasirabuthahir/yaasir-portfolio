window.addEventListener("load", () => {

    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 2000); // 2 sec
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});




//nav
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// Typing effect
const text = "Frontend Developer | UI Builder | Web Enthusiast";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();

// Scroll
function scrollToProjects(){
    document.getElementById("projects").scrollIntoView({
        behavior:"smooth"
    });
}

// SCROLL EFFECT
window.addEventListener("scroll", function(){
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// MENU TOGGLE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


//skills

const skillSection = document.querySelector("#skills");
let started = false;

window.addEventListener("scroll", () => {

    const top = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 100 && !started){

        started = true;

        document.querySelector(".html").style.width = "90%";
        document.querySelector(".css").style.width = "85%";
        document.querySelector(".js").style.width = "75%";
        document.querySelector(".php").style.width = "70%";
        document.querySelector(".mysql").style.width = "70%";
        document.querySelector(".git").style.width = "65%";
        document.querySelector(".python").style.width = "65%";
    }

});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 80){
            el.classList.add("active");
        }
    });
});



const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Portfolio Contact from " + name;

    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=yaasirabuthahir@gmail.com&su=${subject}&body=${body}`;

    const alertBox = document.getElementById("mailAlert");

    // show alert
    alertBox.classList.add("show");

    // wait 3 sec then open gmail
    setTimeout(() => {
        window.open(gmailURL, "_blank");
        alertBox.classList.remove("show");
    }, 3000);

});

