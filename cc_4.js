//Step2
let products = [
{name: "Sandals", category: "shoes", price: 50, inventory: 2},
{name: "Pizza", category: "food", price: 5, inventory: 3},
{name: "Laptop", category: "electronics", price: 1000, inventory: 1},
{name: "Paddleboard", category: "beach", price: 150, inventory: 4},
];

//Step3
for (let product of products)
{
switch (product.category)
{
    case "shoes":
    product.price *= .2;break;
    case "food":
    product.price *=.15;break;
    case "electronics":
    case "beach":
    product.price *= .10;break;
    default:break;  
}
}

//Step4
let customerType = "student";
let extraDiscount = 0;

if(customerType === "student")
    {let extraDiscount= 0.05;}
if (customerType === "regular")
    {let extraDiscount= .07;}
        else {extraDiscount=0;}

//Step5

