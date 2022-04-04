$('document').ready(() => {
    $('#about-content').show();
    $('#residents-content').hide();
    $('#donate-content').hide();
})

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

$('#donate-custom-amount').select(() => {
    $('#donate-custom').select();
})
