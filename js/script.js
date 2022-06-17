$('h1').hide()
$('.link-container').hide()

$('#start').click(()=>{
    $('#start').fadeOut()
    $('#dir').css('width', '0vw')
    $('#esq').css('width', '0vw')
    $('#baixo').css('top', '80%')
    $('#baixo').css('background-size', '120%')
    $('.inicial').css('background-size', '120%')
    $('.inicial').css('background-position', '50% 20%')

    window.setTimeout(()=>{
        $('h1').fadeIn()
        $('.link-container').fadeIn()
    }, 5000)
})

$('.link-container a').click((e)=>{
    e.preventDefault()
    $('.inicial').fadeOut()
    $('.conteudo').fadeIn()
})