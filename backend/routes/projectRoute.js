const express = require('express');
const Projects = require('../models/Projects');
const router = express.Router();
const multer = require('multer');
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
    res.json("API is working!");
});

router.get("/projects", async (req, res) => {
    try{
        const projects = await Projects.find();
        res.json({success: true, projects});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/index", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; 
        const limit = 10; 
        const skip = (page - 1) * limit;
        const totalProjects = await Projects.countDocuments(); 
        const projects = await Projects.find().skip(skip).limit(limit);
        res.render("index", { 
            title: "Home", 
            projects,
            currentPage: page,
            totalPages: Math.ceil(totalProjects / limit)
        });
    } catch (error) {
        res.render("index", { title: "Home", error: error.message });
    }
});

// Add Project Route
router.get("/addProject", (req, res) => {
    res.render("addProject", { title: "Add Project" });
});

const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, 'public/assets/img');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/submit", upload.single('image'), async (req, res) => {
    try {
        const project = new Projects({
            title: req.body.title,
            github: req.body.github,
            project: req.body.project,
            description: req.body.description,
            stack: req.body.stack || [],
            image: req.file ? `/assets/img/${req.file.filename}` : null
        });

        await project.save();

        // Set success flash message and redirect
        req.flash("success", "New Project Added!");
        res.redirect("/api/addProject");

    } catch (error) {
        // Send error response to frontend
        res.status(500).json({
            success: false,
            message: "Error Saving Project: " + error.message,
        });
    }
});

router.post("/projects/:id/edit", upload.single('image'), async(req, res) => {
    try{
        console.log("Received form data:", req.body);
        console.log("Uploaded file:", req.file);
        const { title, github, project, description, stack, existingImage } = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : existingImage;
        await Projects.findByIdAndUpdate(req.params.id, {
            title, 
            github, 
            project, 
            description, 
            stack, 
            image: imagePath 
        }, { new: true });

        
        req.flash("success", "Project Updated Successfully!");
        res.redirect("/api/index");
    } catch (error) {
        req.flash("error", "Error Editing Project: " + error.message);
        res.redirect("/api/index");
    }
});

router.post("/projects/:id/delete", async (req, res) => {
    try {
        // Find the project by ID
        const project = await Projects.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        // Delete the image file if it exists
        if (project.image) {
            const imagePath = path.join(__dirname, "../", project.image); // ✅ Adjust path correctly
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath); // ✅ Delete file
            }
        }

        // Delete the project from the database
        await Projects.findByIdAndDelete(req.params.id);

        req.flash("success", "Project Deleted Successfully!");
        res.redirect("/api/index");
    } catch (error) {
        req.flash("error", "Error Deleting Project: " + error.message);
        res.redirect("/api/index");
    }
});

router.get("/editProject/:id/edit", async(req, res) => {
    try{
        const project = await Projects.findById(req.params.id);
        res.render("editProject", { title: "Edit Project", project });
    } catch (error) {
        req.flash("error", "Error Editing Project: " + error.message);
        res.redirect("/api/index");
    }
});



module.exports = router;


module.exports = router;
