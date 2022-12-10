const bannersImg = document.querySelectorAll('.banners img');

let slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;

    if (n==undefined) {
        n = ++slideIndex
    }
    
    if (n > bannersImg.length) {
        slideIndex = 1
    }    

    if (n < 1) {
        slideIndex = bannersImg.length
    }

    for (i = 0; i < bannersImg.length; i++) {
        bannersImg[i].style.display = "none";  
    }

    bannersImg[slideIndex-1].style.display = "block";  

    setTimeout(showSlides, 5000);
}