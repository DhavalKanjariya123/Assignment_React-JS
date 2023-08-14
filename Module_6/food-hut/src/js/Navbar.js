import $ from "jquery";




$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
        // document.querySelector('.navbar').classList.add('sticky');
        // document.getElementById("navbar-brand").style.display="none";
        // document.getElementById("logoname").style.display="block";

          $(".navbar").addClass('sticky');
            $("#navbar-brand").css("display" , "none");
            $(".logoname").addClass("logoname2");
            // $(".logoname1").css("display" , "block");
         
        }
  
        else{
          // document.querySelector('.navbar').classList.remove('sticky');
          // document.getElementById("navbar-brand").style.display="block";
          // document.getElementById("logoname").style.display="none";


          $(".navbar").removeClass('sticky');
          $("#navbar-brand").css("display" , "block");
          $(".logoname").removeClass("logoname2");


          
          // $("#logoname").addClass("logoname2");
          // $(".logoname1").css("display" , "none");
            	
        }
    })
  })

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 100) {
//         //   $(".navbar").css("background-color","green")
//           $(".navbar").css({
//             backgroundColor: "#343a40"
//         });
//         }
  
//         else{
//             $(".navbar").css("backgroundColor" : "red");  	
//         }
//     })
//   })