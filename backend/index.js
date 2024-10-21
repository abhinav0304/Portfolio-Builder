import express from 'express';
import connectDB from './config/Db.js';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'
import multer from 'multer'
import path from 'path'
import fs from 'fs'


dotenv.config()
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import cors from 'cors'


connectDB()
const app=express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // URL of your frontend
  }));
app.use('/api/users',userRoutes);
app.use('/api/update',resumeRoutes);

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Append timestamp to avoid filename conflicts
  }
});

const upload = multer({ storage });

// Create 'uploads' directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Route for file upload
app.post('/api/res', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    // File upload successful
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    console.log(file)
  } catch (error) {
    res.status(500).json({ message: 'Error uploading the file', error });
  }
});

app.get('/',(req,res)=>{
    res.send("API is running...")
})


app.use(notFound);
app.use(errorHandler);
app.listen(5000,console.log("server is running at http://localhost:5000/"))