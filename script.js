//Liczba A
let A = Number.parseInt(prompt("Podaj część całkowitą liczby A"));
let a1 = Number.parseInt(prompt("Podaj licznik liczby A"));
let a2 = Number.parseInt(prompt("Podaj mianownik liczby A"));

//Liczba B
let B = Number.parseInt(prompt("Podaj część całkowitą liczby B"));
let b1 = Number.parseInt(prompt("Podaj licznik liczby B"));
let b2 = Number.parseInt(prompt("Podaj mianownik liczby B"));

// //Testing
// let A = 2;
// let a1 = 4;
// let a2 = 8;
//
// let B = 5;
// let b1 = 6;
// let b2 = 9;

constructFraction("firstFraction", "Pierwszy ułamek" , A, a1, a2)
constructFraction("secondFraction", "Drugi ułamek", B, b1, b2)

ConstructGeneralFigure("fistGeneralFigure", "Pierwszy ułamek", A, a1, a2);
ConstructGeneralFigure("secondGeneralFigure", "Drugi ułamek", B, b1, b2);

function constructFraction(id, name, X, x1, x2) {
    let element = document.getElementById(id);
    element.innerHTML =
        "<p style='font-size: 18px'>"+ name +"</p>" +
        "<table>" +
        "<tr>" +
        "<td rowspan='2'>" + X + "</td>" +
        "<td style='border-bottom: 1px solid whitesmoke'>" + x1 + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + x2 + "</td>" +
        "</tr>" +
        "</table>"
}

function ConstructGeneralFigure(id, name, X, x1, x2) {
    let b1 = (x2 * X) + x1;
    let b2 = x2;
    let element = document.getElementById(id);
    element.innerHTML =
        "<p style='font-size: 18px'>" + name + "</p>" +
        "<table>" +
        "<tr>" +
        "<td style='border-bottom: 1px solid whitesmoke'>" + b1 + "</td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + b2 + "</td>" +
        "</tr>" +
        "</table>"
}