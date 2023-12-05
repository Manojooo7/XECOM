// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const slider = document.querySelector('.slider');
// const sliderControls = document.querySelector('.slider-controls');

// let sliderIndex = 0;
// let slideCount = 4; // Adjust the number of slides as needed
// const slideWidth = 25; // Adjust the slide width as needed
// const transitionDuration = 0.5; // Adjust the transition duration as needed

// // Duplicate slides for infinite loop
// for (let i = 0; i < slideCount; i++) {
//     const clone = slider.children[i].cloneNode(true);
//     slider.appendChild(clone);
// }

// const totalSlides = slideCount * 2; // Account for duplicated slides
// Set the width of the slider to accommodate all slides
// slider.style.width = `${totalSlides * slideWidth}%`;



// const updateSlider = () => {
//     const translateValue = `translate(${sliderIndex * -slideWidth}%)`;
//     slider.style.transition = `transform ${transitionDuration}s ease-in-out`;
//     slider.style.transform = translateValue;
// };

// const nextSlide = () => {
//     sliderIndex = (sliderIndex < slideCount - 1) ? sliderIndex + 1 : 0;
//     updateSlider();
// };

// const prevSlide = () => {
//     sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : slideCount - 1;
//     updateSlider();
// };


// let isSliderRunning = true;
// let intervalId = setInterval(nextSlide, 5000);

// const toggleSlider = () => {
//     if (isSliderRunning) {
//         clearInterval(intervalId);
//     } else {
//         intervalId = setInterval(nextSlide, 5000);
//     }
//     isSliderRunning = !isSliderRunning;
// };

// slider.addEventListener('mouseenter', toggleSlider);
// slider.addEventListener('mouseleave', toggleSlider);
// sliderControls.addEventListener('mouseleave', toggleSlider);
// sliderControls.addEventListener('mouseenter', toggleSlider);

// left.addEventListener('click', prevSlide);
// right.addEventListener('click', nextSlide);

// APIURL = https://ejvtndbnggmfzqqxlgqu.supabase.co/rest/v1/product?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec&AuthorizationBearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec



// for testing purposes
// const apiurl = 'https://ejvtndbnggmfzqqxlgqu.supabase.co/rest/v1/product?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec&AuthorizationBearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec'


// getting featured products
const featuredProductsUrl = 'https://ejvtndbnggmfzqqxlgqu.supabase.co/rest/v1/product?featured=eq.true&select=id,name,price,thumbImg&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec&AuthorizationBearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec'

const getFeaturedProducts = async () => {
    const response = await fetch(featuredProductsUrl);
    const data = await response.json();
    return data;
}


// genereting featured products

window.addEventListener('DOMContentLoaded', async () => {
    const featuredproducts = await getFeaturedProducts();
    // console.log(...featuredproducts);
    featuredproducts.forEach((products)=>{
        // destructuring datas
        const {id,name,price,thumbImg} = products;

        // creating a div
        const featuredProduct = document.createElement('div');
        // assigning a class to the div 'f_product' which we already styled
        featuredProduct.classList.add('f_product');

        // creating the featured product card HTML elemts name are same as the raw html elmets name before 
        featuredProduct.innerHTML=`
        <div class="fproduct-img">
            <img src=${thumbImg}>
        </div>
        <div class="featured_product_info">
            <h3>${name}</h3>
            <p>₹${price}</p>
            <button>Buy Now</button>
        </div>
        `
        document.querySelector('.featured_container').appendChild(featuredProduct)
    })

})