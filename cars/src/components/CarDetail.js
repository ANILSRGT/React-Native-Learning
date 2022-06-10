import React from 'react';
import { Text, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemSection from './ItemSection';
import Button from '../components/Button';
import CarModel from '../models/CarModel';

const CarDetail = ({ carModel }) => {
    return (
        <Item>
            <ItemSection>
                <Text style={styles.headerText}>{carModel.brand}</Text>
                <Text style={styles.headerText}>{carModel.model}</Text>
            </ItemSection>
            <ItemSection>
                <Image source={{ uri: carModel.imageUrl, height: 200 }} />
            </ItemSection>
            <ItemSection>
                <Button onPress={() => Linking.openURL(carModel.modelUrl)} />
            </ItemSection>
        </Item>
    );
}

const styles = {
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
}

CarDetail.propTypes = {
    carModel: PropTypes.instanceOf(CarModel).isRequired,
}

export default CarDetail;