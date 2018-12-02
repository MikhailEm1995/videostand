const usersHandler = require('./_common');

const UsersUpdater = () => usersHandler({
  updateUser({ user_id, nickname }) {
    return this.Users.update({ nickname }, { where: { id: user_id } });
  }
});

module.exports = UsersUpdater();
