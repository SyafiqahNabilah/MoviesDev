require('dotenv').config();
require('express-async-errors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//connectDB
const connectDB = require('./db/connect')

//routers
// const authRouter = require('./routes/auth')
const moviesRouter = require('./routes/movies')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(express.json());

// extra packages
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// routes
app.use('/api',moviesRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log(`connected to db`)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
