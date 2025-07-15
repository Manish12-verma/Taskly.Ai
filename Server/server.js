import express from 'express';
import  'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());   // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



