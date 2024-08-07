import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './About';

function init() {
    loadHome();

    document.getElementById('home').addEventListener('click', ()=> {
        const content  = document.querySelector('#content');
        content.innerHTML = '';
        loadHome();
    });

    document.getElementById('menu').addEventListener('click', ()=>{
        const content  = document.querySelector('#content');
        content.innerHTML = '';
        loadMenu();
    });

    document.getElementById('about').addEventListener('click', ()=>{
        const content  = document.querySelector('#content');
        content.innerHTML = '';
        loadAbout();
    });
}
window.onload = init;