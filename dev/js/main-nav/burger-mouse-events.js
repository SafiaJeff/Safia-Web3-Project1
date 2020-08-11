
//var burgerToArrowTimeline = gsap.timeline({paused:true});

gsap.set("#up-left-arrow",{transformOrigin:"right center", alpha:0});
gsap.set("#up-right-arrow",{transformOrigin:"right center", alpha:0});



$("#burger").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(canYouSeeTheMenu === false){
        console.log("burger to arrow");
        burgerAnimationTimeLine.play("burgerToDownArrow");
    }else{
        burgerAnimationTimeLine.play("xToUpArrow");
    }
})


$("#burger").on("mouseleave", function(){
    if(canYouSeeTheMenu === false){
        console.log("arrow to burger");
        burgerAnimationTimeLine.reverse("burgerToDownArrowReverse");
        
    }else{
        burgerAnimationTimeLine.reverse("xToUpArrowReverse");
    }
})