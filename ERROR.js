let a =10;
let b ="Resty";
let c =a/b;
console.log(c);

try{
  let a =10;
  let b ="Resty";
// console.log(typeof b)
  if (b==0) throw new Error("You cannot divide by Zero");
  if(typeof b == "string") throw new Error("Entry is not a number");
//   let c =a/b;
console.log(a/b); 
} catch(error){
    console.log(error,message);
}finally{
    console.log("Attend to divide proceessed...");
}


   
