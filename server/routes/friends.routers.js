const express = require('express');
const friendsController = require('../controllers/friends.controllers');
const router = express.Router();

router.get('/',friendsController.getFriends);
router.get('/:friendId',friendsController.getFriend);

module.exports = router;