import React from 'react';

import ContainerImagesPreview from '../../containers/Images/Preview/ContainerImagesPreview.jsx'
import ContainerImagesCards from '../../containers/Images/Cards/ContainerImagesCards.jsx';

export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <ContainerImagesPreview/>
                <ContainerImagesCards/>
            </div>
        );
    }
}
