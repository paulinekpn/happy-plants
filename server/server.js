const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

//require routes
const plantsRouter = require('./routes/plantsRoute');

//parse JSON from incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files (css and html)
app.use(express.static(path.resolve(__dirname, '../src')));

//define route handlers
app.use('/plants', plantsRouter);

// const MONGO_URI = 'mongodb+srv://pnguyenCS55:pnguyenCS55@cluster0.38ngzmh.mongodb.net/?retryWrites=true&w=majority'

const MONGO_URI = 'mongodb+srv://pnguyen:pnguyen@cluster0.gczhv00.mongodb.net/?retryWrites=true&w=majority'

//connect to db
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
        console.log('Connected to Mongo DB and server listening on port: ', PORT);
    });
  })
  .catch((err) => {
    console.log(err)
  })

//Global error handling middleware
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middlware error',
        status: 400,
        message: { err: 'Error occured' }
    }; 
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});



module.exports = app;