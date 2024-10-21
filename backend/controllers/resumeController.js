import Profile from '../models/resumeModel.js';

export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.user._id, req.body, { new: true });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
