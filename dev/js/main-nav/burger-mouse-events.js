
var burgerToArrowTimeline = gsap.timeline({paused:true});
var crossToArrowTimeline = gsap.timeline({paused:true});
var burgerArrowSpeed = 0.25;

//animate burger to down arrow
burgerToArrowTimeline.to("#burger",{duration:burgerArrowSpeed, rotate:-90},"animateBurger")
    .to("#bottom-line",{duration:burgerArrowSpeed,y:-10},"animateBurger")
    .to("#top-line",{duration:burgerArrowSpeed,y:10},"animateBurger")
    .to("#left-arrow",{duration:burgerArrowSpeed, rotation:55},"createArrow")
    .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-55},"createArrow")

// animate x to up arrow
crossToArrowTimeline.to("#burger",{duration:burgerArrowSpeed },"animateX")
    .to("#bottom-line", {duration:burgerArrowSpeed,rotation:0},"animateX")
    .to("#top-line", {duration:burgerArrowSpeed,rotation:0},"animateX")
    .to("#left-arrow",{duration:burgerArrowSpeed, rotation:135, alpha:1, x:40},"animateX")
    .to("#right-arrow",{duration:burgerArrowSpeed, rotation:-135, alpha:1, x:40},"animateX")

//hover over burger, burger rotates 90
$("#burger").on("mouseenter",function(){
    console.log("mouse enter");

   
    //when nav is NOT down, turn burger into arrow on hover
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.play();

        
        
    }

    //when nav IS down, turn X into arrow on hover
    else{
        crossToArrowTimeline.play();
         
        
    }
})

//stop hovering over burger, burger rotates back
$("#burger").on("mouseleave",function(){
    console.log("mouse leave");


    //when nav is NOT down, turn arrow into on leave
    if(canYouSeeTheMenu === false){
        burgerToArrowTimeline.reverse();
        
    }

    //when nav IS down, turn arrow into X 
    else{
        crossToArrowTimeline.reverse();
    }
})

// function resetArrowLines(){
//     gsap.to("#right-arrow",{duration:0.25, y:0, x:10, rotation:55});
// }    