// let string = "mIsSIssIPPi";
const form = document.querySelector("form");

// need this below for the output
const responseElement = document.querySelector(".response");

const capitalize = (string) => {
  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  return string;
};

const submitHandler = (event) => {
  event.PreventDefault();

  const capitalString = capitalize(form.string.value);
  // What I want to come out of the text below from the output
  responseElement.textContent = ` The capitalization if${capitalString} is ${capitalString}!!!`;
};

form.addEventListener("submit", submitHandler);
