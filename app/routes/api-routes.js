const heroData = require('../data/friends.js');
const path = require('path');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(heroData);
  });

  app.post('/api/friends', function(req, res) {
    // res.json(req.body)
    //grabs the new hero's values to compare with friends in heroData array
    let heroValues = req.body.values;
    console.log(heroValues)
    res.json(heroValues)
    let valuesArray = [];
    let heroCount = 0;
    let heroMatch = 0;

    //runs through all current heroes in list
    // for(let i = 0; i < heroData.length; i++) {
  //     let valuesDifference = 0;
  //     //run through values to compare friends
  //     for(let j = 0; j < heroValues.length; j++) {
  //       valuesDifference += (Math.abs(parseInt(heroData[i].values[j]) - parseInt(heroValues[j])));
  //     }

  //     //push results into values array
  //     valuesaray.push(valuesDifference);
  //   }

  //   //after all heroes are compared, find best match
  //   for(let i = 0 ; i < valuesaray.length; i++){
  //     if(valuesaray[i] <= valuesaray[heroMatch]) {
  //       heroMatch = i;
  //     }
  //   }

  //   //return heroMatch data
  //   let bestHero = heroData[heroMatch];
  //   res.json(bestHero);

  //   //pushes new submission into the heroesArray array
  //   heroData.push(req.body);
  });
};
