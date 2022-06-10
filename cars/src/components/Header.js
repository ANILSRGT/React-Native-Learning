import React from 'react';
import ReactNative, { Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 22,
    },

    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;