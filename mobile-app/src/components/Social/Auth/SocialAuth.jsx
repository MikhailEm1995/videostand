import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Message } from 'semantic-ui-react';

import './SocialAuth.pcss';

export const socialAuthTypes = {
  PINTEREST: 'PINTEREST'
};

export default class SocialAuth extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      socialAuthTypes.PINTEREST
    ]).isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  _typesData = {
    PINTEREST: { name: 'Pinterest', icon: 'pinterest', color: 'red' }
  };

  render() {
    const { type, onClick } = this.props;
    const { name, color, icon } = this._typesData[type];

    return (
      <div className="social-auth">
        <Message
          attached
          header="Требуется разрешение"
          content={ `Вам нужно авторизоваться, чтобы загружать фото и видео из вашего аккаунта ${name}` }
        />
        <div className="social-auth__btn-container">
          <Button color={color} onClick={onClick} fluid>
            <Icon name={icon} /> Нажмите для авторизации
          </Button>
        </div>
      </div>
    );
  }
}