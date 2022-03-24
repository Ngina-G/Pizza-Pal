let button= document.querySelector('.orderBtn');
button.addEventListener("click", function (x) {
    x.preventDefault(); })

  // selects the inputed elements

let a = document.getElementById('selectSize1');
let sizePizza = a.options[a.selectedIndex].text;
let b = document.getElementById('selectToppings');
let toppingsPizza = b.options[b.selectedIndex].value;
// let c = document.getElementsByClass('selectSize');
// let crustPizza = c.options[c.selectedIndex].value;

// PIZZA SIZE

function pizzaValue1(){
  let a = document.getElementById("selectSize1")
  let pizzaType1 = a.options[a.selectedIndex].text;

  let b = document.getElementById('selectSize1');
  let sizePizza1 = b.options[b.selectedIndex].value;

  let c = document.getElementById("selectSize2")
  let pizzaType2= c.options[c.selectedIndex].text;

  let d = document.getElementById('selectSize2');
  let sizePizza2 = d.options[d.selectedIndex].value;

  if(pizzaType1 === "small"){
    return sizePizza1;
  } else if(pizzaType1 === "medi"){
    return sizePizza1;
  }else if(pizzaType1 === "large"){
    return sizePizza1;
  }
}

function pizzaValue2(){
  let c = document.getElementById("selectSize2")
  let pizzaType2= c.options[c.selectedIndex].text;

  let d = document.getElementById('selectSize2');
  let sizePizza2 = d.options[d.selectedIndex].value;

  if(pizzaType2 === "small"){
    return sizePizza2;
  } else if(pizzaType2 === "medi"){
    return sizePizza2;
  }else if(pizzaType2 === "large"){
    return sizePizza2;
  }
}

function pizzaValue3(){
  let e = document.getElementById("selectSize3")
  let pizzaType3 = e.options[e.selectedIndex].text;

  let f = document.getElementById('selectSize3');
  let sizePizza3 = f.options[f.selectedIndex].value;

  if(pizzaType3 === "small"){
    return sizePizza3;
  } else if(pizzaType3 === "medi"){
    return sizePizza3;
  }else if(pizzaType3 === "large"){
    return sizePizza3;
  }
}
function pizzaValue4(){
  let g = document.getElementById("selectSize4")
  let pizzaType4 = g.options[g.selectedIndex].text;

  let h = document.getElementById('selectSize4');
  let sizePizza4 = h.options[h.selectedIndex].value;

  if(pizzaType4 === "small"){
    return sizePizza4;
  } else if(pizzaType4 === "medi"){
    return sizePizza4;
  }else if(pizzaType4 === "large"){
    return sizePizza4;
  }
}

function pizzaType(){
  let g = document.getElementById("selectSize")
  let pizzaType = g.options[g.selectedIndex].text;
  return pizzaType;
}
// TOPPINGS

function toppingsValue1(){
  let c = document.getElementById('selectToppings');
  let toppingsPizza1 = c.options[c.selectedIndex].value;

  let d = document.getElementById("selectToppings")
  let toppingsType1 = d.options[d.selectedIndex].text;

  if(toppingsType1 === "olives"){
    return toppingsPizza1;
  } else if(toppingsType1 === "cheese"){
    return toppingsPizza1;
  } else if(toppingsPizza1 === "onions"){
    return toppingsPizza1;
  } else{
    return 0;
  }
}
function toppingsValue2(){
  let c = document.getElementById('selectToppings2');
  let toppingsPizza2 = c.options[c.selectedIndex].value;

  let d = document.getElementById("selectToppings2")
  let toppingsType2 = d.options[d.selectedIndex].text;

  if(toppingsType2 === "olives"){
    return toppingsPizza2;
  } else if(toppingsType2 === "cheese"){
    return toppingsPizza2;
  } else if(toppingsPizza2 === "onions"){
    return toppingsPizza2;
  } else{
    return 0;
  }
}

function toppingsValue3(){
  let c = document.getElementById('selectToppings3');
  let toppingsPizza3 = c.options[c.selectedIndex].value;

  let d = document.getElementById("selectToppings3")
  let toppingsType3 = d.options[d.selectedIndex].text;

  if(toppingsType3 === "olives"){
    return toppingsPizza3;
  } else if(toppingsType3 === "cheese"){
    return toppingsPizza3;
  } else if(toppingsPizza3 === "onions"){
    return toppingsPizza3;
  } else{
    return 0;
  }
}

function toppingsValue4(){
  let c = document.getElementById('selectToppings4');
  let toppingsPizza4 = c.options[c.selectedIndex].value;

  let d = document.getElementById("selectToppings4")
  let toppingsType4 = d.options[d.selectedIndex].text;

  if(toppingsType4 === "olives"){
    return toppingsPizza4;
  } else if(toppingsType4 === "cheese"){
    return toppingsPizza4;
  } else if(toppingsPizza4 === "onions"){
    return toppingsPizza4;
  } else{
    return 0;
  }
}

// CRUST

function crustValue1(){
  let e = document.getElementById('selectCrust');
  let crustPizza = e.options[e.selectedIndex].value;

  let f = document.getElementById("selectCrust")
  let crustType = f.options[f.selectedIndex].text;

  if(crustType === "classic"){
    return crustPizza;
  } else if(crustType === "thin"){
    return crustPizza;
  } else if(crustType === "thick"){
    return crustPizza;
  } else{
    return 500;
  }
}
function crustValue2(){
  let e = document.getElementById('selectCrust2');
  let crustPizza2 = e.options[e.selectedIndex].value;

  let f = document.getElementById("selectCrust2")
  let crustType2 = f.options[f.selectedIndex].text;

  if(crustType2 === "classic"){
    return crustPizza2;
  } else if(crustType2 === "thin"){
    return crustPizza2;
  } else if(crustType2 === "thick"){
    return crustPizza2;
  } else{
    return 500;
  }
}
function crustValue3(){
  let e = document.getElementById('selectCrust3');
  let crustPizza3 = e.options[e.selectedIndex].value;

  let f = document.getElementById("selectCrust3")
  let crustType3 = f.options[f.selectedIndex].text;

  if(crustType3 === "classic"){
    return crustPizza3;
  } else if(crustType3 === "thin"){
    return crustPizza3;
  } else if(crustType3 === "thick"){
    return crustPizza3;
  } else{
    return 500;
  }
}
function crustValue4(){
  let e = document.getElementById('selectCrust4');
  let crustPizza4 = e.options[e.selectedIndex].value;

  let f = document.getElementById("selectCrust4")
  let crustType4 = f.options[f.selectedIndex].text;

  if(crustType4 === "classic"){
    return crustPizza4;
  } else if(crustType4 === "thin"){
    return crustPizza4;
  } else if(crustPizza4 === "thick"){
    return crustPizza4;
  } else{
    return 500;
  }
}



function orderValues1(){
  let final = parseInt(pizzaValue1()) + parseInt(toppingsValue1()) + parseInt(crustValue1());
  console.log(final);
  if(Number.isNaN(final)){
    return (document.getElementById("orders1").innerHTML += 
    "<span> </span>");
  }else if(!Number.isNaN(final)){
    document.getElementById("orders1").innerHTML += final;
      /*"<span> Your Pizza Costs... </span>" +*/
    return final;

  }
}
function orderValues11(){
  let final = parseInt(pizzaValue1()) + parseInt(toppingsValue1()) + parseInt(crustValue1());
  return (final);
}

// let orderTotal1= orderValues1();
// let total1= orderValues1().orderValues11()

function orderValues2(){
  let final = parseInt(pizzaValue2()) + parseInt(toppingsValue2()) + parseInt(crustValue2());
  console.log(final);

  if(Number.isNaN(final)){
    return (document.getElementById("orders2").innerHTML += 
    "<span> </span>");
  }else if(!Number.isNaN(final)){
    document.getElementById("orders2").innerHTML += 
     final;
     return final;
  }
  return final;
}
function orderValues22(){
  let final = parseInt(pizzaValue2()) + parseInt(toppingsValue2()) + parseInt(crustValue2());
  return (final);
}


function orderValues3(){
  let final = parseInt(pizzaValue3()) + parseInt(toppingsValue3()) + parseInt(crustValue3());
  console.log(final);
  if(Number.isNaN(final)){
    return (document.getElementById("orders3").innerHTML += 
    "<span> </span>");
  }else if(!Number.isNaN(final)){
    document.getElementById("orders3").innerHTML += 
     /* "<span> Your Pizza Costs... </span>" +*/ final;
     return final;

  }
}
function orderValues33(){
  let final = parseInt(pizzaValue3()) + parseInt(toppingsValue3()) + parseInt(crustValue3());
  return (final);
}

function orderValues4(){
  let final = parseInt(pizzaValue4()) + parseInt(toppingsValue4()) + parseInt(crustValue4());
  console.log(final);
  if(Number.isNaN(final)){
    return (document.getElementById("orders4").innerHTML += 
    "<span> </span>");
  }else if(!Number.isNaN(final)){
    final;
    document.getElementById("orders4").innerHTML += 
      /*"<span> Your Pizza Costs... </span>" */ final;
      return final;
  }
}
function orderValues44(){
  let final = parseInt(pizzaValue4()) + parseInt(toppingsValue4()) + parseInt(crustValue4());
  return(final);
}


// ORDERING A NEW ONE
 function finish(){
   let  total = [parseInt(orderValues11()),parseInt(orderValues22()), parseInt(orderValues33()), parseInt(orderValues44())]; 

   for (let total = 0; total < cars.length; i++) {}

   if(!Number.isNaN(orderValues11()) || !Number.isNaN(orderValues22()) || !Number.isNaN(orderValues33())|| !Number.isNaN(orderValues44())){
  return orderValues11().hide, orderValues22().hide, orderValues33().hide;
  }else {
    return total;
  }
 }

function addAnother(){
  let order1= orderValues1() + "";
  let order2= orderValues2() + "";
  let order3= orderValues3() + "";
  let order4= orderValues4() + "";
}
console.log(addAnother());

