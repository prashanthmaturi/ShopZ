const products = [
    {
        id: 1,
        name: "Welcro pocket dhoti for mens",
        price:"850",
        brand:"RAMRAJ COTTON",
        image:"images/image1.jpg",
    },
    {
        id: 2,
        name: "Welcro pocket dhoti for mens",
        price:"425",
        brand:"RAMRAJ COTTON",
        image: "images/image2.jpg",
    },
    {
        id: 3,
        name: "Women's Green Cotton Kurta Set",
        price:"999",
        brand:"JANSYA",
        image: "images/image3.jpg",
    },
    {
        id: 4,
        name: "Golden Foil Printed Kurta with Palazzo",
        price:"449",
        brand:"JANSYA",
        image: "images/image4.jpg",
    },
    {
        id: 5,
        name: "Golden Foil Printed Kurta with Palazzo",
        price:"490",
        brand:"JANSYA",
        image: "images/image5.jpg",
    },
    {
        id: 6,
        name: "Kurta and Pyjama Set for men",
        price:"900",
        brand:"VASTRA",
        image: "images/image6.jpg",
    },
    {
        id: 7,
        name: "Kurta Pyjama Set Classic Ethnic Attire",
        price:"1399",
        brand:"VASTRA",
        image: "images/image7.jpg",
    },
    {
        id: 8,
        name: "Women's Chanderi Tissue Silk Saree Blue",
        price:"710",
        brand:"VARNA",
        image: "images/image8.jpg",
    },
    {
        id: 9,
        name: "Embroidered Lehenga Kerala Pattu",
        price:"999",
        brand:"VASTRA",
        image: "images/image9.jpg",
    },
    {
        id: 10,
        name: "Lehenga Choli Traditional Ethnic Wear Kurta",
        price:"940",
        brand:"VASTRA",
        image: "images/image10.jpg",
    },
    {
        id: 11,
        name: "Cotton Full Sleeve Wedding Kurta Sherwani",
        price:"799",
        brand:"VASTRA",
        image: "images/image11.jpg",
    },
    {
        id: 12,
        name: "Silk Blend with Gota Lace Dhoti Kurta Set",
        price:"735",
        brand:"AJ DESIGNS",
        image: "images/image12.jpg",
    },
    {
        id: 13,
        name: "Sleeve Anarkali Gown Set with lace Dupatta",
        price:"752",
        brand:"PRUHASTI",
        image: "images/image13.jpg",
    },
    {
        id: 14,
        name: "Elegant Paithani Jacquard Silk Gown",
        price:"1400",
        brand:"VASTRA",
        image: "images/image14.jpg",
    },
    {
        id: 15,
        name: "Kanjivaram Soft Lichi Silk Saree With Blouse Piece",
        price:"711",
        brand:"VARNA",
        image: "images/image15.jpg",
    }

];

function showProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>₹${product.price}</h3>
            <p>${product.name}</p>
            <p>${product.brand}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    const cartCount = document.getElementById("cart-count");
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;
    alert("Product added to cart!");
}

function toggleCart() {
    alert("You have items in your cart!");
}

document.addEventListener("DOMContentLoaded", showProducts);