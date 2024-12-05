const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data here...  // BUG: Missing error handling. If req.body is invalid or missing, it will crash
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));