import express from 'express';
import cors from 'cors';
import { DB } from './db';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/cars', (_req, res) => {
  // TODO: Implement get all cars
  res.json([]);
});

app.get('/api/cars/:id', async (req, res) => {
  const car = await DB.getCarById(req.params.id);

  if (!car) {
    res.status(404).json({ error: 'Car not found' });
    return;
  }

  res.json({ id: req.params.id, ...car });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
