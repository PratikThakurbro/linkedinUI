$(document).ready(function(){
    $('#email-inp').on('input', function(){
        let email = $(this).val();
        if (email === "") {
            $('.span-inp').text('Please enter your email');  
        } else {
            $('.span-inp').text(' ');   
        }
    });

    $('#email-inp').on('blur', function(){
        let email = $(this).val();
        if (email === "") {
            $('.span-inp').text('Please enter your email');   
        }
    });
    

    $('#pass-inp').on('input', function(){
        let email = $(this).val();
        if (email === "") {
            $('.span-inp2').text('Please enter your password');   
        } else {
            $('.span-inp2').text(' ');   
        
        }
    });

    $('#pass-inp').on('blur', function(){
        let email = $(this).val();
        if (email === "") {
            $('.span-inp2').text('Please enter your password');   
        }
    });

    $('.forgot').click(function(){
        $('.forgot-password').css('display','block')
    })




    var newPassword = $('#new-pass').val();
    var usernameValue = $(".newpass-1").val(); 
    $(".newpassword-inp").hide(); 
    let usernameError = true; 

    $('#email-inp').on('input', function(){
        let email = $(this).val();
        if (email === "") {
            $('.span-inp').text('Please enter your email');  
        } else {
            $('.span-inp').text(' ');   
        }
    });

 


$(".newpass-1").click(function () {
    if(newPassword || usernameValue) {

        validateUsername(); 
        console.log('function chal cuka hai');
    }
}); 

function validateUsername() { 
    if (true) { 
        $(".newpassword-inp").show(); 
        usernameError = false; 
        console.log('ye value match nai ho rha hai');
        // return false; 
    }
     else { 
        $(".newpassword-inp").hide(); 
        console.log('sub thk se ho giya hai');
    } 
    
}


    
        
        $(form).submit(function(event) {
            alert("Please fill in all fields.");
            // Prevent the form from submitting
            event.preventDefault();

            // Validate if all required fields are filled
            var email = $("#email-inp").val();
            var password = $("#pass-inp").val();
            var oldPassword = $("#old-pass").val();
            var newPassword = $("#new-pass").val();
            var confirmPassword = $("#confirm-pass").val();

            if (email && password && oldPassword && newPassword && confirmPassword) {
                // If all fields are filled, submit the form
                $("#sub").click();
            } else {
                // If any field is empty, show error message or handle it as needed
                alert("Please fill in all fields.");
            }
        });
    
    
    // $('.head').mouseenter(function(){
    //     $('h1').animate({fontSize: '50px'}, "fast");
    // }).mouseleave(function(){
    //     $('h1').animate({fontSize: '51.5px'}, "fast");
    // });

    $('#explore').mouseenter(function(){
        $('#h2').animate({fontWeight: '700'}, "fast");
        // $('#h2').animate({fontSize: '53px'}, "fast");
        
    }).mouseleave(function(){
        // $('#h2').animate({fontSize: '50px'}, "fast");
        $('#h2').animate({fontWeight: '200'}, "fast");
    });

    $('#internship').mouseenter(function(){
        $('.h2').animate({fontWeight: '700'}, "fast");
        // $('#h2').animate({fontSize: '53px'}, "fast");
        
    }).mouseleave(function(){
        // $('#h2').animate({fontSize: '50px'}, "fast");
        $('.h2').animate({fontWeight: '200'}, "fast");
    });
    $('#tools').mouseenter(function(){
        $('.tools-h2').animate({fontWeight: '700'}, "fast");
        // $('#h2').animate({fontSize: '53px'}, "fast");
        
    }).mouseleave(function(){
        // $('#h2').animate({fontSize: '50px'}, "fast");
        $('.tools-h2').animate({fontWeight: '200'}, "fast");
    });
    $('#work').mouseenter(function(){
        $('h2').css('color','#498dd1');
        
    }).mouseleave(function(){
        $('h2').css('color','#666666');
    });
    $('#big-text').mouseenter(function(){
        $('h2').css('color','#498dd1');   
        
    }).mouseleave(function(){
        $('h2').css('color','#b24020');
    });
    $('#video-text').mouseenter(function(){
        $('h2').css('color','#498dd1');
}).mouseleave(function(){
    $('h2').css('color','#b24020');
    });


});