function imgSlider(rutaImagen) {
    if (rutaImagen == 1) {
        document.querySelector('.starbucks').src = 'https://res.cloudinary.com/proyects/image/upload/v1616753787/home-page/cat_asruwe.png';
    } else if (rutaImagen == 2) {
        document.querySelector('.starbucks').src = `https://res.cloudinary.com/proyects/image/upload/v1616753803/home-page/food_wpje36.png`;
    } else if (rutaImagen == 3) {
        document.querySelector('.starbucks').src = `https://res.cloudinary.com/proyects/image/upload/v1616753795/home-page/dog_xvghd7.png`;
    } else {
        document.querySelector('.starbucks').src = rutaImagen;
    }
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}