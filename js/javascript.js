$(document).ready(function(){
    $('.show-more').on('click', function(){
        let parent_ = $(this).parent();
        parent_.find('.hidden').removeClass('hidden');
        $(this).css('display', 'none');
    })

    $('.timeBase-select').on('click', function(){
        $('.timeBase-select').removeClass('selected');
        $(this).addClass('selected');
    })
    
    $(window).on('click', function(){
        $('.jobfilters-listFilter').css('display', 'none');
    })

    $('.jobfilters-label').on('click', function(event){
        event.stopPropagation();
        let selected_ = $(this).parent().find('.jobfilters-listFilter');
        if(selected_.css('display')=='block'){
            $(this).toggleClass('focus')
            selected_.css('display', 'none');
        }else{
            $('.jobfilters-label').removeClass('focus');
            $(this).toggleClass('focus');
            $('.jobfilters-listFilter').css('display', 'none');
            selected_.css('display', 'block');
        }
    })

    var check=1;
    $('#discovery-talent').on('click', function(){
        $('.hidden-section').toggleClass('hidden');    
        if(check==1){
            $('.arrow').css('transform', 'rotate(0deg)');
            check=0;
        }else{
            $('.arrow').css('transform', 'rotate(180deg)');
            check=1;
        }
    })

    $('.input-company').focusin(function(event){
        event.stopPropagation();
    })

    $('.jobfilters-item').on('click', function(){
        $(this).parent().find('.jobfilters-item').removeClass('selected');
        $(this).addClass('selected');
        $(this).closest('.jobfilters-filter').find('.jobfilters-label').text($(this).text());
    })
})