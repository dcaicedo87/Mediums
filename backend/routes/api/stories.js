const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { User, Story, Comment } = require("../../db/models");

// GET all stories
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Story.findAll({});
    res.json({ data });
  })
);

// POST a new story
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { authorId, imageUrl, title, body } = req.body;

    const newStory = {
      authorId,
      imageUrl,
      title,
      body,
    };

    const storyData = await Story.create(newStory);
    res.json(storyData);
  })
);

module.exports = router;
