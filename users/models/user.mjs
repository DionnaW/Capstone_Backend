import mongoose from 'mongoose';

// Defining user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
},
roles: {
    User: {
        type: Number,
        default: 2001
    },
    Editor: Number,
    Admin: Number
},
password: {
    type: String,
    required: true
},
refreshToken: String
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