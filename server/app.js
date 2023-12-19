const express = require('express');
// const friendsRouter = require('./routes/friends.routers')
const routeFile = require('./routes')

require('dotenv').config();

const app = express();
const PORT = process.env.NODE_PORT;
// console.log(process.env);
app.use((req, res, next) => {
    next();
    console.log(`${req.method} ${req.baseUrl}  ${req.url}`)
});
// app.use('/friends', friendsRouter);
app.use('/api', routeFile);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.......`);
});
