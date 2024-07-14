// const tinderuser=new Object()
const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="sammy"
 tinderUser.isLoggedIn=false;
 //console.log(tinderUser);

 const regularuser={
    email: "imab@mail.com",
    fullname : {
        userfullname: {
            firstname:"Abhishek",
            lastname:"kumar"
        }
    }

 }

 //console.log(regularuser.fullname.userfullname);

 //combining the object
 const obj1={1: "a",2:"b"}
 const obj2={3: "a",4:"b"}
 const obj4={5: "a",6:"b"}
 const obj3=Object.assign({},obj1,obj2);
 console.log(obj3);

