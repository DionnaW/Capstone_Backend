import express from 'express';
const router = express.Router();
import Topping from '../models/topping.mjs';

// Route to get toppings
router.get('/', async (req, res) => {
  try {
    const toppings = await Topping.find();
    res.json(toppings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add more routes for topping selection, etc.

export default router;