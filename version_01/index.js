let ImgBox = document.querySelector(".img-box");
let ImgWrap = document.querySelector(".img-wrap");
let leftSpace = ImgBox.offsetLeft;
let originalImg = document.getElementById("originalImg");

originalImg.style.width = ImgBox.offsetWidth + "px";

ImgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  ImgWrap.style.width = boxWidth;
};
