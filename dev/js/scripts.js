// @codekit-prepend "fancyBox.js";
// @codekit-prepend "tinySlider.js";

// console.log( "ready!");


$(document).ready(function () {

    $("#show-form-btn").on("click", function () {
        console.log("button clicked");

        // hide contact-button-section
            $("#contact-button-section").hide();
// 
        // show form container
            $("#form-container").show();

    });

});