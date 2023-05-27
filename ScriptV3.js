// Get the table element by its ID
var table = document.getElementById("table_Sardin");

// Add a click event listener to the table
table.addEventListener("click", function(event) {
  // Check if the clicked element is the "Buy" button
  if (event.target.tagName === "A" && event.target.innerText === "Buy") {
    // Get the corresponding row of the clicked button
    var row = event.target.closest("tr");

    // Get the data from the row cells
    var sardinName = row.cells[2].innerText;
    var price = row.cells[3].innerText;

    // Display a message with the selected Sardin product and price
    alert("You selected: " + sardinName + " for " + price);
  }
});