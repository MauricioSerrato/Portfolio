$(() => {
    let imagesIndex = 0;
    let imagesLenght = $('.images').children().length - 1


    $('.next').on('click', () =>{
        $('.images').children().eq(imagesIndex).css('display', 'none')
        if (imagesIndex < imagesLenght){
            imagesIndex++
        
        } else{
            imagesIndex = 0
        }   
        $('.images').children().eq(imagesIndex).css('display', 'block')

    })

    $('#previous').on('click', () => {
        $('.images').children().eq(imagesIndex).css('display', 'none')
        if(imagesIndex > 0){
            imagesIndex--
        } else{
            imagesIndex = imagesLenght
        }
        $('.images').children().eq(imagesIndex).css('display', 'block')
    })



})