const mediaHandler = require('./common');

const MediaSaver = () => mediaHandler({
  saveMedia({
    user_id, name, description,
    duration, type
  }) {
    return this.MediaInfo.create({
      user_id, name, description, duration, type
    });
  },

  saveAllMedias(mediasArray) {
    return this.MediaInfo.bulkCreate(mediasArray);
  },

  saveMediaState({ state, media_id }) {
    return this.MediaState.create({ state, media_id });
  },

  saveAllMediasState(mediasState) {
    return this.MediaState.bulkCreate(mediasState);
  },

  saveMediaOrder({ media_id, order }) {
    return this.MediaOrder.create({ media_id, order });
  },

  saveAllMediasOrder(mediasOrder) {
    return this.MediaOrder.bulkCreate(mediasOrder);
  },

  createMediaType({ type }) {
    return this.MediaTypes.create({ type });
  },

  createAllMediaTypes(mediaTypes) {
    return this.MediaTypes.bulkCreate(mediaTypes)
  },

  createMediaState({ state }) {
    return this.MediaStates.create({ state });
  },

  createAllMediaStates(mediaStates) {
    return this.MediaStates.bulkCreate(mediaStates);
  }
});

module.exports = MediaSaver();
