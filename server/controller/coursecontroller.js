import Course from '../models/coursemodel.js';
import Task from '../models/taskmodel.js';
import User from '../models/usermodel.js';
import ApiError from '../utils/apierror.js';
import asynchandler from '../utils/asynchandler.js';

export const getcourse = asynchandler(async (req, res, next) => {
  // console.log(req.params);
  const course_id = req.params.id;

  // console.log(course_id);
  const findcourse = await Course.findOne({ _id: course_id });

  if (!findcourse) {
    return next(new ApiError('course not found please update', 302));
  }

  res.status(201).json({
    message: 'sucess',
    data: {
      findcourse,
    },
  });
});

export const addcourse = asynchandler(async (req, res, next) => {
  // console.log(req.user);
  const id = req.user._id;
  const { name, coursecode, credit } = req.body;
  const findcourse =
    (await Course.findOne({ coursecode, user: id })) ||
    (await Course.findOne({ name, user: id }));

  if (findcourse) {
    return next(new ApiError('Course are already exist', 300));
  }

  if (!name || !coursecode || !credit) {
    return next(new ApiError('Please Enter all the feild', 300));
  }

  const newcourse = await Course.create({ name, coursecode, credit, user: id });

  const finduser = await User.findOne({ _id: id });

  if (!finduser) {
    return next(new ApiError('You are not authenticated', 300));
  }

  finduser.courses.push(newcourse);
  finduser.save();

  return res.status(201).json({
    message: 'Add course Successfully',
    data: {
      user: finduser,
    },
  });
});

export const getall = asynchandler(async (req, res, next) => {
  const id = req.user._id;

  const finduser = await User.findOne({ _id: id }).populate('courses');

  const courses = finduser.courses;

  res.status(201).json({
    message: 'All course fetch successfully',
    data: {
      courses,
    },
  });
});

export const updatecourse = asynchandler(async (req, res, next) => {
  // console.log(req.params);
  const course_id = req.params.id;

  // console.log(course_id);

  const findcourse = await Course.findOne({ _id: course_id });

  if (!findcourse) {
    return next(new ApiError("Can't find the course try again", 320));
  }

  const { name, coursecode, credit } = req.body;

  if (
    (!coursecode && !name && !credit) ||
    (name === findcourse.name &&
      coursecode === findcourse.coursecode &&
      credit === findcourse.credit)
  ) {
    return next(new ApiError('PLease Enter the field for update', 320));
  }

  const updated = await Course.findOneAndUpdate(
    { _id: course_id },
    {
      name,
      coursecode,
      credit,
    },
    { new: true }
  );
  // console.log(updated);
  res.status(201).json({
    message: 'Course updated Succesfully',
    data: {
      updatedcourse: updated,
    },
  });
});

export const delcourse = asynchandler(async (req, res, next) => {
  console.log(req)
  const course_id = req.params.id;

  const findcourse = await Course.findOne({ _id: course_id });

  if (!findcourse) {
    return next(new ApiError('Can,t delete the course try again', 302));
  }
  const taskIds = findcourse.task;
  await Task.deleteMany({ _id: { $in: taskIds } });
  findcourse.task = [];

  const coursedeletd = await Course.findOneAndDelete({ _id: course_id });

  res.status(201).json({
    message: 'Delete Succesfully',
  });
});

export const deleteall = asynchandler(async (req, res, next) => {
  const id = req.user._id;
  // console.log(req.user);
  const finduser = await User.findOne({ _id: id });

  // console.log(finduser);

  if (!finduser) {
    return next(new ApiError("Can't delete all the subject", 302));
  }
  const allcourses = finduser.courses;

  const taskIds = allcourses.flatMap((course) => course.task);

  await Task.deleteMany({ _id: { $in: taskIds } });

  await Course.deleteMany({ user: finduser._id });

  finduser.courses = [];

  await finduser.save();

  res.status(200).json({
    message: 'sucess',
    data: {
      finduser,
    },
  });
});
