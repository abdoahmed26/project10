let icon = document.querySelector(".icon");
let navbar = document.querySelector(".navbar");
let Close = document.querySelector(".close");
let numDiv = document.querySelector(".num");
let enrSpan = document.querySelector(".enr");
let comSpan = document.querySelector(".com");
let posSpan = document.querySelector(".pos");
let achSpan = document.querySelector(".ach");
let scrollUp = document.querySelector(".up");
let search = document.querySelector(".search");
let proHtwo = document.querySelectorAll(".pro h2");


window.addEventListener("scroll",function(){
    if(this.scrollY >=20){
        scrollUp.style.display = "block";
    }
    else{
        scrollUp.style.display = "none";
    }
});
scrollUp.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

icon.onclick = function(){
    navbar.style.left = "0px";
}
Close.onclick = function(){
    navbar.style.left = "-280px";
}
let count;
let countCom;
let countPos;
let countAch;
window.onscroll = function(){
    if(window.scrollY >= numDiv.offsetTop-500){
        count = setInterval(inc,1);
        countCom = setInterval(incCom,1);
        countPos = setInterval(incPos,1);
        countAch = setInterval(incAch,1);
    }
}
function inc(){
    if(enrSpan.innerHTML === "1200"){
        clearInterval(count);
    }
    else{
        enrSpan.innerHTML++;
    }
}
function incCom(){
    if(comSpan.innerHTML === "900"){
        clearInterval(countCom);
    }
    else{
        comSpan.innerHTML++;
    }
}
function incPos(){
    if(posSpan.innerHTML === "99"){
        clearInterval(countPos);
    }
    else{
        posSpan.innerHTML++;
    }
}
function incAch(){
    if(achSpan.innerHTML === "850"){
        clearInterval(countAch);
    }
    else{
        achSpan.innerHTML++;
    }
}

$('.carousel').owlCarousel({
    margin : 20,
    loop : true,
    autoplay : true,
    autoplayTimeOut : 2000,
    autoplayHoverPause : true,
    responsive : {
        0:{
            items : 1,
            nav : false
        },
        767 : {
            items : 2,
            nav : false
        },
        1000 : {
            items : 3,
            nav : false
        }
    }
});

search.oninput = function(){
    for(let i=0;i<proHtwo.length;i++){
        if(proHtwo[i].innerHTML.includes(search.value)){
            proHtwo[i].parentElement.parentElement.style.display = "block";
        }
        else{
            proHtwo[i].parentElement.parentElement.style.display = "none";
        }
    }
}

