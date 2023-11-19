const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

let sliderIndex = 0;
const slideCount = 4; // Adjust the number of slides as needed
const slideWidth = 25; // Adjust the slide width as needed
const transitionDuration = 0.5; // Adjust the transition duration as needed

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

left.addEventListener('click', prevSlide);
right.addEventListener('click', nextSlide);

// Automatic slider change every 5 seconds
const intervalId = setInterval(nextSlide, 5000);

// Optionally, you can clear the interval when needed (e.g., when the user interacts with the slider)
// clearInterval(intervalId);
