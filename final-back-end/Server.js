const express  = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB database connection established successfully');
})
.catch(err => {
    console.error('MongoDB connection error: ', err);
});
 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});