


// <---- Variables ------>

var subtractButton = document.getElementById("subtract");
var displayNumber = document.getElementById("output")

var changedNumber = 0;




// <-------Event Listeners-------->

subtractButton.addEventListener("click", function() {
	
	subtractNumber();
})

var addButton = document.getElementById("add");

addButton.addEventListener("click", function() {
	
	addNumber();
})


//<--------functions--------->

function subtractNumber() {
	var numberToSubtract = document.getElementById("input-variable").value;
	
	parseInt(numberToSubtract);
	changedNumber = changedNumber - numberToSubtract;
	changeDisplay();
}

function addNumber() {
 var numberToAdd = document.getElementById("input-variable").value;
 changedNumber = parseInt(changedNumber) +parseInt(numberToAdd);
 changeDisplay();

}



function changeDisplay() {
	displayNumber.textContent = changedNumber;
	if (changedNumber < 0) {
		displayNumber.style.color = "red";
	} else {
		displayNumber.style.color = "black";
	}
}
