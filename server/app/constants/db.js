const PROD = {
  DB_HOST: '',
  DB_NAME: '',
  DB_USERNAME: '',
  DB_PASSWORD: ''
};

const DEV = {
  DB_HOST: 'localhost',
  DB_NAME: 'videostands',
  DB_USERNAME: 'home',
  DB_PASSWORD: '1111'
};

const TABLES = {
    USERS: 'users',
    SUBSCRIPTIONS: 'subscriptions',
    VIDEOSTANDS: 'videostands',
    MEDIA_INFO: 'm_info',
    MEDIA_ORDER: 'm_order',
    MEDIA_STATE: 'm_state',
    MEDIA_STATES: 'm_states',
    MEDIA_TYPES: 'm_types'
};

module.exports = {
  PROD,
  DEV,
  TABLES
};
