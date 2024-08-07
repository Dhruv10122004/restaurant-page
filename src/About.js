export default function () {
    const email = document.createElement('p');
    const phone = document.createElement('p');
    const content = document.getElementById('content');
    email.textContent = 'xyz123@gmail.com';
    phone.textContent = '1234567890';
    phone.id = 'details';
    email.id = 'details';
    email.style.color = 'white';
    phone.style.color = 'white';
    content.appendChild(email);
    content.appendChild(phone);
}