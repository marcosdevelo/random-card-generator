window.onload= () =>{

let arrayNum=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
 let arrSym=['\u2660','\u2663','\u2665','\u2666'];
let randomNum = arrayNum[Math.floor(Math.random() * arrayNum.length)];
	let randomSuit = arrSym[Math.floor(Math.random() * arrSym.length)];
if(randomSuit==='\u2665'|| randomSuit==='\u2666'){

    document.querySelector('#top').className= "top-suit red";
     document.querySelector('#bottom').className= "bottom-suit red";

}







    document.querySelector('#number').innerHTML= randomNum;
    document.querySelector('#top').innerHTML= randomSuit;
     document.querySelector('#bottom').innerHTML= randomSuit;
};