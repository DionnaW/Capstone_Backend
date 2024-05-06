import express from 'express';
const router = express.Router();
import User from '../models/user.mjs';

// Route to create a new user account || POST/user allows users to create an account
router.post('/', async (req, res) => {
  // console.log(req.body);  only to check why user wasnt created
  try {
    // Create a new user based on the request body
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Route to update a user account || PUT/user/:id allows users to update their account
router.put('/user/:id', async (req, res) => {
  try {
    // Find the user based on the provided ID and update their account
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Route to delete a user account || DELETE/users/:id allows users to delete their account
router.delete('/user/:id', async (req, res) => {
  try {
    // Find the user based on provided ID and delete their account
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Route to get all users (only for admin) || GET/admin/users allowa admin to fecth all users in database
router.get('/admin/user', async (req, res) => {
  try {
    // Retrieve all users
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get users' });
  }
});


export default router;