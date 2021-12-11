import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index.js';
import cors from 'cors';
const app = express();

mongoose.connect('mongodb://localhost:27017/crowdfunding_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));


app.use(cors());
app.use(express.json());
app.use('/', route);

app.use(express.static('public'));



app.listen('3001', () => {
  console.log(`Server started on port`);
});