const img = document.querySelector(".output");
const body = document.querySelector("body");

const picsumIds = [
  "https://picsum.photos/id/1003/300/300",
  "https://picsum.photos/id/1018/300/300",
  "https://picsum.photos/id/1020/300/300",
  "https://picsum.photos/id/1021/300/300",
  "https://picsum.photos/id/1024/300/300",
  "https://picsum.photos/id/1039/300/300",
];

console.log(picsumIds);
let output = "";

for (let i = 0; i <= picsumIds.length - 1; i++) {
  output += `<li>${picsumIds[i]}</li>`;
  console.log(picsumIds[i]);
}
document.createElement(".output").innerHTML = `<li>${output}</li>`;
// if( x % 3 && x % 5 ) {
// console.log(picsumIds);
//   document.write(x);
// } else {
//     if( x % 3 == 0 ) {
//         document.write("ping");
//     }
//     if( x % 5 == 0 ) {
//         document.write("pong");
//     }
// }
// document.write('<br>'); //line breaks to enhance output readability​

// 1. Declare an empty string variable named `output` or similar.

// 2. Create a for loop that iterates through the above array.

// 3. Inside the for loop, build the output string using the addition assignment (+=) operator.

// 4. After the loop finishes, assign your output string to a paragraph element using `Element.innerHTML`.
