import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    // require: [true, 'Please Enter the chapter name'],
  },
  number: {
    type: Number,
    min: 1,
    // require: [true, 'Please Enter the chapter number'],
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  //1-assignment 2-lecture 3-project
  completedtask: [],
});

const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter;
