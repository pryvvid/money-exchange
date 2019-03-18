// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  const halfDollar = 50;
	const quarter = 25;
	const dime = 10;
	const nickel = 5;
	const penny = 1;
	
	let money = {};
	
	if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if (currency < 1) return {};
	
	while (currency != 0) {
		if (currency >= 50) {
			currency -= halfDollar;
			if (!money["H"]) money["H"] = 0;
			money["H"] += 1;
		} else if (currency < 50 && currency >= 25) {
			currency -= quarter;
			if (!money["Q"]) money["Q"] = 0;
			money["Q"] += 1;
		} else if (currency < 25 && currency >= 10) {
			currency -= dime;
			if (!money["D"]) money["D"] = 0;
			money["D"] += 1;
		} else if (currency < 10 && currency >= 5) {
			currency -= nickel;
			if (!money["N"]) money["N"] = 0;
			money["N"] += 1;
		} else {
			currency -= penny;
			if (!money["P"]) money["P"] = 0;
			money["P"] += 1;
		}
	}
	
	return money;
}
