var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
let scrollY = 0
var h4all = document.querySelectorAll(".navh4")

document.addEventListener("mousemove", (dets) => {
    

    crsr.style.left = dets.x -12+"px"
    crsr.style.top = dets.y  -12+"px"

    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y  -200+"px"
})

document.addEventListener("scroll", (dets) => {
    scrollY = window.scrollY
})

h4all.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", () => {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})



gsap.to("#topnav", {
    backgroundColor: "#000",
    height: "24vh",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#topnav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end:"top -70%",   
        scrub: 2 
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

gsap.from("#wait", {
    y: 100,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 90%",
        end: "top 75%",
        scrub: 4
    }
})