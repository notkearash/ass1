const Project = require('../models/Project');


const title = (value) => {
    return { title: value }
}

const projectIndex = (req, res) => {
    Project.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('projects/index', { title: 'All Projects', projects: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const projectDetails = (req, res) => {
    const id = req.params.id;
    Project.findById(id)
        .then(result => {
            res.redirect(result.link);
        })
        .catch(err => {
            res.status(404).render('404', title('404'));
        })
}

const projectsCreateGet = (req, res) => {
    res.render('projects/create', title('Create a new project'));
}

const projectsCreatePost = (req, res) => {
    const projects = new Project(req.body);

    projects.save()
        .then((result) => {
            res.redirect('/projects');
        })
        .catch((err) => {
            console.log(err);
        });
}


module.exports = { projectIndex, projectDetails, projectsCreateGet, projectsCreatePost }