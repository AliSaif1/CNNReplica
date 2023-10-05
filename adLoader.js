window.addEventListener('load', function () {
    const image = document.getElementById('dynamicImage');
    const imagesFolder = 'images/';
    const imageArray = ['2311687950467260045.jpg', '18261020352462551901.jpg', '', 'Landing-Page-Banner.png', '7716025036520302080.jpg',
                        '839090280924019120.jpg', '6742791648651245831.jpg'];

    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImage = imageArray[randomIndex];

    image.onerror = function () {
        image.src = 'images/2311687950467260045.jpg';
    };

    image.src = imagesFolder + randomImage;
});

