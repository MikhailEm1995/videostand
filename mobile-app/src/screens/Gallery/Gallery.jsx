import React from 'react';

import ButtonChooseFile from '../../components/Button/ChooseFile/ButtonChooseFile.jsx';

export default class Gallery extends React.Component {
    state = {
        images: []
    };

    handleFileChoose = (e) => {
        const { files } = e.target;
        const images = [];

        new Promise((resolve, reject) => {
            for (let i = 0, max = files.length; i < max; i++) {
                if (!files[i].type.match('image.*')) continue;

                const reader = new FileReader();

                reader.onload = ((file) => {
                    return (readEvent) => {
                        images.push(
                            <img key={i} src={ readEvent.target.result } alt="noimg" />
                        );

                        if (i === max - 1) resolve();
                    }
                })(files[i]);

                reader.readAsDataURL(files[i]);
            }
        })
            .then(() => {
                this.setState({ images });
            });
    };

    onReaderLoad = (file, i) => e => (<img key={i} src={ e.target.result } alt="noimg" />);

    render() {
        return (
            <div>
                <ButtonChooseFile icon="image" text="Добавить изображение" onChoose={ this.handleFileChoose } />
                { this.state.images }
            </div>
        );
    }
}
