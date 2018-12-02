const usersHandler = require('./_common');

const UsersGetter = () => usersHandler({
  getUserById(id) {
    return this.Users.findById(id);
  }
});

module.exports = UsersGetter();
