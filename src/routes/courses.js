const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create
router.post('/', async (req, res) => {
  try {
    const { name, code, credits } = req.body;
    const [result] = await pool.query(
      'INSERT INTO courses (name, code, credits) VALUES (?, ?, ?)',
      [name, code, credits || 3]
    );
    res.status(201).json({ course_id: result.insertId, message: 'Course added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all
router.get('/', async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM courses');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM courses WHERE course_id=?', [req.params.id]);
    res.json({ affectedRows: result.affectedRows, message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
