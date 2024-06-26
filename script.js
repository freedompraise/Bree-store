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

document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-button");
  const orderCovers = document.querySelectorAll(".object-cover");

  // to open the order form when the order button is clicked
  orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const productName = button.getAttribute("data-product");
      const productPrice = button.getAttribute("data-price");
      const productImageSrc = button.getAttribute("data-image");

      // Populate the confirmation section with product details
      document.getElementById("confirmationProductName").textContent =
        productName;
      document.getElementById("confirmationProductPrice").textContent =
        "Price: " + productPrice;

      document.getElementById("confirmOrderModal").style.display = "flex";
      document.getElementById("orderFormSection").style.display = "none";

      // Add event listener for the "Confirm Order" button in the confirmation section
      document
        .getElementById("confirmOrderBtn")
        .addEventListener("click", function () {
          document.getElementById("confirmOrderModal").style.display = "none";
          document.getElementById("orderFormSection").style.display = "block";
          openOrderForm(productName, productImageSrc);
        });
    });
  });

  // to open the product image popup when the order cover is clicked
  orderCovers.forEach(function (cover) {
    cover.addEventListener("click", function () {
      const imageSrc = cover.getAttribute("src");
      openProductImagePopup(imageSrc);
    });
  });

  // capture order and send to whatsapp
  const orderForm = document.getElementById("orderForm");
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Retrieve form field values
    const productName = document.getElementById("selectedProduct").textContent;
    const name = document.getElementById("name").value;
    const deliveryAddress = document.getElementById("deliveryAddress").value;
    const nearestBusStop = document.getElementById("nearestBusStop").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const phoneNumber2 = document.getElementById("phoneNumber2").value;
    const quantity = document.getElementById("quantity").value;

    // Construct WhatsApp message
    const orderMessage = `Order Details:
      Product Name: ${productName}
      Name: ${name}
      Delivery Address: ${deliveryAddress}
      Nearest Bus Stop: ${nearestBusStop}
      City: ${city}
      State: ${state}
      Phone Number: ${phoneNumber}
      Phone Number 2: ${phoneNumber2}
      Quantity: ${quantity}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappNumber = "08120691079";
    const whatsappURL = `https://wa.me/${whatsappNumber}/?text=${encodedMessage}`;
    window.location.href = whatsappURL;
  });
});

// mobile menu
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

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

  slides[slideIndex - 1].classList.remove("hidden");
  slides[slideIndex - 1].style.animation = "slideRight 1s forwards";
}

setInterval(() => {
  moveSlide(1);
}, 5000);

// toggle visibility of paragraphs when clicking on Font Awesome icons
document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".fa-plus-circle");

  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const paragraph = this.parentElement.nextElementSibling;
      paragraph.classList.toggle("hidden");
      this.classList.toggle("fa-minus-circle");
    });
  });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
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
