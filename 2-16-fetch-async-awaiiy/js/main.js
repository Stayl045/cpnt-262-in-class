console.log("hello World");

const fetchData = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/9");
  const data = await response.json();
  console.log(data.id);
};

fetchData();

// async stays inside of the function defined with the async keyword
