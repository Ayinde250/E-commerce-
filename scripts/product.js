const viewProduct = document.querySelector(".main_product");

    // Fetch and display product details

    const fectchData = () => {
        
        const urlParams = new URLSearchParams(window.location.search);

        const productId = urlParams.get("id");

        if (productId) {

            fetch(`https://fakestoreapi.com/products/${productId}`)

            .then (respone => respone.json())

            .then ((product) => {

                console.log (product);
            
                displayProduct (product);
            });
        };
        
    }

const displayProduct = (product) => {

    const html = ` 

    <div class="product_img">

        <img src="${product.image}" alt="">

    </div>

    <div class="product_container">

        <div class="product_text">

            <h1>${product.title}</h1>

            <p class="despt">${product.description}</p>

            <h3>&#8358; ${product.price}</h3>

            <P> <b>${product.rating.count}</b> in stock </P>

            <p> <em>Rating</em>:<b> ${product.rating.rate}<b> </p>

        </div>

        <div class="product_cart">

            <input type="number">

            <button>Add to cart</button>

        </div>

    </div>`

    viewProduct.insertAdjacentHTML ( "afterbegin" , html);

    }

    fectchData ();
