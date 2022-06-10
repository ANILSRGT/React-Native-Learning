import PropTypes from 'prop-types';

class CarModel {
    constructor(brand, model, imageUrl, modelUrl) {
        this.brand = brand;
        this.model = model;
        this.imageUrl = imageUrl;
        this.modelUrl = modelUrl;
    }
}

CarModel.propTypes = {
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    modelUrl: PropTypes.string.isRequired,
}

export default CarModel;