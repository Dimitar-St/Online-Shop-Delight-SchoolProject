class OrderService {
    constructor(model) {
        this.Order = model;
    }

    addOrder(nameOfTheProduct, quantity) {
        let newOrder = new this.Order({
            quantity: quantity,
            name: nameOfTheProduct,
            complete: false
        });

        let promise = newOrder.save();

        return promise;
    }

    getAllOrders() {
        return this.Order.find({}, function(err, data) {
            return Promise.resolve(data);   
        });
    }
}

module.exports = OrderService;