var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav",{y: -navHeight})

var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav",{duration:0.25, y:0})


// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    // console.log("hide or show nav");
    //toggles the css display property
    //$("#main-nav").toggle();

    if(canYouSeeTheMenu ===false){
        console.log("show me the menu!");
         // reset back to true, so that the menu will go away
        canYouSeeTheMenu = true;

        //turn the burger into an X
        animateBurger();

        //play the main nav animation into view ( pull it down )
        mainNavTimeline.play();


    }else{
        console.log("hide the menu!");
        // reset back to false, so the you can bring the menu back!
        canYouSeeTheMenu = false;

        //turn the X into the burger
        animateBurger();

        // play the main nav animation out of view ( push it up )
        mainNavTimeline.reverse();
    }
}