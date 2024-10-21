import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the User schema
    ref: 'User',  // Refers to the User model
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  about: {
    type: String,
    default: ''
  },
  birthday: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  age: {
    type: String,
    default: ''
  },
  degree: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true
  },
  freelance: {
    type: String,
    default: ''
  },
  education: [
    {
      degree: {
        type: String,
        default: ''
      },
      institution: {
        type: String,
        default: ''
      },
      duration: {
        type: String,
        default: ''
      }
    }
  ],
  projects: [
    {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      year: {
        type: String,
        default: ''
      }
    }
  ],
  internships: [
    {
      title: {
        type: String,
        default: ''
      },
      company: {
        type: String,
        default: ''
      },
      duration: {
        type: String,
        default: ''
      },
      responsibilities: {
        type: String,
        default: ''
      }
    }
  ]
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
