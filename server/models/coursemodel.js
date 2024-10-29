import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please enter the subject name'],
    // unique: [true, 'Course already exist'],
  },
  coursecode: {
    type: String,
    require: [true, 'Please enter the subject code'],
    unique: [true, 'Course already exist'],
  },
  credit: {
    type: Number,
    require: [true, 'Please Enter the credit'],
    min: 2,
    max: 5,
  },
  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
