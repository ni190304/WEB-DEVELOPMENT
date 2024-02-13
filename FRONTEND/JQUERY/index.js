$(document).ready(function(){
    $("h1").css("color","red")
 })     //... If script tags in head section

// $("h1").css("color","green");

// console.log($("h1").css("font-size","4rem"));

// $("h1").addClass("big-title margin-50");

// $("h1").text("Nihaal");

// $("button").text("Don't click me");

// $("button").html("<em>Hey</em>")

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// })

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "purple";
//     })
    
// }

$("button").click(function () {
    $("h1").css("color", "red")
})

$("input").keypress(function (event) {
   $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color", "purple");
})

$("h1").before("<button>New</button>")

$("h1").prepend("<button>New</button>")

$("h1").append("<button>New</button>")

$("h1").after("<button>New</button>")

// $("button").remove();

// $("button").click(function(){
//     $("h1").hide();
// })

// $("button").click(function(){
//     $("h1").show();
// })

// $("button").click(function(){
//     $("h1").toggle();
// })

// $("button").click(function(){
//     $("h1").fadeOut();
// })

// $("button").click(function(){
//     $("h1").fadeToggle();
// })

// $("button").click(function(){
//     $("h1").slideUp();
// })

// $("button").click(function(){
//     $("h1").slideDown();
// })

// $("button").click(function(){
//     $("h1").slideToggle();
// })

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
})

