let signUpBtn = document.querySelector(".signUpBtn");
let signInBtn = document.querySelector(".signInBtn");
let title = document.querySelector(".title");
let nameFeild = document.querySelector(".nameFeild");
let underLine = document.querySelector(".underline");
let text = document.querySelector(".text");

signInBtn.addEventListener("click", () => {
  nameFeild.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  text.innerHTML = "Lost Password";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  underLine.style.transform = "translateX(35px)";
});
signUpBtn.addEventListener("click", () => {
  nameFeild.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML = "Password Suggestions";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
  underLine.style.transform = "translateX(0)";
});
