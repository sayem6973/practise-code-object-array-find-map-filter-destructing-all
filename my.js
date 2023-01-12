// task 1
// let varibale er value changable
let mySchoolName = "miam";
// const varibale not changeabale
const myHubbyNmae = " allah malom"

// task 2

const myName = "sayem";
const myAge = "22 years"

const myCoumputer = {
    company:"ryzen",
    monitor: "viewsonic",
    proccesor:"ryzen 5 3500x",
    ram:"pnyRgb 8gb ram ",
    storage:"256 hp ssd nvme 2"};


const aboutMyLife = `hello evryone my name is ${myName} and iam ${myAge} old my birthdaydate is 27 th april 2000 i have my own pc my pc company name is ${myCoumputer.company} and my pc have ${myCoumputer.ram} and ${myCoumputer.storage} very good pc`;
console.log(aboutMyLife);

const add = num => num % 5 ;
const odd = add(5);
// console.log(odd);

const add2 = (num1,num2) =>{
const addNumber = num1+ 2;
const addNumber2 = num2+ 2;
const odd = addNumber * addNumber2;
return odd;

}

const result = add2(5,5);
console.log(result);

const add3 = (num1,num2,num3) => num1*num2* num3 ;
const total = add3(2,2,2);
console.log(total);

const numbers = [1,4,7,22,55,32,342,33,22];
const [a,b,c,] = numbers;
console.log(c);

const result2 = numbers.map(number => number * 5);
console.log(result2);

const oddNumbers = numbers.filter(number => number% 2 == 1);
console.log(oddNumbers);

const products = [
    {
    phone:"samsung",
    model:"samsung guru music 2",
    price:2200,
    color:"black",
    warranty:"1 year"
   },
    {
    phone:"one plus",
    model:"one plus 8t",
    price:42000,
    color:"black",
    warranty:"1 year"
},
    {
    phone:"symphony",
    model:"symphony w12",
    price:5000,
    color:"black",
    warranty:"1 year"
},
    {
    phone:"samsung",
    model:"samsung m10",
    price:10000,
    color:"white",
    warranty:"1 year"
}
];
const under5k = products.find(product => product.price == 5000);
console.log(under5k);


// object er destructing 
const myObject ={
    phone:"samsung",
    model:"samsung guru music 2",
    price:2200,
    color:"black",
    warranty:"1 year"
   };

   const {phone,model} = myObject;
   console.log(phone);