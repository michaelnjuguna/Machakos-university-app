const greetings = document.querySelector('.greetings');
var d = new Date();
var time = d.getHours();

if (time < 12) {
    greetings.textContent = "Good Morning";
} else if (time < 18) {
    greetings.textContent = "Good Afternoon";
} else if (time < 23 || time == 23) {
    greetings.textContent = "Good Evening";
} else {
    greetings.textContent = "Howdy";
}

//open links
var btns = document.querySelectorAll(".link-btn");

var target = "_blank";

var options = "location=yes";
//elibrary
btns[0].addEventListener("click", () => {
    window.open("https://library.mksu.ac.ke/", target, options);
});
//exam bank
btns[1].addEventListener("click", () => {
    window.open("https://ir.mksu.ac.ke/", target, options);
});
//lms
btns[2].addEventListener("click", () => {
    window.open("https://elearning.mksu.ac.ke/mksu.lms/", target, options);
});
//university news 
btns[3].addEventListener("click", () => {
    window.open("https://www.mksu.ac.ke/blog-medium/", target, options);
});
//upcoming events 
btns[4].addEventListener("click", () => {
    window.open( "https://www.mksu.ac.ke/upcoming-events/", target, options);
});
//GSSP
btns[5].addEventListener("click", () => {
    window.open("https://www.mksu.ac.ke/feesstructures2019/", target, options);
});
//PSSP
btns[6].addEventListener("click", () => {
    window.open("https://www.mksu.ac.ke/notices/fee-structures-undergraduate-pssp-students/", target, options);
});
//TVET
btns[7].addEventListener("click", () => {
    window.open("https://www.mksu.ac.ke/tvet-fee-structures/", target, options);
});
//POST graduate
btns[8].addEventListener("click", () => {
    window.open("https://www.mksu.ac.ke/postgraduate-fees/", target, options);
});
//portal
btns[9].addEventListener("click", () => {
    window.open("https://portal.mksu.ac.ke/" , target, options);
});


//open navbar
function openNav(){
   var  navbar = document.querySelector(".main-navbar");
    //navbar.classList.toggle("diplay-nav");

    if(navbar.style.display == "none" || navbar.style.display == ""){
        navbar.style.display = "flex";
    }else{
        navbar.style.display = "none";
    }
  
}
