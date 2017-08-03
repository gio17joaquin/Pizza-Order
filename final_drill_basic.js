/*Size*/
function getReceipt() {
	// 
	var text1 = "<h3>You Ordered:</h3>";
	var text2 ="<h3>Subtotal:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getMeat(runningTotal,text1,text2); // All three of these variables will be passed on to each function
};	
/*end size*/

/*Meat*/
function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			selectedMeat.push(meatArray[i].value);
			text1 = text1+meatArray[i].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	
	for (var i = 0; i < selectedMeat.length; i++) {
			if (meatCount <= 1) {
				text2 = text2 + 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	runningTotal = (runningTotal + meatTotal);
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggies(runningTotal,text1,text2);
};
/*end meat*/

/*Veggies*/
function getVeggies(runningTotal,text1,text2) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
	for (var i = 0; i < veggiesArray.length; i++) {
		if (veggiesArray[i].checked) {
			selectedVeggies.push(veggiesArray[i].value);
			text1 = text1+veggiesArray[i].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	for (var i = 0; i < selectedVeggies.length; i++) {
			if (veggiesCount <= 1) {
				text2 = text2 + 0 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else if (veggiesCount == 2) {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			} else {
				text2 = text2 + 1 + "<br>";
				veggiesCount = veggiesCount - 1;
			}
	}
	runningTotal = (runningTotal + veggiesTotal);
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal,text1,text2);
};

/*end veggies*/

/* Cheese*/
function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var i = 0; i < cheeseArray.length; i++) {
		if (cheeseArray[i].checked) {
			selectedCheese = cheeseArray[i].value;
			text1 = text1+selectedCheese+"<br>";
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
		text2 = text2+cheeseTotal+"<br>";

	
	runningTotal = (runningTotal + cheeseTotal);
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal,text1,text2);
};
/*end cheese*/


/* Crust*/
function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	text2 = text2 + crustTotal + "<br>";
	
	runningTotal = (runningTotal + crustTotal);
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal,text1,text2);
};
/*end crust*/

/* Sauce*/
function getSauce(runningTotal,text1,text2) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			selectedSauce = sauceArray[i].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	text2 = text2 + 0 + "<br>";

		
	runningTotal = (runningTotal + sauceTotal);
	document.getElementById("showText1").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

/*end Sauce*/

