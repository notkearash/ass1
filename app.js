const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Constants
const app = express();
const title = (value) => {
    return { title: value }
}

// Database Connection
const dbURI = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(dbURI);
const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => console.log('connected to db'));

app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));


// Routes

app.get('/', (req, res) => {
    res.render('home', title('Home'))
});

app.get('/about', (req, res) => {
    res.render('about', title('About'));
});

const blogRoutes = require('./src/routes/blogRoutes');
const projectRoutes = require('./src/routes/projects.routes');
const serviceRoutes = require('./src/routes/services.routes');
const contactRoutes = require('./src/routes/contacts.routes');

app.use('/projects', projectRoutes);
app.use('/services', serviceRoutes);
app.use('/contact', contactRoutes);
app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', title('404'));
});

app.listen(8000, () => console.log('listening on port 8000'));