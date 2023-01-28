

let myBtn = document.getElementById("test");

function myFun(){

    if(myBtn.style.display==="none"){
        document.getElementById("test").style.display= "flex";
        document.getElementById("top-heading").style.display= "none";
        document.getElementById("image-arrow").style.display= "none";
    }
    else{

        document.getElementById("test").style.display= "none";
        document.getElementById("top-heading").style.display= "block";
        document.getElementById("image-arrow").style.display= "block";
    }
}


