import mongoose from 'mongoose';

const toppingSchema = new mongoose.Schema ({
    name: { 
        type: String, 
        required: true, 
    },
});
const Topping = mongoose.model('Topping', toppingSchema);

export default Topping;