function openOrderForm(productName, productImageSrc) {
  document.getElementById("orderFormSection").style.display = "block";
  document.getElementById("selectedProduct").textContent = productName;
  document.getElementById("selectedProductImage").src = productImageSrc;
  // scroll to the order from section
  const orderFormSection = document.getElementById("orderFormSection");
  orderFormSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToInstallmentalPlan() {
  const installmentalPaymentSection = document.getElementById(
    "installmentalPaymentSection"
  );
  document.getElementById("confirmOrderModal").style.display = "none";
  installmentalPaymentSection.scrollIntoView({ behavior: "smooth" });
}

function openProductImagePopup(imageSrc) {
  const popup = document.getElementById("productImagePopup");
  const image = document.getElementById("popupImage");
  image.src = imageSrc;
  popup.style.display = "block";
}

function closeProductImagePopup() {
  document.getElementById("productImagePopup").style.display = "none";
}

// mobile menu
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

// slides
let slideIndex = 1;
showSlide(slideIndex);
// change slide with the prev/next button
function moveSlide(moveStep) {
  showSlide((slideIndex += moveStep));
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  // remove the active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
}

setInterval(() => {
  moveSlide(1);
}, 5000);

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); //
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const contactMessage = `Contact Details:
      Name: ${name}
      Phone Number: ${number}
      Subject: ${subject}
      Message: ${message}`;

  const encodedMessage = encodeURIComponent(contactMessage);
  const whatsappURL = `https://wa.me/2348120691079/?text=${encodedMessage}`;
  window.location.href = whatsappURL;
});
