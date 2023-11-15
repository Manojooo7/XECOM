
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

let sliderIndex = 0;
sliderUpdate = () => {
    slider.style.transform = `translate(${sliderIndex * -25}%)`;
}

left.addEventListener('click', () => {
    sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0;
    sliderUpdate()
});

right.addEventListener('click', () => {
    sliderIndex = (sliderIndex < 3) ? sliderIndex + 1 : 3;
    sliderUpdate()
});
