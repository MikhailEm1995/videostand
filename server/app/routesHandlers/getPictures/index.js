const MediaHandler = require('../../classes/MediaHandler/index');

module.exports = async (req, res) => {
  try {
    const mediaHandler = new MediaHandler();
    const medias = await mediaHandler.getAllUserMedias(req.query.userId);

    return medias;
  } catch (err) {
    return err;
  }
}
