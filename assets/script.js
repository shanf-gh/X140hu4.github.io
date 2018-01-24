// source: https://blog.reecreate.com/sending-contact-form-emails-from-your-github-pages-site-using-ajax-formspree-c7b17e3f5b0b
$('form#contact_form').validate({
    messages: { },
    submitHandler: function(form) {
      $.ajax({
        url: "https://formspree.io/shan.fabien@gmail.com",
        method: "POST",
        data: $(form).serialize(),
        dataType: "json",
        success: function(data) {
            $("form#contact_form :input").prop("disabled", true);
            $('#thanks').show();
        }
      });
      return false;
    }
  });