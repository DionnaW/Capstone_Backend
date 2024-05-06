//THIS IS THE MAIN PAGE THAT HAS TITLE/ AND 3 LINKS ON IT!!

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import Conn from './users/config/conn.mjs';
import flavorRoutes from './users/controllers/flavor.mjs';
import toppingRoutes from './users/controllers/topping.mjs';
import userRoutes from './users/controllers/user.mjs';
import cors from 'cors';


//express application for the Login/Profile 
const profile = express();
const PORT = process.env.PORT || 4000

//====eng. views===
profile.set('view engine', 'jsx');
profile.set('views', './views');
profile.engine('jsx', jsxViewEngine());

//=====middleware
profile.use(express.urlencoded({extended: false}))  //FYI: u hav to use x-www-form-urlenceded on postman when checking for users
profile.use(methodOverride('_method'));
profile.use(cors());

//===routes====
profile.use('/flavors', flavorRoutes);
profile.use('/toppings', toppingRoutes);
profile.use('/user', userRoutes); 

profile.get('/', (req, res) => {
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


profile.listen(PORT, () => {
    console.log(`port is listening`);
});
