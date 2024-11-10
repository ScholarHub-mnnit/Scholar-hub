import User from '../models/usermodel';
import ApiError from '../utils/apierror';
import asynchandler from '../utils/asynchandler';

const deletetheuser = asynchandler(async (id) => {
  await User.findByIdAndDelete(id);
});

export const logout = asynchandler(async (req, res, next) => {
  const options = {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
  };
  res
    .cookie('acesstoken', 'loggedout', options)
    .res.cookie('refreshtoken', 'loggedout', options);
  res.status(200).json({ status: 'success' });
});

export const update = asynchandler(async (req, res, next) => {
  const { name, email, coolege, year, branch } = req.body;
  const id = req.user._id;
  const finduser = await User.findById(id);
  if (!finduser) {
    return next(new ApiError('User not found', 403));
  }
  const updateduser = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      coolege,
      year,
      branch,
    },
    { new: true }
  );
  res.status(201).json({
    message: 'User Updated Sucessfully',
    data: { updateduser },
  });
});

export const getme = asynchandler(async (req, res, next) => {
  const id = req.user._id;
  const getuser = await User.findById(id);
  if (!getuser) {
    return next(new ApiError('User not found', 403));
  }
  res.status(201).json({
    message: 'User fetched Successfully',
    data: {
      getuser,
    },
  });
});

export const deleteme = asynchandler(async (req, res, next) => {
  const id = req.user._id;
  const finduser = await User.findByIdAndDelete(id);
  if (!finduser) {
    return next(new ApiError('Can,t deleted', 403));
  }
  finduser.active = false;
  logout();
  setTimeout(deletetheuser(finduser._id), 30 * 24 * 60 * 60 * 1000);
});

export const getall = asynchandler(async (req, res, next) => {});
