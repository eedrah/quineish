$(function() {
    $('body').on('click', 'form > input[type="submit"]', evaluateTextArea);
});

function evaluateTextArea(e) {
    e.preventDefault();
    eval($(this).parent().children('textarea').val());
};