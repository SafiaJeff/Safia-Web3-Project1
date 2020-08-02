
var canYouSeeTheMenu = false;

var navHeight = $("#main-nav").outerHeight();
//move the main nav off screen ( this is moving the main-nav on the Y axis )
gsap.set("#main-nav",{y: -navHeight})

var mainNavTimeline = gsap.timeline({paused:true})
mainNavTimeline.to("#main-nav",{duration:0.25, y:0})

//$("#main-nav").height();
//console.log($("#main-nav").height() + " is the height of the #main-nav");
//console.log($("#main-nav").outerHeight() + " is the outer height of the #main-nav");

// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    //console.log("hide or show nav");
    //toggles the css display property
   // $("#main-nav").toggle();

   //console.log("hide show");

    if(canYouSeeTheMenu === false){
        //console.log("show me the menu!");
        // reset back to true, so that the menu will go away
        canYouSeeTheMenu = true;

            //console.log(burgerToArrowTimeline.progress() + " is the progress for the gsap timeline, anything larger then 0 means it has played");

           //alert(burgerToArrowTimeline.progress() + " is the progress for the gsap timeline, anything larger then 0 means it has played");

            if(burgerToArrowTimeline.progress() > 0){
                //turn the burger into an X
               // alert("dekstop animation");
                animateBurger();
            }else{
                //alert("mobile animation");
                mobileburgerAnimation();
            }
        

        //play the main nav animation into view ( pull it down )
        mainNavTimeline.play();

    }else{
       // console.log("hide the menu!");
        // reset back to false, so the you can bring the menu back!
        canYouSeeTheMenu = false;

        if(burgerToArrowTimeline.progress() > 0){
            //turn the burger into an X
           // alert("dekstop animation");
            animateBurger();
        }else{
           // alert("mobile animation");
            mobileburgerAnimation();
        }

        // play the main nav animation out of view ( push it up )
        mainNavTimeline.reverse();
    }
}


var menuBackground = document.querySelector('#main-nav');

window.onclick = function(event){

    if(event.target == menuBackground){
        
        hideShowMainNav();
    }
}