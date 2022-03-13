# Mediums

This is a paranormal clone of [Medium](https://medium.com/). Access the [Mediums MVP](https://github.com/dcaicedo87/Mediums/wiki/MVP-Feature-List).

# Index

| [Mediums MVP](https://github.com/dcaicedo87/Mediums/wiki/MVP-Feature-List) | [Database Schema](https://github.com/dcaicedo87/Mediums/wiki/Database-Schema) |

# Live Site

- [Mediums](https://aa-mediums.herokuapp.com/)

# Technologies Used

- JavaScript
- React
- Redux
- Express
- Sequelize
- Node
- PostgresSQL
- HTML/CSS
- Visual Studio Code

# Getting Started

1.  Clone this repo.

    - `git clone git@github.com:dcaicedo87/Mediums.git`

2.  Install dependencies from the root directory.

    - `npm install`

3.  Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

    - `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

4.  Create a .env file in the backend directory based on the .env.example found within the respective directory.

5.  Enter your username and paassword information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your design PORT (preferably 5000).

6.  Add the following proxy to your package.json file with your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.

    - `"proxy": "http://localhost:5000"`

7.  Create Database, Migrate, and Seed models.

    - `npx dotenv sequelize db:create`
    - `npx dotenv sequelize db:migrate`
    - `npx dotenv sequelize db:seed:all`

8.  Start the services in the backend directory.

    - `npm start`

9.  Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to [http://localhost:3000](http://localhost:3000).

    - `npm start`

10. You can use the Demo user or create an account to begin using **Mediums**

# Features

Logged in users can perform the following actions.

    * Add/View/Edit/Delete Stories
    * Add/View/Delete Comments
