$(document).ready(function(e) {
    
    
    
    $('.mobile__nav .open').on('click', function(e) {
        if($(this).text() == 'Open Menu') {
            $('.mobile').show(1000);
            $(this).text('Close Menu');
        } else {
            $('.mobile').hide(1000);
            $(this).text('Open Menu');
        }
        
    })
});