var current_window = $(window).width();

$(document).ready(function () {
  $(".open-menu").on("click", function () {
    $("header nav").addClass("open-nav");
  });

  $(".close-menu").on("click", function () {
    $("header nav").removeClass("open-nav");
  });

  $(window).on("resize", function () {
    if ($(window).width() >= 992 && current_window < 992) {
      $("header nav").removeClass("open-nav");
    }
  });
});
function All() {
  $(".webdesign").fadeIn();
  $(".branding").fadeIn();
  $(".photography").fadeIn();
}
function WebDesign() {
  $(".webdesign").show();
  $(".branding").fadeOut();
  $(".photography").fadeOut();
}
function Branding() {
  $(".branding").show();
  $(".webdesign").fadeOut();
  $(".photography").fadeOut();
}
function Photography() {
  $(".photography").show();
  $(".webdesign").fadeOut();
  $(".branding").fadeOut();
}
document.getElementById("btn-customer-1").innerHTML =
  "<img src='img/active.png' alt=''>";
document.getElementById("btn-customer-2").innerHTML =
  "<img src='img/notactive.png' alt=''>";
document.getElementById("btn-customer-3").innerHTML =
  "<img src='img/notactive.png' alt=''>";
document.getElementById("customer-img").innerHTML =
  "<img src='img/customer.png' alt=''></img>";
document.getElementById("customer-quote").innerHTML =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the";

function clique1() {
  document.getElementById("customer-img").innerHTML =
    "<img src='img/customer.png' alt=''></img>";
  document.getElementById("btn-customer-1").innerHTML =
    "<img src='img/active.png' alt=''>";
  document.getElementById("btn-customer-2").innerHTML =
    "<img src='img/notactive.png' alt=''>";
  document.getElementById("btn-customer-3").innerHTML =
    "<img src='img/notactive.png' alt=''>";
  document.getElementById("customer-quote").innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the";
}
function clique2() {
  document.getElementById("customer-img").innerHTML =
    "<img src='img/customer2.png' alt=''></img>";
  document.getElementById("btn-customer-2").innerHTML =
    "<img src='img/active.png' alt=''>";
  document.getElementById("btn-customer-1").innerHTML =
    "<img src='img/notactive.png' alt=''>";
  document.getElementById("btn-customer-3").innerHTML =
    "<img src='img/notactive.png' alt=''>";
  document.getElementById("customer-quote").innerHTML =
    "Je suis très satisfait du code de Amandine elle mérite un 20/20";
}
function clique3() {
  document.getElementById("customer-img").innerHTML =
    "<img src='img/customer3.png' alt=''></img>";
  document.getElementById("btn-customer-3").innerHTML =
    "<img src='img/active.png' alt=''>";
  document.getElementById("btn-customer-2").innerHTML =
    "<img src='img/notactive.png' alt=''>";
  document.getElementById("btn-customer-1").innerHTML =
    "<img src='img/notactive.png' alt=''>";
  document.getElementById("customer-quote").innerHTML =
    "En tout cas j'aime bien le SCSS ça simplifie la vie";
}
var stickySidebar = $(".menu").offset().top;

$(window).scroll(function () {
  if ($(window).scrollTop() > stickySidebar) {
    $(".menu").addClass("affix");
  } else {
    $(".menu").removeClass("affix");
  }
});
