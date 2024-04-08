function anim1(zdj){
    let image = document.getElementById(zdj);
    let kontener = document.getElementById("wybranezdj");
    kontener.textContent = '';
    let clone = image.cloneNode(true);
    kontener.appendChild(clone);
    kontener.children[0].classList.add("anim1");

    let image1 = document.getElementById("zdj1");
    let image2 = document.getElementById("zdj2");
    let image3 = document.getElementById("zdj3");
    let image4 = document.getElementById("zdj4");
    let image5 = document.getElementById("zdj5");
    image1.style.visibility = "visible";image2.style.visibility = "visible";image3.style.visibility = "visible";image4.style.visibility = "visible";image5.style.visibility = "visible";

    image.style.visibility = "hidden";
}

function zamknij(element){
    element.textContent = '';
    let image1 = document.getElementById("zdj1");
    let image2 = document.getElementById("zdj2");
    let image3 = document.getElementById("zdj3");
    let image4 = document.getElementById("zdj4");
    let image5 = document.getElementById("zdj5");
    image1.style.visibility = "visible";image2.style.visibility = "visible";image3.style.visibility = "visible";image4.style.visibility = "visible";image5.style.visibility = "visible";
}