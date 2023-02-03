let id = 0;

//NOTE -c
document.getElementById("add").addEventListener("click", () => {
  id++; //incrementing the id at the beginning of the function

  //NOTE -  setting variables to pull data from the Input labels
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  let carwashNotes = document.getElementById("washNotes").value;
  let carWashDate = document.getElementById("new-carWash").value;
  let carWashPrice = document.getElementById("washPrice").value;

  //NOTE - sets the table row with the data passed form the Input labels

  row.setAttribute("id", `item-${id}`); // Sets the value of the incremented ID

  //NOTE - Inserts various cells containg HTML from the input labels
  row.insertCell(0).innerHTML = id;
  row.insertCell(1).innerHTML = carWashDate;
  row.insertCell(2).innerHTML = carwashNotes;
  row.insertCell(3).innerHTML = carWashPrice;
  row.insertCell(4).innerHTML = `

  <button type="button" id ="deleteCar-${id}" class="btn btn-danger">Delete</button>`;
  //NOTE -clears the input field
  document.getElementById("new-carWash").value = "";

  //NOTE -
  document
    .getElementById(`deleteCar-${id}`)
    .addEventListener("click", (event) => {
      //console logs the test code
      console.log("logging event", event.target.parentNode.parentNode);
      console.log("deleting row..", `item-${id}`);
      //NOTE -variable for deleting the row

      //NOTE - Looks at the event listener, the target property, the parent node (td) , and the nested parent node (tr)
      let row = event.target.parentNode.parentNode;

      //NOTE - removes the row
      row.remove();
    });
});
