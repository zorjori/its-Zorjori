const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnNoRect = btnNo.getBoundingClientRect();

  let newTop = getRandomNumber(0, containerRect.height - btnNoRect.height);
  let newLeft = getRandomNumber(0, containerRect.width - btnNoRect.width);

  // Update the position of the "No" button
  btnNo.style.position = "absolute";
  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
});

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
