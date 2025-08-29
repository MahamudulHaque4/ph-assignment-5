function getElement(id) {
  return document.getElementById(id);
}
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;


// heart button functionality
const heartBtns = document.querySelectorAll("#heart-btn");
for (const btn of heartBtns) {
  btn.addEventListener("click", function () {   
    heartCount++;
    getElement("heart-count").innerText = heartCount;

  });
}