gsap.from(".carousel-images img",{
    
    opacity:0,
    duration:2,
})

gsap.from(".carousel-caption h5",{
    delay:0.4,
    opacity:0,
    duration:0.5,
    y:40,
})
gsap.from(".carousel-caption h2",{
    delay:0.4,
    opacity:0,
    duration:1.5,
    y:5,
    z:60,
})

gsap.from(".carousel-caption p",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60,
})
gsap.from(".banner-button",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60,
})




// locomotive scrolltrigger
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()



// scroll to top





// time and date picker

flatpickr("input[type=date-local]", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});
flatpickr("input[type=time-local]",{
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
})

 


//for tooltip//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//search 
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}