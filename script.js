let btn1=document.querySelector("#btn1")

// btn1.onclick=()=>{
//     console.log(`button has clicked`);
// }

btn1.addEventListener("click",(evt) =>{
    console.log(`btn1 was clicked`);

})
btn1.addEventListener("click",() =>{
    console.log(`btn1 was clicked 2`);
})

const handeler3 =()=>{
    console.log(`button was clicked 3 `);
}
btn1.addEventListener("click",handeler3)

btn1.addEventListener("click",() =>{
    console.log(`btn1 was clicked 4`);
})

btn1.removeEventListener("click",handeler3)

let div=document.querySelector("#div")

div.onmouseover=()=>{
    console.log(`you are on div`);
}