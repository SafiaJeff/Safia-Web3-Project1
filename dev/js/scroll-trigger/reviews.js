//text
var textXPercent =5;
var photoXPercent =-5;
var reviewTimeline = gsap.timeline();

reviewTimeline.from("#marlena-quote", {alpha:0, xPercent:textXPercent},"marlena")
.from("#marlena", {alpha:0, xPercent:photoXPercent},"marlena")
                .from("#peter-quote", {alpha:0, xPercent:textXPercent},"peter")
.from("#peter", {alpha:0, xPercent:photoXPercent},"peter")
                .from("#devyn-quote", {alpha:0, xPercent:textXPercent},"devyn")
.from("#devyn", {alpha:0, xPercent:photoXPercent},"devyn")


ScrollTrigger.create({
    trigger: "#reviews-reviews",
    start: "top 40%",
    end: "bottom 70%",
    animation: reviewTimeline,
    toggleActions: "restart pause none none",
    scrub: .5,
    // markers: true,
    id:"review-text"
});

