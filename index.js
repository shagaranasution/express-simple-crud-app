import express, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import productRoute from './routes/product.route.js';

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

connect(
  'mongodb+srv://shagaranst:26oXevIdaoEtm3Q3@backenddb.srplw.mongodb.net/Express-Simple-CRUD-API?retryWrites=true&w=majority&appName=BackendDB'
)
  .then(() => {
    console.log('Successfully connect to database.');
    app.listen(3000, () => {
      console.log('Server is running on port 3000.');
    });
  })
  .catch(() => console.log('Fail connect to database!'));
