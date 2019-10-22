// document.getElementById("cart-info").addEventListener("click", function() {
//   const cart = document.getElementById("cart");
//   cart.classList.toggle("show-cart");
//   console.log(cart);
// });


//Show cart

(function () {

  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById('cart');


  cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart')
  })

})();


//add item to cart

(function () {


  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function (singleBtn) {
    singleBtn.addEventListener('click', function (e) {
      if (e.target.parentElement.classList.contains('store-item-icon')) {

        let fullPath = e.target.parentElement.previousElementSibling.src;
        let position = fullPath.indexOf('img') + 3; //+ 3 to remove 'img' from path
        let partialPosition = fullPath.slice(position)

        const item = {};
        item.img = `img-cart${partialPosition}`;

        let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;



        let price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        let finalPrice = price.slice(1).trim();
        item.price = finalPrice;





        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');

        cartItem.innerHTML = `
       
          <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="" srcset="">
          <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">
              ${item.name}
            </p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price mb-0">$ ${item.price}</span>
          </div>
          <a href="#" id="cart-item-remove" class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
        
       
        `;

        //select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('added');








        // console.log(finalPrice)
        console.log(item)





      }


    })
  })





})()