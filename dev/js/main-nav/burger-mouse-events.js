var burgerArrowSpeed = 0.25;

//animate burger to down arrow
var burgerToArrowTimeline = gsap.timeline({paused:true});
burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerArrowSpeed, y:-10}, "animateBurger")
                        .to("#top-line",{duration:burgerArrowSpeed, y:10}, "animateBurger")
                        .to("#down-left-arrow",{duration:burgerArrowSpeed, rotation:55}, "createArrow")
                        .to("#down-right-arrow",{duration:burgerArrowSpeed, rotation:-55}, "createArrow");

//change up arrow point of rotation & fade out
gsap.set("#up-left-arrow",{transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow",{transformOrigin:"right center", alpha:0});  

//animate x to up arrow
var xToUpArrowTimeline = gsap.timeline({paused:true});          
xToUpArrowTimeline.to("#top-line",{duration:burgerArrowSpeed, rotation:0},"createArrowUp")
                    .to("#bottom-line",{duration:burgerArrowSpeed, rotation:0},"createArrowUp")
                    .to("#up-left-arrow",{duration:burgerArrowSpeed, rotation:55, alpha:1},"createArrowUp")
                    .to("#up-right-arrow",{duration:burgerArrowSpeed, rotation:-55, alpha:1},"createArrowUp")

$("#burger").on("mouseenter",function(){
    console.log("mouse enter");

    // console.log(canYouSeeTheMenu + " menu visible");

    //nav hidden, burger turns to up arrow on hover
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.play();
    }
    
    //nav visible, x turns to up arrow
    else{
        xToUpArrowTimeline.play()
    }
})

$("#burger").on("mouseleave",function(){
    console.log("mouse leave");

    // console.log(canYouSeeTheMenu + " menu visible");

    //nav hidden, arrow to burger on hover leave
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.reverse();
    }
    
    //nav visible, arrow to x on hover leave
    else{
        xToUpArrowTimeline.reverse()
    }
   
})

