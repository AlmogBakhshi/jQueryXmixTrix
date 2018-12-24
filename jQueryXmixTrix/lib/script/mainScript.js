$(document).ready(function () {
    $('#btnRestart').click(restart);
    restart();
});

function checkIfWin(obj, c) {
    if ($('#1').hasClass('green') && $('#2').hasClass('green') && $('#3').hasClass('green') ||
        $('#4').hasClass('green') && $('#5').hasClass('green') && $('#6').hasClass('green') ||
        $('#7').hasClass('green') && $('#8').hasClass('green') && $('#9').hasClass('green') ||
        $('#1').hasClass('green') && $('#4').hasClass('green') && $('#7').hasClass('green') ||
        $('#2').hasClass('green') && $('#5').hasClass('green') && $('#8').hasClass('green') ||
        $('#3').hasClass('green') && $('#6').hasClass('green') && $('#9').hasClass('green') ||
        $('#1').hasClass('green') && $('#5').hasClass('green') && $('#9').hasClass('green') ||
        $('#3').hasClass('green') && $('#5').hasClass('green') && $('#7').hasClass('green') ||

        $('#1').hasClass('blue') && $('#2').hasClass('blue') && $('#3').hasClass('blue') ||
        $('#4').hasClass('blue') && $('#5').hasClass('blue') && $('#6').hasClass('blue') ||
        $('#7').hasClass('blue') && $('#8').hasClass('blue') && $('#9').hasClass('blue') ||
        $('#1').hasClass('blue') && $('#4').hasClass('blue') && $('#7').hasClass('blue') ||
        $('#2').hasClass('blue') && $('#5').hasClass('blue') && $('#8').hasClass('blue') ||
        $('#3').hasClass('blue') && $('#6').hasClass('blue') && $('#9').hasClass('blue') ||
        $('#1').hasClass('blue') && $('#5').hasClass('blue') && $('#9').hasClass('blue') ||
        $('#3').hasClass('blue') && $('#5').hasClass('blue') && $('#7').hasClass('blue')) {
        $('#result').html(obj[0].classList[2] + '<br>winner');
        $('td').off('click');
    }
    else if (c == 9) {
        $('#result').html('NO one<br>win!');
        $('td').off('click');
    }
}

function restart() {
    $('#result').html('');
    $('td').removeClass();
    $('td').addClass('azure');
    $('td').hover(
        function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });

    var count = 0;
    $('td').click(function () {
        $(this).off('click');
        if (count % 2)
            $(this).addClass('green');
        else
            $(this).addClass('blue');
        count++;
        checkIfWin($(this), count);
    });
}