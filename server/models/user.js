import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  imageUrl: String,
  requestsLeft: Number,
  subscription: {
    type: String,
    enum: ['free', 'pro', 'enterprise'],
    default: 'free'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema);