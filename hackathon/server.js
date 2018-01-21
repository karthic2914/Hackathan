import express from 'express';
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import Promise from 'bluebird'
import dotenv from 'dotenv'


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_DB_URL, (err) => {
  if (err) {
    console.log("Mongo error: ", err);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const listener = app.listen(PORT, () => console.log("listening application: ", listener.address().port));


