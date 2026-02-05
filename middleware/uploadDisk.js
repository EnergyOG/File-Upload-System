import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Ensure the uploads folder exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // save files in /uploads
  },
  filename: (req, file, cb) => {
    // Add timestamp to avoid filename collisions
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// File filter: only allow images (jpeg, png) or other types if needed
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // add more if needed
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error('Invalid file type. Only JPEG, PNG, PDF allowed.');
    error.statusCode = 400;
    return cb(error, false);
  }
  cb(null, true);
};

// Export the configured multer instance
const uploadDisk = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit (adjust as needed)
  fileFilter,
});

export default uploadDisk;
