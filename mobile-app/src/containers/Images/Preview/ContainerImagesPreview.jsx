import React from 'react';

import { Loader, Segment } from 'semantic-ui-react';

import ButtonChooseFile from '../../../components/Button/ChooseFile/ButtonChooseFile.jsx';
import ImagePreview from '../../../components/Image/Preview/ImagePreveiw.jsx';

import './ContainerImagesPreview.pcss';

export default class ContainerImagesPreview extends React.Component {
    state = {
        images: [],
        isReading: false
    };

    handleFileChoose = async (e) => {
        try {
            this.setState({ isReading: true });

            const images = await this.getFilesURLs(e.target.files);

            (images => this.setState({ images, isReading: false }))(images);
        } catch(err) {
            this.setState({ isReading: false });
        }
    };

    getFilesURLs = files => {
        const images = [];

        return new Promise((resolve) => {
            for (let i = 0, max = files.length; i < max; i++) {
                if (!this.isImage(files[i])) continue;

                this.readFile(files[i]).then(res => {
                    images.push(res);

                    if (images.length === max) resolve(images);
                });
            }
        });
    };

    isImage = file => file.type.match('image.*');

    readFile = file => {
        const reader = new FileReader();

        return new Promise((resolve) => {
            reader.onload = ((f) => readEvent => resolve(readEvent.target.result))(file);

            reader.readAsDataURL(file);
        });
    };

    handleImgDelete = i => () => {
        const { images } = this.state;

        this.setState({ images: images.slice(0, i).concat(images.slice(i+1)) });
    };

    Preview = () => (
        <div className="upload-container__preview">
            <div className="upload-container__images">
                { this.state.images.map((src, i) => (
                    <ImagePreview key={ i } src={ src } onDelete={ this.handleImgDelete(i) } />
                )) }
            </div>
            <button className="upload-container__submit">Отправить</button>
        </div>
    );

    render() {
        const Preview = this.Preview;
        const { isReading, images } = this.state;

        return (
            <div className="upload-container">
                <ButtonChooseFile icon="image" text="Добавить изображения" onChoose={ this.handleFileChoose } />
                <Segment padded={ isReading ? "very" : true } loading={ isReading }>
                    { images.length === 0 ? 'Изображения не выбраны' : <Preview /> }
                </Segment>
            </div>
        );
    }
}
