let result = document.getElementById("result");
function fun(num) {
  result.value += num;
}
function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    alert("Invalid :(");
  }
}
function Clear() {
  result.value = " ";
}
function del() {
  result.value = result.value.slice(0, -1);
}
