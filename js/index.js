$(window).on('load', () => {
    $('#bodies').sakura();

    $('.icon')
        .mouseover(function() { $(this).attr("src", $(this).attr("src").match(/[^\.]+/) + "_hover.png"); })
        .mouseout(function() { $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png")); });
    
    /* Set all pages except the first to display nothing */
    $("#commissions").hide();

    /* Navigation between pages */
    var currentLocation = "#mainBody";
    const homeLink = "#toMainBody";
    const commLink = "#toCommissions";
    const ruleLink = "#toRulesGuidelines";
    const drawLink = "#toWillWontDraws";
    const priceLink = "#toCommissionPrices";
        
    $(homeLink).on('click', function() { pageTransition("#mainBody"); });
    $(commLink).on('click', function() { pageTransition("#commissions"); });
    $(ruleLink).on('click', function() { pageTransition("#rulesGuidelines"); });
    $(drawLink).on('click', function() { pageTransition("#willWontDraws"); });
    $(priceLink).on('click', function() { pageTransition("#commissionPrices"); });
    
    /* Function for Clicking Navigation */
    function pageTransition(resultLocation) {
        if (resultLocation != currentLocation) {
            $(currentLocation).fadeOut(1000);
            $(resultLocation).fadeIn(1000);
            currentLocation = resultLocation;
        }
    }
});