var lastModified = new Date(document.lastModified);
var lastModifiedDate = lastModified.toLocaleDateString();
document.getElementById("last-modified-date").innerHTML = lastModifiedDate;