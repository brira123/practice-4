let numb1;
let numb2;

function calculate() {
    numb1 = parseInt(document.querySelector("#numb1").value);
    numb2 = parseInt(document.querySelector("#numb2").value);
}

function sum() {
    calculate();
    let sum = numb1+numb2;
    alert (sum);
}

function diff() {
    calculate();
    let diff = numb1-numb2;
    alert (diff);
}

function multi() {
    calculate();
    let multi = numb1*numb2;
    alert (multi);
}

function div() {
    calculate();
    let div = numb1/numb2;
    alert (div);
}

function rem() {
    calculate();
    let rem = numb1%numb2;
    alert (rem);
}