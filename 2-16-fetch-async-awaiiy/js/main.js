console.log("hello World");

const fetchData = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/9");
  const data = await response.json();
  console.log(data.id);
};

fetchData();
