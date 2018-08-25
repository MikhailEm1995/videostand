import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'semantic-ui-react';

import './ServiceNotification.pcss';

export default class ServiceNotification extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        type: PropTypes.string
    };

    static defaultProps = {
        type: 'message'
    };

    _types = {
        'message': { color: 'grey', prefix: ''},
        'info': { color: 'blue', prefix: 'ПОЛЕЗНО' },
        'warning': { color: 'yellow', prefix: 'ОСТОРОЖНО' },
        'error': { color: 'red', prefix: 'ОШИБКА' },
        'success': { color: 'green', prefix: 'УСПЕХ' }
    };

    render() {
        const { title, content, type, onDismiss } = this.props;
        const { color, prefix } = this._types[type];

        return (
            <div className="notification">
                <Message color={ color } onDismiss={ onDismiss }>
                    <Message.Header>{ prefix + (prefix.length > 0 && ': ') + title }</Message.Header>
                    <p>{ content }</p>
                </Message>
            </div>
        );
    }
}