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

app.get('/api/cars', async (req, res) => {
  const { search } = req.query;

  if (search !== undefined && typeof search !== "string") {
    res.status(400).json({ error: "search must be a string" });
    return;
  }

  try {
    const cars = await DB.getAllCars(search ?? '');
    res.status(200).json(cars);
  } catch (err) {
    console.error("Failed to fetch cars:", err);
    res.status(503).json({ error: 'Service Unavailable' });
  }
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



// Project Structure:
// As the API endpoint increases, we can organize folders by moving to feature-based structure
// - features/cars/{routes, controller, service, types}
// - shared/{middleware, utils}
// --------------------------------
// Production Environment:
// - Add rate limiting and authentication middleware
// - Tests: unit tests & integration tests
// - Logging: replace console.error with a structured logger so that it is easier to query
