//load data
let friendsData = require("../data/friends");

//routing
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        // console.log(req.body.scores);
        let userInputScores = req.body.scores.map(Number);
        let differencesArray = [];
        // console.log(scoreArray);

        for (let a = 0; a < friendsData.length; a++) {
            potentialFriendScores = friendsData[a].scores.map(Number);
            totalDifference = 0;

            for (let b = 0; b < userInputScores.length; b++) {
                let difference = +potentialFriendScores[b] - +userInputScores[b];
                totalDifference += Math.abs(difference);
            }

            differencesArray.push(totalDifference);
        };

        let minDifference = Math.min.apply(null, differencesArray);
        for (let i = 0; i < differencesArray.length; i++) {
            if (differencesArray[i] === minDifference) {
                var newFriend = friendsData[i];
                // console.log(newFriend);
            }
        }

        res.json(newFriend);

        friendsData.push(req.body);

    });


};