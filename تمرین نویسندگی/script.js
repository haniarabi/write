const images =[
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg'
]
let index = 0 ;

document.getElementById('right').addEventListener('click', function () {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById('main-img').src = images[index]

})

document.getElementById('left').addEventListener('click', function () {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }
    document.getElementById('main-img').src = images[index];
});
