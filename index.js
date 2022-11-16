//var balance = 100;


balance-1;
let string = "danny";
let string2 = "rock";

let year = "1998";
ok = year + 1
//-------------------------------------------------------------------
//console.log(ok);
//const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
//let whisper = "       taste the rainbow";
//console.log(message.trim() + whisper.trim().toUpperCase());
//-------------------------------------------------------------------
//let msg = "haha that is so funny";
//console.log(msg.slice(5, 10));

//console.log(msg.replace("funny","sunny"));
//-----------------------------
//const word = "skateboard";
//console.log(word.slice(5));//Don't change this line!

//console.log(`hello ${1 + 2 + 9}sheep`)
//console.log(1 !== "1");


//var userInput = userInput.prompt(plz enter a number);
//const input = pr
// o/mpt("What's your name?"

// const a = "have a nice day"
// function displayResult() {
// doc = document.getElementById("myHeader").innerHTML = `<p> ${a} hsjdsdahjkshdlKASDHLHD<br>HDLSADHLSAHDLHDLKJDJSFHS</p>


// let nodeList = document.querySelectorAll(".done");
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
//   console.log(nodeList[i].innerText);
// }


// let btn1 = document.querySelector("#hello");
// btn1.addEventListener('click', () => {
//   console.log("hello");
// })

const groceryForm = document.querySelector('#groceryForm');
const listContainer = document.querySelector('#list');

groceryForm.addEventListener('submit', function (e) {
  debugger
  e.preventDefault();
  const addProduct = (product, qty) => {
    console.log('vALUE');
    const newProduct = document.createElement('li');
    console.log(newProduct);
    const bTag = document.createElement('b');
    bTag.append(product);
    newProduct.append(bTag);
    newProduct.append(`${qty}`);
    console.log(newProduct);
   // listContainer.append(newProduct);

  }
  //const product=groceryForm.elements.product.value;
  console.log(groceryForm.elements.product.value);
  console.log(groceryForm.elements.qty.value);
  addProduct(product, qty);
  //console.log("submit");

});
  num = [1,2,3,4,5];
console.log(num);
num=1
console.log(num);

// function capFirstlet(str) {
//   str.split(" ");
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase(0) + str[i].slice(1);

//     /const str2 = str[i];
//     console.log(str2);

  }

}
function capFirstlet(str){

       const str2 = str.charAt(0).toUpperCase() + str.slice(1);
     console.log(str2);
}
capFirstlet("name");

const numbers = [7, 8, 9, 4, 5, 3, 1];
const result = numbers.filter(n => {
  return n===4
});
console.log(result);

validUserNames=['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
// => ["mark", "carrie98", "MoanaFan"]

const userName=validUserNames.filter(name => {

  return name.length<10;
});

console.log(userName);


 function validUsername ({['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']}
{

    const userName = validUserNames.filter(name => {

        return name.length < 10;
    });

     console.log(userName);


}

const = {legs:4},;
const feline = {legs:4,family:'falida',};
const canine={isFurry:true, family:'canine'};

console.log({...feline,...canine,...fily:});// //var balance = 100;


//balance-1;
//let string = "danny";
//let string2 = "rock";

//let year = "1998";
//ok = year + 1
//-------------------------------------------------------------------
//console.log(ok);
//const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
//let whisper = "       taste the rainbow";
//console.log(message.trim() + whisper.trim().toUpperCase());
//-------------------------------------------------------------------
//let msg = "haha that is so funny";
//console.log(msg.slice(5, 10));

//console.log(msg.replace("funny","sunny"));
//-----------------------------
//const word = "skateboard";
//console.log(word.slice(5));//Don't change this line!

//console.log(`hello ${1 + 2 + 9}sheep`)
//console.log(1 !== "1");


//var userInput = userInput.prompt(plz enter a number);
//const input = pr
// o/mpt("What's your name?"

// const a = "have a nice day"
// function displayResult() {
// doc = document.getElementById("myHeader").innerHTML = `<p> ${a} hsjdsdahjkshdlKASDHLHD<br>HDLSADHLSAHDLHDLKJDJSFHS</p>


// let nodeList = document.querySelectorAll(".done");
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
//   console.log(nodeList[i].innerText);
// }


// let btn1 = document.querySelector("#hello");
// btn1.addEventListener('click', () => {
//   console.log("hello");
// // })

const groceryForm = document.querySelector('#groceryForm');
const listContainer = document.querySelector('#list');

groceryForm.addEventListener('submit', function (e) {
  debugger
  e.preventDefault();
  const addProduct = (product, qty) => {
    console.log('vALUE');
    const newProduct = document.createElement('li');
    console.log(newProduct);
    const bTag = document.createElement('b');
    bTag.append(product);
    newProduct.append(bTag);
    newProduct.append(`${qty}`);
    console.log(newProduct);
   // listContainer.append(newProduct);

//   }
//   //const product=groceryForm.elements.product.value;
//   console.log(groceryForm.elements.product.value);
//   console.log(groceryForm.elements.qty.value);
//   addProduct(product, qty);
//   //console.log("submit");

// });
//   num = [1,2,3,4,5];
// console.log(num);
// num=1
// console.log(num);

// function capFirstlet(str) {
//   str.split(" ");
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase(0) + str[i].slice(1);

//     /const str2 = str[i];
//     console.log(str2);

  }

// }
// function capFirstlet(str){

//        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
//      console.log(str2);
// }
// capFirstlet("name");

// const numbers = [7, 8, 9, 4, 5, 3, 1];
// const result = numbers.filter(n => {
//   return n===4
// });
// console.log(result);

// validUserNames=['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
// // => ["mark", "carrie98", "MoanaFan"]

// const userName=validUserNames.filter(name => {

//   return name.length<10;
// });

// console.log(userName);


//  function validUsername ({['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']}
// {

//     const userName = validUserNames.filter(name => {

//         return name.length < 10;
//     });

//      console.log(userName);


// }

// const = {legs:4},;
// const feline = {legs:4,family:'falida',};
// const canine={isFurry:true, family:'canine'};

// console.log({...feline,...canine,...fily:});

 function sums(...nums){
  return console.log(nums);
}
sums(3,5);



  function add(arr){

           arr.reduce((previous, current) => {

            return previous+current;
            
         });

  };
  const arr=[1,3,4,5];
console.log(add(arr));

document.body.style.backgroundColor='red';



   const fakeRequest=(url)=>{

   return  new Promise((resolve,reject)=>{
      const rand=Math.random();
       setTimeout(()=>{
        if(rand<0.7){
            resolve('your fake data here');
        }
        reject('Request error!')

       },1000)
    })
   }


fakeRequest('/dog/1')
    .then((res)=>{
        console.log("done with request")
        console.log('data is',res)
    })

    .catch((er)=>{

        console.log("oh no!",er)
    })

class Color{

    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
        //console.log('inside construct');
        //console.log(r,g,b);
    }





}
const c1=new Color(255,67,89,'red');
console.log(c1);
 "hsl(100, 80%, 40%)";

const hen ={
    name : 'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount = this.eggCount + 1;
        return "EGG";
    }
}

console.log(hen.layAnEgg());



const usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

const validUserNames = (usernames)=> usernames.filter(user=> user.length < 10)
console.log(usernames)



  function add(arr){

           arr.reduce((previous, current) => {

            return previous+current;
            
         });

  };
  const arr=[1,3,4,5];
console.log(add(arr));

document.body.style.backgroundColor='red';



   const fakeRequest=(url)=>{

   return  new Promise((resolve,reject)=>{
      const rand=Math.random();
       setTimeout(()=>{
        if(rand<0.7){
            resolve('your fake data here');
        }
        reject('Request error!')

       },1000)
    })
   }


fakeRequest('/dog/1')
    .then((res)=>{
        console.log("done with request")
        console.log('data is',res)
    })

    .catch((er)=>{

        console.log("oh no!",er)
    })

class Color{

    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
        //console.log('inside construct');
        //console.log(r,g,b);
    }





}
const c1=new Color(255,67,89,'red');
console.log(c1);
 "hsl(100, 80%, 40%)";

const hen ={
    name : 'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount = this.eggCount + 1;
        return "EGG";
    }
}

console.log(hen.layAnEgg());



const usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']

const validUserNames = (usernames)=> usernames.filter(user=> user.length < 10)
console.log(usernames)