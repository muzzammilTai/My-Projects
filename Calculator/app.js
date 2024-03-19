const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__output");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    
    
      if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  }else {
    display.textContent = displayedNum + keyContent
  }
      }
      
      if (action === "decimal") {
        display.textContent = displayedNum + ".";
      }

     const calculate = (n1, operator, n2) => {
       let result = "";

       if (operator === "add") {
         result = parseFloat(n1) + parseFloat(n2);
       } else if (operator === "subtract") {
         result = parseFloat(n1) - parseFloat(n2);
       } else if (operator === "multiply") {
         result = parseFloat(n1) * parseFloat(n2);
       } else if (operator === "divide") {
         result = parseFloat(n1) / parseFloat(n2);
       }

       return result;
     };

         Array.from(key.parentNode.children).forEach((k) =>
           k.classList.remove("is-depressed")
      );
      const previousKeyType = calculator.dataset.previousKeyType;

      if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
        }
      }

      if (action === "calculate") {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        display.textContent = calculate(firstValue, operator, secondValue);
      }
  }
});
