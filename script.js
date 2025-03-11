let colorSelect = document.getElementById("colorSelect");
let button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
    let selectedIndex = colorSelect.selectedIndex; 
    if (selectedIndex !== -1) { 
      colorSelect.remove(selectedIndex); 
    }
  });