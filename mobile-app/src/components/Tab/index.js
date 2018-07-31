import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Tab extends React.Component {
    render() {
        const { children, isLeft, isActive, handlePress } = this.props;

        return (
            <View style={
                isLeft && isActive ? styles.activeLeft :
                    isActive ? styles.active :
                        isLeft ? styles.left : styles.tab
            } onPress={handlePress}>
                <Text style={styles.text}>{ children }</Text>
            </View>
        );
    }
}

const tabStyles = {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
};

const left = {
    ...tabStyles,
    borderRightWidth: 1,
    borderColor: '#ccc'
};

const styles = StyleSheet.create({
    tab: tabStyles,
    active: {
        ...tabStyles,
        borderBottomWidth: 0
    },
    activeLeft: {
        ...left,
        borderBottomWidth: 0,
    },
    left,
    text: {
        textAlign: 'center'
    }
});

