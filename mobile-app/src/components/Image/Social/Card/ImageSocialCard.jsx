import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'semantic-ui-react';

import './ImageSocialCard.pcss';

export default class ImageSocialCard extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    src: '#',
    isLoading: false
  };

  render() {
    const { src, isLoading } = this.props;

    return (
      <div className="image-social-card">
        {
          (isLoading || src === '#') ?
            <div className="image-social-card__loader-bg">
              <div className="image-social-card__loader-img" />
            </div>
            : <Image src={this.props.src} verticalAlign="middle" />
        }
      </div>
    );
  }
}
