import React from 'react';
import { Icon } from 'semantic-ui-react';

import './ImageCard.pcss';

import propTypesImageCard, { PICTURE } from '../../../constants/propTypesImageCard.js';

export default class ImageCard extends React.Component {
    static propTypes = propTypesImageCard;

    static defaultProps = {
        title: 'Без названия',
        desc: 'Нет описания',
        type: PICTURE
    };

    render() {
        const { src, title, desc, duration, type } = this.props;

        return (
            <div className="image-card">
                <div className="image-card__img-wrapper">
                    <img src={ src } className="image-card__img" />
                </div>

                <div className="image-card__info">
                    <h6 className="image-card__title">{ title }</h6>
                    <span className="image-card__duration">
                      <Icon name={ type } size="small" className="image-card__icon" />,
                      <Icon name="clock outline" size="small" className="image-card__icon" />
                      { duration }
                    </span>
                    <p className="image-card__desc">{ desc }</p>
                </div>
            </div>
        );
    }
}
