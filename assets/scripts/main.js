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

function scrollToHome() {
    document.getElementById("welcome-box-id").scrollIntoView();
}

function scrollToAbout() {
    document.getElementById("about-event-id").scrollIntoView();
}

function scrollToSchedule() {
    document.getElementById("schedule-id").scrollIntoView();
}

function scrollToSponsors() {
    document.getElementById("sponsors-id").scrollIntoView();
}

function scrollToContact() {
    document.getElementById("footer-id").scrollIntoView();
}

function hidePopup() {
    document.getElementsByClassName("popup-container")[0].style.opacity = "0";
    document.getElementsByClassName("popup-container")[0].style.top = "-200vh";
    document.getElementsByClassName("main-content")[0].style.height = "unset";
};

async function showPopup() {
    document.getElementsByClassName("popup-container")[0].style.opacity = "1";
    document.getElementsByClassName("popup-container")[0].style.top = "0";
    document.getElementsByClassName("main-content")[0].style.height = "100vh";
    document.getElementsByClassName("main-content")[0].style.overflow = "hidden";
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.getElementsByClassName("popup")[0].addEventListener('click', function (e) {
    e.stopPropagation();
})

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