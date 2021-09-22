require('./index');

const Product = require('../models/Product.model');

const serviceClass = require('../service');

const service = new serviceClass();

service.getAllProducts().then((responseFromAPI) => {
    console.log('Count of entries from API:', responseFromAPI.data?.length);
    Product.create(responseFromAPI.data).then(responseFromDB => {
        console.log('response fromDB:', responseFromDB.length)
    })
})