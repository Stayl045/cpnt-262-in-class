const form = document.querySelector("form");
const responseElement = document.querySelector(".response");

const submitHandler = (event) => {
  event.preventDefault();

  const string = form.string.value;
  const phrase = form.phrase.value;

  console.log(string, string.length);
  console.log(phrase, phrase.length);

  console.log(phrase.matchAll(string).length);

  const matches = phrase.matchAll(string);
  let numberOfMatches = 0;
  for (const match of matches) {
    numberOfMatches++;
  }

  responseElement.textContent = `${numberOfMatches} matches found.`;
};

form.addEventListener("submit", submitHandler);
