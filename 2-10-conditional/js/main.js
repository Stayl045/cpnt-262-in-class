const greet = (name, lang) => {
  if (lang === "en") {
    console.log(`Hello, ${name}!`);
  } else if (lang === "fr") {
    console.log(`bonjour, ${name}!`);
  } else if (lang === "la") {
    console.log(`Salve, ${name}!`);
  } else if {
    console.log("Langauge not supported.");
  }
};

const name = prompt("What is your name?");
const lang = prompt("What is your favourite Language?");
const lang = "fr";
greet("Tony", lang);
