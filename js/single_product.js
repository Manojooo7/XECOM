
const productName = document.querySelector('.title');
const productDescription = document.querySelector('.description');
const producPrice = document.querySelector('.price');
const productColor = document.querySelector('.product_color');
const productSizeContainer = document.querySelector('.product_size_container');
const productImageContainer = document.querySelector('.product_details_img');
const productThumbImageContainer = document.querySelector('.product_thumb_img');


 async function gettingProductData() {
    const urlPrams = new URLSearchParams(window.location.search);
    const productIDString = urlPrams.get("product");
    const productID = parseInt(productIDString, 10);

    console.log(productID);

    const productUrl = `https://ejvtndbnggmfzqqxlgqu.supabase.co/rest/v1/product?id=eq.${productID}&select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec&AuthorizationBearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdnRuZGJuZ2dtZnpxcXhsZ3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODg5ODEsImV4cCI6MjAxNjU2NDk4MX0.8-oUZN-TtFLdjBRRmoQMoNirKtdnPgrLzzS2pew3Sec`

    const getProducts = async () => {
        const response = await fetch(productUrl);
        const data = await response.json();
        return data;
    }

    const product = await getProducts();
    const { name, description, price, color, sizes, cat, productImgs } = product[0];
    console.log(name);

    // product title
    productName.textContent = name;
    // Product description
    productDescription.textContent = description;
    // product Price
    producPrice.textContent = `₹ ${price}`;

    // product color
    for(let i = 0; i < color.length; i++ ){
        const colors = document.createElement('span');
        colors.style.backgroundColor = color[i];
        productColor.appendChild(colors);
    };

    // product sizes
    for(let i = 0; i < sizes.length; i++ ){
        const size = document.createElement('span');
        size.textContent = sizes[i];
        productSizeContainer.appendChild(size)
    };

    // product images
    
    for(let i = 0; i < productImgs.length; i++ ){
        const imgs = document.createElement('img');
        imgs.setAttribute('src', productImgs[i]);
        imgs.setAttribute('alt', `${cat} ${i+1}`);
        productImageContainer.appendChild(imgs)
    };

    // product thumb images

    for(let i = 0; i < productImgs.length; i++ ){
        const thumbImgItem = document.createElement('div');
        thumbImgItem.classList.add('thumb_img_item')
        const thumbimgData = document.createElement('a')
        thumbimgData.setAttribute('href', '#')
        thumbimgData.setAttribute('data-id', [i])
        const thumnbImg = document.createElement('img')
        thumnbImg.classList.add('thumb_img')
        thumnbImg.setAttribute('src', productImgs[i]);
        thumnbImg.setAttribute('alt', `${cat} ${i+1}`);
        thumbImgItem.appendChild(thumbimgData)
        thumbimgData.appendChild(thumnbImg)

        productThumbImageContainer.appendChild(thumbImgItem);
    };

}
window.onload = gettingProductData()
