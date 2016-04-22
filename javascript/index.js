function change() {
	var dollarSwap = $("#totalGiven").val() - $("#totalSale").val();
	$("#dollars").html(0);
	$("#quarters").html(0);
	$("#dimes").html(0);
	$("#nickels").html(0);
	$("#pennies").html(0);
	//varify dollarSwap is a Number
	if (isNaN(dollarSwap)) {
		return alert("Invalid Input! Please only input Numbers.")
	}
	// Check for neg number
	if (dollarSwap < 0) {
		var dollarSwap = Math.abs(dollarSwap).toFixed(2);
		return alert("Amount still owed: $" + dollarSwap)
	}
	if (dollarSwap >= 1){
		var dollarChange = Math.trunc(dollarSwap);
		var cents = dollarSwap - dollarChange;
		$("#dollars").html(dollarChange)
	}
	if (dollarSwap <=.99){
		var cents = Math.round(dollarSwap * 100) / 100;
	}
	if (cents > .24) {
		var cents = Math.round(cents * 100) / 100;
		var quarters = Math.floor(cents/.25);
		cents = cents - (quarters*.25);
		$("#quarters").html(quarters)
	}
	if (cents > .09){
		var dimes = Math.floor(cents/.1);
		cents = cents - (dimes * .1);
		$("#dimes").html(dimes)
	}
	if (cents > .04){
		var nickels = Math.floor(cents/0.05);
		cents = cents - (nickels * .05);
		$("#nickels").html(nickels)
	}
	if (cents >= .01) {
		var pennies = Math.round(cents/ 0.01);
		$("#pennies").html(pennies)
	}
}