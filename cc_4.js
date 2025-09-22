//Step2
let products = [
{name: "Sandals", category: "shoes", price: 500, inventory: 5},
{name: "Pizza", category: "food", price: 5, inventory: 2},
{name: "Laptop", category: "electronics", price: 1000, inventory: 1},
{name: "Paddleboard", category: "beach", price: 150, inventory: 3},
];

//Step3
for (let product of products)
{
switch (product.category)
{
    case "shoes":
    product.price *= .8;break;
    case "food":
    product.price *=.85;break;
    case "electronics":
    case "beach":
    product.price *= .9;break;
    default:break;  
}
}

//Step4
let customerType = "student";
let extraDiscount = 0;

if(customerType === "student")
    {extraDiscount= 0.05;}
else if (customerType === "regular")
    {extraDiscount= .07;}
        else {extraDiscount=0;}

//Step5
for (let i = 1; i<= 3; i++)
    {let subtotal = 0;
for (let item of products)
    {if (item.inventory>0)
{subtotal +=item.price;item.inventory-=1;}}
let totalAfterDiscount = subtotal * (1 - extraDiscount)
console.log(`Customer ${i}: $${totalAfterDiscount.toFixed(2)}`);
    }
    
//Step6
for (let key in products[0])
    {console.log(`${key}: ${products[0][key]}`)};

//Step7
for (let [key, value]of Object.entries(products[1]))
    {console.log(`${key}: ${value}`)};
for (let [key, value]of Object.entries(products[2]))
    {console.log(`${key}: ${value}`)};
for (let [key, value]of Object.entries(products[3]))
    {console.log(`${key}: ${value}`)};
