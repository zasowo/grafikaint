function anim1(zdj){
    let image = document.getElementById(zdj);
    let kontener = document.getElementById("wybranezdj");
    kontener.textContent = '';
    let clone = image.cloneNode(true);
    kontener.appendChild(clone);
    
    if(zdj == "zdj1" || zdj == "zdj3" || zdj == "zdj5"){
        kontener.children[0].classList.add("anim1rotat");
    } else if (zdj == "zdj6") {
        kontener.children[0].classList.add("shadow-pop-tr");
    } else if (zdj == "zdj7") {
        kontener.children[0].classList.add("tilt-in-top-1");
    } else if (zdj == "zdj8") {
        kontener.children[0].classList.add("fade-in");
    } else if (zdj == "zdj9") {
        kontener.children[0].classList.add("puff-in-center");
    } else if (zdj == "zdj10") {
        kontener.children[0].classList.add("bounce-in-top");
    } else {
        kontener.children[0].classList.add("anim1");
    }

    let image1 = document.getElementById("zdj1");
    let image2 = document.getElementById("zdj2");
    let image3 = document.getElementById("zdj3");
    let image4 = document.getElementById("zdj4");
    let image5 = document.getElementById("zdj5");
    let image6 = document.getElementById("zdj6");
    let image7 = document.getElementById("zdj7");
    let image8 = document.getElementById("zdj8");
    let image9 = document.getElementById("zdj9");
    let image10 = document.getElementById("zdj10");
    image1.style.visibility = "visible";image2.style.visibility = "visible";image3.style.visibility = "visible";image4.style.visibility = "visible";image5.style.visibility = "visible";image6.style.visibility = "visible";image7.style.visibility = "visible";image8.style.visibility = "visible";image9.style.visibility = "visible";image10.style.visibility = "visible";

    image.style.visibility = "hidden";
}

function zamknij(element){
    element.textContent = '';
    let image1 = document.getElementById("zdj1");
    let image2 = document.getElementById("zdj2");
    let image3 = document.getElementById("zdj3");
    let image4 = document.getElementById("zdj4");
    let image5 = document.getElementById("zdj5");
    let image6 = document.getElementById("zdj6");
    let image7 = document.getElementById("zdj7");
    let image8 = document.getElementById("zdj8");
    let image9 = document.getElementById("zdj9");
    let image10 = document.getElementById("zdj10");
    image1.style.visibility = "visible";image2.style.visibility = "visible";image3.style.visibility = "visible";image4.style.visibility = "visible";image5.style.visibility = "visible";image6.style.visibility = "visible";image7.style.visibility = "visible";image8.style.visibility = "visible";image9.style.visibility = "visible";image10.style.visibility = "visible";
}