import express from "express";
import mongoose from "mongoose";
import cors from 'cors';


import userRoute from './routes/userRoute.js'
import activeUserRoute from './routes/activeUserRoute.js'

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1/locochat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB: ', error);
  });

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.use(cors());

app.use(express.json());

app.use('/api/users', userRoute );

app.use('/api', activeUserRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
