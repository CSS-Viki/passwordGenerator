const passwordEl = document.querySelector("#password");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

//Characters and symbols
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()";

function generatePassword() {
  let password = "";
  let chars = "";

  chars += uppercaseEl.checked ? uppercaseChars : "";
  chars += lowercaseEl.checked ? lowercaseChars : "";
  chars += numbersEl.checked ? numberChars : "";
  chars += symbolsEl.checked ? symbolChars : "";

  for (let i = 0; i <= lengthEl.value; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }
  passwordEl.value = password;
}

// Method one for copying
async function copyPassword() {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(passwordEl.value);
    alert("Password copied to clipboard");
  }
}
// Method two for copying
function copy() {
  passwordEl.select();
  document.execCommand("copy");
}

//Event listeners
//copyBtn.addEventListener("click", copy);
copyBtn.addEventListener("click", copyPassword);
generateBtn.addEventListener("click", generatePassword);
