function get_calc(btn) {
  const display = document.calculator.display;

  if (btn.value == "=") {
    const expression = display.value;

    // Check if it is divided by zero or not.
    if (/\/0|÷0/.test(expression)) {
      display.value = "Do not divide by zero";
      display.classList.add("error");
    } else {
      try {
        // Convert × and ÷ into a computable format and then evaluate.
        const safeExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
        display.value = eval(safeExpression);
      } catch (e) {
        display.value = "Error";
      }
    }

  } else if (btn.value == "C") {
    // Delete the last character.
    display.value = display.value.slice(0, -1);

  } else if (btn.value == "AC") {          
    display.value = "";
  } else if (btn.value == "%") {
    if (display.value !== "") {
      display.value = Number(display.value) / 100;
    }

  } else if (btn.className == "float") {
    const dispNum = display.value;
    const lastNumber = dispNum.split(/[\+\-\*\/]/).pop();

    if (lastNumber.includes(".")) return;

    if (dispNum === "" || /[\+\-\*\/]$/.test(dispNum)) {
      display.value += "0.";
    } else {
      display.value += ".";
    }

  } else {
    if (btn.value == "×") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    } 
    display.value += btn.value;

    // Revert to the original button for display.
    if (btn.value == "*") document.calculator.multi_btn.value = "×";
    if (btn.value == "/") document.calculator.div_btn.value = "÷";
  }
}





