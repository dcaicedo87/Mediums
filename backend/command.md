npx dotenv sequelize db:create

npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
npx dotenv sequelize db:migrate

//if you need to undue a single migration
npx dotenv sequelize db:migrate:undo

//user seed
npx sequelize seed:generate --name demo-user

//Generate Set, images
npx sequelize-cli model:generate --name Spot --attributes userId:integer,address:string,city:string,country:string,name:string,price:decimal

npx sequelize-cli model:generate --name Image --attributes spotId:integer,url:string

npx sequelize-cli seed:generate --name Spots

npx sequelize-cli seed:generate --name Images

npx dotenv sequelize db:seed:undo:all
npx dotenv sequelize-cli db:migrate:undo:all
npx dotenv sequelize-cli db:migrate
npx dotenv sequelize db:seed:all

heroku run npm run sequelize db:seed:undo:all
heroku run npm run sequelize db:migrate:undo:all
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:seed:all
