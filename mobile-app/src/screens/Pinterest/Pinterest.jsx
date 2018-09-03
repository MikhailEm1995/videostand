import React from 'react';

import SocialAuth, { socialAuthTypes } from '../../components/Social/Auth/SocialAuth.jsx';

export default class Pinterest extends React.Component {
    render() {
        return (
          <SocialAuth type={socialAuthTypes.PINTEREST} />
        );
    }
}
