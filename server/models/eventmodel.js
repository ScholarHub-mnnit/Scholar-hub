import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
