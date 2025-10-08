const express = require('express');
require('dotenv').config();

const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

const app = express();
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

app.get('/', (_, res) => res.send('Welcome to the Student-Course API '));

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
