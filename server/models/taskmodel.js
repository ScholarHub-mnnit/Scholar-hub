import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tasktype: {
    type: String,
    enum: ['Assignment', 'Lectures', 'Project'],
    default: 'Assignment',
  },
  chapterno: {
    type: Number,
    min: 1,
  },
  chaptername: {
    type: String,
  },
  reward_point: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['Completed', 'Pending'],
  },
  setgoal: {
    type: Boolean,
    default: false,
  },
  goaltype: {
    type: String,
    enum: ['Daily', 'Weekly'],
    default: 'Daily',
  },
  deadline: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  createdat: {
    type: String,
    default: Date.now(),
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
