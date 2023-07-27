// Line Moving Animation Expample Code 
// gsap.fromTo('.line',
//   { y: -100 },
//   { y: 200,
//     repeat: 20,
//     yoyo: true,
//     duration: 3,
//     ease: 'none'
// });

function LineW(){
    var lineW = gsap.timeline();

lineW.fromTo(".line-w",
{x:-100},
{x:105,
    repeat:-1,
    duration:1,
    yoyo:true,
    ease:"none",
}
)
}

LineW()

// ------------------------------


// Hooking Up the Animation to a ScrollTrigger 

// ScrollTrigger.create({
//     trigger:".lineSection",
//     start:"top 300",
//     end:"bottom 300",
//     markers:true,
//     animation:gsap.fromTo(".line",
//     {y:-100},
//     {y:200,
//     ease:"none"
//     }),
//     scrub:2,
// })
// Hooking Up the Animation to a ScrollTrigger 

// ------------------------------

// Apply this Effect to Multiple Elements 

// const lineSections = gsap.utils.toArray(".lineSection");

// lineSections.forEach((section, index) => {
//     let line = section.querySelector(".line");
//     ScrollTrigger.create({
//         trigger:section,
//         start:"top 300",
//         end:"bottom 150",
//         markers:true,
//         animation:gsap.fromTo(line,
//             {y:-100},
//             {y:200,ease:"none",
//             }),
//             scrub:true,
//     });
// });

// Apply this Effect to Multiple Elements 


// ------------------------------


// {Final Animation 

// Create One Trigger that 
// Scrubs One Staggered Animation}

const colors = ["#F2309B", "#25C7D9",  "#04BF8A", "#F2D338", "#F23030"];
gsap.set(".line",{background:gsap.utils.wrap(colors)})

const animation = gsap.fromTo(".line",
{y:-100},
{y:200, ease:"none", duration:1, stagger:0.7}
)

ScrollTrigger.create({
    trigger:".lineSections",
    start:"top 300",
    end:"bottom 300",
    markers:false,
    animation:animation,
    scrub:1
})

// Mobile Navbar 

const mobile_nav = document.querySelector(".mobile_navbar_icon");
const navbar = document.querySelector(".navbar");

const toggleNavbar = ()=>{
    navbar.classList.toggle("active");
}
mobile_nav.addEventListener("click",()=> toggleNavbar())


// LOADER CODE 
var tl = gsap.timeline();

function time(){
    var a = 0
    setInterval( function() {
        a = a + Math.floor(Math.random()*15)
        if(a<100){
        document.querySelector(".loader h1").innerHTML = a+"%"
    }else{
        a=100
        document.querySelector(".loader h1").innerHTML = a+"%"
        }
    },150);
}


tl.to(".loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})

tl.to(".loader",{
    y:"-100vh",
    opacity:0,
    duration:0.8,
    delay:1,
})
// LOADER CODE 