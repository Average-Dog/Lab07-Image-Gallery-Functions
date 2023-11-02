var opened = false;

//first function: enlarge picture
document.getElementById("one").addEventListener("click", enlargeOne);
function enlargeOne(){
    if(opened == false){
        
        document.getElementById("oneE").style.display = "block";
        document.getElementById("oneE").style.position = "fixed";
        document.getElementById("oneE").style.left = "160px";
        document.getElementById("oneE").style.top = "5px";

        document.getElementById("oneC").style.display = "block";
        document.getElementById("oneC").style.position = "fixed";
        document.getElementById("oneC").style.left = "800px";
        document.getElementById("oneC").style.top = "5px";
        document.getElementById("oneC").style.zIndex = "3";

        document.getElementById("oneR").style.display = "block";
        document.getElementById("oneR").style.position = "fixed";
        document.getElementById("oneR").style.left = "120px";
        document.getElementById("oneR").style.top = "400px";
        document.getElementById("oneR").style.zIndex = "3";

        document.getElementById("oneL").style.display = "block";
        document.getElementById("oneL").style.position = "fixed";
        document.getElementById("oneL").style.left = "1450px";
        document.getElementById("oneL").style.top = "400px";
        document.getElementById("oneL").style.zIndex = "3";
        opened = true;
    }
}
// second function: press close button to close current picture
document.getElementById("oneC").addEventListener("click",closeOne);
function closeOne(){
    document.getElementById("oneE").style.display = "none";
    document.getElementById("oneC").style.display = "none";
    document.getElementById("oneR").style.display = "none";
    document.getElementById("oneL").style.display = "none";
    opened = false;
}

//Third function: go to the next picture
document.getElementById("oneL").addEventListener("click",afterOne);
function afterOne(){
    closeOne();
    enlargeTwo();
}

//second pic
document.getElementById("two").addEventListener("click", enlargeTwo);
function enlargeTwo(){
    if(opened == false){
        
        document.getElementById("twoE").style.display = "block";
        document.getElementById("twoE").style.position = "fixed";
        document.getElementById("twoE").style.left = "160px";
        document.getElementById("twoE").style.top = "5px";

        document.getElementById("twoC").style.display = "block";
        document.getElementById("twoC").style.position = "fixed";
        document.getElementById("twoC").style.left = "800px";
        document.getElementById("twoC").style.top = "5px";
        document.getElementById("twoC").style.zIndex = "3";

        document.getElementById("twoR").style.display = "block";
        document.getElementById("twoR").style.position = "fixed";
        document.getElementById("twoR").style.left = "120px";
        document.getElementById("twoR").style.top = "400px";
        document.getElementById("twoR").style.zIndex = "3";

        document.getElementById("twoL").style.display = "block";
        document.getElementById("twoL").style.position = "fixed";
        document.getElementById("twoL").style.left = "1450px";
        document.getElementById("twoL").style.top = "400px";
        document.getElementById("twoL").style.zIndex = "3";
        opened = true;
    }
}

