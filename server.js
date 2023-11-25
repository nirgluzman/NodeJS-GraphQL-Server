import express from 'express';
import 'colors';

import feedRoutes from './routes/feed.js';

const PORT = process.env.PORT || 3000;

const app = express();

// middleware to parse incoming requests with JSON payloads.
app.use(express.json());

app.use('/feed', feedRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`.red);
});
