import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import booksData from '../../data/books.json'

const BookList = (props) => {
    const navigation = useNavigation()

    return (
        <View>
            <FlatList
                //! horizontal // horizontal list
                //! showsHorizontalScrollIndicator={false} // hide horizontal scroll indicator
                data={booksData}
                renderItem={({ item }) => {
                    return (
                        <View style={[styles.itemStyle, styles.rowStyle]}>
                            <Text >{item.title}</Text>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => navigation.navigate('BookDetail', { book: item })}>
                                <Text>Go to book details</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        marginVertical: 20,
    },
    rowStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 5,
        marginHorizontal: 7,
    }
})

export default BookList