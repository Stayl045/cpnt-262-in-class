const picsumIds = [1003, 1018, 1020, 1021, 1024, 1039];

console.log(picsumIds);
let output = "";

for (let i = 0; i <= picsumIds.length - 1; i++) {
  let images = `<img src="https://picsum.photos/id/${picsumIds[i]}/300/300" alt="lorem picsum"></img>`;

  output += `${images}`;
}

document.querySelector(".images").innerHTML = `${output}`;
