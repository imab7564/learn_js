//there are two ways of declaring object,one is literal and other is constructor(singleton object)
//singleton when we use constructor(Object.create)

//below is object literal

const mysym=Symbol("key1")

const jsuser={
    name:"Abhi",
    "full name":"Abhishek",
    [mysym]:"mykey1",//symbol ko define karne ka tarika 
    age:21,
    location:"allahabad",
    email:"imab@google.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"]
}
// console.log(jsuser.email);//this is not the correct way
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);


// object.freeze(object_name);

jsuser.greeting = function(){
   console.log("Hello js user");
}
jsuser.greetingTwo = function(){
   console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
