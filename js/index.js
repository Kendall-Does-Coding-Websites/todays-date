var today = new Date();
var date = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
// document.write(date + '/' + month + '/' + year);

const mainElement = document.getElementById("main")
mainElement.innerText = date + '/' + month + '/' + year
