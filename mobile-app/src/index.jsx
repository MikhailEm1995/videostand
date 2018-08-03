import React from 'react';
import { View, ViewPagerAndroid, PermissionsAndroid } from 'react-native';

import { ButtonGroup, Button } from 'react-native-elements';

import CameraRollPicker from 'react-native-camera-roll-picker';

export default class Main extends React.Component {
    state = {
        selectedIndex: 0,
        isGranted: false,
        isShowPicker: false
    };

    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    changePage(selectedIndex) {
        this.setState({ selectedIndex });
    }

    handlePress() {
        if (!this.state.isGranted) {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'Галерея',
                    'message': 'Разрешить доступ к фото?'
                }
            )
                .then((isGranted) => {
                    this.setState({
                        isGranted,
                        isShowPicker: isGranted
                    });
                })
                .catch(() => {
                    return false;
                });
        } else {
            this.setState({
                isShowPicker: true
            });
        }
    }

    getImage() {
        return false;
    }

    componentDidMount() {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            .then((isGranted) => {
                this.setState({ isGranted });
            })
            .catch(() => {
                this.setState({ isGranted: false });
            });
    }

    render() {
        const { selectedIndex, isGranted, isShowPicker } = this.state;

        return (
            <ViewPagerAndroid style={{ height: '100%' }}>
                <View>
                    <ButtonGroup
                        selectedIndex={ selectedIndex }
                        buttons={ ['ГАЛЕРЕЯ', 'ПОКАЗ'] }
                        containerStyle={{
                            height: 50,
                            borderWidth: 0,
                            borderRadius: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginLeft: 0,
                            marginBottom: 0
                        }}
                        onPress={ this.changePage }
                        innerBorderStyle={{ width: 0, color: 'transparent' }}
                    />
                    <Button
                        icon={{ name: 'photo' }}
                        buttonStyle={{ backgroundColor: '#44e' }}
                        title="Загрузить фото"
                        onPress={ this.handlePress }
                    />
                    {
                        isGranted && isShowPicker &&
                            <CameraRollPicker
                                callback={ this.getImage }
                            />
                    }
                </View>
            </ViewPagerAndroid>
        );
    }
}
