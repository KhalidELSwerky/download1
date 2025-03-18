let select    =  document.getElementById("select1");
let downmanag =document.getElementById("manager-app");
let windows11 =document.getElementById("windows-version");
let windows12 =document.getElementById("windows-app");
let app =document.getElementById("app");

console.log(select.value)

 function khalid(){
    if(select.value=="download-manager"){
       
        downmanag.style.display= "block";
        windows11.style.display= "none";
        windows12.style.display= "none";
    }
    else if(select.value==""){
        windows11.style.display= "none";
        downmanag.style.display= "none";
        windows12.style.display= "none";

    }

    
    else if(select.value=="windows1"){
        windows12.style.display= "none";
        windows11.style.display= "block";
        downmanag.style.display= "none";
    }
    
    else if(select.value=="windows2"){
        
        windows11.style.display= "none";
        windows12.style.display= "block";
        downmanag.style.display= "none";
    }
    


}
