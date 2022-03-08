const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { User, Story, Comment } = require("../../db/models");

// GET all stories
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Story.findAll();
    return res.json(data);
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

// GET a single story
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const singleStory = await Story.findByPk(id);

    res.json({ singleStory });
  })
);

// GET stories by authorId
router.get(
  "/author/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;

    const authorStories = await Story.findAll({
      where: { authorId: id },
    });

    res.json({ authorStories });
  })
);

module.exports = router;
