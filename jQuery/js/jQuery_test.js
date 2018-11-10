const $menu = $('#menu');
const $prepend =$('#prepend');
const $append =$('#append');
const $deleteFirst = $('#deleteFirst');
const $deleteLast = $('#deleteLast');
const $show = $('#show');
const $hide = $('#hide');
const $toggle = $('#toggle');
const $hidden = $('.hidden');

const str = $(`
            <li>Wstawiany element</li>
           `);
// .remove first
$deleteFirst.on('click', function(){
   $menu.find('li').first().remove();
});

// .remove last
$deleteLast.on('click', function(){
    $menu.find('li').last().remove();
});

// .prepend
$prepend.on('click', function() {
    const str = $(`
            <li>Wstawiany element prepend</li>
           `);
    $menu.prepend(str);
});

// .append
$append.on('click', function() {
    const str = $(`
            <li>Wstawiany element append</li>
           `);
    $menu.append(str);
});

//show
$show.on('click', function() {
    $hidden.fadeIn();
});

//hide
$hide.on('click', function() {
    $hidden.fadeOut();
});


//toggle
$toggle.on('click', () => {
    if ($hidden.is(":visible")) {
        $hidden.fadeOut();
    } else {
        $hidden.fadeIn();
    }
});






