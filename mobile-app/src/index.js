import React from 'react';
import { View, ViewPagerAndroid, StyleSheet } from 'react-native';

import { ButtonGroup } from 'react-native-elements';

export default class Main extends React.Component {
    state = {
        selectedIndex: 0
    };

    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(selectedIndex) {
        this.setState({selectedIndex});
    }

    render() {
        const { selectedIndex } = this.state;

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
                </View>
            </ViewPagerAndroid>
        );
    }
}
