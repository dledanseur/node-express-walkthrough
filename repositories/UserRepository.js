const Sequelize = require('Sequelize');
const UserModel = require('./models/user.js');
const db = require('./db');

class UserRepository {

 constructor() {
   this.UserModel = UserModel(db, Sequelize.DataTypes);
   // only during dev
   this.UserModel.sync();
 }

 findAll() {
   return this.UserModel.findAll();
 }

 saveUser(user) {
   return this.UserModel.create(user)
 }
}
module.exports = new UserRepository();

