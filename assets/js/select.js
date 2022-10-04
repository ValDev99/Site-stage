console.log("hello world");

// function select(){
//     var image = document.getElementById('firstClick');
//     image.style.backgroundColor='#efb74f';
//     document.body.append
// }

// let image = document.getElementsByClassName('marquage');

// function modif() {
//     array.forEach(image => {
//         image.style.border='10px solid #efb74f';
//     });
    
// }

// function select(e) {
// image.addEventListener('onclick' , modif(e));
// }
//SELECTEURS//
const ttmarq = document.querySelector(".ttmarque")
const marq = document.querySelectorAll(".marquage");

//FONCTIONS 
for (let i = 0; i < marq.length; i++){
    marq[i].addEventListener("click",function(){
        marq[i].style.border='8px solid #efb74f';
    })
}
for (let i = 0; i < marq.length; i++){
    marq[i].addEventListener("dblclick",function(e){
        marq[i].style.border='none';
    })
}

let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};