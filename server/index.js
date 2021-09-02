// server/index.js

import path from 'path';
import express from 'express';
import cors from 'cors';

//controllers
import q1 from './controllers/q1.js';
import q2 from './controllers/q2.js';

const PORT = process.env.PORT || 3331;


const app = express();

const moduleURL = new URL(import.meta.url);
app.use(express.static(path.resolve(moduleURL.pathname, '../../client/build')));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors({
  origin: 'https://localhost/'
}));

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*, www.example.com, example.com, www.example.com.s3-website.us-east-2.amazonaws.com');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});


app.get('/q1/:country', (req, res) => {
  q1(req, res);
})

app.get('/q2/:strings', (req, res) => {
  q2(req, res);
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(moduleURL.pathname, '../../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
