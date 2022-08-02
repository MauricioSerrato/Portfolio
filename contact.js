


const forum = () => {
    let $name = $('<h1>').text(`What's your first and last name?`)
    $('#name').append($name)




}

const email = () => {
   let $email = $('<h1>').text('whats your email')
   $('#contact-info').append($email)
}


const description = () => {
    let $description = $('<h1>').text('Please provide a brief discription of quesiton or inqueries')
    $('#contact-info').append ($description)
}








$(() =>{

$('#get-started').on('click', forum)
// $('#get-started').on('click', email)
// $('#get-started').on('click', description)




})