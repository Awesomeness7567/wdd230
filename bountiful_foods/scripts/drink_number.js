// function storeClickCount() {
//     if (localStorage.clickCount) {
//       localStorage.clickCount = Number(localStorage.clickCount) + 1;
//     } else {
//       localStorage.clickCount = 1;
//     }
//   }

// var clickCount = localStorage.clickCount;


// function storeClickCount() {
//     if (localStorage.clickCount) {
//       localStorage.clickCount = Number(localStorage.clickCount) + 1;
//     } else {
//       localStorage.clickCount = 1;
//     }
//     alert("The form has been submitted " + localStorage.clickCount + " times.");
// }


// function myfunc(specialty_drinks) {
//     specialty_drinks.preventDefault();

//     var first_name = document.getElementById('firstname').value;
//     localStorage.setItem('ls_first_name', first_name);
//     var firstName = localStorage.getItem('ls_first_name');
//     console.log(firstName);
// }

  function submitForm() {
    var submitCount = 0;
    if (typeof(Storage) !== "undefined") {
      if (localStorage.submitCount) {
        submitCount = Number(localStorage.submitCount) + 1;
      } else {
        submitCount = 1;
      }
      localStorage.setItem("submitCount", submitCount);
      document.write("The form was submitted " + submitCount + " times.");
    } else {
      document.write("Sorry, your browser does not support web storage...");
    }
  }
