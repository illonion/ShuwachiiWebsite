$(window).on('load', () => {
    /* Generate Sakura Falling */
    $('#bodies').sakura();

    /* Icons */
    $('.icon')
        .mouseover(() => {
            var src = $(this).attr("src").match(/[^\.]+/) + "_hover.png";
            $(this).attr("src", src);
        })
        .mouseout(() => {
            var src = $(this).attr("src").replace("_hover.png", ".png");
            $(this).attr("src", src);
        });
    
    /* Navigation between pages */
    var currentLocation = "main-body";
    const commLink = "#toCommissions"
    
    $(commLink).on('click', () => {
        pageTransition(commLink);
    });

        /* Function for Clicking Navigation */
    function pageTransition(resultLocation) {
        $(resultLocation).on('click', () => {
            $(currentLocation).fadeOut(1000);
            $(resultLocation).fadeIn(1000);
            currentLocation = resultLocation;
        });
    }
});