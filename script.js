const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.querySelector(".close");

openBtn.onclick = (e) => {
  e.preventDefault();
  popup.style.display = "flex";
};

closeBtn.onclick = () => {
  popup.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};