const { friends } = require('../models/friends.model');
const configs = require('../config')
function getFriends (req, res) {
    res.json(friends);
}
console.log(configs.status_code_success);
function getFriend(req, res){
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "Friend not found"
        });
    }
}
module.exports = {
    getFriend,
    getFriends,
}