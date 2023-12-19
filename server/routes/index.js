const express = require('express');
const routemsg = require('./messages.routers');
const frndsroute =require('./friends.routers');

const router = express.Router();

router.use('/messages', routemsg);
router.use('/friends',frndsroute);

module.exports = router;