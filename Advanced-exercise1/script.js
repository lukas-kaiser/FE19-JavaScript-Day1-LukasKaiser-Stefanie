let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

//convert strings into integers first
c = parseInt(c);
d = parseInt(d);

//sum up into one funcion
let resultOne = a+b+c+d+e;

let f = '1';
let g = 15;
let h = 8;
let i = "1";

//convert strings into integers first
f = parseInt(f);
i = parseInt(i);

//multiply into one funcion
let resultTwo = f*g*h*i;

//divide both results and show in browser
let endResult = resultOne / resultTwo;
document.write(endResult);