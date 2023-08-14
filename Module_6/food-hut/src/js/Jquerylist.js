
import $ from 'jquery';


$(document).ready(function () {
    // $(".btn1").click(function () {
    //     $(".btn1").removeClass("admin-nav-tab li active1");
    //     $(".nav-link").addClass("active1");
    // });

    $(".btn-events").click(function () {
        $(".btn-events").removeClass("activetab");
        $(this).addClass("activetab");
        $(this).removeClass("juice-btn");
        $(".btn-events").css({
            backgroundColor: "#343a40",
            border: "2px solid #ff214f"
        });
    });
  

})



