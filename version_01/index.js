let ImgBox = document.querySelector(".img-box");
let ImgWrap = document.querySelector(".img-wrap");
let leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
};
