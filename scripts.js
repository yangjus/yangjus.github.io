// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#FF906B";
  } else {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "beige";
  }
}