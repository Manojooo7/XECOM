<!-- slider content -->

Slider 1:
Title (h1):
"Elevate Your Style"

Paragraph (p):
"Discover the latest trends in fashion that redefine your wardrobe. Our curated collection blends comfort and style, ensuring you make a statement wherever you go."

Slider 2:
Title (h1):
"Unleash Your Confidence"

Paragraph (p):
"Confidence begins with what you wear. Explore our exclusive range of clothing and accessories designed to empower you, making every day a runway for your unique personality."

Slider 3:
Title (h1):
"Timeless Elegance, Modern Comfort"

Paragraph (p):
"Indulge in the perfect blend of timeless elegance and modern comfort. Our carefully crafted fashion pieces bring you sophistication without compromising on comfort and versatility."

Slider 4:
Title (h1):
"Express Yourself with Fashion"

Paragraph (p):
"Your style is a reflection of your personality. Embrace individuality with our diverse collection, allowing you to express yourself through fashion that speaks volumes about who you are."

https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoMSkuanBnIiwiaWF0IjoxNzAwOTg5MzQyLCJleHAiOjIwMTYzNDkzNDJ9.Y8AWVS_vgRtdeCqm8ZdXenEa3VTDy9erf4M617IYEbY&t=2023-11-26T09%3A02%3A31.176Z

  <!-- <section class="slider-item slider2">
                        <div class="slider-left">
                            <h2>Unleash Your Confidence</h2>
                            <p>Confidence begins with what you wear. Explore our exclusive range of clothing and accessories. designed to empower you, making every day a runway for your unique personality.</p>
                            <button>Shop Now</button>
                        </div>
                        <div class="slider-right">
                            <img src="../img/slider-img/slider2.png" alt="">
                      </section>
                      <section class="slider-item slider3">
                        <div class="slider-left">
                            <h2>Timeless Elegance, Comfort</h2>
                            <p>Indulge in the perfect blend of timeless elegance and modern comfort. Our carefully crafted fashion pieces bring you sophistication without compromising on comfort and versatility.</p>
                            <button>Shop Now</button>
                        </div>
                        <div class="slider-right">
                            <img src="../img/slider-img/slider3.png" alt="">
                      </section>
                      <section class="slider-item slider4">
                        <div class="slider-left">
                            <h2>Express Yourself with Fashion</h2>
                            <p>Your style is a reflection of your personality. Embrace individuality with our diverse collection, allowing you to express yourself through fashion that speaks volumes about who you are.</p>
                            <button>Shop Now</button>
                        </div>
                        <div class="slider-right">
                            <img src="../img/slider-img/slider4.png" alt="">
                        </div>  
                      </section> -->


   <section class="featured_product padding">
            <h3>Featured Products</h3>
            <div class="featured_container">
                <!-- featured product card html for styling refrence -->
                <!-- <div class="f_product">
                    <div class="fproduct-img">
                        <img src="https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoMSkuanBnIiwiaWF0IjoxNzAwOTkwNTUwLCJleHAiOjIwMTYzNTA1NTB9.c5ZFuvKFeOmGzrxnAjQUbzg-byG8Y-uRAGdavyT1Fh8&t=2023-11-26T09%3A22%3A39.028Z" alt="">
                        <button>Buy Now</button>
                    </div>
                    <div class="featured_product_info">
                        <h3>Product Name</h3>
                        <p>Price</p>
                    </div>
                 </div> -->
            </div>  
        </section>

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

