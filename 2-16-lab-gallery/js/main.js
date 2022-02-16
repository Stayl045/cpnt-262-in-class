// {
//   albumId: 1,
//   id: 8,
//   title: "aut porro officiis laborum odit ea laudantium corporis",
//   url: "https://via.placeholder.com/600/54176f",
//   thumbnailUrl: "https://via.placeholder.com/150/54176f"
// }

const fetchImage = async function () {
  const response = await fetch("https://thatcopy.pw/catapi/rest/");
  const data = await response.json();
  console.log(response);

  // You have to grab the key(URL) inside the api object

  const image = document.querySelector(".image");
  fetch("https://i.thatcopy.pw/cat/Nprmx6Y.jpg")
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      image.src = objectURL;
      console.log(image);
    });

  // // I created an empty image on the dom and changed the src here to data.url
  //   image.src = data.url;
  // console.log(data);

  // document.querySelector(".image").fetchImage = "${response}";
};

fetchImage();
