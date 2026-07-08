// ===============================
// Portfolio Script
// Panyala Nandini
// ===============================

// Smooth Scroll

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// ===============================
// Active Navbar
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements=document.querySelectorAll(

".about-card,.skill-card,.project-card,.certificate-card,.contact-card"

);

function reveal(){

    revealElements.forEach(item=>{

        const windowHeight=window.innerHeight;

        const revealTop=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// Typing Effect
// ===============================

const typingText=[

"Python Full Stack Developer",

"Node.js Developer",

"AI Application Developer",

"REST API Developer"

];

const typing=document.querySelector(".hero-content h2");

let textIndex=0;

let charIndex=0;

let deleting=false;

function type(){

    const current=typingText[textIndex];

    if(!deleting){

        typing.textContent=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(type,1200);

            return;

        }

    }

    else{

        typing.textContent=current.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            textIndex++;

            if(textIndex>=typingText.length){

                textIndex=0;

            }

        }

    }

    setTimeout(type,deleting?40:90);

}

type();

// ===============================
// Scroll To Top
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

function update(){

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,10);

}

else{

counter.innerText=target;

}

}

update();

});

// ===============================
// Button Ripple
// ===============================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-button.offsetLeft-radius}px`;

circle.style.top=`${e.clientY-button.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

// ===============================
// Navbar Shadow
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("sticky");

}

else{

header.classList.remove("sticky");

}

});

// ===============================
// Fade Hero
// ===============================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity=1-window.scrollY/700;

});

// ===============================
// Console
// ===============================

console.log("🚀 Portfolio Loaded Successfully");