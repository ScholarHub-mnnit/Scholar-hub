import ApiError from '../utils/apierror';
import asynchandler from '../utils/asynchandler';

export const getall = asynchandler(async (req, res, next) => {
  const id = req.user._id;
  const requser = User.findById(id);
  if (!requser) {
    return next(new ApiError('user not FOund', 403));
  }
  const allevents = requser.populate('event');
  res.status(201).json({
    message: 'Events fetch Successfully',
    data: {
      allevents,
    },
  });
});

export const addevent = asynchandler(async (req, res, next) => {
  const { date, remark, event } = req.body;
  const id = req.uaer._id;
  const requser = User.findById(id);

  if (!requser) {
    return next(new ApiError('user not Found', 403));
  }

  if (!remark || !date || !event) {
    return next(new ApiError('Please enter required field', 400));
  }
  const newevent = Event.Create({ date, remark, event });
  requser.event.push(newevent);
  requser.save();
  res.status(201).json({
    message: 'Add Event Sucessfully',
    data: event,
  });
});

export const updateevent = asynchandler(async (req, res, next) => {
  // console.log(req.params);
  const event_id = req.params.id;

  const findevent = await Event.findOne({ _id: event_id });

  if (!findevent) {
    return next(new ApiError("Can't find the event try again", 320));
  }

  const { date, remark, event } = req.body;

  const updated = await event.findOneAndUpdate(
    { _id: event_id },
    { date, remark, event },
    { new: true, runValidators: true }
  );
  // console.log(updated);
  res.status(201).json({
    message: 'event updated Succesfully',
    data: {
      updatedevent: updated,
    },
  });
});

export const delevent = asynchandler(async (req, res, next) => {
  console.log(req);
  const event_id = req.params.id;

  const findevent = await Event.findOne({ _id: event_id });

  if (!findevent) {
    return next(new ApiError('Can,t delete the event try again', 302));
  }

  await Event.findOneAndDelete({ _id: event_id });

  res.status(201).json({
    message: 'Delete Succesfully',
  });
});
