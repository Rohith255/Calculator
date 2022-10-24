let result = document.getElementById("result");
const fun = (num) => {
  return (result.value += num);
};
const calculate = () => {
  try {
    result.value = eval(result.value);
  } catch {
    alert("Invalid :(");
  }
};
const Clear = () => {
  return (result.value = " ");
};
const del = () => {
  return (result.value = result.value.slice(0, -1));
};