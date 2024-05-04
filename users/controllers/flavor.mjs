import express from 'express';
const router = express.Router();
import Flavor from '../models/flavor.mjs';

// GET /flavors - Get all flavors
router.get('/', async (req, res) => {
  try {
    // Fetch all flavors from the database
    const flavors = await Flavor.find();

    // Return the flavors as a JSON response
    res.json(flavors);
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST /flavors/seed - Seed flavors to the database
router.post('/', async (req, res) => {
  try {
    // Array of flavor names to seed
    const flavorNames = [
      'Green Apple', 'Shrek', 'Pekachu', 'Barbie', 'Blackberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Pimp Juice', 
      'Mango', 'Nectarine', 'Orange', 'Papaya', 'Popeye', 'Raspberry', 'Strawberry', 'Tangerine', 'Rock N Roll',
      'Flan', 'Apricot', 'Wine Cooler', 'Coconut', 'Shrek', 'Tiger Blood', 'Figs', 'Guava', 'Huckleberry', 'Red Hot',
      'Pumpkin', 'Mocha', 'Lime', 'Melon', 'Hulk', 'Popcorn', 'Sponge Bob', 'Lemonade', 'Rhubarb', 'Strawberry',
      'Tamarind', 'Tutti Fruitti', 'Vanilla bean', 'Watermelon', 'Ice Cream', 'King Cake', 'Coffee', 'Mai Tai', 'Chocolate'
    ];

    // Create an array of flavor objects with names and empty colors
    const flavorsToSeed = flavorNames.map(name => ({
      name,
      color: '' // Empty color, to be filled later IF I decide to use colors
    }));

    // Insert the flavors into the database
    await Flavor.insertMany(flavorsToSeed);

    // Fetch all flavors from the database after seeding
    const flavors = await Flavor.find();

    // Return the flavors as a JSON response
    res.json(flavors);
  } catch (error) {
    // Return an error response
    res.status(500).json({ error: 'An error occurred' });
  }
});


export default router;
