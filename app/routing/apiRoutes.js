// Written by John R. Thurlby May 2018

var heroesArray = require('../data/heroes.js');

module.exports = function(app){

	// API GET Requests
	app.get('/api/heroes', function(req, res){
		res.json(heroesArray);
	});


	// user submits a form and it submits data to the server.
	app.post('/api/heroes', function(req, res){

	// setting a variable for the user's response
    var userData = req.body;
    	// the total difference starts off at 0 
		var totalDifference = 0;
		// all differences is an empty array into which the scores of each potential superhero the user is being compared to will go
		var allDifferences = []; 

	//loop through all of the stored superheroes 
	for (var i=0; i<(heroesArray.length-1); i++){

		//loop through all of question values and sum total their subtracted absolute values
		for (var j=0; j<10; j++){
			// this adds the numerical answers of each superhero to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
			totalDifference += Math.abs(heroesArray[i].scores[j] - userData.scores[j]);
		}

		// each total difference, for each potential superhero, is pushed into the allDifferences array 
		allDifferences.push(totalDifference);
		// total difference is reset back to zero
		totalDifference = 0;
	}

	//best match will give the smallest values 
	var bestMatch = heroesArray[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

	res.send(bestMatch);
	

	});
}