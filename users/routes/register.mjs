import express from 'express';
const router = express.Router();
import registerController from '../controllers/registerControllers.mjs';

router.post('/', registerController.handleNewUser);

module.exports = router;