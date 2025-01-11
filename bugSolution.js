const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).json({ error: 'User not found' }); // More informative response
  }
  res.json(userData);
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log complete error details for debugging
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' }); // Send informative error to the client
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});