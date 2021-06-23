$(window).on('load', () => {
    $('#bodies').sakura();

    $('.icon')
        .mouseover(function() { $(this).attr("src", $(this).attr("src").match(/[^\.]+/) + "_hover.png"); })
        .mouseout(function() { $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png")); });

    /* Navigation between pages */
    var currentLocation = "#main-body";
    const homeLink = "#toMainBody";
    const commLink = "#toCommissions";
        
    $(homeLink).on('click', function() { pageTransition("#main-body"); });
    $(commLink).on('click', function() { pageTransition("#commissions"); });
    
    
    /* Function for Clicking Navigation */
    function pageTransition(resultLocation) {
        if (resultLocation != currentLocation) {
            $(currentLocation).fadeOut(1000);
            $(resultLocation).fadeIn(1000);
            currentLocation = resultLocation;
        }
    }
});