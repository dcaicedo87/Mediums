"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          storyId: 1,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente perferendis vero earum optio ex magnam quia incidunt necessitatibus! Saepe?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 1,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellendus eveniet quod labore.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 2,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storyId: 2,
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, sed doloremque.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storyId: 3,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusamus quidem vitae pariatur dolorum!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storyId: 3,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 4,
          body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed fugit, cum dignissimos alias fugiat quisquam.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 4,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storyId: 5,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, dolor? Quam voluptas illo, natus amet veniam ut explicabo repellat ex?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storyId: 5,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto ut voluptatibus quis, accusamus sunt blanditiis officiis.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storyId: 6,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto ut voluptatibus quis, accusamus sunt blanditiis officiis.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 6,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 7,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil ipsam adipisci! Hic asperiores illo facilis laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storyId: 7,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum harum repudiandae, tempora excepturi eos porro!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storyId: 8,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 8,
          body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quaerat at illo nihil?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storyId: 9,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storyId: 9,
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, distinctio ex!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storyId: 10,
          body: "Lorem ipsum dolor sit amet.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          storyId: 10,
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque soluta illo ipsa. Voluptatum nam, corrupti repellendus doloremque natus quia sequi illo, necessitatibus porro, velit odio.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
