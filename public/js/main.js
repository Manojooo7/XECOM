
// getting featured products
const featuredProductsUrl = 'https://ejvtndbnggmfzqqxlgqu.supabase.co/rest/v1/product?featured=eq.true&select=id,name,price,thumbImg&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec&AuthorizationBearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec'

const getFeaturedProducts = async () => {
    const response = await fetch(featuredProductsUrl);
    const data = await response.json();
    return data;
}


// genereting featured products

async function loadFeaturedProducts() {
    try {
        const featuredProducts = await getFeaturedProducts();

        // Your code to handle or display featuredProducts should go here
        featuredProducts.forEach((products) => {
            // destructuring datas
            const { id, name, price, thumbImg } = products;

            // creating a div
            const featuredProduct = document.createElement('div');
            // assigning a class to the div 'f_product' which we already styled
            featuredProduct.classList.add('f_product');

            // creating the featured product card HTML elemts name are same as the raw html elmets name before 
            featuredProduct.innerHTML = `
            <div class="fproduct-img">
                <img src=${thumbImg}>
               <i class="ri-eye-line"></i>
            </div>
            <div class="featured_product_info">
                <h3>${name}</h3>
                <p>₹${price}</p>
            </div>
            `
            document.querySelector('.featured_container').appendChild(featuredProduct)

            featuredProduct.addEventListener('click', () => {
                redirectToProductDetailPage(id); // Log the product id when the product is clicked
            });
            // console.log(...featuredproducts);
        })
    } catch (error) {
        console.error('Error loading featured products:', error);
    }
}

// redirect to single product page function
function redirectToProductDetailPage(id) {
    const productDetailsURL = `product_detail.html?product=${id}`
    console.log(productDetailsURL);
    window.location = productDetailsURL
}



window.addEventListener('DOMContentLoaded', loadFeaturedProducts)