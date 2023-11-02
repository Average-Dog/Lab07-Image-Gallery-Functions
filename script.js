var opened = false;

//first pic
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
document.getElementById("oneC").addEventListener("click",closeOne);
function closeOne(){
    document.getElementById("oneE").style.display = "none";
    document.getElementById("oneC").style.display = "none";
    document.getElementById("oneR").style.display = "none";
    document.getElementById("oneL").style.display = "none";
    opened = false;
}

document.getElementById("oneR").addEventListener("click",beforeOne);
function beforeOne(){
    alert("This is the first picture.")
}
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
document.getElementById("twoC").addEventListener("click",closeTwo);
function closeTwo(){
    document.getElementById("twoE").style.display = "none";
    document.getElementById("twoC").style.display = "none";
    document.getElementById("twoR").style.display = "none";
    document.getElementById("twoL").style.display = "none";
    opened = false;
}

document.getElementById("twoR").addEventListener("click",beforeTwo);
function beforeTwo(){
    closeTwo();
    enlargeOne();
}
document.getElementById("twoL").addEventListener("click",afterTwo);
function afterTwo(){
    closeTwo();
    enlargeThree();
}

//third pic
document.getElementById("three").addEventListener("click", enlargeThree);
function enlargeThree(){
    if(opened == false){
        
        document.getElementById("threeE").style.display = "block";
        document.getElementById("threeE").style.position = "fixed";
        document.getElementById("threeE").style.left = "160px";
        document.getElementById("threeE").style.top = "5px";

        document.getElementById("threeC").style.display = "block";
        document.getElementById("threeC").style.position = "fixed";
        document.getElementById("threeC").style.left = "800px";
        document.getElementById("threeC").style.top = "5px";
        document.getElementById("threeC").style.zIndex = "3";

        document.getElementById("threeR").style.display = "block";
        document.getElementById("threeR").style.position = "fixed";
        document.getElementById("threeR").style.left = "120px";
        document.getElementById("threeR").style.top = "400px";
        document.getElementById("threeR").style.zIndex = "3";

        document.getElementById("threeL").style.display = "block";
        document.getElementById("threeL").style.position = "fixed";
        document.getElementById("threeL").style.left = "1450px";
        document.getElementById("threeL").style.top = "400px";
        document.getElementById("threeL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("threeC").addEventListener("click",closeThree);
function closeThree(){
    document.getElementById("threeE").style.display = "none";
    document.getElementById("threeC").style.display = "none";
    document.getElementById("threeR").style.display = "none";
    document.getElementById("threeL").style.display = "none";
    opened = false;
}

document.getElementById("threeR").addEventListener("click",beforeThree);
function beforeThree(){
    closeThree();
    enlargeTwo();
}
document.getElementById("threeL").addEventListener("click",afterThree);
function afterThree(){
    closeThree();
    enlargeFour();
}

// Fourth pic
document.getElementById("four").addEventListener("click", enlargeFour);
function enlargeFour(){
    if(opened == false){
        
        document.getElementById("fourE").style.display = "block";
        document.getElementById("fourE").style.position = "fixed";
        document.getElementById("fourE").style.left = "160px";
        document.getElementById("fourE").style.top = "5px";

        document.getElementById("fourC").style.display = "block";
        document.getElementById("fourC").style.position = "fixed";
        document.getElementById("fourC").style.left = "800px";
        document.getElementById("fourC").style.top = "5px";
        document.getElementById("fourC").style.zIndex = "3";

        document.getElementById("fourR").style.display = "block";
        document.getElementById("fourR").style.position = "fixed";
        document.getElementById("fourR").style.left = "120px";
        document.getElementById("fourR").style.top = "400px";
        document.getElementById("fourR").style.zIndex = "3";

        document.getElementById("fourL").style.display = "block";
        document.getElementById("fourL").style.position = "fixed";
        document.getElementById("fourL").style.left = "1450px";
        document.getElementById("fourL").style.top = "400px";
        document.getElementById("fourL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("fourC").addEventListener("click",closeFour);
function closeFour(){
    document.getElementById("fourE").style.display = "none";
    document.getElementById("fourC").style.display = "none";
    document.getElementById("fourR").style.display = "none";
    document.getElementById("fourL").style.display = "none";
    opened = false;
}

document.getElementById("fourR").addEventListener("click",beforeFour);
function beforeFour(){
    closeFour();
    enlargeThree();
}
document.getElementById("fourL").addEventListener("click",afterFour);
function afterFour(){
    closeFour();
    enlargeFive();
}

//fifth pic
document.getElementById("five").addEventListener("click", enlargeFive);
function enlargeFive(){
    if(opened == false){
        
        document.getElementById("fiveE").style.display = "block";
        document.getElementById("fiveE").style.position = "fixed";
        document.getElementById("fiveE").style.left = "160px";
        document.getElementById("fiveE").style.top = "5px";

        document.getElementById("fiveC").style.display = "block";
        document.getElementById("fiveC").style.position = "fixed";
        document.getElementById("fiveC").style.left = "800px";
        document.getElementById("fiveC").style.top = "5px";
        document.getElementById("fiveC").style.zIndex = "3";

        document.getElementById("fiveR").style.display = "block";
        document.getElementById("fiveR").style.position = "fixed";
        document.getElementById("fiveR").style.left = "120px";
        document.getElementById("fiveR").style.top = "400px";
        document.getElementById("fiveR").style.zIndex = "3";

        document.getElementById("fiveL").style.display = "block";
        document.getElementById("fiveL").style.position = "fixed";
        document.getElementById("fiveL").style.left = "1450px";
        document.getElementById("fiveL").style.top = "400px";
        document.getElementById("fiveL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("fiveC").addEventListener("click",closeFive);
function closeFive(){
    document.getElementById("fiveE").style.display = "none";
    document.getElementById("fiveC").style.display = "none";
    document.getElementById("fiveR").style.display = "none";
    document.getElementById("fiveL").style.display = "none";
    opened = false;
}

document.getElementById("fiveR").addEventListener("click",beforeFive);
function beforeFive(){
    closeFive();
    enlargeFour();
}
document.getElementById("fiveL").addEventListener("click",afterFive);
function afterFive(){
    closeFive();
    enlargeSix();
}

//sixth pic
document.getElementById("six").addEventListener("click", enlargeSix);
function enlargeSix(){
    if(opened == false){
        
        document.getElementById("sixE").style.display = "block";
        document.getElementById("sixE").style.position = "fixed";
        document.getElementById("sixE").style.left = "160px";
        document.getElementById("sixE").style.top = "5px";

        document.getElementById("sixC").style.display = "block";
        document.getElementById("sixC").style.position = "fixed";
        document.getElementById("sixC").style.left = "800px";
        document.getElementById("sixC").style.top = "5px";
        document.getElementById("sixC").style.zIndex = "3";

        document.getElementById("sixR").style.display = "block";
        document.getElementById("sixR").style.position = "fixed";
        document.getElementById("sixR").style.left = "120px";
        document.getElementById("sixR").style.top = "400px";
        document.getElementById("sixR").style.zIndex = "3";

        document.getElementById("sixL").style.display = "block";
        document.getElementById("sixL").style.position = "fixed";
        document.getElementById("sixL").style.left = "1450px";
        document.getElementById("sixL").style.top = "400px";
        document.getElementById("sixL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("sixC").addEventListener("click",closeSix);
function closeSix(){
    document.getElementById("sixE").style.display = "none";
    document.getElementById("sixC").style.display = "none";
    document.getElementById("sixR").style.display = "none";
    document.getElementById("sixL").style.display = "none";
    opened = false;
}

document.getElementById("sixR").addEventListener("click",beforeSix);
function beforeSix(){
    closeSix();
    enlargeFive();
}
document.getElementById("sixL").addEventListener("click",afterSix);
function afterSix(){
    closeSix();
    enlargeSeven();
}

//seventh pic
document.getElementById("seven").addEventListener("click", enlargeSeven);
function enlargeSeven(){
    if(opened == false){
        
        document.getElementById("sevenE").style.display = "block";
        document.getElementById("sevenE").style.position = "fixed";
        document.getElementById("sevenE").style.left = "160px";
        document.getElementById("sevenE").style.top = "5px";

        document.getElementById("sevenC").style.display = "block";
        document.getElementById("sevenC").style.position = "fixed";
        document.getElementById("sevenC").style.left = "800px";
        document.getElementById("sevenC").style.top = "5px";
        document.getElementById("sevenC").style.zIndex = "3";

        document.getElementById("sevenR").style.display = "block";
        document.getElementById("sevenR").style.position = "fixed";
        document.getElementById("sevenR").style.left = "120px";
        document.getElementById("sevenR").style.top = "400px";
        document.getElementById("sevenR").style.zIndex = "3";

        document.getElementById("sevenL").style.display = "block";
        document.getElementById("sevenL").style.position = "fixed";
        document.getElementById("sevenL").style.left = "1450px";
        document.getElementById("sevenL").style.top = "400px";
        document.getElementById("sevenL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("sevenC").addEventListener("click",closeSeven);
function closeSeven(){
    document.getElementById("sevenE").style.display = "none";
    document.getElementById("sevenC").style.display = "none";
    document.getElementById("sevenR").style.display = "none";
    document.getElementById("sevenL").style.display = "none";
    opened = false;
}

document.getElementById("sevenR").addEventListener("click",beforeSeven);
function beforeSeven(){
    closeSeven();
    enlargeSix();
}
document.getElementById("sevenL").addEventListener("click",afterSeven);
function afterSeven(){
    closeSeven();
    enlargeEight();
}

//eighth pic
document.getElementById("eight").addEventListener("click", enlargeEight);
function enlargeEight(){
    if(opened == false){
        
        document.getElementById("eightE").style.display = "block";
        document.getElementById("eightE").style.position = "fixed";
        document.getElementById("eightE").style.left = "160px";
        document.getElementById("eightE").style.top = "5px";

        document.getElementById("eightC").style.display = "block";
        document.getElementById("eightC").style.position = "fixed";
        document.getElementById("eightC").style.left = "800px";
        document.getElementById("eightC").style.top = "5px";
        document.getElementById("eightC").style.zIndex = "3";

        document.getElementById("eightR").style.display = "block";
        document.getElementById("eightR").style.position = "fixed";
        document.getElementById("eightR").style.left = "120px";
        document.getElementById("eightR").style.top = "400px";
        document.getElementById("eightR").style.zIndex = "3";

        document.getElementById("eightL").style.display = "block";
        document.getElementById("eightL").style.position = "fixed";
        document.getElementById("eightL").style.left = "1450px";
        document.getElementById("eightL").style.top = "400px";
        document.getElementById("eightL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("eightC").addEventListener("click",closeEight);
function closeEight(){
    document.getElementById("eightE").style.display = "none";
    document.getElementById("eightC").style.display = "none";
    document.getElementById("eightR").style.display = "none";
    document.getElementById("eightL").style.display = "none";
    opened = false;
}

document.getElementById("eightR").addEventListener("click",beforeEight);
function beforeEight(){
    closeEight();
    enlargeSeven();
}
document.getElementById("eightL").addEventListener("click",afterEight);
function afterEight(){
    closeEight();
    enlargeNine();
}

//ninth pic
document.getElementById("nine").addEventListener("click", enlargeNine);
function enlargeNine(){
    if(opened == false){
        
        document.getElementById("nineE").style.display = "block";
        document.getElementById("nineE").style.position = "fixed";
        document.getElementById("nineE").style.left = "160px";
        document.getElementById("nineE").style.top = "5px";

        document.getElementById("nineC").style.display = "block";
        document.getElementById("nineC").style.position = "fixed";
        document.getElementById("nineC").style.left = "800px";
        document.getElementById("nineC").style.top = "5px";
        document.getElementById("nineC").style.zIndex = "3";

        document.getElementById("nineR").style.display = "block";
        document.getElementById("nineR").style.position = "fixed";
        document.getElementById("nineR").style.left = "120px";
        document.getElementById("nineR").style.top = "400px";
        document.getElementById("nineR").style.zIndex = "3";

        document.getElementById("nineL").style.display = "block";
        document.getElementById("nineL").style.position = "fixed";
        document.getElementById("nineL").style.left = "1450px";
        document.getElementById("nineL").style.top = "400px";
        document.getElementById("nineL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("nineC").addEventListener("click",closeNine);
function closeNine(){
    document.getElementById("nineE").style.display = "none";
    document.getElementById("nineC").style.display = "none";
    document.getElementById("nineR").style.display = "none";
    document.getElementById("nineL").style.display = "none";
    opened = false;
}

document.getElementById("nineR").addEventListener("click",beforeNine);
function beforeNine(){
    closeNine();
    enlargeEight();
}
document.getElementById("nineL").addEventListener("click",afterNine);
function afterNine(){
    closeNine();
    enlargeTen();
}

//tenth pic
document.getElementById("ten").addEventListener("click", enlargeTen);
function enlargeTen(){
    if(opened == false){
        
        document.getElementById("tenE").style.display = "block";
        document.getElementById("tenE").style.position = "fixed";
        document.getElementById("tenE").style.left = "160px";
        document.getElementById("tenE").style.top = "5px";

        document.getElementById("tenC").style.display = "block";
        document.getElementById("tenC").style.position = "fixed";
        document.getElementById("tenC").style.left = "800px";
        document.getElementById("tenC").style.top = "5px";
        document.getElementById("tenC").style.zIndex = "3";

        document.getElementById("tenR").style.display = "block";
        document.getElementById("tenR").style.position = "fixed";
        document.getElementById("tenR").style.left = "120px";
        document.getElementById("tenR").style.top = "400px";
        document.getElementById("tenR").style.zIndex = "3";

        document.getElementById("tenL").style.display = "block";
        document.getElementById("tenL").style.position = "fixed";
        document.getElementById("tenL").style.left = "1450px";
        document.getElementById("tenL").style.top = "400px";
        document.getElementById("tenL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("tenC").addEventListener("click",closeTen);
function closeTen(){
    document.getElementById("tenE").style.display = "none";
    document.getElementById("tenC").style.display = "none";
    document.getElementById("tenR").style.display = "none";
    document.getElementById("tenL").style.display = "none";
    opened = false;
}

document.getElementById("tenR").addEventListener("click",beforeTen);
function beforeTen(){
    closeTen();
    enlargeNine();
}
document.getElementById("tenL").addEventListener("click",afterTen);
function afterTen(){
    closeTen();
    enlargeEleven();
}

//eleventh pic
document.getElementById("eleven").addEventListener("click", enlargeEleven);
function enlargeEleven(){
    if(opened == false){
        
        document.getElementById("elevenE").style.display = "block";
        document.getElementById("elevenE").style.position = "fixed";
        document.getElementById("elevenE").style.left = "160px";
        document.getElementById("elevenE").style.top = "5px";

        document.getElementById("elevenC").style.display = "block";
        document.getElementById("elevenC").style.position = "fixed";
        document.getElementById("elevenC").style.left = "800px";
        document.getElementById("elevenC").style.top = "5px";
        document.getElementById("elevenC").style.zIndex = "3";

        document.getElementById("elevenR").style.display = "block";
        document.getElementById("elevenR").style.position = "fixed";
        document.getElementById("elevenR").style.left = "120px";
        document.getElementById("elevenR").style.top = "400px";
        document.getElementById("elevenR").style.zIndex = "3";

        document.getElementById("elevenL").style.display = "block";
        document.getElementById("elevenL").style.position = "fixed";
        document.getElementById("elevenL").style.left = "1450px";
        document.getElementById("elevenL").style.top = "400px";
        document.getElementById("elevenL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("elevenC").addEventListener("click",closeEleven);
function closeEleven(){
    document.getElementById("elevenE").style.display = "none";
    document.getElementById("elevenC").style.display = "none";
    document.getElementById("elevenR").style.display = "none";
    document.getElementById("elevenL").style.display = "none";
    opened = false;
}

document.getElementById("elevenR").addEventListener("click",beforeEleven);
function beforeEleven(){
    closeEleven();
    enlargeTen();
}
document.getElementById("elevenL").addEventListener("click",afterEleven);
function afterEleven(){
    closeEleven();
    enlargeTwleve();
}

//twleveth pic
document.getElementById("twleve").addEventListener("click", enlargeTwleve);
function enlargeTwleve(){
    if(opened == false){
        
        document.getElementById("twleveE").style.display = "block";
        document.getElementById("twleveE").style.position = "fixed";
        document.getElementById("twleveE").style.left = "160px";
        document.getElementById("twleveE").style.top = "5px";

        document.getElementById("twleveC").style.display = "block";
        document.getElementById("twleveC").style.position = "fixed";
        document.getElementById("twleveC").style.left = "800px";
        document.getElementById("twleveC").style.top = "5px";
        document.getElementById("twleveC").style.zIndex = "3";

        document.getElementById("twleveR").style.display = "block";
        document.getElementById("twleveR").style.position = "fixed";
        document.getElementById("twleveR").style.left = "120px";
        document.getElementById("twleveR").style.top = "400px";
        document.getElementById("twleveR").style.zIndex = "3";

        document.getElementById("twleveL").style.display = "block";
        document.getElementById("twleveL").style.position = "fixed";
        document.getElementById("twleveL").style.left = "1450px";
        document.getElementById("twleveL").style.top = "400px";
        document.getElementById("twleveL").style.zIndex = "3";
        opened = true;
    }
}
document.getElementById("twleveC").addEventListener("click",closeTwleve);
function closeTwleve(){
    document.getElementById("twleveE").style.display = "none";
    document.getElementById("twleveC").style.display = "none";
    document.getElementById("twleveR").style.display = "none";
    document.getElementById("twleveL").style.display = "none";
    opened = false;
}

document.getElementById("twleveR").addEventListener("click",beforeTwleve);
function beforeTwleve(){
    closeTwleve();
    enlargeTen();
}
document.getElementById("twleveL").addEventListener("click",afterTwleve);
function afterTwleve(){
    alert("This is the last picture")
}