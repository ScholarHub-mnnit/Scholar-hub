import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: string,
    require: [true, 'Please enter the subject name'],
    unique: [true, 'Course already exist'],
  },
  coursecode: {
    type: string,
    require: [true, 'Please enter the subject code'],
  },
  credit: {
    type: Number,
    require: [true, 'Please Enter the credit'],
    min: 2,
    max: 5,
  },
  task: [
    {
      tpye: mongoose.Schema.Types.ObjectId,
      ref: 'Tasks',
    },
  ],
});
