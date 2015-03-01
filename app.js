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
        "  $('<form>').append(",
        "    $('<textarea>').val(",
        "      $(this).parent().children('textarea').val()",
        "    )",
        "  ).append(",
        "    $('<input type=\"submit\">')",
        "  )",
        ");"
    ].join('\n');
    $('textarea').val(patientZero);
};
