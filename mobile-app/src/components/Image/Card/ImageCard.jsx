import React from 'react';

import './ImageCard.pcss';

import propTypesImageCard from '../../../constants/propTypesImageCard.js';

export default class ImageCard extends React.Component {
    static propTypes = propTypesImageCard;

    static defaultProps = {
        title: 'Без названия',
        desc: 'Нет описания'
    };

    render() {
        const { src, title, desc, duration } = this.props;

        return (
            <div className="image-card">
                <div className="image-card__img-wrapper">
                    <img src={ src } className="image-card__img" />
                </div>

                <div className="image-card__info">
                    <h6 className="image-card__title">{ title }</h6>
                    <span className="image-card__duration">{ `Продолжительность: ${ duration }` }</span>
                    <p className="image-card__desc">{ desc }</p>
                    <span className="image-card__type"></span>
                </div>
            </div>
        );
    }
}
