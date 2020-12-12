let envelope = document.getElementById("icon-envelope");

envelope.onmouseover = function() {
    envelope.classList.replace("fa-envelope-o", "fa-envelope-open-o");
}

envelope.onmouseout = function() {
    envelope.classList.replace("fa-envelope-open-o", "fa-envelope-o");
}