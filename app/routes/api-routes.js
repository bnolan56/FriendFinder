const heroData = require('../data/friends.js');
const path = require('path');

// module.exports = function (app) {
//   app.get('/api/friends', function (req, res, next) {
//     res.json(heroData)
//   })
//   app.post('/api/friends', function (req, res, next) {
//     console.log(req.body)
//     res.json(heroData)
//   })
// };

module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(heroData);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		let userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

		let userResponses = userInput.values;
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		let matchName = '';
		let matchImage = '';
		let totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (let i = 0; i < heroData.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differences for each question
			let diff = 0;
			for (let j = 0; j < userResponses.length; j++) {
				diff += Math.abs(heroData[i].values[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = heroData[i].name;
				matchImage = heroData[i].photoUrl;
			}
		}

		// Add new user
		heroData.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
