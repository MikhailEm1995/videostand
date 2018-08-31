import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './ImagePreview.pcss';

export default class ImagePreview extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    };

    render() {
        const { src } = this.props;

        return (
            <div className="image-preview">
                <img src={ src } className="image-preview__img" alt="noimg" />
                <button className="image-preview__del" onClick={ this.props.onDelete }>
                    <Icon name="delete" className="image-preview__icon" />
                </button>
            </div>
        );
    }
}