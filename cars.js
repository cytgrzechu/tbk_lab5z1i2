const cars = ["Volvo V60 2018","Fiat Panda 2020"];

exports.getCars = () => {
    return cars;
}

exports.getCar = id => {
    if(id<1 || id > cars.length)
        return null;
    return cars[id-1];
}