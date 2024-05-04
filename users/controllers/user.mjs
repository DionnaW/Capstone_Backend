import express from 'express';
const router = express.Router();
import User from '../models/user.mjs';

// Route to create a new user account || POST/user allows users to create an account
router.post('/user', async (req, res) => {
  try {
    // Create a new user based on the request body
    const newUser = await User.create(req.body);
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


//================================================================ANOTHER ROUTE TO TEST
// Index - get all users
// router.get('/', async (req, res) => {
  // try {
      // const foundUsers = await User.find({});
      // res.status(200).render('users/Index', { users: foundUsers});
  // } catch (error) {
      // res.status(400).send(error);
  // }
// });

// New - form to create a new user
// router.get('/new', (req, res) => {
  // res.render('users/New');
// });

// Create - create a New User 
// router.post('/', async (req, res) => {
  // try {
      // const createdUser = await User.create(req.body);
      // res.status(200).send(createdUser);
  // } catch (error) {
      // res.status(400).send(error);
  // }
// });

// Show - show a specific user
// router.get('/:id', async (req, res) => {
  // try {
      // const foundUser = await User.findById(req.params.id);
      // res.render('users/Show', { user: foundUser });
  // } catch (error) {
      // res.status(400).send(error);
  // }
// });

// Edit - form to edit a specific user
// router.get("/:id/edit", async (req, res) => {
  // try {
      // const foundUser = await User.findById(req.params.id);
      // res.status(200).render('users/Edit', { user: foundUser });
  // } catch (error) {
      // res.status(400).send(error);
  // }
// });

// Update - update a specific user
// router.put('/:id', async (req, res) => {
  // try {
      // const updatedUser = await User.findByIdAndUpdate(
          // req.params.id,
          // req.body,
          // { new: true },
      // );
      // res.redirect(`/users/${req.params.id}`);
  // } catch (error) {
      // res.status(400).send(error);
  // }
// });
// 
// Delete - delete a specific user
// router.delete('/:id', async (req, res) => {
  // try {
      // await User.findByIdAndDelete(req.params.id);
      // res.redirect('/users');
  // } catch (error) {
      // res.status(400).send(error);
  // }
// });

export default router;