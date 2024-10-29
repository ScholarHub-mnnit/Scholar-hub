import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

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
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  rewardpoint: {
    type: Number,
    default: 0,
  },
  acheivement: [],
  task: {
    type: mongoose.Schema.ObjectId,
    ref: 'Task',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirm_password = undefined;
  next();
});

// comparePassword Method: This method should not be wrapped with asynchandler. It's a method of your Mongoose model, and it should be invoked directly.

// Using next in Non-Middleware Context: The next function is specific to Express middleware. When you call comparePassword, it should not expect next to be passed.

userSchema.methods.comparepassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const User = mongoose.model('User', userSchema);

export default User;
