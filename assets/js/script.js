function calculateTotal() {
  var serviceType = document.getElementById("serviceType").value;
  var quantity = parseFloat(document.getElementById("quantity").value);

  var pricePerItem = 0;

  if (serviceType === "cuci") {
    pricePerItem = 6000;
  } else if (serviceType === "setrika") {
    pricePerItem = 8000;
  } else if (serviceType === "komplit") {
    pricePerItem = 12000;
  }

  var total = pricePerItem * quantity;

  document.getElementById("total").value = total;
}

var selectedRow = null;

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear data
function clearFields() {
  document.querySelector("#customerName").value = "";
  document.querySelector("#serviceType").value = "";
  document.querySelector("#quantity").value = "";
}

// add data
document.querySelector("#laundryForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const customerName = document.querySelector("#customerName").value;
  const serviceType = document.querySelector("#serviceType").value;
  const quantity = document.querySelector("#quantity").value;

  if (customerName == "" || serviceType == "" || quantity == "") {
    showAlert("Tolong jangan dikosongkan", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#laundryList");
      const row = document.createElement("tr");

      row.innerHTML = `
          <td>${customerName}</td>
          <td>${serviceType}</td>
          <td>${quantity}</td>
          <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
          </td>`;

      list.appendChild(row);
      selectedRow = null;
      showAlert("Data Ditambahkan", "berhasil");
    } else {
      selectedRow.children[0].textContent = customerName;
      selectedRow.children[1].textContent = serviceType;
      selectedRow.children[2].textContent = quantity;
      selectedRow = null;
      showAlert("Info Edited", "info");
    }
    clearFields();
  }
});

// edit data
document.querySelector("#laundryList").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#customerName").value = selectedRow.children[0].textContent;
    document.querySelector("#serviceType").value = selectedRow.children[1].textContent;
    document.querySelector("#quantity").value = selectedRow.children[2].textContent;
  }
});

// delete data
document.querySelector("#laundryList").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Hapus Data Laundry", "danger");
  }
});