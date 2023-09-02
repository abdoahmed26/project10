let curHThree = document.querySelector('[name="check"]');
let curListTwo = document.querySelector('[name="checked"]');
let checkThree = document.querySelector('[name="checkThree"]');
let checkFour = document.querySelector('[name="checkFour"]');
let checkFive = document.querySelector('[name="checkFive"]');
let ulList = document.querySelector(".cur > div .one");
let ulListTwo = document.querySelector(".cur > div .two");
let ulListThree = document.querySelector(".cur > div .three");
let ulListFour = document.querySelector(".cur > div .four");
let ulListFive = document.querySelector(".cur > div .five");
let ulListAll = document.querySelectorAll(".mainList li");
let divAll = document.querySelectorAll(".over > div");

for(let i=0;i<ulListAll.length;i++){
    ulListAll[i].onclick = function(){
        for(let j=0;j<ulListAll.length;j++){
            ulListAll[j].classList.remove("active");
            divAll[j].classList.remove("act");
        }
        ulListAll[i].classList.add("active");
        divAll[i].classList.add("act");
    }
}

let myCheck = false;
curHThree.addEventListener("change",function(e){
    myCheck = e.target.checked;
    if(myCheck){
        ulList.style.display = "block";
    }
    else{
        ulList.style.display = "none";
    }
})
let Check = false;
curListTwo.addEventListener("change",function(e){
    Check = e.target.checked;
    if(Check){
        ulListTwo.style.display = "block";
    }
    else{
        ulListTwo.style.display = "none";
    }
})
let CheckT = false;
checkThree.addEventListener("change",function(e){
    CheckT = e.target.checked;
    if(CheckT){
        ulListThree.style.display = "block";
    }
    else{
        ulListThree.style.display = "none";
    }
})
let CheckF = false;
checkFour.addEventListener("change",function(e){
    CheckF = e.target.checked;
    if(CheckF){
        ulListFour.style.display = "block";
    }
    else{
        ulListFour.style.display = "none";
    }
})
let CheckFi = false;
checkFive.addEventListener("change",function(e){
    CheckFi = e.target.checked;
    if(CheckFi){
        ulListFive.style.display = "block";
    }
    else{
        ulListFive.style.display = "none";
    }
})