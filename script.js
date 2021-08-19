const input = document.getElementById('submit');
const transition = document.querySelector('.transition');

input.addEventListener('click', () => {
    transition.classList.add('open');
    document.querySelector('.cover').style.top = '-100vh';
    document.getElementById('audio').play();
});
