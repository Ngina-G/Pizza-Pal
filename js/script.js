const pizzaSize= {
    small: 700,
    medi: 1000,
    large: 1200
};

let button= document.querySelector('.orderBtn');
button.addEventListener("click", function (x) {
    x.preventDefault(); })

// TOPPINGS
const toppingsSmall= {
    none: 0,
    olives: 100,
    cheese: 150,
    mince: 200
}
const toppingsMedi= {
    none: 0,
    olives: 150,
    cheese: 200,
    mince: 250
}
const toppingsLarge= {
    none: 0,
    olives: 200,
    cheese: 250,
    mince: 300
}
// CRUST
const crustSmall= {
    classic: 125,
    thin: 95,
    thick:180
}
const crustMedi= {
    classic: 115,
    thin: 75,
    thick:155
}
const crustLarge= {
    classic: 185,
    thin: 155,
    thick: 205
}


// let pizzaButton= document.querySelector(".pizza1Btn")
// pizzaButton.addEventListener("click",function (){

//     let toppings= document.querySelector(".toppings").val
//     let toppingsSm= Object.getOwnPropertyNames(toppingsSmall)

//         if(pizzaButton.value()= "small"){
//             console.log(toppingsSmall && crustSmall);
//             return toppingsSmall && crustSmall
//         }
// })

function Pizza(size, toppings, crust, total, orderNo) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.total = total;
    this.orderNo = orderNo;
  }
$('.piza1Btn').click(function() {
    var sizeOfPizza = $(".pizzaForm option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    order = order + 1;
    grandTotal = grandTotal + total;
}