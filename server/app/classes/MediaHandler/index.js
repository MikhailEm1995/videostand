const { DBConnector } = require('../DBConnector/index');
const { TABLES } = require('../../constants/db');

module.exports = class MediaHandler {
    constructor() {
      super(DBConnector);
    }

    getAllUserMedias(userId) {
        const query = 'SELECT * FROM ?.? WHERE user_id=?';

        return new Promise((resolve, reject) => {
            this.connection.query(query, [userId, this.db, TABLES.MEDIA], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    updateMedia(mediaId, mediaInfo) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
    }

    changeMediaOrder(order) {
        return new Promise((resolve, reject) => {
          resolve([]);
        });
    }
}
