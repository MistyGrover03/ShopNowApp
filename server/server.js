// Express.JS
const express = require('express');
const cors = require('cors');
const mssql = require('mssql');
const path = require('path');  

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Database configuration
const config = {
  user: 'adminuser',
  password: 'admin@123',
  server: 'sabhyaserver.database.windows.net',
  database: 'sabhyadb',
  options: {
    encrypt: true,
  },
};

app.post('/login', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //Database connection
    const pool = await mssql.connect(config);

    const checkUserQuery = `SELECT * FROM Users WHERE email = @email`;
    const checkUserResult = await pool.request().input('email', mssql.VarChar, email).query(checkUserQuery);

    if (checkUserResult.recordset.length > 0) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    const insertUserQuery = `
      INSERT INTO Users (name, email, password)
      VALUES (@name, @email, @password)
    `;
    await pool
      .request()
      .input('name', mssql.VarChar, name)
      .input('email', mssql.VarChar, email)
      .input('password', mssql.VarChar, password)
      .query(insertUserQuery);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle other routes and send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

