const express = require('express');
const connection=require("./connection/db")
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const repoRoutes = require('./routes/repoRoutes');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors')
const app = express();
app.use(cors());
// Parse incoming requests
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/repos', repoRoutes);
app.use('/files', fileRoutes);

app.listen(process.env.port, async () => {
  await connection;
  console.log("Server started");
});
