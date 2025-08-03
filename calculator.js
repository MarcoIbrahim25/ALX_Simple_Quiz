function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function multi(number1, number2) {
  return number1 * number2;
}
function divid(number1, number2) {
  return number1 / number2;
}
// const addb = document.getElementById("add");
// addb.addEventListener("click", add);
// const subb = document.getElementById("subtract");
// subb.addEventListener("click", sub);
// const multib = document.getElementById("multiply");
// multib.addEventListener("click", multi);
// const dividb = document.getElementById("divide");
// dividb.addEventListener("click", divid);

document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = add(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = sub(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = multi(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = divid(number1, number2);
  document.getElementById("calculation-result").textContent = result;
});
