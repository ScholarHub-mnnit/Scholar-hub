import Course from '../models/coursemodel.js';
import Task from '../models/taskmodel.js';
import User from '../models/usermodel.js';
import ApiError from '../utils/apierror.js';
import asynchandler from '../utils/asynchandler.js';

export const getall = asynchandler(async (req, res, next) => {
  const id = req.user._id;
  console.log(id);
  let tasks = null;
  const coursecode = req.params.id;
  console.log(coursecode);
  if (coursecode) {
    const course = await Course.findOne({ coursecode, user: id }).populate(
      'task'
    );

    if (!course) {
      return next(new ApiError('Course is not found', 400));
    }

    tasks = course.task;
  } else {
    const user = await User.findOne({ _id: id }).populate('task');
    console.log(user);
    if (!user) {
      return next(new ApiError('You cannot add assignment', 406));
    }
    console.log();
    tasks = user.task;
    console.log(user.task);
  }

  //send the whole data which can be filter on the basis of chapter name and number

  res.status(200).json({
    message: 'sucess',
    data: {
      tasks,
    },
  });
});

export const addtask = asynchandler(async (req, res, next) => {
  const user_id = req.user._id;
  console.log(req.body);
  const {
    title,
    description,
    tasktype,
    chapterno,
    chaptername,
    setgoal,
    goaltype,
    deadline,
    duration,
    coursecode,
  } = req.body;

  if (!title || !tasktype || !(deadline || duration)) {
    return next(new ApiError('Enter the required field', 402));
  }

  let reqcourse;

  if (coursecode) {
    reqcourse = await Course.findOne({ coursecode });

    if (!reqcourse) {
      return next(new ApiError('Cannot find coursed to add ', 404));
    }
  }

  const newtask = await Task.create({
    title,
    description,
    tasktype,
    chapterno,
    chaptername,
    setgoal,
    goaltype,
    deadline,
    duration,
  });

  if (coursecode) {
    reqcourse.task.push(newtask);
    console.log(reqcourse);
    reqcourse.save();
  }
  const requser = await User.findOne({ _id: user_id });
  if (!requser) {
    return next(new ApiError('User cannot found', 404));
  }
  console.log(requser);
  requser.task.push(newtask);
  requser.save();

  res.status(201).json({
    message: `${tasktype} add sucessfully`,
  });
});

export const updatetask = asynchandler(async (req, res, next) => {
  const id = req.params.id;

  const reqtask = await Task.findById(id);

  if (!reqtask) {
    return next(new ApiError('Task is not found'), 300);
  }

  const {
    title,
    description,
    tasktype,
    chapterno,
    chaptername,
    setgoal,
    goaltype,
    deadline,
    duration,
    status,
  } = req.body;
  const prevstatus = reqtask.status;
  const prevgoal = reqtask.setgoal;

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    {
      title,
      description,
      tasktype,
      chapterno,
      chaptername,
      setgoal,
      status,
      goaltype,
      deadline,
      duration,
    },
    { new: true, runValidators: true }
  );

  if (status && status === 'Completed' && prevstatus === 'Pending') {
    const id = req.user._id;
    const addrewarduser = await User.findById(id);
    let fixedpoint, varpoint;
    if (updatedTask.tasktype === 'Assignment') {
      fixedpoint = 70.0;
      varpoint = 1.0;
    } else if (tasktype === 'Project') {
      fixedpoint = 150.0;
      varpoint = 1.5;
    } else {
      fixedpoint = 50.0;
      varpoint = 1.0;
    }
    const istOffset = 5.5 * 60 * 60 * 1000;
    const newdeadline = new Date(updatedTask.deadline - istOffset).getTime();
    const newDate = new Date(Date.now()).getTime();
    const variable = (newdeadline - newDate) / (1000 * 3600);
    console.log(fixedpoint);
    console.log(updatedTask.tasktype);
    fixedpoint + varpoint * variable > fixedpoint / 2
      ? (addrewarduser.rewardpoint = Math.ceil(
          addrewarduser.rewardpoint + fixedpoint + varpoint * variable
        ))
      : (addrewarduser.rewardpoint = Math.ceil(fixedpoint / 2));
    console.log(addrewarduser.rewardpoint);
    addrewarduser.save();
  }

  if (setgoal && !prevgoal) {
    const id = req.user._id;
    const addrewarduser = await User.findById(id);

    let point = 0;
    if (goaltype === 'Daily') point = 60;
    else point = 20;

    addrewarduser.rewardpoint = addrewarduser.rewardpoint + point;
    addrewarduser.save();
  }

  res.status(201).json({
    message: 'Task Updated Sucessfully',
    data: {
      updatedTask,
    },
  });
});
export const deltask = asynchandler(async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const reqtask = await Task.findById(id);
  console.log(reqtask);
  if (!reqtask) {
    next(new ApiError('Task Cannot FOund', 400));
  }

  const deletedTask = await Task.findByIdAndDelete(id);

  res.status(201).json({
    message: 'Task Deleted Sucessfully',
  });
});
