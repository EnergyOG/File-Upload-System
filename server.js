import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

const routing = (req, res) => {
  res.status(200).send('Testing...');
};

app.get('/', routing);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});