var UserRepository = require('../repositories/UserRepository');

class UserService {
  getAllUsers() {
    return UserRepository.findAll();
  }
}

module.exports = new UserService();
  