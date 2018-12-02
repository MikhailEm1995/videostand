const express = require('express');
const router = require('./routing');

const { MAIN_APP_PORT } = require('./constants/app-configuration.js');

const mediaGetter = require('./factories/MediaHandlers/getter.js');

const app = express();

app.use(router);

app.get('/test', async (req, res) => {
  const medias = await mediaGetter.getUserMedias({ user_id: 1 });

  res.send(JSON.stringify(medias));
});

app.listen(MAIN_APP_PORT, async () => {
  console.log('Listening on port:', MAIN_APP_PORT);
});
