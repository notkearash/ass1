const Contact = require('../models/Contact');


const title = (value) => {
    return { title: value }
}

const contactSuccess = (req, res) => res.render('contact/index', title('Success'));

const projectsCreateGet = (req, res) => {
    res.render('contact/create', title('Contact us'));
}

const projectsCreatePost = (req, res) => {
    const projects = new Contact(req.body);

    projects.save()
        .then((result) => {
            res.redirect('/contact/success');
        })
        .catch((err) => {
            console.log(err);
        });
}


module.exports = { projectsCreateGet, projectsCreatePost, contactSuccess }