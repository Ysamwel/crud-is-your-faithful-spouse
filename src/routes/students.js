const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create
router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const [result] = await pool.query(
      'INSERT INTO students (first_name, last_name, email) VALUES (?, ?, ?)',
      [first_name, last_name, email]
    );
    res.status(201).json({ student_id: result.insertId, message: 'Student added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all
router.get('/', async (_, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read one
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students WHERE student_id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ message: 'Student not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const [result] = await pool.query(
      'UPDATE students SET first_name=?, last_name=?, email=? WHERE student_id=?',
      [first_name, last_name, email, req.params.id]
    );
    res.json({ affectedRows: result.affectedRows, message: 'Student updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM students WHERE student_id=?', [req.params.id]);
    res.json({ affectedRows: result.affectedRows, message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
