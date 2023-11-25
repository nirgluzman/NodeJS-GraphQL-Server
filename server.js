import express from 'express';
import 'colors';

import feedRoutes from './routes/feed.js';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming requests with JSON payloads.
app.use(express.json());

// middleware to allow cross-origin requests. 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // specify which HTTP headers are allowed to be sent along with CORS to a server.
  next();
})

app.use('/feed', feedRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});
