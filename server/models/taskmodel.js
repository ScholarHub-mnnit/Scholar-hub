import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
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
  iscompleted: {
    type: Boolean,
    default: false,
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
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
