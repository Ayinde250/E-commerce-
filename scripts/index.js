const slider =document.querySelector(".slide_container");
const slide = document.querySelector(".my_slide");
const leftBtn = document.querySelector(".btn2");
const rightBtn = document.querySelector(".btn1");
const products = document.querySelectorAll(".products");


const sliderText = [ "welcome", "get start your favorite shopping", "quick and hassle-free shopping" ];

let slideIndex = 0;

showSlides("slide_right");

function showSlides (style) {

    let slideHtml = "";

    slideIndex++;

    if (slideIndex > sliderText.length) { slideIndex = 1}

    slideHtml += `
    
                <div class="my_slide ${style}">

                    <h1>${sliderText[slideIndex-1]}</h1>

                    <a href="../pages/shop.html"><button>Shop Now</button></a>

                </div>`;

    
    slider.innerHTML = "";

    slider.insertAdjacentHTML("afterbegin", slideHtml)

}

setInterval(() => {

    showSlides("slide_right");

}, 15000);

// function nextSlide() { 

//     showSlides("slide_left");
// }

// function prevSlide() {

//     showSlides("slide_right");

// }

// rightBtn.addEventListener('click', nextSlide);

// leftBtn.addEventListener('click', prevSlide);


const getMenProduct = () => {

    fetch ("https://fakestoreapi.com/products/category/men's clothing")

    .then (response => response.json())

    .then ((data) => {

        data.shift ();

        displayProduct(data, 0);
    })
    
}

const getWomenProduct = () => {

    fetch ("https://fakestoreapi.com/products/category/women's clothing")

    .then (response => response.json())

    .then ((data)=> {

        const sliceData = data.slice (2, 5);
        
        displayProduct (sliceData, 1);

    });
    
}
const getJeweleryProduct = () => {

    fetch ("https://fakestoreapi.com/products/category/jewelery")

    .then (response => response.json())

    .then ((data)=> {

        data.shift();
        
        displayProduct (data, 2);

    });
    
}

const getElectonicProduct = () => {

    fetch ("https://fakestoreapi.com/products/category/electronics")

    .then (response => response.json())

    .then ((data)=> {

        const sliceData = data.slice (2, 5);
        
        displayProduct (sliceData, 3);

    });
    
}

const displayProduct = (newData, index) => {


    let html = "";

    newData.forEach((value) => {
        
        html +=`

            <div class="each_products">

                <div class="product_img">

                    <img src="${value.image}" alt="products">

                </div>

                <div class="product_text">

                    <div>

                        <h3>${value.category}</h3>
    
                        <p>&#8358; ${value.price}</p>
    
                    </div>
    
                    <div class="product_links">
    
                        <a href="./pages/product.html?id=${value.id}"> View Product </a>
                        
                        <p> <i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i> </p>
    
                    </div>

                </div>

            </div>
        `
    });

    products[index].insertAdjacentHTML ( "afterbegin" , html);

} 

getMenProduct ();
getWomenProduct ();
getJeweleryProduct();
getElectonicProduct();












