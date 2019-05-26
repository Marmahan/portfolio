/************* Scroll animation *************/
AOS.init({
  duration: 1200,
})

/************** Menu Links *************************/
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const line1 = document.querySelector('.l1');
const line2 = document.querySelector('.l2');
const line3 = document.querySelector('.l3');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    // toggle between x sign and humburger
    line1.classList.toggle('xl1');
    line2.classList.toggle('xl2');
    line3.classList.toggle('xl3');
});

//hide the menu when a link is clicked
links.forEach(link => {
    //add click eventlistner to the links 
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');

        // toggle between x sign and humburger
        line1.classList.toggle('xl1');
        line2.classList.toggle('xl2');
        line3.classList.toggle('xl3');
        //toggle the visibility of the links
        links.forEach(link => {
            link.classList.toggle('fade');
        });
    })
})
/************** Menu Links *************************/

/************** Animated typing *************************/
var typed = new Typed("#typed", {
    // Waits 2000ms after typing "First"
    strings: ["{<br>&emsp;Computer Science Enthusiast <br>&emsp;A researcher and a web developer;<br>} ^2000 ", ],
    backSpeed: 50,
    typeSpeed: 100,
    loop:true
  });

/************** Animated typing *************************/


/* Smooth scroll */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});