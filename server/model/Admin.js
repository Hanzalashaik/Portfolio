import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  image: { data: Buffer, contentType: String },
  description: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  year: { type: String, required: true },
  companyname: { type: String, required: true },
  description: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  projectname: { type: String},
  githublink: { type: String },
  livelink: { type: String},
  image: { data: Buffer, contentType: String },
});

const socialMediaSchema = new mongoose.Schema({
  whatsappnumber: { type: String },
  instagramlink: { type: String },
  githublink: { type: String },
  twiterlink: { type: String },
  linkedinlink: { type: String },
});

const adminSchema = new mongoose.Schema({
  pdf: { data: Buffer, contentType: String }, // Store PDF as Buffer
  about: [aboutSchema],
  projects: [projectSchema],
  experiences: [experienceSchema],
  socialMedia: [socialMediaSchema],
});

const Admin = new mongoose.model("Admin", adminSchema, "admin");

export default Admin;
