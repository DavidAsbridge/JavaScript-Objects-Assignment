//creating an array to hold our food objects
let foodList = [];


let food1 = {
  name:'Tacos',
  price:3.00
};
foodList.push(food1);

let food2 = {
  name:'Sandwich',
  price:7.00
};
foodList.push(food2);
let food3 = {
  name:'Hotdog',
  price:2.00
};
foodList.push(food3);
let food4 = {
  name:'Loaded Nachos',
  price:4.00
};
foodList.push(food4);
let food5 = {
  name:'French Fries',
  price:1
};
foodList.push(food5);



//printing all food names from the array to the document

for(x=0;x<foodList.length;x++){
  var foodName = document.createElement("p");
  foodName.innerText = foodList[x].name;
  var foodPrice = document.createElement("p");
  foodPrice.innerText = "$" + foodList[x].price;
  document.getElementById("menu").appendChild(foodName);
  document.getElementById("menu").appendChild(foodPrice);

  
}

