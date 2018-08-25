import React from 'react';

import { Item } from 'semantic-ui-react';

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
            <Item class="image-card">
                <Item.Image size="small" src={ src } className="image-card__img"/>

                <Item.Content className="image-card__content">
                    <Item.Header className="image-card__header">{ title }</Item.Header>
                    <Item.Meta className="image-card__duration">{ `Продолжительность: ${duration}` }</Item.Meta>
                    <Item.Description className="image-card__desc">{ desc }</Item.Description>
                </Item.Content>
            </Item>
        );
    }
}
