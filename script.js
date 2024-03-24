function loader() {
    var tl = gsap.timeline()
    tl.to("#video1", {
        top: "-100%",
        delay: 0.5,
        duration: 1,
        ease: "bounce.in"
    })
    tl.from("#video2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "bounce.in"
    }, "fe")
    tl.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.5,
    }, "fe")
    tl.to("#loader", {
        opacity: 0,
        
    })
    tl.to("#loader", {
       
        display:"none"
    })


}
// loader()

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elem = document.querySelectorAll(".elem")
elem.forEach(function (ele) {
    ele.addEventListener("mouseenter",function () {
      var img =  ele.getAttribute("data-img")
      document.querySelector("#page-2").style.backgroundImage=`url(${img})`
    })
})