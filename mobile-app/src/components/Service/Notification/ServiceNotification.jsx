import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'semantic-ui-react';

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
        'info': { color: 'blue', prefix: 'INFO' },
        'warning': { color: 'yellow', prefix: 'WARNING' },
        'error': { color: 'red', prefix: 'ERROR' },
        'success': { color: 'green', prefix: 'SUCCESS' }
    };

    render() {
        const { title, content, type } = this.props;
        const { color, prefix } = this._types[type];

        return (
            <div className="notification">
                <Message color={ color }>
                    <Message.Header>{ prefix + (prefix.length > 0 && ': ') + title }</Message.Header>
                    <p>{ content }</p>
                </Message>
            </div>
        );
    }
}