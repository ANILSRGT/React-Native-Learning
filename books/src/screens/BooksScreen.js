import React from 'react';
import { StyleSheet, View } from 'react-native';

import BookList from '../components/BookList';

const BooksScreen = (props) => {
    return (
        <View>
            <BookList />
        </View>
    );
}

const styles = StyleSheet.create({});

export default BooksScreen;