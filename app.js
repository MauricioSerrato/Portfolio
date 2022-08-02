// const uploadResume = () => {
// const $resumePic = $('<section>').addClass('Resume').attr('src', 'Screen Shot 2022-07-09 at 4.18.10 PM').appendTo($('body'))

// }




const aboutME =() =>{
    let $aboutME = $('.meparagraph').text (`finishing my bachelors in therapeutic recreation and aquiring a job as a recrational therapist 
    in a behavioral unit. I realized quickly that my passion lied else where. Always being very interested and
    pasionate about the tech industry I found myself stumbling upon a new career path as a software engineer. 
    As a full stack developer I am capable of developing both client and server software. skils included and are 
    not limited to Javascript, Python, MongoDB, Jquery, node, HTML/CSS, Git, React`).appendTo($('#about-me'))

    let $closeBtn = $('<button>').addClass('close').text('close').appendTo($aboutME)
    $('#buttonOne').click(function(){
        $('.meparagraph').show('slow')
    })

    $('.close').click(function(){
        $('.meparagraph').hide()
    })
}



const workEx = () => {
$work = $('#work-list').append('<li>Project Mangement/Projec Estimation C&A')
$work = $('#work-list').append('<li>Recraetional Therapist Amita Saint Joseph Medical Center</li>')
$work = $('#work-list').append('<li>Northwestern Special Recreation Association</li>')
$work = $('#work-list').append('<li>Mclean County Parks and Recreation</li>')
$work = $('#work-list').append('<li>Hyundai Dealership</li>')

let $closeBtn = $('<button>').addClass('close2').text('close').appendTo($work)

    $('.close2').click(function(){
        $('#work-list').hide()

    })
    
    $('#workexperince').click(function(){
        $('#work-list').show()
    })
}


$(() => {

$('#about-me').on('click', aboutME)    
$('#workexperince').on('click',workEx)

const $openBtn = $('#openModal')
const $modal = $('#modal')
const $closeBtn = $('#close')

const openModal = () => {
    $modal.css('display', 'block')

}

const closeModal  = () =>{
    $modal.css('display', 'none')
}

$openBtn.on('click', openModal)

$closeBtn.on('click', closeModal)

})
