const starTimeline = gsap.timeline();

gsap.set(".stars",{alpha:0, yPercent: 100});

starTimeline.to(".stars",{duration:0.5, alpha:1, yPercent: 0, stagger:0.2});

ScrollTrigger.create({
    animation: starTimeline,
    toggleActions: "play none none none",
    trigger: "#stars",
    start: "top 60%",
    end: "bottom 60%",
    // markers: true,
    id: "stars"
    // scrub: 1
});