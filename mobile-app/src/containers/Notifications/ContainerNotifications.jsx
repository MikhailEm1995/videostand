import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteNotification } from '../../actions/notifications';

import ServiceNotification from '../../components/Service/Notification/ServiceNotification.jsx';

const TIMEOUT = 4000;

import './ContainerNotifications.pcss';

class ContainerNotifications extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired
            })
        ).isRequired,
        deleteNotification: PropTypes.func.isRequired
    };

    renderedMessagesIDs = [];

    renderNotification = ({ id, title, content, type = 'message' }, i) => {
        let timer = this.startTimer(id);

        return (
            <ServiceNotification key={ i } title={ title } content={ content } type={ type } onDismiss={ this.handleNotificationDismiss(timer, id) } />
        );
    };

    startTimer = (id) => {
        let timer = null;

        if (!this.renderedMessagesIDs.includes(id)) {
            this.renderedMessagesIDs.push(id);

            timer = setTimeout(() => this.deleteMessage(id), TIMEOUT);
        }

        return timer;
    };

    handleNotificationDismiss = (timer, id) => () => {
        clearTimeout(timer);
        this.deleteMessage(id);
    };

    deleteMessage = id => {
        this.deleteID(id);
        this.props.deleteNotification(id);
    };

    deleteID = id => this.renderedMessagesIDs = this.renderedMessagesIDs.filter(elem => elem !== id);

    render() {
        const { messages } = this.props;

        return (
            <div className="notifications-list">
                {
                    messages.map((message, i) => (
                        this.renderNotification(message, i)
                    ))
                }
                { messages.length > 1 && <div className="notifications-list__veil" /> }
            </div>
        );
    }
}

const mapStateToProps = ({ notifications }) => ({ messages: notifications.messages });

export default connect(
    mapStateToProps,
    { deleteNotification }
)(ContainerNotifications);
