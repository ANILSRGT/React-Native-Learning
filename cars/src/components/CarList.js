import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import CarDetail from './CarDetail';
import CarModel from '../models/CarModel';

class CarList extends Component {
    constructor() {
        super();

        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        axios.get('https://givecars.herokuapp.com/').then(response => {
            this.setState({ cars: response.data });
        });
    }

    renderList = () => {
        return this.state.cars.map(car => {
            return car.model.map(model => {
                const newCarModel = new CarModel(car.brand, model.name, model.image, model.url);
                return (
                    <CarDetail key={car.brand + "_" + model.name} carModel={newCarModel} />
                );
            });
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default CarList;