//Create a toggle button that changes the screen to dark -mode when clicked & light-mode when cliked again
let cnt=0;
let mode=document.getElementById("mode");
let body=document.querySelector("body");
let currMode=`light`;
const modeform=()=>{
    
    if(currMode===`light`)
    {
       currMode=`dark`;
       body.classList.add("dark");
       body.classList.remove("light")
       
    }
    else
    {
        currMode=`light`;
        body.classList.add("light");
        body.classList.remove("dark")
    }

  
}
mode.addEventListener("click",modeform)




