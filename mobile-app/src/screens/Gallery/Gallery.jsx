import React from 'react';
import { connect } from 'react-redux';

import ContainerImagesPreview from '../../containers/Images/Preview/ContainerImagesPreview.jsx'
import ContainerNotification from '../../containers/Notifications/ContainerNotifications.jsx';
import {setNotification} from "../../actions/notifications";

class Gallery extends React.Component {
    test = () => {
        this.props.setNotification({ type: 'success', title: 'Test', content: 'tetetetete' });
    };

    render() {
        return (
            <div>
                <ContainerImagesPreview/>
                <button onClick={ this.test }>click me!</button>
                <ContainerNotification />
            </div>
        );
    }
}

export default connect(
    null,
    { setNotification }
)(Gallery);
