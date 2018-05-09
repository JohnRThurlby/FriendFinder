// Written by John R. Thurlby May 2018

var herosArray = require('../data/heros.js');

module.exports = function(app){

	// API GET Requests
	app.get('/api/heros', function(req, res){
		res.json(herosArray);
	});


	// user submits a form and it submits data to the server.
	app.post('/api/heros', function(req, res){

	// setting a variable for the user's response
    var userData = req.body;
    	// the total difference starts off at 0 
		var totalDifference = 0;
		// all differences is an empty array into which the scores of each potential friend the user is being compared to will go
		var allDifferences = []; 

	//loop through all of the stored friends 
	for (var i=0; i<(herosArray.length-1); i++){

		//loop through all of question values and sum total their subtracted absolute values
		for (var j=0; j<10; j++){
			// this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
			totalDifference += Math.abs(herosArray[i].scores[j] - userData.scores[j]);
		}

		// each total difference, for each potential friend, is pushed into the allDifferences array 
		allDifferences.push(totalDifference);
		// total difference is reset back to zero
		totalDifference = 0;
	}

	//best match will give the smallest values 
	var bestMatch = herosArray[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

	res.send(bestMatch);
	console.log(bestMatch);

	});
}