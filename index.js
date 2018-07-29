document.addEventListener('DOMContentLoaded', function () {
    var VPM = document.getElementById("VPMS");
    var RP = document.getElementById("RP");
    var AP = document.getElementById("AP");

    currentPost = document.getElementsByClassName("visible")[0];

    VPM.onclick = function () {
        var recents = document.getElementsByClassName("recentItems")[0];
        if (recents.classList.contains("hidden2")) {
            currentPost.classList.remove("visible");
            currentPost.classList.add("hidden");

            document.getElementsByClassName("vpm")[0].classList.remove("hidden");
            document.getElementsByClassName("vpm")[0].classList.add("visible");

            currentPost = document.getElementsByClassName("visible")[0];
        }
    };

    AP.onclick = function () {
        var recents = document.getElementsByClassName("recentItems")[0];
        if (recents.classList.contains("hidden2")) {
            currentPost.classList.remove("visible");
            currentPost.classList.add("hidden");

            document.getElementsByClassName("all")[0].classList.remove("hidden");
            document.getElementsByClassName("all")[0].classList.add("visible");

            currentPost = document.getElementsByClassName("visible")[0];
        }
    };

    RP.onclick = function () {
        var recents = document.getElementsByClassName("recentItems")[0];
        if (recents.classList.contains("hidden2")) {
            recents.classList.add("visible2");
            recents.classList.remove("hidden2");
        } else if (recents.classList.contains("visible2")) {
            recents.classList.add("hidden2");
            recents.classList.remove("visible2");
        }
    };

}, false);

function clickHandler(e) {
    var target = e.target;

    currentPost.classList.remove("visible");
    currentPost.classList.add("hidden");

    document.getElementsByClassName(target.id)[0].classList.remove("hidden");
    document.getElementsByClassName(target.id)[0].classList.add("visible");

    currentPost = document.getElementsByClassName("visible")[0];
}