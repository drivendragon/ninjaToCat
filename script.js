$('img').click(function() {
    $(this).slideDown('slow');
    var temp = $(this).attr('src');
    $(this).attr('src', $(this).attr('alt-src'));
    $(this).attr('alt-src', temp);
    $(this).css('display', 'block');
})

