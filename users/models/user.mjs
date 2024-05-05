import mongoose from 'mongoose';

// User model schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // isAdmin: {      // DEFAULT & INDICATES IF A USER IS ADMIN OR NOT
    // type: Boolean,
    // default: false
  // }
});

// Create and export user model
const User = mongoose.model('User', userSchema);

export default User;