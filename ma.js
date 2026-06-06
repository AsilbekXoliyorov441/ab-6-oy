var cards = document.querySelectorAll(".card");

cards.forEach(function(card){

  var buyBtn = card.querySelector(".buy-btn");
  var cartBtn = card.querySelector(".cart-btn");

  var plus = card.querySelector(".plus");
  var minus = card.querySelector(".minus");

  var number = card.querySelector(".number");





  // в корзину
  buyBtn.addEventListener("click", function(){

    buyBtn.classList.add("hidden");
    cartBtn.classList.remove("hidden");

  });


  // PLUS
  plus.addEventListener("click", function(){

    number.textContent++;

  });


  // MINUS
  minus.addEventListener("click", function(){

    if(number.textContent > 0){
      number.textContent--;
    }

    // 0 bo‘lsa button qaytadi
    if(number.textContent == 0){

      cartBtn.classList.add("hidden");
      buyBtn.classList.remove("hidden");

      number.textContent = 1;

    }

  });

});