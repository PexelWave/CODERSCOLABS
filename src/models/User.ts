import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    }
  },
  { timestamps: true }
);


const User = models.User || mongoose.model('User', userSchema)
export default User