import bcrypt from 'bcrypt';
import User from '../models/usermodel.js';

// Controller for updating user details
export const update = async (req, res) => {
  try {
    const {_id, name, email, password } = req.body;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      user.password = hashedPassword;
    }
    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller for handling forgot password requests
export const forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    //passowrd-reset logic

    res.status(200).json({ message: 'Password reset instructions sent to your email' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller for logging out the user
export const logout = (req, res) => {
  try {
    res.clearCookie('acesstoken');
    res.clearCookie('refreshtoken');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller to get the current user details
export const getme = (req, res) => {
  try {
    const user = req.user; // from middleware  'auth middleware':protected
    if (!user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Controller for deleting a user by ID
export const deleteme = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
