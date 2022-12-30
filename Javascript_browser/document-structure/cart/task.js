const body = document.querySelector('body');
const cartProducts = document.querySelector('.cart__products');
const productsTeg = document.querySelector('.products');
const cartTitle = document.querySelector('.cart__title');

cartTitle.classList.add('cart__remove');

productsTeg.addEventListener('click', (e) => {
    let target = e.target;
    let product = target.closest('.product') ;
    let count = product.querySelector('.product__quantity-value');
    if (target.classList.contains('product__quantity-control_inc')) {
        count.textContent++; 
    };

    if (target.classList.contains('product__quantity-control_dec')) {
        count.textContent--; 
    };

    if (count.textContent < 1) {
        count.textContent = 1
    };

    if (target.classList.contains('product__add')) {
        let products = [...cartProducts.querySelectorAll('.cart__product')].filter(el => el.dataset.id == product.dataset.id);
        if (products.length == 0) {
            add(product, count);
        } else {
            products.forEach(el => {
                let countCart = el.querySelector('.cart__product-count');
                countCart.textContent = Number(countCart.textContent) + Number(count.textContent);
                count.textContent = 1;
            });
        };
    };
});

cartProducts.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('task__remove')) {
        let parent = target.closest('.cart__product');
        removeProducts(parent);
    };
});

function add(product, count) {
    let img = product.querySelector('img').outerHTML
    cartProducts.innerHTML += `
        <div class="cart__product" data-id=${product.dataset.id}>
            ${img}
            <div class="cart__product-count">${count.textContent}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `
    activCartTitle();
    count.textContent = 1;
};

function removeProducts(product) {
        let countCart = product.querySelector('.cart__product-count');
        countCart.textContent = Number(countCart.textContent) - 1;
        if (countCart.textContent < 1) {
            product.remove();
            activCartTitle();
        };
};

function activCartTitle () {
    if ([...cartProducts.querySelectorAll('.cart__product')].length < 1) {
        cartTitle.classList.add('cart__remove');
    } else {
        cartTitle.classList.remove('cart__remove');
    }
};