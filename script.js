const form = document.getElementById("expense-form");
const list = document.getElementById("exp-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const desc = document.getElementById("description").value;
  const catg = document.getElementById("category").value;
  const amt = document.getElementById("amount").value;

  if (desc && catg !== "Select Category" && !isNaN(amt) && amt !== "") {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${desc}</td>
            <td>${catg}</td>
            <td>${amt}</td>`;

    list.appendChild(newRow);
    clearAll();
  } else {
    alert("Please Enter valid details");
  }
});

function clearAll() {
  document.getElementById("description").value = "";
  document.getElementById("category").value = "Select Category";
  document.getElementById("amount").value = "";
}
