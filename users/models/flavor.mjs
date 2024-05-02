import mongoose from 'mongoose';

const flavorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        enum: ['Sponge Bob', 'Shrek', 'Barbie', 'Tigers Blood', 'Candy Apple', 'Weddding Cake', 'Chocolate Fudge', 'Bahama Mama', 'Egg Custard', 'Tutti Fruitti']
    },
});

flavorSchema.pre('save', function (next) {
    const flavors = this.constructor.countDocuments({}) + 1;
    if (flavors > 5) {
        return next(new Error('You can only choose 5 flavors out of the 10 availaable flavors.'));
    }
    next();
});

const Flavor = mongoose.model('Flavor', flavorSchema);

export default Flavor;

//===========================================OLD
// import mongoose from 'mongoose';
// 
// const flavorSchema = new mongoose.Schema({
  // name: String
// });
// 
// const Flavor = mongoose.model('Flavor', flavorSchema);
// 
// export default Flavor;
// 