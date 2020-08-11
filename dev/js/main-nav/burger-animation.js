var burgerAnimateSpeed = 0.25;

var burgerAnimationTimeLine = gsap.timeline({
    paused: true
});

burgerAnimationTimeLine.addLabel("burgerToDownArrow")
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:-90}, "animateBurger")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:-10}, "animateBurger")
                        .to("#top-line",{duration:burgerAnimateSpeed, y:10}, "animateBurger")
                        .to("#down-left-arrow",{duration:burgerAnimateSpeed, rotation:55}, "createArrow")
                        .to("#down-right-arrow",{duration:burgerAnimateSpeed, rotation:-55}, "createArrow")
                        .addLabel("burgerToDownArrowReverse")
                        .addPause()
                        .addLabel("downArrowToX")
                        .to("#top-line",{duration: burgerAnimateSpeed, rotation:45},"burgerToX")
                        .to("#bottom-line",{duration: burgerAnimateSpeed, rotation:-45},"burgerToX")
                        .to("#middle-line",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#down-left-arrow",{duration: burgerAnimateSpeed, rotation:0, alpha:0},"burgerToX")
                        .to("#down-right-arrow",{duration: burgerAnimateSpeed, rotation:0, alpha:0},"burgerToX")
                        .to("#up-left-arrow",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .to("#up-right-arrow",{duration: burgerAnimateSpeed, alpha:0},"burgerToX")
                        .addLabel("downArrowToXReverse")
                        .addPause()
                        .addLabel("xToUpArrow")
                        .to("#bottom-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#top-line",{duration:burgerAnimateSpeed, rotation: 0}, 'upArrow')
                        .to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:55, alpha:1}, 'createUpArrow')
                        .to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:-55, alpha:1}, 'createUpArrow')
                        .addLabel("xToUpArrowReverse")
                        .addPause()
                        .addLabel("upArrowToBurger")
                        .to("#up-left-arrow",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#up-right-arrow",{duration:burgerAnimateSpeed,rotation:0, alpha:0}, 'backToBurger')
                        .to("#middle-line",{duration:burgerAnimateSpeed, alpha:1}, 'backToBurger')
                        .to("#top-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#bottom-line",{duration:burgerAnimateSpeed, y:0, rotation:0}, 'backToBurger')
                        .to("#burger",{duration:burgerAnimateSpeed, rotation:0}, 'backToBurger')
                        .addPause();