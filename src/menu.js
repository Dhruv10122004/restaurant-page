import menuImg from './menuImg.jpg'
export default function loadMenu() {
    const content = document.getElementById('content');
    const menuimg = document.createElement('img');
    menuimg.src = menuImg;
    menuimg.id = 'menuImg';
    content.appendChild(menuimg);
}