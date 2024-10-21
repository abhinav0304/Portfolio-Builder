import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './updates.css';
import { useSelector } from 'react-redux';

const Section = ({ label, items, handleAdd, handleChange, placeholders }) => (
  <>
    <Form.Label>{label}</Form.Label>
    {items.map((item, index) => (
      <div key={index} className="mb-3">
        {Object.keys(placeholders).map((key) => (
          <Form.Control
            key={key}
            type="text"
            name={`${label}-${index}-${key}`}
            value={item[key]}
            placeholder={placeholders[key]}
            onChange={(e) => handleChange(e, index)}
            className="mb-2"
          />
        ))}
      </div>
    ))}
    <Button variant="secondary" onClick={handleAdd}>
      Add {label}
    </Button>
  </>
  
);

const Updates = () => {
  const user = useSelector((state) => state.auth.user);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [profile, setProfile] = useState({
    user_id:user._id,
    name: 'Brandon Johnson',
    role: 'Developer',
    about: '',
    birthday: '',
    website: '',
    phone: '',
    city: '',
    age: '',
    degree: '',
    email: '',
    freelance: '',
    education: [],
    projects: [],
    internships: [],
  });

  const [profileError, setProfileError] = useState('');
  const [profileSuccess, setProfileSuccess] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('file', file);
    console.log(file)
    console.log(formData)
    try {
      await axios.post('http://localhost:5000/api/res', formData);
      
      setSuccess('Resume updated successfully!');
    } catch {
      setError('Error uploading the resume. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleProfileChange = (e, sectionIndex = null) => {
    const { name, value } = e.target;
    if (sectionIndex !== null) {
      const [section, index, key] = name.split('-');
      console.log(index)
      setProfile((prevProfile) => {
        const updatedSection = [...prevProfile[section]];
        updatedSection[sectionIndex] = {
          ...updatedSection[sectionIndex],
          [key]: value,
        };
        return { ...prevProfile, [section]: updatedSection };
      });
    } else {
      setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    }
  };

  const handleAddItem = (section) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [section]: [...prevProfile[section], {}],
    }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileError('');
    setProfileSuccess('');

    try {
      await axios.post('/api/update', profile);
      setProfileSuccess('Profile updated successfully!');
    } catch {
      setProfileError('Error updating the profile. Please try again.');
    }
  };

  return (
    <Container className="updates-page">
      {/* Resume Upload Section */}
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center">Update Your Resume</h1>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select CV/Resume (PDF/Word)</Form.Label>
              <Form.Control type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            </Form.Group>
            <Button variant="primary" onClick={handleUpload} disabled={uploading}>
              {uploading ? 'Uploading...' : 'Upload Resume'}
            </Button>
          </Form>
          {success && <Alert variant="success" className="mt-3">{success}</Alert>}
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Col>
      </Row>

      {/* Profile Update Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h1 className="text-center">Update Your Profile</h1>
          <Form onSubmit={handleProfileSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={profile.name} onChange={handleProfileChange} />
            </Form.Group>
            {/* Other Profile Fields */}
            {/* Education Section */}
            <Section
              label="education"
              items={profile.education}
              handleAdd={() => handleAddItem('education')}
              handleChange={handleProfileChange}
              placeholders={{ degree: 'Degree', institution: 'Institution', duration: 'Duration' }}
            />
            {/* Projects Section */}
            <Section
              label="projects"
              items={profile.projects}
              handleAdd={() => handleAddItem('projects')}
              handleChange={handleProfileChange}
              placeholders={{ title: 'Project Title', description: 'Description', year: 'Year' }}
            />
            {/* Internships Section */}
            <Section
              label="internships"
              items={profile.internships}
              handleAdd={() => handleAddItem('internships')}
              handleChange={handleProfileChange}
              placeholders={{ title: 'Title', company: 'Company', duration: 'Duration', responsibilities: 'Responsibilities' }}
            />
            <Button variant="primary" type="submit">Update Profile</Button>
          </Form>
          {profileSuccess && <Alert variant="success" className="mt-3">{profileSuccess}</Alert>}
          {profileError && <Alert variant="danger" className="mt-3">{profileError}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default Updates;
