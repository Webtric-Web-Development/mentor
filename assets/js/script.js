function mobileNav() {
    var links = document.querySelector("ul");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

/* icon mobile nav */

$('.icon').click(function(){
    $(this).find('i').toggleClass('fa-minus-circle')
});