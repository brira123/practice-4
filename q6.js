let maths;
let english;
let computer;

function calculate() {
    maths=parseInt(document.querySelector("#numb1").value);
    english=parseInt(document.querySelector("#numb2").value);
    computer=parseInt(document.querySelector("#numb3").value);
if (maths < 20 && english < 10 && computer < 50) {
    console.log("PASSED");
} else {
    console.log("FAILED");
}
alert;
}
