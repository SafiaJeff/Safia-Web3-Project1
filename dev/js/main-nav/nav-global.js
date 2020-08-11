var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav", {
    y: -navHeight
})

var mainNavTimeline = gsap.timeline({
    paused: true
})
mainNavTimeline.to("#main-nav", {
    duration: 0.25,
    y: 0
});

//reset the transformOrigin point for each line
gsap.set(".lines", {
    transformOrigin: "center"
});



// function to handle the showing and hiding of the main-nav
function hideShowMainNav() {

    console.log("show me the menu!");
    console.log(canYouSeeTheMenu + " can you see the menu value");

    if (canYouSeeTheMenu === false) {

        burgerAnimationTimeLine.play("downArrowToX");

        //play the main nav animation into view ( pull it down )
        mainNavTimeline.play();

        canYouSeeTheMenu = true;
    } else {
        console.log("burger click up");
        burgerAnimationTimeLine.play("upArrowToBurger");

        // play the main nav animation out of view ( push it up )
        mainNavTimeline.reverse();

        canYouSeeTheMenu = false;
    }
}

var menuBackground = document.querySelector('#main-nav');

window.onclick = function (event) {

    if (event.target == menuBackground) {
        hideShowMainNav();
    }
}

function reportWindowSize() {
    console.log("test");
    if (canYouSeeTheMenu === false) {
        console.log("can't see the main nav");
        console.log($("#main-nav").outerHeight());
        navHeight = $("#main-nav").outerHeight();
        gsap.set("#main-nav", {
            y: -navHeight
        });
    }
}


// add a listener to the window for everytime it's resized
window.addEventListener('resize', reportWindowSize);