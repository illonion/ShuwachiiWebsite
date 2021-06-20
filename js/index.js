$(window).on('load', () => {
    $('#bodies').sakura();

    $('.icon')
        .mouseover(function() {
            var src = $(this).attr("src").match(/[^\.]+/) + "_hover.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("_hover.png", ".png");
            $(this).attr("src", src);
        });
    
    $('#toCommissions').on('click', function() {
        $('#main-body').fadeOut(1000);
        $('#main-body').fadeIn(1000);
    });
});