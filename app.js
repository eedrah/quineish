$(function() {
    $('body').on('click', 'form > input[type="submit"]', evaluateTextArea);
    startAbiogenesis();
});

function evaluateTextArea(e) {
    e.preventDefault();
    eval($(this).parent().children('textarea').val());
};

function startAbiogenesis() {
    var patientZero = [
        "$('body').append(",
        "  $('<p>').text('Created by Eedrah, inspired by ').append(",
        "    $('<a>').text('this thread').attr('href', 'http://codegolf.stackexchange.com/questions/69/golf-you-a-quine-for-great-good/')",
        "  )",
        ").append(",
        "  $('<form>').append(",
        "    $('<textarea>').val(",
        "      $(this).parent().children('textarea').val()",
        "    )",
        "  ).append(",
        "    $('<input type=\"submit\">').val('quine-ish-ify!')",
        "  )",
        ");"
    ].join('\n');
    $('textarea').val(patientZero);
};
