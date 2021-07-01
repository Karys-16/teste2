let time = 2500,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage(){

images[currentImageIndex].classList.remove("selected")
    currentImageIndex++;

    if(currentImageIndex >= max )
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}
    function start(){
        setInterval(() => {
            nextImage()
        }, time);
    }   
    window.addEventListener("load", start)

    



    let Imagem = 0,
    time2 = 3000,
    imagens = document.querySelectorAll("#slider2 img")
    max2 = imagens.length;

function nextImage2(){

imagens[Imagem].classList.remove("select")
    Imagem++;

    if(Imagem >= max2 )
        Imagem = 0

    imagens[Imagem].classList.add("select")
}
    function start2(){
        setInterval(() => {
            nextImage2()
        }, time2);
    }   
    window.addEventListener("load", start2)
