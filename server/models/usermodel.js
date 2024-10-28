import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter your Name'],
  },
  email: {
    type: String,
    required: [true, 'Please Enter your Email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please Provide a valid Email Adress'],
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Please enter the password'],
    select: false,
    minlength: 8,
  },
  confirm_password: {
    type: String,
    require: [true, 'PLease enter the confirm password'],
    validate: {
      validator: function (p) {
        return p == this.password;
      },
      message: 'Password and confirm password is not same',
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  college: {
    type: String,
    require: [true, 'Please enter the college'],
  },
  year: {
    type: Number,
    require: [true, 'Please enter the Batch year'],
  },
  branch: {
    type: String,
    require: [true, 'Please enter the branch'],
  },
});

const User = mongoose.model('User', userSchema);

export default User;
