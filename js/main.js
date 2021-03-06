const bargurBar = document.querySelector(".toggle-menu");
const ul = document.querySelector("#ul");
const form = document.querySelector(".form");

bargurBar.onclick = () => {
  ul.classList.toggle("show");

  if (ul.getAttribute("class") === "show") {
    ul.style.display = "flex";
    ul.style.flexDirection = "column";
    ul.style.position = "absolute";
    ul.style.top = "100%";
    ul.style.left = "0";
    ul.style.width = "100%";
    ul.style.backgroundColor = "rgb(0 0 0 / 80%)";
  } else {
    ul.style.display = "none";
  }
};
const search = document.querySelector(".search");
const faSearch = document.querySelector(".fa-search");

faSearch.onclick = () => {
  faSearch.classList.toggle("sear");
  if (faSearch.classList[2] === "sear") {
    search.style.display = "block";
    search.style.right = "40px";
    search.style.position = "absolute";
    search.style.height = "100%";
    search.style.width = "300px";
    search.style.zIndex = "2";
    search.style.transition = "0.2s linear";
  } else {
    search.style.display = "none";
    search.style.right = "-261px";
  }
};

const up = document.querySelector(".top");

window.onscroll = () => {
  this.scrollY >= 639 ? up.classList.add("show-top") : up.classList.remove("show-top");
};
up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const btns = document.querySelector(".shuffle");

btns.children[0].onclick = () => {
  btns.children[0].classList.add("active");
  document.querySelector(".w1").style.display = "inline";
  document.querySelector(".w2").style.display = "inline";
  document.querySelector(".w3").style.display = "inline";
  document.querySelector(".w8").style.display = "inline";
  document.querySelector(".w4").style.display = "inline";
  document.querySelector(".w5").style.display = "inline";
  document.querySelector(".w6").style.display = "inline";
  document.querySelector(".w7").style.display = "inline";
};

btns.children[1].onclick = () => {
  document.querySelector(".imgs-container").style.justifyContent = "center";
  document.querySelector(".w1").style.display = "none";
  document.querySelector(".w2").style.display = "none";
  document.querySelector(".w3").style.display = "none";
  document.querySelector(".w8").style.display = "inline";
  document.querySelector(".w4").style.display = "none";
  document.querySelector(".w5").style.display = "none";
  document.querySelector(".w6").style.display = "none";
  document.querySelector(".w7").style.display = "inline";
};
btns.children[1].onmouseover = () => {
  btns.children[1].style.borderBottom = "2px solid #19c8fa";
};
btns.children[1].onmouseout = () => {
  btns.children[1].style.borderBottom = "none";
};
btns.children[2].onclick = () => {
  document.querySelector(".w1").style.display = "none";
  document.querySelector(".w2").style.display = "none";
  document.querySelector(".w3").style.display = "inline";
  document.querySelector(".w8").style.display = "none";
  document.querySelector(".w4").style.display = "none";
  document.querySelector(".w5").style.display = "none";
  document.querySelector(".w6").style.display = "inline";
  document.querySelector(".w7").style.display = "none";
};
btns.children[2].onmouseover = () => {
  btns.children[2].style.borderBottom = "2px solid #19c8fa";
};
btns.children[2].onmouseout = () => {
  btns.children[2].style.borderBottom = "none";
};
btns.children[3].onclick = () => {
  document.querySelector(".w1").style.display = "inline";
  document.querySelector(".w2").style.display = "none";
  document.querySelector(".w3").style.display = "none";
  document.querySelector(".w8").style.display = "none";
  document.querySelector(".w4").style.display = "none";
  document.querySelector(".w5").style.display = "inline";
  document.querySelector(".w6").style.display = "none";
  document.querySelector(".w7").style.display = "none";
};
btns.children[3].onmouseover = () => {
  btns.children[3].style.borderBottom = "2px solid #19c8fa";
};
btns.children[3].onmouseout = () => {
  btns.children[3].style.borderBottom = "none";
};
btns.children[4].onclick = () => {
  document.querySelector(".w1").style.display = "none";
  document.querySelector(".w2").style.display = "inline";
  document.querySelector(".w3").style.display = "none";
  document.querySelector(".w8").style.display = "none";
  document.querySelector(".w4").style.display = "inline";
  document.querySelector(".w5").style.display = "none";
  document.querySelector(".w6").style.display = "none";
  document.querySelector(".w7").style.display = "none";
};
btns.children[4].onmouseover = () => {
  btns.children[4].style.borderBottom = "2px solid #19c8fa";
};
btns.children[4].onmouseout = () => {
  btns.children[4].style.borderBottom = "none";
};

const btnSee = document.querySelector(".btn-see");

btnSee.onclick = () => {
  btnSee.parentElement.style.display = "none";
};
