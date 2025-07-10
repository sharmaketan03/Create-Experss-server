// import { sum } from "./index.js";
import readline from "readline"

// let rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// // let rl2=readline.createInterface({
// //     input:process.stdin,
// //     output:process.stdout
// // })

// rl.question(`What's your Number?`, (num1)=> {
//     rl.question(`What's your Number?`, (num2) => {
//      const c=parseFloat(num1)
//      const d=parseFloat(num2)
//   console.log( sum(c,d))
//      rl.close();
// });
// });



// import http from "http"

// const data=[
//     {id:1,name:"ketan sharma"},
//     {id:1,name:"varun sharma"},
//     {id:1,name:"arun sharma"},
//     {id:1,name:"Garvit sharma"}
// ]
// const hostname="localhost"
// const port=4000

// http.createServer((req,res)=>{
//          res.setHeader("Content-Type","application/json")
//          if(req.method=="GET"){

//          }

       
// }).listen(port,hostname)

let rl=readline.createInterface({
     input:process.stdin,
     output:process.stdout
})

let value1=rl.prompt("enter the value")
let value2=rl.prompt("enter the second value")