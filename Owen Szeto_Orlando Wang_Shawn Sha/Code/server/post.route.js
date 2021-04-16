const express = require('express');
const postRoutes = express.Router();

// Require Post model in routes module
let Post = require('./post.model');

// Defined store route
postRoutes.route('/add').post(function (req, res) {
    let post = new Post(req.body);
    post.save()
        .then(() => {
            res.status(200).json({ 'business': 'added successfully' });
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
    Post.find(function (err, posts) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(posts);
        }
    });
});

// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Post.findById(id, function (err, post) {
        if (err) {
            res.json(err);
        }
        res.json(post);
    });
});

postRoutes.route('/detail/:id').get(function (req, res) {
    let id = req.params.id;
    Post.findById(id, function (err, post) {
        if (err) {
            res.json(err);
        }
        res.json(post);
    });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (!post)
            res.status(404).send("data is not found");
        else {
            post.title = req.body.title;
            post.ImageURL = req.body.ImageURL;
            post.Estate = req.body.Estate;
            post.Beedrooms = req.body.Bedrooms;
            post.GrossArea = req.body.GrossArea;
            post.ExpectedTenants = req.body.ExpectedTenants;
            post.Updated = Date.now();
            post.Highlighted = req.body.Highlighted;
            
            post.save().then(() => {
                res.json('Update complete');
            })
                .catch(() => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});


postRoutes.route('/home').get(function (req, res) {
    const posts = Post.find({'Highlighted' : true });
    posts.sort({Created: -1});
    posts.limit(4);
    posts.exec(function (err, posts) {
        if (err) {
            res.json(err);
        } else {
            res.json(posts);
        }
    });
});

module.exports = postRoutes;