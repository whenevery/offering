$(document).on('input' , '[show-text-number]' , function(){
    var $ele = $($(this).attr('show-text-number'));
    $ele.text($(this).attr('maxlength') - $(this).val().length);
});
$(document).on('change' , ':radio' , function(){
    $(':radio').each(function(){
        $(this).closest('.radio')[this.checked?'addClass':'removeClass']('checked');
    });
});