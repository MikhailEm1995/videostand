const usersHandler = require('./_common');

const UsersSaver = () => usersHandler({
  createUser({ nickname }) {
    return this.Users.create({ nickname });
  }
});

module.exports = UsersSaver();
