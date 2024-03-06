const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const quantity = document.getElementById("quantity-para")
const add_cart = document.getElementById("cart-2")
const shoes_qunatity = document.getElementById("shoes")
const price = document.getElementById("total")
const del = document.getElementById("del")
const check_out = document.getElementById("check")
const count = document.getElementById("count")
const cart_button = document.getElementById("cart-button")

const empty_cart = document.querySelector("#empty")
const checkout_img = document.querySelector(".checkout-image")
const check_para = document.getElementById("check-para2")
const checkout_price = document.querySelector("#price")
const checkout_del = document.querySelector(".delete")
const button = document.querySelector("#checkout-button")

let quantity_value = 0;

plus.addEventListener('click', (e) => {

    e.preventDefault();

    for (let i = 0; i < 1; i++) {
        quantity_value = quantity_value + 1;
    }
    quantity.innerHTML = quantity_value
    count.innerHTML = quantity_value
})

minus.addEventListener('click', (e) => {

    e.preventDefault();
    if (quantity_value !== 0) {

        for (let i = 0; i < 1; i++) {
            quantity_value = quantity_value - 1;
        }
        quantity.innerHTML = quantity_value
        count.innerHTML = quantity_value
    }
})

add_cart.addEventListener('click', (e) => {

    e.preventDefault();
    if (quantity_value !== 0) {

        shoes_qunatity.innerHTML = quantity_value

        let x = parseInt(quantity_value)

        price.innerHTML = '$' + x * 125 + '.00'
        count.style.display = "flex";
        checkout_img.style.display = "block";
        check_para.style.display = "block";
        checkout_price.style.display = "block";
        checkout_del.style.display = "block";
        button.style.display = "block";
        empty_cart.style.display = "none";
    }
})

let isOpen = false;

cart_button.addEventListener('click', (e) => {
    isOpen = !isOpen; 
    if (isOpen) {
        check_out.style.display = "block"; 
    } else {
        check_out.style.display = "none"; 
    }
});

del.addEventListener('click', (e) => {

    e.preventDefault();

    empty_cart.style.display = "block";
    count.style.display = "none";
    checkout_img.style.display = "none";
    check_para.style.display = "none";
    checkout_price.style.display = "none";
    checkout_del.style.display = "none";
    button.style.display = "none";
    price.innerText = '';
    check_out.style.display = "none";
    quantity_value = 0
    quantity.innerHTML = quantity_value
})

function mobile() {
    var element = document.getElementById("list")
    element.classList.toggle("mystyle");
}