import mongoose from 'mongoose';

// Define your user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export your user model
const User = mongoose.model('User', userSchema);

export default User;

//===========================================OLD
// const userSchema = new mongoose.Schema({
  // name: String,
  // address: String,
  // phone: String,
  // email: {
    // type: String,
    // unique: true
  // },
  // password: String
// });
// 
// const User = mongoose.model('User', userSchema);
// 
// export default User;