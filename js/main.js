const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

let sliderIndex = 0;
let slideCount = 4; // Adjust the number of slides as needed
const slideWidth = 25; // Adjust the slide width as needed
const transitionDuration = 0.5; // Adjust the transition duration as needed

// // Duplicate slides for infinite loop
// for (let i = 0; i < slideCount; i++) {
//     const clone = slider.children[i].cloneNode(true);
//     slider.appendChild(clone);
// }

// const totalSlides = slideCount * 2; // Account for duplicated slides
// Set the width of the slider to accommodate all slides
// slider.style.width = `${totalSlides * slideWidth}%`;



const updateSlider = () => {
    const translateValue = `translate(${sliderIndex * -slideWidth}%)`;
    slider.style.transition = `transform ${transitionDuration}s ease-in-out`;
    slider.style.transform = translateValue;
};

const nextSlide = () => {
    sliderIndex = (sliderIndex < slideCount - 1) ? sliderIndex + 1 : 0;
    updateSlider();
};

const prevSlide = () => {
    sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : slideCount - 1;
    updateSlider();
};


let isSliderRunning = true;
let intervalId = setInterval(nextSlide, 5000);

const toggleSlider = () => {
    if (isSliderRunning) {
        clearInterval(intervalId);
    } else {
        intervalId = setInterval(nextSlide, 5000);
    }
    isSliderRunning = !isSliderRunning;
};

slider.addEventListener('mouseenter', toggleSlider);
slider.addEventListener('mouseleave', toggleSlider);

left.addEventListener('click', prevSlide);
right.addEventListener('click', nextSlide);


