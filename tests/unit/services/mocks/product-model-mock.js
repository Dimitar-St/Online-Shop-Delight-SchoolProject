class ProductModelMock {
    constructor(obj) {}

    save() {
        return Promise.resolve();
    }
}

module.exports = ProductModelMock;