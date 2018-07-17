let noOfApples;
let noOfMangoes;
let noOfBananas;

let costPerApple = 10;
let costPerMango = 15;
let costPerBanana = 8;

function calculate() {
    noOfApples = parseInt(document.querySelector("#numb1").value);
    noOfMangoes = parseInt(document.querySelector("#numb2").value);
    noOfBananas = parseInt(document.querySelector("#numb3").value);
    let result = noOfApples*costPerApple + noOfMangoes*costPerMango + noOfBananas*costPerBanana;
    alert (result);
}