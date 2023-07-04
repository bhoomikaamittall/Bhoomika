<script>
  
(function() {

$('form > input').keyup(function() {



    var empty = false;

    $('form  > input').each(function() {

        if ($(this).val() == '') {

            empty = true;

        }

    });



    if (empty) {

        $('#login').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie

    } else {

        $('#login').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie

    }

});

})()

</script>