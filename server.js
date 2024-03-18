const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/files');
const path = require('path');

const app = express();
const PORT = 5000;
// Making a Database connection
connectDB();
app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');


// Routes
app.use('/api/files',routes);
app.use('/files', require('./routes/show'));
app.use('/files/download',require('./routes/download'));


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})