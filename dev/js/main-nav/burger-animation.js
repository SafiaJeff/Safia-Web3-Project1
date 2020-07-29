var burgerAnimationTimeLine = gsap.timeline({paused:true});
var burgerAnimationSpeed = 0.25;

// reset the transformOrigin for each line
gsap.set(".lines",{transformOrigin:"center"});

//1: first is the reference to the timeline (burgerAnimationTimeLine ), 2: what do you want to animate? 3{ what properties to do you want animate?}
// burgerAnimationTimeLine.to("#middle-line",{duration:burgerAnimationSpeed,alpha:0},"burgerStart")
//                         .to("#top-line",{duration:burgerAnimationSpeed,rotation:45, y:10, stroke: "#1B4965"},"burgerStart")
//                         .to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45, y:-10, stroke: "#1B4965", onReverseComplete:resetBurgerLinesColor},"burgerStart");

// burgerAnimationTimeLine.to("#burger");

burgerAnimationTimeLine.to("#top-line",{duration:burgerAnimationSpeed,rotation:45}, "burgerToX")
                        .to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45}, "burgerToX")
                        .to("#middle-line",{duration:burgerAnimationSpeed,alpha:0}, "burgerToX")
                        .to("#right-arrow",{duration:burgerAnimationSpeed,alpha:0,rotate:0}, "burgerToX")
                        .to("#left-arrow",{duration:burgerAnimationSpeed,alpha:0,rotate:0}, "burgerToX")

function animateBurger(){
    // console.log("animate burger");

    // check the  canYouSeeTheMenu bool valus
    if(canYouSeeTheMenu === true){
        // turn the burger into an X
        burgerAnimationTimeLine.play();


    }
    
    else{
        // turn the X into a burger aka reverse the animation
        burgerAnimationTimeLine.reverse();
    }

}

// function resetMiddleLineAlpha(){
//     //change the burger lines back to green over 0.25 seconds
//     gsap.to("#middle-line",{duration:0.25, alpha: 1});
// }

// function to change the color of the burger lines back to green, only called on the compete timeline reverse of burgerAnimationTimeLine
// function resetBurgerLinesColor(){
    // change the burger lines back to green over 0.25 seconds
    // gsap.to(".lines",{duration:0.25, stroke:"#55BF9E"});
// }            