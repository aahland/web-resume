import express from 'express';
const app = express();
import path from 'express';
const port = process.env.PORT || 5000;
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () =>
  console.log(`Server is running on: http://localhost:${port}`));