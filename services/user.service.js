var UserRepository = require('../repositories/UserRepository');

class UserService {
  getAllUsers() {
    return UserRepository.findAll();
  }

  saveUser(user) {
    return UserRepository.saveUser(user)
  }
}

module.exports = new UserService();
  