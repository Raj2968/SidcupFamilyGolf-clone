var cs = document.querySelector("#cursor")

var cb = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    cs.style.left= dets.x-10+"px"
    cs.style.top= dets.y-10+"px"
    cb.style.left= dets.x-200+"px"
    cb.style.top= dets.y-200+"px"
})



var h4all = document.querySelectorAll("#nav h4")
console.log(h4all)

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cs.style.scale = 2.5
        cs.style.border = "1px solid #fff"
        cs.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cs.style.scale = 1
        cs.style.border = "0px solid #95C11E"
        cs.style.backgroundColor = "#95C11E"
    })
})



gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller: "body",
        //markers: true,
        start: "top -10px",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -25%",
        end: "top  -70%",
        scrub: 3
    }
})


gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration:1,
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end: "top 70%",
        scrub: 2,
    } 
})

gsap.from(".card",{
    scale: 0.8,
    opacity: 0,
    duration: 0.2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    }
})

gsap.from("#col1",{
    y:-70,
    x:-70, 
    scrollTrigger:{
        trigger: "#col1",
        scroller:"body",
        // markers: true,
        start: "top 40%",
        end: "top 50%",
        scrub: 4,
    },
})

gsap.from("#col2",{
    y:70,
    x:70, 
    scrollTrigger:{
        trigger: "#col2",
        scroller:"body",
        // markers: true,
        start: "top 100%",
        end: "top 50%",
        scrub: 4,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#col2",
        scroller:"body",
        // markers: true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3,
    }
})