let cars = [];

/**Button save */
/*con este boton controlamos que solo se puedan guardar cambios cuando el usuario preciono el boton edit */
const buttonSave = document.getElementById("save");
buttonSave.disabled = true;

function printCars() {
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  cars.forEach((x) => {
    const row = `<tr>
                <td>${x.brand}</td>
                <td>${x.model}</td>
                <td>${x.color}</td>
                <td>${x.year}</td>
                <td>${x.price}</td>
                <td><button onclick="deleteRegister(${x.id})" class=" btn bg-warning text-dark"><i class="fas fa-trash-alt"></i></button></td>
                <td><button onclick="editRegister(${x.id})" class=" btn bg-warning text-dark"><i class="fas fa-edit"></i></button></td>
    </tr>`;
    table.innerHTML += row;
  });
}

function addRegister() {
  event.preventDefault();
  const brand = document.getElementById("setBrand").value;
  const model = document.getElementById("setModel").value;
  const color = document.getElementById("setColor").value;
  const year = document.getElementById("setYear").value;
  const price = document.getElementById("setPrice").value;

  const newCar = {
    id: cars.length + 1,
    brand: brand,
    model: model,
    color: color,
    year: year,
    price: price,
  };

  cars.push(newCar);
  ResetInputs();

  printCars();
}

function ResetInputs() {
  document.getElementById("setBrand").value = "";
  document.getElementById("setModel").value = "";
  document.getElementById("setColor").value = "";
  document.getElementById("setYear").value = "";
  document.getElementById("setPrice").value = "";
}

function deleteRegister(id) {
  const position = cars.findIndex((x) => x.id === id);
  cars.splice(position, 1);
  printCars();
}

let idGlobal;

function editRegister(id) {
  buttonSave.disabled = false;
  idGlobal = id;
  const brand = document.getElementById("setBrand");
  const model = document.getElementById("setModel");
  const color = document.getElementById("setColor");
  const year = document.getElementById("setYear");
  const price = document.getElementById("setPrice");

  const position = cars.find((x) => x.id === id);
  console.log(position);

  brand.value = position.brand;
  model.value = position.model;
  color.value = position.color;
  year.value = position.year;
  price.value = position.price;
}

function saveChange() {
  cars.forEach((x) => {
    if (idGlobal === x.id) {
      x.brand = document.getElementById("setBrand").value;
      x.model = document.getElementById("setModel").value;
      x.color = document.getElementById("setColor").value;
      x.year = document.getElementById("setYear").value;
      x.price = document.getElementById("setPrice").value;
    }
  });

  buttonSave.disabled = true;
  printCars();
  ResetInputs();
}

document.getElementById("older").addEventListener("click", function () {
  if (cars.length !== 0) {
    let min = 10000000000000000;
    let idsearch;
    const old = cars.forEach((x) => {
      if (x.year < min) {
        min = x.year;
        idsearch = x.id;
      }
    });
    searchRegister(idsearch);
  }
});

document.getElementById("newer").addEventListener("click", function () {
  if (cars.length !== 0) {
    let max = 0;
    let idsearch;
    cars.forEach((x) => {
      if (x.year > max) {
        max = x.year;
        idsearch = x.id;
      }
    });
    searchRegister(idsearch);
  }
});

document.getElementById("lowercost").addEventListener("click", function () {
  if (cars.length !== 0) {
    let min = 1000000000000000000000;
    let idsearch;
    cars.forEach((x) => {
      if (x.price < min) {
        min = x.price;
        idsearch = x.id;
      }
    });
    searchRegister(idsearch);
  }
});

document.getElementById("highercost").addEventListener("click", function () {
  if (cars.length !== 0) {
    let max = 0;
    let idsearch;
    cars.forEach((x) => {
      if (x.price > max) {
        max = x.price;
        idsearch = x.id;
      }
    });
    searchRegister(idsearch);
  }
});

document.getElementById("generalview").addEventListener("click", function () {
  if (cars.length !== 0) {
    printCars();
  }
});

document.getElementById("randomdata").addEventListener("click", function () {
  if (cars.length === 0) {
    cars = JSON.parse(JSON.stringify(dataRandom));
    printCars();
  } else {
    alert("Este Boton solo Añade datos Random cuando No hay ningun registro");
  }
});

function searchRegister(id) {
  const table = document.getElementById("tableBody");
  table.innerHTML = "";
  cars.forEach((x) => {
    if (x.id === id) {
      const row = `<tr>
      <td>${x.brand}</td>
      <td>${x.model}</td>
      <td>${x.color}</td>
      <td>${x.year}</td>
      <td>${x.price}</td>
      <td><button onclick="deleteRegister(${x.id})" class=" btn bg-warning text-dark"><i class="fas fa-trash-alt"></i></button></td>
      <td><button onclick="editRegister(${x.id})" class=" btn bg-warning text-dark"><i class="fas fa-edit"></i></button></td>
      </tr>`;
      table.innerHTML += row;
    }
  });
}

const dataRandom = [
  {
    id: 1,
    brand: "Aston Martin",
    model: "DB9",
    color: "Blue",
    year: "2005",
    price: "250000",
  },
  {
    id: 2,
    brand: "Audi",
    model: "A5",
    color: "Red",
    year: "2012",
    price: "450000",
  },
  {
    id: 3,
    brand: "Bentley",
    model: "Serie3",
    color: "Yellow",
    year: "1996",
    price: "145000",
  },
  {
    id: 4,
    brand: "Ferrari",
    model: "F12",
    color: "Black",
    year: "2002",
    price: "650000",
  },
  {
    id: 5,
    brand: "Ford",
    model: "Focus",
    color: "Pink",
    year: "2018",
    price: "75000",
  },
];
