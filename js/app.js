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
        console.log(partialPosition)
      }


    })
  })





})()