console.log("hello world");

// function select(){
//     var image = document.getElementById('firstClick');
//     image.style.backgroundColor='#efb74f';
//     document.body.append
// }

let image = document.getElementsByClassName('marquage');

function modif() {
    array.forEach(image => {
        image.style.border='10px solid #efb74f';
    });
    
}

function select(e) {
image.addEventListener('onclick' , modif(e));
}