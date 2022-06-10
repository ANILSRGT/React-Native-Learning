import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

const Button = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonStyle}
        >
            <Text style={styles.textStyle}>Click Me</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 6,
        paddingBottom: 6,
        color: 'white',
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7,
    }
}

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
}

export default Button;