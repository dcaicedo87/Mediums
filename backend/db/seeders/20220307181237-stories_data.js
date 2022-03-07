"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Stories",
      [
        {
          authorId: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          title: "The day I decided to travel alone...",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, voluptatum incidunt? Quae laudantium natus, corporis dolorum placeat ab cum nam voluptatem cumque beatae ullam iure harum, tempore sapiente illum tempora repudiandae sint reiciendis dignissimos quos. Sint alias mollitia delectus aspernatur fuga corporis quidem enim maiores aut. Fugit accusantium ut soluta?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1574558452538-7477c4a40b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          title: "Whispers of a Ghost",
          body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque optio culpa dolore neque ex ipsa consequuntur asperiores ut quos. Dolorem quo laboriosam saepe corporis explicabo inventore fuga! Perferendis in officiis maxime fugit corrupti veniam at recusandae soluta, magnam, voluptatum repellat. Inventore suscipit labore eius numquam ad ratione quidem. Fuga incidunt vero, accusamus laboriosam fugiat iste ipsum dignissimos, numquam commodi earum eaque maiores aut quis officiis.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1480615960973-cc39a8aa829c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Dead Man's Wish",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam earum minus cumque? Laboriosam, laborum suscipit sint odit sed dicta aliquid ipsum nisi, unde error alias cumque pariatur neque recusandae!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 4,
          imageUrl:
            "https://images.unsplash.com/photo-1536850428371-f12bc9f3159a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          title: "The Lost Soul",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quaerat nihil necessitatibus laborum omnis suscipit cum, maiores libero quasi molestias iure culpa doloremque veniam pariatur quisquam iusto repellat error consectetur ratione voluptate! Iusto vero delectus animi laborum deserunt provident dolorum fugit, repudiandae cupiditate esse dicta, vel at, non ipsam ad maxime! Earum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 5,
          imageUrl:
            "https://images.unsplash.com/photo-1608311821539-57a58f13b074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
          title: "Cold and Afraid",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse itaque veniam, possimus debitis deleniti architecto magnam, id maxime aliquid ea dolor unde totam quam reiciendis? Possimus laborum numquam aliquam sed aut doloremque illum consequatur est repellendus! Animi rerum asperiores qui possimus eum, nisi unde suscipit fugiat tenetur praesentium repudiandae nulla harum amet provident ad sunt non sed illum debitis voluptates dolor nemo totam hic. Sint, iusto nisi. Culpa!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1583437624797-0e3348843acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
          title: "The Road Less Traveled",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laudantium voluptatibus asperiores a expedita nulla sed debitis quaerat rerum neque quas voluptates quasi odit, at, inventore atque impedit! Accusamus amet, autem, placeat ipsum dolorum praesentium provident inventore assumenda sed, voluptates fuga.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          title: "Dark Forest",
          body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, voluptatibus minima! Saepe velit vitae possimus omnis unde sit fuga, molestiae reprehenderit in exercitationem ipsam architecto alias. Illum incidunt culpa quis.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1505274664176-44ccaa7969a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          title: "Monsters Inside",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, hic et reprehenderit suscipit corrupti quis blanditiis voluptates culpa ipsam, velit eveniet. Dolorum mollitia aut officiis atque repellendus harum sapiente et, explicabo, esse provident dignissimos quos corrupti rem nostrum recusandae perferendis libero laboriosam quod. Voluptatem earum repudiandae sapiente dicta vitae? Dicta, error dolorum corrupti aliquid accusantium architecto recusandae deserunt commodi, facilis porro repellendus. Dignissimos saepe quae eligendi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 4,
          imageUrl:
            "https://images.unsplash.com/photo-1612737920943-d927663dd4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
          title: "Are The Shadows Real?",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur unde velit earum quia ut eveniet cupiditate sit enim sint impedit fuga veniam atque minus ad aut exercitationem, ex labore officiis recusandae. Id porro possimus accusamus!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 5,
          imageUrl:
            "https://images.unsplash.com/photo-1612737920943-d927663dd4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
          title: "Monsters Inside",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur unde velit earum quia ut eveniet cupiditate sit enim sint impedit fuga veniam atque minus ad aut exercitationem, ex labore officiis recusandae. Id porro possimus accusamus!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorId: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1612737920943-d927663dd4ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
          title: "Monsters Inside",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur unde velit earum quia ut eveniet cupiditate sit enim sint impedit fuga veniam atque minus ad aut exercitationem, ex labore officiis recusandae. Id porro possimus accusamus!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stories", null, {});
  },
};
