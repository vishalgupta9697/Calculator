let display = document.getElementById("display");

function appendToDisplay(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
display.addEventListener('keydown', function(event) {
  // Check if the "Enter" key was pressed
  if (event.key === 'Enter') {
    
  }
});

    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })
