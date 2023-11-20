let data = [];

function createData() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const nmr = document.getElementById("nmr").value;

  if (name && address && nmr) {
    const newData = {
      name: name,
      address: address,
      nmr: nmr
    };

    data.push(newData);
    displayData();
    clearForm();
  } else {
    alert("Name, address, and No.Telp are required.");
  }
}

function displayData() {
  const table = document.getElementById("data-table");
  // Clear existing rows
  table.innerHTML = "<tr><th>Nama</th><th>Alamat</th><th>No.Telp</th><th>Action</th></tr>";

  data.forEach((item, index) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = item.name;
    cell2.innerHTML = item.address;
    cell3.innerHTML = item.nmr;
    cell4.innerHTML = createButtons(index);
  });
}

function createButtons(index) {
  return `
    <button onclick="editData(${index})">Edit</button>
    <button onclick="deleteData(${index})">Delete</button>
  `;
}

function editData(index) {
  const editedData = data[index];

  document.getElementById("name").value = editedData.name;
  document.getElementById("address").value = editedData.address;
  document.getElementById("nmr").value = editedData.nmr;

  // Remove the edited data from the array
  data.splice(index, 1);

  displayData();
}

function deleteData(index) {
  // Remove the data at the specified index
  data.splice(index, 1);
  displayData();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("nmr").value = "";
}
