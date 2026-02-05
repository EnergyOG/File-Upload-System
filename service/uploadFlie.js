import multer from '../middleware/multer.js';

const uploadFile = async (req, res) => {
  try {
    await multer.upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(500).json({ message: 'File upload failed', error: err.message });
      }
      return res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    });
  } catch (error) {}
};

export { uploadFile };
