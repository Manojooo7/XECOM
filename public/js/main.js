
// getting featured products
const featuredProductsUrl = 'https://ejvtndbnggmfzqqxlgqu.supabase.co/rest/v1/product?featured=eq.true&select=id,name,price,cat,thumbImg,ratings&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec&AuthorizationBearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec'

const getFeaturedProducts = async () => {
    const response = await fetch(featuredProductsUrl);
    const data = await response.json();
    return data;
}


// showing featured products cards

async function loadFeaturedProducts() {
    try {
        const featuredProducts = await getFeaturedProducts();

        //code to handle or display featuredProducts should go here
        featuredProducts.forEach((products) => {
            // destructuring data
            const { id, name, price, thumbImg, cat, ratings } = products;

            const maxWords = 5;
            function truncateTitle(title, maxWords) {
                const words = title.split(' ');
                if (words.length > maxWords) {
                    return words.slice(0, maxWords).join(' ') + '...';
                }
                return title;
            }

            const shortTitle = truncateTitle(name, maxWords);

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
                <div class="f-product-row1">
                    <h3 class="card_categories" alt = "Product Categories">${cat}</h3>
                    <h3 class="ratings">${ratings}</h3>
                </div>
                <div class="f-product-row2">
                    <p class="product_title" alt="${name}" title="${name}">${shortTitle}</p>
                    <p class="price">₹${price}</p>
                </div>
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
    window.open(productDetailsURL, '_blank')
}



window.addEventListener('DOMContentLoaded', loadFeaturedProducts)