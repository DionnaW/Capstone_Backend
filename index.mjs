//THIS IS THE MAIN PAGE THAT HAS TITLE/ AND 3 LINKS ON IT!!

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './users/db/conn.mjs';
import flavorRoutes from './users/controllers/flavor.mjs';
import toppingRoutes from './users/controllers/topping.mjs';
import userRoutes from './users/controllers/user.mjs';

//express application for the Login/Profile 
const profile = express();
const PORT = process.env.PORT || 4000

//====eng. views===
profile.set('view engine', 'jsx');
profile.set('views', './views');
profile.engine('jsx', jsxViewEngine());

//=====middleware
profile.use(express.urlencoded({extended: false}))
profile.use(methodOverride('_method'));

//===routes====
profile.use('/flavors', flavorRoutes);
profile.use('/toppings', toppingRoutes);
profile.use('/users', userRoutes); 

profile.get('/', function(req, res) {
  let content =  `
      <div style="text-align: center;">
          <p style="font-size: 24px; margin-top: 100px;">YOU ARE ABOUT TO ENTER THE SNOW CONE ZONE</p>
          <br/>
          <a href='/flavors' style="display: block;">Flavors</a>
          <a href='/toppings' style="display: block;">Toppings</a>
      </div>
  `;
  res.send(content);
});

// profile.get('/', function(req, res) {
    // let content =  `<div>GET READY TO ENTER THE SNOW CONE ZONE <br/><a href='/flavors'>Flavors</a> <br/><a href='/toppings'>Toppings</a></div>`   
    // res.send(content);
// })

profile.listen(PORT, () => {
    console.log(`port is listening`);
});



//===================================================MAYBE
// this is my index.mjs NAMED IT SERVER.MJS
// import express from 'express';
// import mongoose from 'mongoose';
// const app = express();
// 
// Enigine Views
// import jsxViewEngine from 'jsx-view-engine';
// import methodOverride from 'method-override';
// 
// Import Routes
// import userRoutes from './users/controllers/user.mjs';
// import flavorRoutes from './users/controllers/flavor.mjs';
// import toppingRoutes from './users/controllers/topping.mjs';
// 
// 
// Middleware
// app.use(express.json());
// app.set('view engine', 'jsx');
// app.engine('jsx', jsxViewEngine());
// app.use(express.urlencoded({extended: false}));
// app.use(methodOverride('_method'));
// 
// Routes
// app.use('/users', userRoutes);
// app.use('/flavors', flavorRoutes);
// app.use('/toppings', toppingRoutes);
// 
// Thid will direct from the root Url to users view
// app.get('/', (req, res) => {
  // res.redirect('/users');
// });
// 
// Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// 
// 