var canYouSeeTheMenu = false;

//move the main nav off screen ( this is moving the main-nav on the Y axis )
var navHeight = $("#main-nav").outerHeight();
gsap.set("#main-nav",{y: -navHeight})

var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav",{duration:0.25, y:0})


// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    // console.log("hide or show nav");
    //toggles the css display property
    //$("#main-nav").toggle();

    if(canYouSeeTheMenu === false){
        console.log("show me the menu!");

        // reset back to true, so that the menu will go away when clicked for else function
        canYouSeeTheMenu = true;

        //turn the burger into an X, calls the function
        animateBurger();

        //play the main nav animation into view ( pull it down )
        mainNavTimeline.play();

    }
    
    else{ 
        //aka is canyouseemenu=true as set above

        console.log("hide the menu!");

        // reset back to false, so the you can bring the menu back!
        canYouSeeTheMenu = false;

        //turn the X into the burger, calls the function
        animateBurger();

        // play the main nav animation out of view ( push it up )
        mainNavTimeline.reverse();
    }
}


//click anywhere on menu when it's down and it goes away
var menuBackground = document.querySelector('#main-nav');

window.onclick = function(event){
    if(event.target == menuBackground){
        hideShowMainNav();
    }
}