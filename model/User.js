// user.model.ts
import { strict } from 'assert';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },

  userEmail:{
    type:String,
    required: true
  },
});

export default mongoose.model('User', userSchema);
