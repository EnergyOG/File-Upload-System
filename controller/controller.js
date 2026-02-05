import cloudinary from '../utils/cloudinary.js';

const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error('No image file uploaded');
      error.statusCode = 400;
      throw error;
    }

    // Convert buffer to base64
    const fileBase64 = req.file.buffer.toString('base64');
    const fileData = `data:${req.file.mimetype};base64,${fileBase64}`;

    const result = await cloudinary.v2.uploader.upload(fileData, {
      folder: 'uploads',
    });

    res.status(201).json({
      success: true,
      message: 'Image uploaded to Cloudinary',
      data: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default uploadImage;
