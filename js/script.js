// const pizzaSize= {
//     small: 700,
//     medi: 1000,
//     large: 1200
// };
    // let order =  1;
    // let grandTotal = 0;


    // ensures the page does not refresh

let button= document.querySelector('.orderBtn');
button.addEventListener("click", function (x) {
    x.preventDefault(); })

// hides the table

  $("table").hide();
  $(".additional-buttons").hide();
  $(".additional-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".additional-info h4").hide();


  // selects the inputed elements

let a = document.getElementById('selectSize1');
let sizePizza = a.options[a.selectedIndex].value;
// let b = document.getElementsByClass('selectSize');
// let toppingsPizza = b.options[b.selectedIndex].value;
// let c = document.getElementsByClass('selectSize');
// let crustPizza = c.options[c.selectedIndex].value;

  // function orderValues(){
  //   sizePizza + toppingsPizza + crustPizza
  // }


function pizzaValue(){
  let e = document.getElementById("selectSize1")
  let pizzaType = e.options[e.selectedIndex].text;

  let a = document.getElementById('selectSize1');
  let sizePizza = a.options[a.selectedIndex].value;

  if(pizzaType === "small"){
    console.log(pizzaType);
    console.log(sizePizza);
    return sizePizza;
  } else if(pizzaType === "medi"){
    console.log(pizzaType)
    console.log(sizePizza);
    return sizePizza;
  }else if(pizzaType === "large"){
    console.log(pizzaType);
    console.log(sizePizza);
    return sizePizza;
  }
}

console.log(pizzaValue());
