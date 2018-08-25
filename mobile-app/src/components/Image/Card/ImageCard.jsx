import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import './ImageCard.pcss';

export default class ImageCard extends React.Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        name: PropTypes.string,
        desc: PropTypes.string
    };

    static defaultProps = {
        name: 'Без названия',
        desc: ''
    };

    render() {
        const { src, name, desc, duration } = this.props;

        return (
            <Item class="image-card">
                <Item.Image size="small" src={ src } className="image-card__img"/>

                <Item.Content className="image-card__content">
                    <Item.Header className="image-card__header">{ name }</Item.Header>
                    <Item.Meta className="image-card__duration">{ `Продолжительность: ${duration}` }</Item.Meta>
                    <Item.Description className="image-card__desc">{ desc }</Item.Description>
                </Item.Content>
            </Item>
        );
    }
}
