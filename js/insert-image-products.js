document.addEventListener('DOMContentLoaded', function() {
    const imgElements = document.querySelectorAll('.img-product');
    const imagesFolder = '../images/product-homepage/';
    console.log(imgElements.length);
    for (let i = 0; i < imgElements.length; i++) {
        let imgSrc = imgElements[i].getAttribute('src');
        console.log(imgSrc);
        imgSrc = imgSrc.replace(/^.*[\\\/]/, '');
        console.log(imgSrc);

        imgElements[i].setAttribute('src', imagesFolder + imgSrc);
        console.log(imagesFolder + imgSrc);
    }
});