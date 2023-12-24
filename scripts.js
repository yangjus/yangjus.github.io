// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "#FF906B";
  } else {
    document.getElementsByTagName("nav")[0].style.backgroundColor = "beige";
  }
}

// Contact form
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "oN2R7zaGKKb1hOHE1";
const serviceID = "service_qnws2wi";
const templateID = "template_wp1rcv3";

emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  submitBtn.innerText = "Sending...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }
  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message sent successfully";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    });
});