let outputDiv = document.getElementById("app");
let num = 1;
outputDiv.style.display = "flex";
outputDiv.style.margin = "40px";

function showNum() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num0()">&#9668</button>
        <div>1</div>
        <button onclick="num2()">&#9658</button>
    `;
}

//Venste pil
function num0() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin1()">&#9668</button>
            <div>0</div>
            <button onclick="showNum()">&#9658</button>
        `;
}
function numMin1() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="numMin2()">&#9668</button>
            <div>-1</div>
            <button onclick="numMin3()">&#9658</button>
        `;
}
function numMin2() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin3()">&#9668</button>
            <div>-2</div>
            <button onclick="numMin1()">&#9658</button>
            `;
}
function numMin3() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin4()">&#9668</button>
            <div>-3</div>
            <button onclick="numMin2()">&#9658</button>
        `;
}
function numMin4() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin5()">&#9668</button>
            <div>-4</div>
            <button onclick="numMin3()">&#9658</button>
        `;
}
function numMin5() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin6()">&#9668</button>
            <div>-5</div>
            <button onclick="numMin4()">&#9658</button>
        `;
}
function numMin6() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin7()">&#9668</button>
            <div>-6</div>
            <button onclick="numMin5()">&#9658</button>
        `;
}
function numMin7() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin8()">&#9668</button>
            <div>-7</div>
            <button onclick="numMin6()">&#9658</button>
        `;
}

function numMin8() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin9()">&#9668</button>
            <div>-8</div>
            <button onclick="numMin7()">&#9658</button>
        `;
}
function numMin9() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="numMin10()">&#9668</button>
            <div>-9</div>
            <button onclick="numMin8()">&#9658</button>
        `;
}
function numMin10() {
  outputDiv.innerHTML = /*html*/ `
            <button onclick="showNum()">&#9668</button>
            <div>-10</div>
            <button onclick="numMin9()">&#9658</button>
        `;
}

//Høyre pil
function num2() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="showNum()">&#9668</button>
        <div>2</div>
        <button onclick="num3()">&#9658</button>
    `;
}
function num3() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num2()">&#9668</button>
        <div>3</div>
        <button onclick="num4()">&#9658</button>
    `;
}
function num4() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num3()">&#9668</button>
        <div>4</div>
        <button onclick="num5()">&#9658</button>
    `;
}
function num5() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num4()">&#9668</button>
        <div>5</div>
        <button onclick="num6()">&#9658</button>
    `;
}
function num6() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num5()">&#9668</button>
        <div>6</div>
        <button onclick="num7()">&#9658</button>
    `;
}
function num7() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num6()">&#9668</button>
        <div>7</div>
        <button onclick="num8()">&#9658</button>
    `;
}
function num8() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num7()">&#9668</button>
        <div>8</div>
        <button onclick="num9()">&#9658</button>
    `;
}
function num9() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num8()">&#9668</button>
        <div>9</div>
        <button onclick="num10()">&#9658</button>
    `;
}
function num10() {
  outputDiv.innerHTML = /*html*/ `
        <button onclick="num9()">&#9668</button>
        <div>10</div>
        <button onclick="showNum()">&#9658</button>
    `;
}

showNum();
