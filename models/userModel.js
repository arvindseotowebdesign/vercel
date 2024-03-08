import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
    required: [true, "phone is required"],
  },
  email: {
    type: String,
    unique: true,
    sparse: true, // Allow null values to be considered unique
  },
  password: {
    type: String,
  }, token: {
    type: String,
    required: [true, "token is required"],
  },
  pincode: {
    type: String,
  },
  state: {
    type: String,
  },
  address: {
    type: String,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
  status: {
    type: String,
    default: 1
  }
},
  { timestamps: true }
);

const userModel = mongoose.model('User', userSchema);

export default userModel;