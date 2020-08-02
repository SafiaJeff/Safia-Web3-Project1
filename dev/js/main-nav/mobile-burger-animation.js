var burgerToXTimeline = gsap.timeline({paused:true});
// fade out the middle line
burgerToXTimeline.to("#middle-line",{duration:0.25, alpha:0},"iOSburgerAnimation")
                    // rotate top line 45 degrees and change the color to black
                    .to("#top-line",{duration:0.25,rotation:45, y:10, stroke:"#ccc"},"iOSburgerAnimation")
                    // rotate bottom line -45 degrees and change the color to black
                    .to("#bottom-line",{duration:0.25,rotation:-45, y:-10, stroke:"#ccc"},"iOSburgerAnimation")
                    .to("#down-left-arrow",{duration:.01, alpha:0},"iOSburgerAnimation")
                    .to("#down-right-arrow",{duration:.01, alpha:0},"iOSburgerAnimation")
                    .to("#up-left-arrow",{duration:.01, alpha:0},"iOSburgerAnimation")
                    .to("#up-right-arrow",{duration:.01, alpha:0},"iOSburgerAnimation");



function mobileburgerAnimation(){

    if(canYouSeeTheMenu === true){
        console.log("turn the burger into an X");
        burgerToXTimeline.play();
    }
    else{
        console.log("turn the X into a burger");
        burgerToXTimeline.reverse();
    }
}