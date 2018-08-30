import PropTypes from 'prop-types';

export const PICTURE = 'picture';
export const VIDEO = 'video';

export default {
    src: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    type: PropTypes.oneOf([
      PICTURE,
      VIDEO
    ])
};
