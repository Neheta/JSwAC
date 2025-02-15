fullname="tony"
console.log(fullname);
x=null;
y=undefined;
console.log(y);
//dynamically typed
isFollow=true;
fullname=324;
console.log(fullname);
//Identifier cant immediately follow a numeric(variable names can't start with a digit)
$butThisIsAllowed=true;
console.log($butThisIsAllowed);
//USE let/const/var before variable names
let nname = "Meowww";
console.log(nname);
{
    let blockVariable = "I'm block scoped";
    //console.log(blockVariable); // Works fine
  }
  
  //console.log(blockVariable); // Error: blockVariable is not defined
  //let and const are block-scoped and cannot use the same identifier to hold another value,but we can update let. CONST IS CONSTATNT. NO UPDATE, NO RE-DECLARATION
//variables declared with var are function-scoped, meaning they are accessible throughout the entire function in which they're declared, regardless of block boundaries within that function and we can re-declare multiple times

let sage=33;
//let age= 56;//INCORRRECT, RE-DECLARATION NOT ALLOWED, but we can do this with "var"
age=22;//But updating is ok. stores new value in same address.
var a=33;
var a=56;
let g; //undefined, not null
//const q; //shows error. Must initalize constants, as soon as they are declared.

//Primitive types: 1.Number 2.Strimg 3.Boolean 4.Bigint 5.Symbol 6.Undefined 7.Null

typeof a;//gotta write this on console fro data type

let aw = BigInt("54321");//rarely used
let simp= Symbol ("What a simp?! more like Symbol of a romantic lover");

//OBJECT ;)
const Student={//NOTICE SYNTAX "={"
    fullName : " Your Name",//NOTICE THE COMMA
   //key : value (pair)
    age:16,
    cgpa:4.0, 
    isPass:false, //cuzUCheated
}; 
//NOTICE THE ";" and the ":""
//type object name"Student"( kinda like class name in java) on console to see object 
//Student["fullName"] or Stdent.fullName on console for attributes
//Object["key"] or object.key
console.log(Student.age);
Student["age"] = Student["age"]+5;//adds 5 to age and gets assigned to previous identifier
console.log(Student.age);
Student["fullName"]= "Monica Geller"; //changes name to assigned String
//Still able to update value of key despite object being CONSTANTtttt

//Practice
const Product={
    productName:"Parker Jotter Standard CT Ball Pen",
    productColor:"black",
    productRating:4,
    productPrice: 270,
    onOffer:true,

};
console.group(Product);
console.log(typeof Product.productName);
//string concat
123+"123";//will just concat 123123 (gotta write on console for output)




  

