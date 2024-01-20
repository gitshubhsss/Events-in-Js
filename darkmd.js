//Create a toggle button that changes the screen to dark -mode when clicked & light-mode when cliked again
let cnt=0;
let mode=document.getElementById("mode");
const dark=()=>{
    cnt++;
    if(cnt%2==1)
    {
        document.body.style.backgroundColor="black";
        mode.innerHTML="dark mode";
    }
    else{
        document.body.style.backgroundColor="white";
        mode.innerHTML="light mode";
    }
  
}
mode.addEventListener("click",dark)




