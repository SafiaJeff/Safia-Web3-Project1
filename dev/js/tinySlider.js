console.log("tiny slider is working");

$(document).ready(function () {

    console.log($(".slides").hasClass("my-slider"));
    if ($(".slides").hasClass("my-slider")) {
        tns({
            container: '.my-slider',
            items: 1,
            slideBy: 'page',
            gutter: 20,
            edgePadding: 50,
            mouseDrag: true,
            controlsPosition: "bottom",
            navPosition: "bottom",
            responsive: {
                "350": {
                    "items": 1
                },
                "768": {
                    "items": 2
                },
                "1200": {
                    "items": 3
                },
                "1440": {
                    "items": 4
                }
            }

        });
    } else {
        console.log("No TinySlider found!");
    }
});