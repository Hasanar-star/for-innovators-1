const cardElement = document.getElementById("debitOrCreditCard");
const LENGTH_OF_DIGITS = 19;

function preventUserFromPaste(e) {
  e.preventDefault();
  return;
}

function removeSpaceIfAny(value) {
  let withOutSpace = value.split(" ");
  let stringFromArray = withOutSpace.join("");
  return stringFromArray;
}

function formateCardNumber(e) {
  restrictUserToTypeOnlyNumbers(e);
  setTimeout(() => {
    let cardNumber = cardElement.value;
    if (cardNumber.length > 4 && cardNumber.length < 9) {
      cardNumber = removeSpaceIfAny(cardNumber);
      let arrayOfCardNumber = cardNumber.split("");
      arrayOfCardNumber.splice(4, 0, " ");
      let stringFromArray = arrayOfCardNumber.join("");
      cardElement.value = stringFromArray;
    }
    if (cardNumber.length >= 9 && cardNumber.length < 13) {
      cardNumber = removeSpaceIfAny(cardNumber);
      let arrayOfCardNumber = cardNumber.split("");
      arrayOfCardNumber.splice(4, 0, " ");
      arrayOfCardNumber.splice(9, 0, " ");
      let stringFromArray = arrayOfCardNumber.join("");
      cardElement.value = stringFromArray;
    }
    if (cardNumber.length >= 13 && cardNumber.length < LENGTH_OF_DIGITS) {
      cardNumber = removeSpaceIfAny(cardNumber);
      let arrayOfCardNumber = cardNumber.split("");
      arrayOfCardNumber.splice(4, 0, " ");
      arrayOfCardNumber.splice(9, 0, " ");
      arrayOfCardNumber.splice(14, 0, " ");
      let stringFromArray = arrayOfCardNumber.join("");
      cardElement.value = stringFromArray;
    }
  }, 100);
}

function restrictUserToTypeOnlyNumbers(event) {
  if (
    event.keyCode < 48 ||
    event.keyCode > 57 ||
    cardElement.value.length >= LENGTH_OF_DIGITS
  ) {
    event.preventDefault();
    return;
  }
}
