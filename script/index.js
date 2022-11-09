
window.addEventListener('load', (event) => {
  let yontuStr = document.querySelectorAll(".nav-bar_logo div");

  for(let str of yontuStr){
    let colorCode = "#"+ Math.round(Math.random() * 0xffffff).toString(16);
    str.style.color = colorCode;

  }
});