// ****************************************************************
// ************************** Vanilla JS **************************
// ****************************************************************

// DOM JS
document.addEventListener("DOMContentLoaded", function(event) {

});
// wyszukiwanie JS
document.querySelector('#button');
document.querySelectorAll(".button");


//eventy JS
button.addEventListener('click', function(){
    console.log("był klik");
});


// ****************************************************************
// **************************** jQuery ****************************
// ****************************************************************

// DOM jQuery
$(function() {

});

// DOM jQuery arrow function
$(() => {

});

// ************************** WYSZUKIWANIE elementów w jQuery

/* Znajdź element o id top */
$('#top');
/* Znajdź wszystkie elementy li */
$('li');
/* Znajdź wszystkie elementy li wewnątrz ul */
$('ul li');
/* Znajdź wszystkie elementy z klasą boxes i przypisz do zmiennej */
const $boxes = $('.boxes');
/*Znajdź element ul w elemencie o klasie boxes */
// .find()
$boxes.find('ul');
/* Znajdź dzieci (spany) w elemencie o klasie boxes */
//.children()
$boxes.children('span');
/* Znajdź elementy li w ul i zwróć czwarty (liczymy od 0) */
$('ul').find('li').eq(3);

// .find() - wyszukuje potomków
// .children() - wyszukuje tylko dzieci
// .first() .last() .eq(number) - pobierz pierwszy, ostatni, kolejny element z tablicy.
$('.containers').children('.container').first();
$('.containers').children('.container').last();
$('.containers').children('.container').eq(3);

// .next() .prev() .parent() .siblings()
/* Znajdź element o id top i zwróć następny element */
$('#top').next();

/* Znajdź elementy o klasie menu, a następnie zwróć poprzedni */
$('.menu').prev('span');

$('#top').parent();

/* Znajdź paragrafy i zwróć rodzeństwo każdego z nich */
$('p').siblings();

// ************************** MANIPULOWANIE elementami w jQuery

//ustaw css inline
$('.nav').find('a').css('color', 'red');
//dodaj klasę (nie dajemy kropki)
$('.nav').find('a').addClass('box');
//usuń klasę
$('.nav').find('a').removeClass('box');
//dodaj lub usuń klasę
$('.nav').find('a').toggleClass('box');
//usuń wszystkie klasy
$('.nav').find('a').removeClass();
//ukryj element
$('.nav').find('a').hide();
//pokaż element
$('.nav').find('a').show();

//.val() - pobieranie wartości z formularza
// Kod HTML
// <input type="text" value="Imie">

//Kod JS jQuery
//Pobranie
$('input').val();
//Ustawienie
$('input').val("ustawienie");

// .data() - odczytywanie wartości
// Kod HTML
// <div data-role="page" data-last-value="43" data-hidden="true"></div>

// Kod JS jQuery
$("div").data("role") ;
$("div").data("lastValue");
$("div").data("hidden");
$("div").attr("data-color", "red");

// ************************** EVENTY w jQuery

//Ustaw event na jednym elemencie
$('#menu').on('click', function() {
   console.log("Click");
});

//Ustaw event na wielu elementach
$('li').on('click', function(){
    console.log("Click");
});

// Kod HTML
//<button id="ourButton">Click me!</button>

// Kod JS jQuery
$('#ourButton').on('click', function (event) {
    event.preventDefault();
    alert('You clicked me!');
});
//Jeżeli wciśnięcie przycisku powoduje przeładowanie okna, pamiętaj o preventDefault()!

// Mouse Events
// 'click' 'mouseenter' 'mouseleave'

//Keyboard Events
// 'keypress' 'keydown' 'keyup'

// Form events
// 'submit' 'change' 'focus' 'blur'

// Document/Window Events
// 'load' 'resize' 'unload' 'scroll'

// ************************** MODYFIKOWANIE elementów DOM w jQuery

// html() - wstawia/ustawia tekst lub HTML(zrenderowany)
// text() – wstawia/ustawia tekst lub HTML (jako string, np. <a href="example.html">Link</a><b>hello</b>)
const str = $(`
            <li>Wstawiany element</li>
            `);

//  <ul class="menu">
//      <li>O nas</li>
//      <li>Galeria</li>
//  </ul>

$("menu").prepend(str)


// ************************** DODAWANIE elementów w jQuery

// .before .after .prepend .append

// Kod HTML
//<div class="box"></div>

// Kod JS jQuery
var pBefore = $("<p>Tutaj before</p>");
$('.box').before(pBefore);
var pAfter = $("<p>Tutaj after</p>");
$('.box').after(pAfter);


// kod HTML
//  <ul class="menu">
//      <li>O nas</li>
//      <li>Galeria</li>
//  </ul>


// kod JS jQuery
var liPrepend = $('<li>Start</li>');
$('.menu').prepend(liPrepend);
var liAppend = $('<li>Kontakt</li>');
$('.menu').append(liAppend);

//  <ul class="menu"> JavaScript
//      <li>Start</li> //dodane
//      <li>O nas</li>
//      <li>Galeria</li>
//      <li>Kontakt</li> //dodane
//  </ul>

// ************************** USUWANIE elementów w jQuery

// .remove .empty

/* Wyczyść tekst drugiego wewnątrznego elementu (liczymy od 0) */
$('.menu').children().eq(1).empty();
//Usuń pierwszy element z menu
$('.menu').find("li").first().remove();



// ****************************************************************
// ***************************** AJAX *****************************
// ****************************************************************

// ***************************** AJAX connection
$.ajax({
    url: url,
    dataType: 'json',
    data:{
        first_data:data,
        second_data:data
    }
}).done(function(result) {
    // console.log(result);
});




// ***************************** AJAX connection on Submit form
const $form = $('form');
const $button = $('button');
$form.on('submit', $button, function(){
    $.ajax({
        url: url,
        dataType: 'json',
        data:{
            first_data:data,
            second_data:data
        }
    }).done(function(result) {
        // console.log(result);
    });
});


// ****************************************************************
// ***************************** ES6 ******************************
// ****************************************************************

//Zadanie
let getRandomText =  () => {
    let korpoText = ['risercz', 'dedlajn', 'dżołk', 'łikend', 'Dizajn', 'fakap' ];
    let randomNumber = Math.floor(Math.random() * korpoText.length);
    return korpoText[randomNumber];
};

    const $div = $('.box');

    $div.on('mouseenter', (e) => {
        console.log("I'm in");
        $(e.currentTarget).find('p').text(getRandomText()).show();
    });

    $div.on('mouseleave', () => {
        console.log("I'm out");
        $(this).find('p').hide();
    });
////////////// koniec zadania


