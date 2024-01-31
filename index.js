const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 5000;

// Sample database
const projectsData = require('./data-store');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Welcome message for the root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Server!',
  });
});

// GET request to fetch all projects
app.get('/projects', (req, res) => {
  res.status(200).json({
    projects: projectsData,
  });
});

// POST request to add a new project
app.post('/projects', (req, res) => {
  const { id, name } = req.body;

  // Assuming id and name are required in the request body
  if (!id || !name) {
    return res.status(400).json({
      error: 'Both id and name are required in the request body.',
    });
  }

  // Check if a project with the same id already exists
  if (projectsData.some((project) => project.id === id)) {
    return res.status(400).json({
      error: 'A project with the same id already exists.',
    });
  }

  // Add the new project to the database
  projectsData.push({ id, name });

  res.status(201).json({
    message: 'Project added successfully.',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
