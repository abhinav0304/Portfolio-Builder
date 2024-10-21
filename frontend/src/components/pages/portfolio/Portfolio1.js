import React from 'react';
import './portfolio1.css';

function Portfolio1() {
  const {
    name,
    role,
    about,
    birthday,
    website,
    phone,
    city,
    age,
    degree,
    email,
    freelance,
    stats,
    skills,
    experience,
  } = {
    name: 'Brandon Johnson',
    role: 'Developer',
    about: 'Magnam dolores commodi suscipit...',
    birthday: '1 May 1995',
    website: 'www.example.com',
    phone: '+123 456 7890',
    city: 'New York, USA',
    age: 30,
    degree: 'Master',
    email: 'email@example.com',
    freelance: 'Available',
    stats: [
      { value: '232', label: 'Happy Clients' },
      { value: '521', label: 'Projects' },
      { value: '1463', label: 'Hours Of Support' },
      { value: '15', label: 'Hard Workers' },
    ],
    skills: {
      HTML: '100%',
      CSS: '90%',
      JavaScript: '75%',
      PHP: '80%',
      WordPress: '90%',
      Photoshop: '55%',
    },
    experience: [
      {
        role: 'Senior Graphic Design Specialist',
        duration: '2019 - Present',
        company: 'Experion, New York, NY',
        responsibilities: [
          'Lead in the design, development...',
          'Delegate tasks to the design team...',
          'Supervise the assessment...',
        ],
      },
      {
        role: 'Graphic Design Specialist',
        duration: '2017 - 2018',
        company: 'Stepping Stone Advertising, New York, NY',
        responsibilities: [
          'Developed numerous marketing programs...',
          'Managed up to 5 projects at a time...',
          'Created design presentations...',
        ],
      },
    ],
  };

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="portfolioheader">
        <h1>{name}</h1>
        <h2>I'm {role}</h2>
      </header>

      {/* About Section */}
      <section className="portfolio-section" id="about">
        <h3>About</h3>
        <p>{about}</p>
        <div className="portfolio-about-grid">
          <div className="portfolio-about-details">
            <p>
              <strong>Birthday:</strong> {birthday}
            </p>
            <p>
              <strong>Website:</strong> <a href={`https://${website}`}>{website}</a>
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>City:</strong> {city}
            </p>
          </div>
          <div className="portfolio-about-details">
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Degree:</strong> {degree}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Freelance:</strong> {freelance}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-section" id="stats">
        <h3>Stats</h3>
        <div className="portfolio-stats-grid">
          {stats?.map((stat, index) => (
            <div key={index} className="portfolio-stat">
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-section" id="skills">
        <h3>Skills</h3>
        <div className="portfolio-skills-grid">
          {skills &&
            Object.entries(skills).map(([skill, value], index) => (
              <div key={index} className="portfolio-skill">
                <label>{skill}</label>
                <div className="portfolio-progress-bar">
                  <div className="portfolio-progress" style={{ width: value }}></div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="portfolio-section" id="experience">
        <h3>Professional Experience</h3>
        {experience?.map((job, index) => (
          <div key={index} className="portfolio-experience-item">
            <h4>{job.role}</h4>
            <p>{job.duration}</p>
            <p>{job.company}</p>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio1;
