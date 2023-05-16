let input = document.getElementsByClassName("input")[0];

let buttons = document.getElementsByTagName("button");

let s = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML == "=") {
      let ans = eval(s);
      input.value = ans;
      s = "";
    } else if (button.innerHTML == "C") {
      s = "";
      input.value = "";
    } else {
      s += button.innerHTML;
      input.value = s;
    }
  });
});
