 const numbers=[12,33,11,9,45]

numbers.forEach(element => {
    console.log(element);
});







// $(document).ready(function()
// {
//     active=false;


//     button_submit=$(".form__button");
//     $(button_submit).click(click_submit_button);

// });


// function click_submit_button()
// {
//     var inputs= $(".form__input");
//     for (let index = 0; index < inputs.length; index++) 
//     {
//         var input = inputs[index];
//         if($(input).val()=="")
//         {
//             show_error_message(index);
//         }   
//         else
//         {
//             hide_error_message();
//             if(index==2)
//             {
//                 show_error_email_formated();
//             }
//         } 

//     }
   
// }

// function show_error_message(index)
// {
//     if(index==0)
//     {
//         $(".form__error--fn").css("display","block");
//         $(".form__img--fn").css("display","block");

//     }
//     if(index==1)
//     {
//         $(".form__error--ln").css("display","block");
//         $(".form__img--ln").css("display","block");

//     }
//     if(index==2)
//     {
 
//          $(".form__error--email").css("display","block");
//          $(".form__img--email").css("display","block");  

//     }
//     if(index==3)
//     {
//         $(".form__error--pass").css("display","block");
//         $(".form__img--pass").css("display","block");

//     }
// }

// function show_error_email_formated()
// {
//     var value=$("#form__email").val();

//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     var bool=re.test(value); 

//     if(bool==false)
//     {
//         $("#test").text("The email address is not formatted correctly");
//         $(".form__error--email").css("display","block");
//         $(".form__img--email").css("display","block");
      
//     }
//     else{
//         $(".form__error--email").css("display","block");
//         $(".form__img--email").css("display","block");
//     }
// }

// function hide_error_message()
// {
//     $(".form__error--fn").css("display","none");
//     $(".form__img--fn").css("display","none");



//     $(".form__error--ln").css("display","none");
//     $(".form__img--ln").css("display","none");




//      $(".form__error--email").css("display","none");
//      $(".form__img--email").css("display","none");  



//     $(".form__error--pass").css("display","none");
//     $(".form__img--pass").css("display","none");


// }