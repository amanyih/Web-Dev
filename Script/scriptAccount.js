const signUp = document.querySelector(".form_btn-sing");
// console.log(signUp);
const name = document.querySelector("#nameForm");
const email = document.querySelector("#emailForm");
const phone = document.querySelector("#phoneForm");
const password = document.querySelector("#password");
const rePass = document.querySelector("#re-password");
const error = document.querySelector(".error-message");
const agree = document.querySelector("#agree");

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const phoneError = document.querySelector(".phone-error");
const passError = document.querySelector(".pass-error");
const agreeError = document.querySelector(".agree-error");

signUp.addEventListener("click", () => {
  if (name.value.length <= 3) {
    nameError.textContent = "Name length not valid";
    nameError.style.display = "block";
  }
  const nameList = name.value.split(" ");
  if (nameList.length < 2) {
    nameError.textContent = "Enter your full name";
    nameError.style.display = "block";
  }
  if (
    !email.value.includes("@") ||
    !email.value.includes(".com") ||
    !email.value.length > 5
  ) {
    emailError.textContent = "Please Enter a valid Email address";
    emailError.style.display = "block";
  }
  if (password.value.length == 0) {
    passError.textContent = "Enter a Password";
    passError.style.display = "block";
  }
  if (password.value != rePass.value) {
    passError.textContent = "Your values aren't similar";
    passError.style.display = "block";
  }
  if (phone.value == "+251") {
    phoneError.textContent = "Please enter a phone number";
    phoneError.style.display = "block";
  }
  if (agree.value == false) {
    agreeError.textContent = "Please agree to terms and conditions";
    agreeError.style.display = "block";
  }
});
