jQuery(document).ready(function($){
    $(document).on('click', '.btn[data-fancybox]', function(){
        let title = $(this).data('title');
        let result = '';
        if(title){
            let text = title.split(';');
            if(text[2]=='1'){
                text[2]= '<br/>';
            }
            result = result + '<span class="c-red">'+text[0]+'</span>'+text[2]+text[1];
        }else{
            result = result + '<span class="c-red">Beratung</span> anfragen';
        }
        $('.js-modal-title').html(result);

    });

    $(document).on('af_complete', function(event, response) {
        var form = response.form;

        if (response.success) {
            console.log(form.attr('id'));
            $.fancybox.close();
            $.fancybox.open({
                src: '#success',
                type: 'inline'
            });
            setTimeout(function() {
                $.fancybox.close();
            }, 4000)
        }

    });
})