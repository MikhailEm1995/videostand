const { DBConnectorMixin } = require("../DBConnector/index");
const { TABLES } = require("../../constants/db");

const MediaHandler = () => DBConnectorMixin({
  getAllUserMedias(user_id) {
    const query = 'SELECT * FROM ?.? WHERE user_id=?';

    return new Promise((resolve, reject) => {
      this.getConnection().query(query, [user_id, this.getDB(), TABLES.MEDIA], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  updateMedia(media_id, media_info) {
    return new Promise();
  },
  changeMediaOrder(order) {
    return new Promise();
  }
});

module.exports = MediaHandler;
