let title = document.querySelector("#button-overlay-two");
let coupon = document.querySelector(".button-code");

let couponCode = document.getElementById("button-hide-two");

function removeTitle() {
  title.style.display = "none";
  coupon.classList.add("revealed");
  coupon.style.display = "initial";
}

couponCode.addEventListener("click", function () {
  navigator.clipboard.writeText(couponCode.innerHTML);
  couponCode.innerHTML = "Code Copied"
});
