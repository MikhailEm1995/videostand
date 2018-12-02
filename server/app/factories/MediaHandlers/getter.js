const mediaHandler = require('./_common');

const MediaGetter = () => mediaHandler({
  getUserMedias({ user_id, limit = null, offset = 0 }) {
    return this.MediaInfo.findAll({ where: { user_id }, limit, offset });
  },
  getMediasOrder({ media_id, limit = null, offset = 0 }) {
    return this.MediaOrder.findAll({ where: { media_id }, limit, offset });
  },
  getMediaTypes() {
    return this.MediaTypes.findAll();
  },
  getMediasState({ media_id, limit = null, offset = 0 }) {
    return this.MediaState.findAll({ where: { media_id }, limit, offset });
  },
  getMediaStates() {
    return this.MediaStates.findAll();
  }
});

module.exports = MediaGetter();
