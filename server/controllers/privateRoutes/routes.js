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

///////////////////////// Home /////////////////////////////////

// Define the route for uploading a PDF
router.post("/home/upload", upload.single("pdf"), async (req, res) => {
  try {
    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check if PDF file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required" });
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

router.put("/home/upload", upload.single("pdf"), async (req, res) => {
  try {
    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
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

router.delete("/home/upload", async (req, res) => {
  try {
    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
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

router.get("/home/upload", async (req, res) => {
  try {
    // Retrieve the Admin document (since you only have one)
    const admin = await Admin.findOne();
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

///////////////////////// About ///////////////////////////////

router.post("/about", upload.single("image"), async (req, res) => {
  try {
    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
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

router.put("/about", upload.single("image"), async (req, res) => {
  try {
    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
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

router.delete("/about", async (req, res) => {
  try {
    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
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

//////////////////////// Social media ////////////////////////

router.post("/socialmedia", async (req, res) => {
  try {
    const {
      whatsappnumber,
      instagramlink,
      githublink,
      twiterlink,
      linkedinlink,
    } = req.body;

    // Check if the Admin document exists (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Create a new social media object
    const newSocialMedia = {
      whatsappnumber,
      instagramlink,
      githublink,
      twiterlink,
      linkedinlink,
    };

    // Push the new social media object to the admin's socialMedia array
    admin.socialMedia.push(newSocialMedia);

    // Save the updated Admin document
    await admin.save();

    res.status(201).json({ message: "Social media entry added successfully" });
  } catch (error) {
    console.error("Error adding social media entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/socialmedia", async (req, res) => {
  try {
    const {
      whatsappnumber,
      instagramlink,
      githublink,
      twiterlink,
      linkedinlink,
    } = req.body;

    // Check if the Admin document exists (since you only have one)
    let admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Update the social media object
    if (admin.socialMedia.length > 0) {
      admin.socialMedia[0].whatsappnumber = whatsappnumber;
      admin.socialMedia[0].instagramlink = instagramlink;
      admin.socialMedia[0].githublink = githublink;
      admin.socialMedia[0].twiterlink = twiterlink;
      admin.socialMedia[0].linkedinlink = linkedinlink;
    } else {
      // If there are no existing social media entries, create a new one
      admin.socialMedia.push({
        whatsappnumber,
        instagramlink,
        githublink,
        twiterlink,
        linkedinlink,
      });
    }

    // Save the updated Admin document
    admin = await admin.save();

    res
      .status(200)
      .json({ message: "Social media entry updated successfully" });
  } catch (error) {
    console.error("Error updating social media entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

///////////////////////// Experience //////////////////////////////////

// POST endpoint to create a new experience entry
router.post("/experience", async (req, res) => {
  try {
    const { year, companyname, description } = req.body;
    // console.log(year,companyname);

    if (!year || !companyname || !description) {
      return res.status(400).json({
        message: "Please provide year, company name, and description",
      });
    }

    // Find the Admin document (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const newExperience = { year, companyname, description };

    admin.experiences.push(newExperience);

    await admin.save();

    res.status(201).json({
      message: "Experience added successfully",
      experiences: admin.experiences,
    });
  } catch (error) {
    console.error("Error creating experience entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT API to update the entire experience entry
router.put("/experience", async (req, res) => {
  try {
    const { year, companyname, description } = req.body;

    // Check if required fields are provided
    if (!year || !companyname || !description) {
      return res.status(400).json({
        message: "Please provide year, company name, and description",
      });
    }

    // Find the Admin document (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    admin.experiences = [{ year, companyname, description }];

    await admin.save();

    res.status(200).json({
      message: "Experience updated successfully",
      experiences: admin.experiences,
    });
  } catch (error) {
    console.error("Error updating experience entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE API to delete the entire experience entry
router.delete("/experience", async (req, res) => {
  try {
    // Find the Admin document (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Remove the experiences array
    admin.experiences = [];

    // Save the updated Admin document
    await admin.save();

    res.status(200).json({ message: "Experience deleted successfully" });
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

    if (!projectname || !githublink || !livelink) {
      return res.status(400).json({
        message:
          "Please provide project name, GitHub link, live link, and image",
      });
    }

    // Find the Admin document (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Create a new project object
    const newProject = {
      projectname,
      githublink,
      livelink,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    };

    // Add the new project to the Admin's projects array
    admin.projects.push(newProject);
    await admin.save();

    res.status(201).json({
      message: "Project added successfully",
      projects: admin.projects,
    });
  } catch (error) {
    console.error("Error creating project entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT API to update the project entry
router.put("/project", upload.single("image"), async (req, res) => {
  try {
    const { projectname, githublink, livelink } = req.body;

    // Check if required fields are provided
    if (!projectname || !githublink || !livelink) {
      return res.status(400).json({
        message: "Please provide project name, GitHub link, and live link",
      });
    }

    // Find the Admin document (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Update the project object
    admin.projects = {
      projectname,
      githublink,
      livelink,
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    };

    // Save the updated Admin document
    await admin.save();

    res.status(200).json({
      message: "Project updated successfully",
      project: admin.projects,
    });
  } catch (error) {
    console.error("Error updating project entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE API to delete the project entry
router.delete("/project", async (req, res) => {
  try {
    // Find the Admin document (since you only have one)
    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Remove the project entry
    admin.projects = [];

    // Save the updated Admin document
    await admin.save();

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
