import express from "express";
import Admin from "../../model/Admin.js";
import multer from "multer";

const router = express.Router();

async function ensureAdminExists() {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      // Create a new Admin document with empty fields
      const newAdmin = new Admin();
      await newAdmin.save();
    }
  } catch (error) {
    console.error("Error ensuring admin existence:", error);
  }
}
ensureAdminExists();

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

///////////////// Home /////////////////////////////////

// Define the route for uploading a PDF
router.post("/home/upload/:id", upload.single("pdf"), async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Read the uploaded PDF file
    const pdfData = req.file.buffer;
    const contentType = req.file.mimetype;

    // Update the Admin document with the PDF data
    admin.pdf = {
      data: pdfData,
      contentType: contentType,
    };

    // Save the updated Admin document
    await admin.save();

    res.status(201).json({ message: "PDF uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/home/upload/:id", upload.single("pdf"), async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Read the uploaded PDF file
    const pdfData = req.file.buffer;
    const contentType = req.file.mimetype;

    // Update the Admin document with the PDF data
    admin.pdf = {
      data: pdfData,
      contentType: contentType,
    };

    // Save the updated Admin document
    await admin.save();

    res.status(200).json({ message: "PDF updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/home/upload/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Remove the PDF data from the Admin document
    admin.pdf = undefined;

    // Save the updated Admin document
    await admin.save();

    res.status(200).json({ message: "PDF deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/home/upload/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve the Admin document
    const admin = await Admin.findById(id);
    if (!admin || !admin.pdf) {
      return res.status(404).json({ message: "PDF not found" });
    }

    // Send the PDF data in the response
    const { data, contentType } = admin.pdf;
    res.set("Content-Type", contentType);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//////////////////// About ///////////////////////////////

router.post("/about/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Create a new About object
    const newAbout = {
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      description: req.body.description,
    };

    // Push the new About object to the admin's about array
    admin.about.push(newAbout);

    // Save the updated Admin document
    await admin.save();

    // Send a success response
    res.status(201).json({ message: "About information saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.get("/about/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Check if the Admin document exists
//     const admin = await Admin.findById(id);
//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found" });
//     }

//     // Check if about information exists in the Admin document
//     if (!admin.about) {
//       return res.status(404).json({ message: "About information not found" });
//     }

//     // Send the about information in the response
//     res.status(200).json(admin.about);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.put("/about/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check if a file was uploaded with the request
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    // Update the About object with new data
    admin.about = {
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      description: req.body.description,
    };

    // Save the updated Admin document
    await admin.save();

    // Send a success response
    res.status(200).json({ message: "About information updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/about/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Remove the About object from the admin's about array
    admin.about = undefined;

    // Save the updated Admin document
    await admin.save();

    // Send a success response
    res.status(200).json({ message: "About information deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/////////////////////// Social media ////////////////////////

router.post("/socialmedia/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { projectname, githublink, livelink } = req.body;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Create a new social media object
    const newSocialMedia = {
      projectname,
      githublink,
      livelink,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    };

    console.log(newSocialMedia);

    // Push the new social media object to the admin's socialMedia array
    admin.socialMedia.push(newSocialMedia);

    // Save the updated Admin document
    // await admin.save();

    res.status(201).json({ message: "Social media entry added successfully" });
  } catch (error) {
    console.error("Error adding social media entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/socialmedia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { projectname, githublink, livelink, image } = req.body;

    // Check if the Admin document exists
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    console.log(admin.socialMedia);

    // Update the social media object with new data
    admin.socialMedia.projectname = projectname;
    admin.socialMedia.githublink = githublink;
    admin.socialMedia.livelink = livelink;
    admin.socialMedia.image = image;

    // Save the updated Admin document
    await admin.save();

    res
      .status(200)
      .json({ message: "Social media entry updated successfully" });
  } catch (error) {
    console.error("Error updating social media entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

///////////////////////// Experince //////////////////////////////////

// POST endpoint to create a new experience entry
router.post("/experience", async (req, res) => {
  try {
    const { year, companyname, description } = req.body;
    const newExperience = { year, companyname, description };
    const admin = await Admin.findById(req.params.homeId);
    admin.experiences.push(newExperience);
    await admin.save();
    res.status(201).json(admin.experiences);
  } catch (error) {
    console.error("Error creating experience entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET endpoint to retrieve all experience entries
router.get("/get/experience", async (req, res) => {
  try {
    const admins = await Admin.find();
    const experiences = admins.map((admin) => admin.experiences).flat();
    res.status(200).json(experiences);
  } catch (error) {
    console.error("Error retrieving experience entries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT endpoint to update a specific experience entry by ID
router.put("/update/experience/:id", async (req, res) => {
  try {
    const { year, companyname, description } = req.body;
    const updatedExperience = { year, companyname, description };
    const admin = await Admin.findOneAndUpdate(
      { "experiences._id": req.params.id },
      { $set: { "experiences.$": updatedExperience } },
      { new: true }
    );
    if (!admin) {
      return res.status(404).json({ error: "Experience entry not found" });
    }
    res.status(200).json(updatedExperience);
  } catch (error) {
    console.error("Error updating experience entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE endpoint to delete a specific experience entry by ID
router.delete("/delete/experience/:id", async (req, res) => {
  try {
    const admin = await Admin.findOneAndUpdate(
      { "experiences._id": req.params.id },
      { $pull: { experiences: { _id: req.params.id } } },
      { new: true }
    );
    if (!admin) {
      return res.status(404).json({ error: "Experience entry not found" });
    }
    res.status(200).json({ message: "Experience entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting experience entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/////////////////////Project Api's//////////////////////////////

// POST endpoint to upload a new project with an image
router.post("/project", upload.single("image"), async (req, res) => {
  try {
    const { projectname, githublink, livelink } = req.body;
    const image = req.file.path; // Save the file path
    const newProject = { projectname, githublink, livelink, image };

    // Add the new project to the Admin's projects array
    const admin = await Admin.findById(req.params.homeId);
    admin.projects.push(newProject);
    await admin.save();

    res.status(201).json(admin.projects);
  } catch (error) {
    console.error("Error creating project entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT endpoint to update a project with an image
router.put("/update/project/:id", upload.single("image"), async (req, res) => {
  try {
    const { projectname, githublink, livelink } = req.body;
    const image = req.file.path; // Save the file path
    const updatedProject = { projectname, githublink, livelink, image };

    const admin = await Admin.findOneAndUpdate(
      { "projects._id": req.params.id },
      { $set: { "projects.$": updatedProject } },
      { new: true }
    );
    if (!admin) {
      return res.status(404).json({ error: "Project entry not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error updating project entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// GET endpoint to retrieve all project entries
router.get("/get/project", async (req, res) => {
  try {
    const admins = await Admin.find();
    const projects = admins.map((admin) => admin.projects).flat();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error retrieving project entries:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE endpoint to delete a specific project entry by ID
router.delete("/delete/project/:id", async (req, res) => {
  try {
    const admin = await Admin.findOneAndUpdate(
      { "projects._id": req.params.id },
      { $pull: { projects: { _id: req.params.id } } },
      { new: true }
    );
    if (!admin) {
      return res.status(404).json({ error: "Project entry not found" });
    }
    res.status(200).json({ message: "Project entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting project entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
