import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';

const BookDetailScreen = (props) => {
    const { book } = props.route.params;

    return (
        <View>
            <Text>{book.title} - {book.author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default BookDetailScreen