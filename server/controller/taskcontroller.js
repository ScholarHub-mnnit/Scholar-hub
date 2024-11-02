import Course from '../models/coursemodel.js';
import Task from '../models/taskmodel.js';
import User from '../models/usermodel.js';
import ApiError from '../utils/apierror.js';
import asynchandler from '../utils/asynchandler.js';

export const getall = asynchandler(async (req, res, next) => {
  const id = req.user.id;
  let tasks = null;
  const course_id = req.params.id;

  if (course_id) {
    const course = await Course.findOne({ _id: course_id }).populate('task');

    if (!course) {
      return next(new ApiError('Course is not found', 300));
    }

    tasks = course.task;
  } else {
    const user = await User.findOne({ _id: id }).populate('task');

    if (!user) {
      return next(new ApiError('You cannot add assignment', 306));
    }

    tasks = user.task;
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
  const course_id = req.params.id;
  const user_id = req.user.id;
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
  } = req.body;

  if (!title || !tasktype || !(deadline || duration)) {
    return next(new ApiError('Enter the required field', 302));
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

  if (course_id) {
    const reqcourse = await Course.findById(course_id);

    if (!reqcourse) {
      return next(new ApiError('Cannot find coursed to add ', 304));
    }

    reqcourse.task.push(newtask);

    reqcourse.save();
  } else {
    const requser = await User.findOne({ _id: user_id });
    if (!requser) {
      return next(new ApiError('User cannot found', 304));
    }
    console.log(requser);
    requser.task.push(newtask);
    requser.save();
  }

  res.status(201).json({
    message: 'task add sucessfully',
  });
});
