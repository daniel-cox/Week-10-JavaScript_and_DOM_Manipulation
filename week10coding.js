let id = 0;

document.getElementById("add").addEventListener("click", () => {
  id++;
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  let carwashNotes = document.getElementById("washNotes").value;
  let carWashDate = document.getElementById("new-carWash").value;
  let carWashPrice = document.getElementById("washPrice").value;
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = id;
  row.insertCell(1).innerHTML = carWashDate;
  row.insertCell(2).innerHTML = carwashNotes;
  row.insertCell(3).innerHTML = carWashPrice;
  row.insertCell(4).innerHTML = `
  <button type="button" id ="deleteCar-${id}" class="btn btn-danger">Delete</button>`;
  document.getElementById("new-carWash").value = "";
  document.getElementById(`deleteCar-${id}`).addEventListener("click", () => {
    console.log("deleting row..", `item-${id}`);
    let row = document.getElementById(`item-${id}`);
    let rowIndex = row.rowIndex;
    console.log(rowIndex);
    if (rowIndex === 0) {
      console.log("the header stays");
    } else table.deleteRow(rowIndex - 1);
  });
});
