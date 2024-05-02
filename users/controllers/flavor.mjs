import express from 'express';
const router = express.Router();
import Flavor from '../models/flavor.mjs';

// Route to get flavors
router.get('/', async (req, res) => {
  try {
    const flavors = await Flavor.find();
    res.json(flavors);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add more routes for flavor selection, etc.

export default router;
