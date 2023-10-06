let today = new Date();
document.querySelector("#currentyear").innerHTML = "&copy; " + today.getFullYear()
document.querySelector("#lastModified").textContent = "Date Modified: " + document.lastModified;