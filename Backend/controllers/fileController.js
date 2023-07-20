const Repo = require("../models/repo");
const File = require("../models/file");

const addFile = async (req, res) => {
  try {
    const { name, repoName, fileType } = req.body;

    const repo = await Repo.findOne({ name: repoName });
    if (!repo) {
      return res.status(404).json({ message: "Repo not found" });
    }

    // Check if the user has access to the repo
    if (repo.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Create the file
    const file = new File({ name, repoName, fileType });
    await file.save();

    // Add the file to the repo
    repo.files.push(file);
    await repo.save();

    res.status(201).json({ message: "File added successfully", file });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { fileId } = req.params;
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    const repo = await Repo.findOne({ name: file.repoName });
    if (!repo) {
      return res.status(404).json({ message: "Repo not found" });
    }
    if (repo.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    // Delete the file from the repo
    repo.files.pull(fileId);
    await repo.save();
    await file.remove();
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getFileContent = async (req, res) => {
  try {
    const { fileId } = req.params;
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    res.set("Content-Type", "text/plain");
    res.send(file.content);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateFileContent = async (req, res) => {
  try {
    const { fileId } = req.params;
    const { content } = req.body;
    const file = await File.findById(fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    file.content = content;
    await file.save();

    res.json({
      message: "File content updated successfully",
      fileContent: file.content,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { addFile, deleteFile, getFileContent, updateFileContent };
