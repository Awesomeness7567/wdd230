const url = "./data/fruit.json";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const fruits = data;
      const fruitOptions = fruits.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`);
      fruitOptions.sort();
      document.getElementById("fruit1").innerHTML = fruitOptions.join("");
      document.getElementById("fruit2").innerHTML = fruitOptions.join("");
      document.getElementById("fruit3").innerHTML = fruitOptions.join("");
    });