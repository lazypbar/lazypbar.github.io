$('document').ready(() => {
    $('#about-content').show();
    $('#residents-content').hide();
    $('#donate-content').hide();

    $('.info-button#about').click(() => {
        $('#about-content').show();
        $('#residents-content').hide();
        $('#donate-content').hide();

        $('.info-button#about').addClass('active');
        $('.info-button#residents').removeClass('active');
        $('.info-button#donate').removeClass('active');

    })

    $('.info-button#residents').click(() => {
        $('#about-content').hide();
        $('#residents-content').show();
        $('#donate-content').hide();

        $('.info-button#about').removeClass('active');
        $('.info-button#residents').addClass('active');
        $('.info-button#donate').removeClass('active');
    })

    $('.info-button#donate').click(() => {
        $('#about-content').hide();
        $('#residents-content').hide();
        $('#donate-content').show();

        $('.info-button#about').removeClass('active');
        $('.info-button#residents').removeClass('active');
        $('.info-button#donate').addClass('active');
    })
    
    $('#donate-custom-amount').change(() => {
        $('#donate-button').html('Donate $' + $('#donate-custom-amount').val());
        $('#donate-button').attr('href', 'https://www.paypal.com/paypalme/jdunbrack/' + $('#donate-custom-amount').val());
        $('#donate-custom').click();
    })
    
    $('input:radio').change(() => {
        if ($('input:radio:checked').val().startsWith('on')) {
            $('#donate-button').html('Donate $' + $('#donate-custom-amount').val());
            $('#donate-button').attr('href', 'https://www.paypal.com/paypalme/jdunbrack/' + $('#donate-custom-amount').val());
            return;
        }
        $('#donate-button').html('Donate $' + $('input:radio:checked').val());
        $('#donate-button').attr('href', 'https://www.paypal.com/paypalme/jdunbrack/' + $('input:radio:checked').val());
    })
    
    $('#donate-custom').change(() => {
        $('#donate-button').html('Donate $' + $('#donate-custom-amount').val());
    })
    
})