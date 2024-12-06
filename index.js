import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import productRoute from './routes/product.route.js';
import 'dotenv/config';

// app
const app = express();

// middleware
app.use(json());
app.use(urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API');
});

connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log('Successfully connect to database.');
    app.listen(3000, () => {
      console.log('Server is running on port 3000.');
    });
  })
  .catch((e) => console.log('Fail connect to database!', e));
