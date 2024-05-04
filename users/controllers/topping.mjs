import express from 'express';
const router = express.Router();
import Topping from '../models/topping.mjs';

// GET /toppings - Get all toppings
router.get('/', async (req, res) => {
  try {
    // Fetch all toppings from the database
    const toppings = await Topping.find();

    // Return the toppings as a JSON response
    res.json(toppings);
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST /toppings/seed - Seeding toppings to the database
router.post('/', async (req, res) => {
  try {
    // Array of topping names to seed
    const toppingNames = [
      'Marshmallow Sauce', 'Nerds', 'War Heads', 'Sour Spray', 'Gummy Worms', 'Mixed Fruit', 'Fudge', 'Sprinkles', 'Ice Cream', 'M&Ms'
    ];

    // Create an array of topping objects with names and empty colors
    const toppingsToSeed = toppingNames.map(name => ({
      name,
      color: '' // Empty color, to be filled later NO COLOR FOR TOPPINGS
    }));

    // Insert the toppings into the database
    await Topping.insertMany(toppingsToSeed);

    // Fetch all toppings from the database after seeding
    const toppings = await Topping.find();

    // Return the toppings as a JSON response
    res.json(toppings);
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: 'An error occurred' });
  }

  
});
export default router;