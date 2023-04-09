const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
//app.use(cors());
app.use(
    cors({
      origin: 'http://localhost:3001', // Replace with your client's domain
    })
  );
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'info',
  port: '3306',
  password: 'info',
  database: 'kiosk',
});

app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM usr', (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while querying the database.' });
      } else {
        res.json(results);
      }
    });
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });