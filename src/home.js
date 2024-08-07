import restaurantImage from './restaurantImage.jpeg'

export default function loadHome() {
    const content = document.getElementById('content');
    const main = document.getElementById('main');

    let para = document.createElement('p');
    para.textContent = 'A place where you get best Indian cuisine.'
    let red = 106;
    let blue = 144;
    let green = 241;
    para.style.color = 'rgb(' + red + ',' + blue + ',' + green + ')';
    let image = document.createElement('img');
    image.src = restaurantImage
    image.alt = 'image';
    image.id = 'seating';

    content.appendChild(para);
    content.appendChild(image);
    main.appendChild(content);
}