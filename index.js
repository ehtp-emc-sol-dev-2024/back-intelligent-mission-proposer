const express = require('express');
const app = express();

app.use(express.json()); // Parse JSON request body

// Define missions
const missions = [
  { id: 1, name: 'Data Analysis Project for AXA-45AZ', requiredSkills: ['Python', 'SQL', 'Excel', 'Statistics', 'Data Modeling'] },
  { id: 2, name: 'Web Development for Google-12JK', requiredSkills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'] },
  { id: 3, name: 'Cloud Migration for Microsoft-09YU', requiredSkills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Linux'] },
  { id: 4, name: 'Mobile App Development for Facebook-87OP', requiredSkills: ['Java', 'Kotlin', 'Android', 'iOS', 'Swift'] },
  { id: 5, name: 'DevOps Pipeline Setup for Amazon-22WE', requiredSkills: ['Jenkins', 'Docker', 'Git', 'CI/CD', 'Linux'] },
  { id: 6, name: 'Machine Learning Project for IBM-34PL', requiredSkills: ['Python', 'TensorFlow', 'Pandas', 'Deep Learning', 'Statistics'] },
  { id: 7, name: 'Database Optimization for Oracle-89IU', requiredSkills: ['SQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'Database Design'] },
  { id: 8, name: 'Cybersecurity Audit for Cisco-77QM', requiredSkills: ['Penetration Testing', 'Firewalls', 'Security Auditing', 'Linux', 'Networking'] },
  { id: 9, name: 'Game Development for Ubisoft-16TR', requiredSkills: ['Unity', 'C#', '3D Modeling', 'Animation', 'Game Design'] },
  { id: 10, name: 'eCommerce Platform for Shopify-56ZX', requiredSkills: ['Shopify', 'JavaScript', 'React', 'Node.js', 'Payment Gateways'] }
];

// GET route to return all available missions
app.get('/missions', (req, res) => {
  res.json(missions);
});

// POST route to suggest missions based on skills
app.post('/suggest-missions', (req, res) => {
  const { skills } = req.body;
  if (!skills || !Array.isArray(skills)) {
    return res.status(400).send('Invalid request. Please provide a list of skills.');
  }

  const matchingMissions = missions.filter(mission => {
    const matchedSkills = mission.requiredSkills.filter(skill => skills.includes(skill));
    return matchedSkills.length >= 2; // Match missions with at least 2 skills
  });

  res.json(matchingMissions);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
