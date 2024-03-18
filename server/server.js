const express = require('express');
const cors = require('cors'); // Import the cors package
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Enable CORS for specific origin
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
