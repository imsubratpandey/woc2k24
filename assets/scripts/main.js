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

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus == true) {
        getSidebar.style.width = "0px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}