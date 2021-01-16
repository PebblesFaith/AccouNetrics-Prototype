

/* This written Javascript codes check user[s] browser support. */

if (typeof(Storage) !== "undefined") {
    document.getElementById("userFirstName").innerHTML = localStorage.getItem("firstName");

} else {
    document.getElementById("userFirstName").innerHTML = "We are sorry, your browser does not support local web storage capability in order to store your contact us form data.";
}

/*  */
const userDateOrderNumber = new Date().valueOf();
const userOrderNumber = userDateOrderNumber.toString();

//document.getElementById('userTime').innerHTML = userDateOrderNumber;

var result = "";
var length = 32;
var indexPosition = 0;
var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// The bold number represents date time sequence in number order.

for (var i = length; i > 0; --i) {
    result += ((i & 1) && userOrderNumber.charAt(indexPosition)? + userOrderNumber.charAt(indexPosition) + '':characters[Math.floor(Math.random() * characters.length)]);
    if (i & 1) indexPosition++;
};

document.getElementById('results').innerHTML = result;
const currentDate = new Date();
const userCurrentDate = document.getElementById('todayDate');
userCurrentDate.innerHTML = currentDate;

console.log(localStorage);
console.log(userOrderNumber);

localStorage.removeItem("firstName");