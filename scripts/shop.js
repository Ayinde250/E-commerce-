const selectElement = document.querySelector(".my_select");
const productContainer = document.querySelector(".product_container");
const pageNumber = document.querySelectorAll(".page_nums");
// const resultText = d0cument.querySelector(".showing");


// Add an event listener to detect changes

function selectedOption () {

    selectElement.addEventListener("change", (event) => {
    
        const selectedValue = event.target.value;
    
        return selectedValue;
    
        // You can add further logic here based on selectedValue
    });

}

function checkSelectedOption () {

    const selectedValue = selectedOption ();

    if (selectedValue === "Default sorting") {

        fechProduct ();

    }
}


function fechProduct () {

    fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then ((data) => {
        
        displayProducts(data, currentPage , num);
    
    })

    .catch(error => console.error("Error fetching products:", error));

}

let currentPage = 1;
let num = 0
const itemsPerPage = 5;

const displayProducts = (data, page, num) => {
    
    // Calculate the range of items to display
    const startIndex = (page - 1) * itemsPerPage;

    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = data.slice(startIndex, endIndex);

    productContainer.innerHTML = "";

    paginatedItems.forEach((value) => {

        productHtml = `
        
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

            </div>`

            productContainer.insertAdjacentHTML("afterbegin", productHtml);

            pageNumber[num].classList.add("active_number");

    });



}

pageNumber[1].addEventListener("click", function () {

    currentPage+++

    num++

    fechProduct ();
});

fechProduct (); 


