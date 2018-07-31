//$("h1").hide()
//PARTNER EXERCISE 1
//change style via jQuery
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$("ul li:nth-child(1)").css("color", "green");
$("ul li:nth-child(2)").css("color", "pink");
// $('#l1-1').css('color', 'green');
// $('#l1-2').css('color', 'pink');
$('#brown-div').css('color', 'brown');

// $('div').on('click', function() {
//     alert('clicked!');
// });

// var clicked = function() {
//     alert('clicked!');
// }

// $('div').on('click', clicked);

//PARTNER EXERCISE 2
//Using jQuery, alert the value of the input when the user clicks the button.
$("#btn-1").on('click', function() {
    alert($("input:text").val());
});

$('.candy').append('Chocolate');

//PARTNER EXERCISE 3
$("#btn-2").on('click', function() {
    $(".students").append($("<li>").text($("#input-student").val()));
    //$(".students").find('li').remove();
});