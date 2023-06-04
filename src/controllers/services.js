const Service = require('../models/Service');


const title = (value) => {
    return { title: value }
}

const servcieIndex = (req, res) => {
    Service.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('services/index', { title: 'All Projects', projects: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const serviceCreateGet = (req, res) => {
    res.render('services/create', title('Create a new project'));
}

const serviceCreatePost = (req, res) => {
    const projects = new Service(req.body);

    projects.save()
        .then((result) => {
            res.redirect('/services');
        })
        .catch((err) => {
            console.log(err);
        });
}


module.exports = { projectIndex: servcieIndex, projectsCreateGet: serviceCreateGet, projectsCreatePost: serviceCreatePost }