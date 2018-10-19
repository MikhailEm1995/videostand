const { DBConnector } = require('../DBConnector/index');
const { TABLES } = require('../../constants/db');

module.exports = class MediaHandler {
    getAllUserMedias(user_id) {
        const query = 'SELECT * FROM ?.? WHERE user_id=?';

        return new Promise((resolve, reject) => {
            this.connection.query(query, [user_id, this.db, TABLES.MEDIA], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    updateMedia(media_id, media_info) {
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
