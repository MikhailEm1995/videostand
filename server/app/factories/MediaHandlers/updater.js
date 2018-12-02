const mediaHandler = require('./_common');

const MediaUpdater = () => mediaHandler({
  updateMediaInfo({ media_id, media_info }) {
    return this.MediaInfo.update(media_info, { where: { media_id } });
  },

  updateMediaOrder({ media_id, order }) {
    return this.MediaOrder.update({ order }, { where: { media_id } });
  },

  updateMediaState({ media_id, state }) {
    return this.MediaState.update({ state }, { where: { media_id } })
  },

  updateMediaStates({ state_id, state }) {
    return this.MediaStates.update({ state }, { where: { id: state_id } });
  },

  updateMediaType({ type_id, type }) {
    return this.MediaTypes.update({ type }, { where: { id: type_id } });
  }
});

module.exports = MediaUpdater();
