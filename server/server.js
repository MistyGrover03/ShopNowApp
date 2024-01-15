// server.js
const express = require('express');
const cors = require('cors');
const mssql = require('mssql');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const config = {
  user: 'adminuser',
  password: 'admin@123',
  server: 'sqlserver0103.database.windows.net',
  database: 'shopnowdb',
  options: {
    encrypt: true,
  },
};

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const pool = await mssql.connect(config);

    // Check if the user with the provided email already exists
    const checkUserQuery = `SELECT * FROM Users WHERE email = @email`;
    const checkUserResult = await pool.request().input('email', mssql.VarChar, email).query(checkUserQuery);

    if (checkUserResult.recordset.length > 0) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Insert the new user into the Users table
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
