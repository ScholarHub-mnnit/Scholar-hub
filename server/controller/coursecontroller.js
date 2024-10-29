import Course from '../models/coursemodel.js';
import User from '../models/usermodel.js';
import ApiError from '../utils/apierror.js';
import asynchandler from '../utils/asynchandler.js';

export const addcourse = asynchandler(async (req, res, next) => {
  console.log(req.user);
  const id = req.user._id;
  const { name, coursecode, credit } = req.body;

  if (!name || !coursecode || !credit) {
    return next(new ApiError('Please Enter all the feild', 300));
  }

  const newcourse = await Course.create({ name, coursecode, credit });

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
// export const updatecourse = asynchandler();
// export const getall = asynchandler();
// export const delcourse = asynchandler();
// export const deleteall = asynchandler();
