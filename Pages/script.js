let myLink1 = document.querySelector("#myLink1");

mylinksColor = "white";
myLinksColorOut = "rgb(157, 157, 157)";

myLink1.addEventListener("mouseover", function () {
    myLink1.style.color = mylinksColor;
    });
    
myLink1.addEventListener("mouseout", function () {
    myLink1.style.color = myLinksColorOut;
    });

//----------------------------------------------------------------------------------------------

let myLink2 = document.querySelector("#myLink2");
     
myLink2.addEventListener("mouseover", function () {
    myLink2.style.color = mylinksColor;
});

myLink2.addEventListener("mouseout", function () {
    myLink2.style.color = myLinksColorOut;

});

//----------------------------------------------------------------------------------------------

let myLink3 = document.querySelector("#myLink3");

myLink3.addEventListener("mouseover", function () {
    myLink3.style.color =  mylinksColor;
});

myLink3.addEventListener("mouseout", function () {
    myLink3.style.color = myLinksColorOut;

});
//----------------------------------------------------------------------------------------------

let myLink4 = document.querySelector("#myLink4");

myLink4.addEventListener("mouseover", function () {
    myLink4.style.color =  mylinksColor;
});

myLink4.addEventListener("mouseout", function () {
    myLink4.style.color = myLinksColorOut;

});
//----------------------------------------------------------------------------------------------

let myLink5 = document.querySelector("#myLink5");

myLink5.addEventListener("mouseover", function () {
    myLink5.style.color =  mylinksColor;
});

myLink5.addEventListener("mouseout", function () {
    myLink5.style.color = myLinksColorOut;

});

//----------------------------------------------------------------------------------------------
let header = document.querySelector("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    let scrollThreshold = window.innerHeight * 0.03;
    let myName = document.querySelector(".myName");
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
      header.style.paddingTop = "0vw";
      header.style.paddingBottom = "0vw";
      myName.style.paddingTop = "6vw";
    } else {
      header.style.paddingTop = "1vw";
      header.style.paddingBottom = "1vw";
      myName.style.paddingTop = "5";
    }
}

//----------------------------------------------------------------------------------------------
let projectU2 = document.querySelector("#projectU2");

projectU2.addEventListener("mouseover", function() {
    projectU2.style.opacity = "100%";
    console.log(projectU2);
});

projectU2.addEventListener("mouseout", function() {
    projectU2.style.opacity = "0%";
});

//----------------------------------------------------------------------------------------------

let projectU3 = document.querySelector("#projectU3");

projectU3.addEventListener("mouseover", function() {
    projectU3.style.opacity = "100%";
    console.log(projectU3);
});

projectU3.addEventListener("mouseout", function() {
    projectU3.style.opacity = "0%";
});

//----------------------------------------------------------------------------------------------

let projectU4 = document.querySelector("#projectU4");

projectU4.addEventListener("mouseover", function() {
    projectU4.style.opacity = "100%";
    console.log(projectU4);
});

projectU4.addEventListener("mouseout", function() {
    projectU4.style.opacity = "0%";
});