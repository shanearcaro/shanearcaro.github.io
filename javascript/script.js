let envelope = document.getElementById("icon-envelope");

envelope.onmouseover = function() {
    envelope.classList.replace("fa-envelope-o", "fa-envelope-open-o");
}

envelope.onmouseout = function() {
    envelope.classList.replace("fa-envelope-open-o", "fa-envelope-o");
}



$("#sendMessage").on("click", function() {
    message = $("#contact-form").serialize();
    $.ajax({
        url: "https://formspree.io/f/xjvpalok", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    document.getElementById("contact-form").reset();
    return false;
});