const express = require('express');
const app = express();
const middleware = require('./middleware');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('./database');

const PORT = 5000;
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Routes
const authRoute = require('./routes/authRoutes');
app.use('/api/user_authentication', authRoute)
const userRegistrationRoute = require('./routes/userRegistration');
app.use('/api/user_registration', userRegistrationRoute);

const server = app.listen(PORT, () => {
    console.log(`Server is now listening on PORT ${PORT}.`)
});

app.get('/api/user_authentication', (req, res) => {
    res.json({name: "aaron", age: "28"});
})