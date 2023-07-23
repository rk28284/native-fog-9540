const Repo = require("../models/repo");

const createRepo = async (req, res) => {
  try {
    const { name } = req.body;
    const createdBy = req.user.userId;

    // Check if the repo name is unique
    const existingRepo = await Repo.findOne({ name });
    if (existingRepo) {
      return res
        .status(409)
        .json({ message: "Repository name already exists" });
    }

    // Create the repo
    const repo = new Repo({ name, createdBy });
    await repo.save();

    res.status(201).json({ message: "Repo created successfully", repo });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteRepo = async (req, res) => {
  try {
    const { repoName } = req.params;

    // Delete the repo
    await Repo.deleteOne({ name: repoName });

    res.json({ message: "Repo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getRepos = async (req, res) => {
  try {
    const createdBy = req.user.userId;
    const userRepos = await Repo.find({ createdBy });

    res.status(200).json({ repos: userRepos });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { createRepo, deleteRepo,getRepos };
