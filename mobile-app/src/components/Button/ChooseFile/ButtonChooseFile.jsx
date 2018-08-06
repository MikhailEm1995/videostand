import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import './ButtonChooseFile.pcss';

export default class ButtonChooseFile extends React.Component {
    propTypes = {
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onChoose: PropTypes.func.isRequired
    };

    render() {
        const { text, icon, onChoose } = this.props;

        return (
            <div className="file-upload">
                <label htmlFor="file-upload" className="file-upload__btn">
                    <Icon name={ icon } />
                    { text }
                </label>
                <input
                    id="file-upload"
                    type="file"
                    multiple={ true }
                    accept="image/*"
                    onChange={ onChoose }
                    className="file-upload__input file-upload__input--hidden"
                />
            </div>
        );
    }
}
