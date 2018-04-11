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
}

module.exports = OrderService;