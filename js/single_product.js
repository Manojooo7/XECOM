
const productName = document.getElementsByClassName('.title')
const productDescription = document.getElementsByClassName('.description')

function gettingProductData() {
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

    const product = getProducts();
    const { name, description } = product
    console.log(product);
    productName.textContent = name
    productDescription.textContent = description


}

gettingProductData()