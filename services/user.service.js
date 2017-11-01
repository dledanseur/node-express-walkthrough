class UserService {
  getAllUsers() {
    return [
      {
        name: "John",
        email: "jdoe@example.com"
      }
    ]
  }
}

module.exports = new UserService();
  