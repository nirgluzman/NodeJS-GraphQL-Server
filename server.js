import express from 'express';
import 'colors';

import feedRoutes from './routes/feed.js';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

app.use('/feed', feedRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});
