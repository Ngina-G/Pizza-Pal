// const pizzaSize= {
//     small: 700,
//     medi: 1000,
//     large: 1200
// };
    // let order =  1;
    // let grandTotal = 0;
let button= document.querySelector('.orderBtn');
button.addEventListener("click", function (x) {
    x.preventDefault(); })

  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide();

let orderValues =() => {
    let sizePizza = $(".pizzaForm option:selected").val();
    let toppingsPizza = $(".pizzaExtras option:selected").val();
    let crustPizza = $(".pizzaCrust option:selected").val();
    let total= parseInt(sizePizza) + parseInt(toppingsPizza) + parseInt(crustPizza);
    order = 1;
    grandTotal =0;


    let order = new orderValues(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

    let newRow = '<tr><th scope="row">' + neworderValues.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + neworderValues.size + '</td><td id="pizzaExtras">' + $(".toppings option:selected").text() + " - " + neworderValues.toppings + '</td><td id="pizzaCrust">' + $(".crust option:selected").text() + " - " + neworderValues.crust + '</td><td id="total">' + neworderValues.total + '</td></tr>'

    $("#pizza").append(newRow);
  };

console.log(orderValues());
