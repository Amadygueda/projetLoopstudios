var toggle = document.querySelector(".toggle");
var body = document.querySelector("body");
var liens = document.querySelectorAll("li");
var main1 = document.querySelector("main");
var footer = document.querySelector("footer");

toggle.addEventListener("click",function (){
    body.classList.toggle("ouvert");
});
for(var i=0 ;i<liens.length ; i++){
liens[i].addEventListener("click", function(){
    body.classList.remove("ouvert");
})};
main1.addEventListener("click",function (){
    body.classList.remove("ouvert");
})
footer.addEventListener("click",function (){
    body.classList.remove("ouvert");
})
