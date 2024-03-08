const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

clock = () => {
    let today = new Date();
    let h = (today.getHours() % 12) + today.getMinutes() / 59;
    let m = today.getMinutes();
    let s = today.getSeconds();

    h *= 30;
    m *= 6;
    s *= 6;

    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);

    setTimeout(clock, 500);
}
rotation = (target, val) => {
    target.style.transform = `rotate(${val}deg)`;
}
window.onload = clock();