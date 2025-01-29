$(document).ready(function(){
    $("#top-header").click(function(){
      $("#about-info").slideToggle("slow");
    });
  });

function myfunction()
{
    var menuBt = document.getElementById("mymenu");
    if(menuBt.className === "nav-menu")
        {
            menuBt.className +="responsive";
        }else{
            menuBt.className ="nav-menu";
        }
} 

window.onscroll = function(){headerShadow();}
function headerShadow()
{
    const navh = document.getElementById("header");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        {
            navh.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
            navh.style.height = "70px";
            navh.style.lineHeight ="70px";
        }
        else{
        
            navh.style.boxShadow = "none";
            navh.style.height = "90px";
            navh.style.lineHeight ="90px";
        }
}


var typingeffect = new Typed(".typedtext",{
    strings : ["Yousra","Ghzaoui","Bhiri"],
    loop : true, 
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset:true
})



sr.reveal('.f-card',{})
sr.reveal('.f-name',{delay:100})
sr.reveal('.f-text-info',{delay:200})
sr.reveal('.f-text-btn',{delay:200})
sr.reveal('.f-image',{delay:200})
sr.reveal('.social_icons',{delay:200})
sr.reveal('.project-box',{interval:200})
sr.reveal('.top-header',{})

const srleft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset:true
})

srleft.reveal('.contact-info',{delay:100})
/* CHange active navbar */
const sections = document.querySelectorAll('section[id]');
function scrollActive()
{
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link');
            
            }
            else{
                document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link');
            
            }
    })
}
window.addEventListener('scroll', scrollActive);





