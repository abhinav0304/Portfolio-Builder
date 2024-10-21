const express = require('express');
const multer = require('multer');
const { extractData } = require('./extractData');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

// Route to handle CV upload and extract data
router.post('/upload-cv', upload.single('cv'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileType = req.file.mimetype;

    // Call the extractData function with the file path and type
    const extractedData = await extractData(filePath, fileType);

    // Send the extracted data as a response
    res.json({ success: true, data: extractedData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;