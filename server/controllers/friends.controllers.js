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
        res.status(configs.status_code_success).json(friend);
    } else {
        res.status(configs.status_code_failure).json({
            error: "Friend not found"
        });
    }
}
module.exports = {
    getFriend,
    getFriends,
}