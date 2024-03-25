$(function () {
    $(window).scroll(function () {
        if (document.body.getBoundingClientRect().top > -200) {
            document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
        }
        if (document.body.getBoundingClientRect().top < -200) {
            document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0,0,0,0.7)";
        }
    });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }