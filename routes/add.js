var data = require("../data.json");

exports.addFriend = function(request, response) {
    // Your code goes here

    var ntFriend = {
        name: request.query.name,
        description: request.query.description,
        imageURL: "http://lorempixel.com/400/400/people",
    }

    console.log(ntFriend);
    data.friends.push(ntFriend);
    response.render('index', data);
}