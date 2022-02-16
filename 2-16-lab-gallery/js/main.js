// {
//   albumId: 1,
//   id: 8,
//   title: "aut porro officiis laborum odit ea laudantium corporis",
//   url: "https://via.placeholder.com/600/54176f",
//   thumbnailUrl: "https://via.placeholder.com/150/54176f"
// }

const fetchImage = async function () {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  
   // You have to grab the key(URL) inside the api object

  image.src = data.url; // I created an empty image on the dom and changed the src here to data.url
  console.log(data);

<<<<<<< HEAD
  document.querySelector("h1").textContent = data.title;
  document.querySelector("p").textContent = data.body;
=======
  // document.querySelector("h1").fetchImage = data.title;
  // document.querySelector("p").fetchImage = data.body;
>>>>>>> 8c1cea4b23daf223b4fa2be366f2ef5504be95de
};

fetchImage();

// console.log("Hello world!");
