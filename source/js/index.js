const nameInput = document.querySelector('input[data-field="name"]');
const phoneInput = document.querySelector('input[data-field="phone"]');
const emailInput = document.querySelector('input[data-field="email"]');

const nameRegExp = "^[A-Za-zА-Яа-яЁёs]{2,}$";
const phoneRegExp = "^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$";
const emailRegExp = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";

const setErrorRedLine = (evt) => {
  evt.target.style.border = "2px solid red";
};

nameInput.addEventListener("input", (evt) => {
  if (!evt.target.value.match(nameRegExp)) {
    evt.target.setCustomValidity(
      "Имя должно содержать более 2 латинских/кириллических букв"
    );
    setErrorRedLine(evt);
    return;
  }

  evt.target.setCustomValidity("");
  evt.target.style.border = "";
});

phoneInput.addEventListener("input", (evt) => {
  if (!evt.target.value.match(phoneRegExp)) {
    evt.target.setCustomValidity("Введите корректный номер телефона");
    setErrorRedLine(evt);
    return;
  }

  evt.target.setCustomValidity("");
  evt.target.style.border = "";
});

emailInput.addEventListener("input", (evt) => {
  if (!evt.target.value.match(emailRegExp)) {
    evt.target.setCustomValidity(
      "Введите электронную почту в формате example@mail.com"
    );
    setErrorRedLine(evt);
    return;
  }

  evt.target.setCustomValidity("");
  evt.target.style.border = "";
});
