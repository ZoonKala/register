// شماره تلفن فقط عدد و حداکثر 10 رقم بعد پیش‌شماره
const phoneInput = document.querySelector(".phone-group input");
phoneInput.addEventListener("input", e => {
  phoneInput.value = phoneInput.value.replace(/\D/g,'');
  if(phoneInput.value.length > 10) phoneInput.value = phoneInput.value.slice(0,10);
});

// سن محدود به 99
const ageInput = document.querySelector('input[type="number"]');
ageInput.addEventListener("input", e => {
  if (ageInput.value > 99) ageInput.value = 99;
});

// submit فرم
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Registration successful!");
});
