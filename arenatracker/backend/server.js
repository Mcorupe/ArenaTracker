const app = require('./app');

//express app
const port= process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`Mongoose's are running around on port ${port}`)
);