// Buttons
const espresso = document.getElementById("espresso");
const brewed_coffee = document.getElementById("brewed_coffee");
const drip_coffee = document.getElementById("drip_coffee");
const black_tea = document.getElementById("black_tea");
const green_tea = document.getElementById("green_tea");
const yerba = document.getElementById("yerba");
const energy = document.getElementById("energy");

const select = document.querySelector(".select");
const output_container = document.querySelector(".calc-container__end-output");

//Outputs
const alert = document.querySelector(".alert");
const caffeine_span = document.querySelector(".calc-container__output-caffeine");
const percent_span = document.querySelector(".calc-container__output-percent");
//const output_precent =

let click = false;
let caffeine = 0;   // caffeine mg/100ml
let amount = 0;
let output_caffeine = 0;
let output_percent = 0;


//Choose type of coffee

espresso.addEventListener("click", () => {
    if(espresso.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        espresso.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    espresso.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 200;
});

brewed_coffee.addEventListener("click", () => {
    if(brewed_coffee.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        brewed_coffee.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    brewed_coffee.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 50;
});

drip_coffee.addEventListener("click", () => {
    if(drip_coffee.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        drip_coffee.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    drip_coffee.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 70;
});

black_tea.addEventListener("click", () => {
    if(black_tea.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        black_tea.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    black_tea.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 28;
});

green_tea.addEventListener("click", () => {
    if(green_tea.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        green_tea.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    green_tea.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 17;
});

yerba.addEventListener("click", () => {
    if(yerba.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        yerba.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    yerba.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 36;
});

energy.addEventListener("click", () => {
    if(energy.classList.contains("calc-container__buttons-item--clicked")) click = true;
    const elems = document.querySelectorAll(".calc-container__buttons-item--clicked");
    [].forEach.call(elems, function(el) {
        el.classList.remove("calc-container__buttons-item--clicked");
    });

    if(click) {
        energy.classList.add("calc-container__buttons-item--clicked");
        click = false;
    }
    energy.classList.toggle("calc-container__buttons-item--clicked");
    caffeine = 32;
});


//Output

select.addEventListener("click", () => {
    amount = document.querySelector(".amount").value;
    const reg = /^\d+$/;
    if(!reg.test(amount)) {
        alert.innerHTML = "Wrong value. Please insert amount in ml."
        output_container.style.display = "none";
    }
    else {
        alert.innerHTML="";
        output_caffeine = caffeine * amount/100;
        output_percent = (output_caffeine/400)*100;
    
        caffeine_span.innerHTML = output_caffeine;
        percent_span.innerHTML = `${Math.floor(output_percent)}%`;
        output_container.style.display = "inline";
    }
})
