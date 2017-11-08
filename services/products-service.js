class ProductsService {
    constructor(model) {
        this.product = model;
    }
    
    get product() {
        return this._product;
    }
    
    set product(value) {
        if(value === null || value === undefined || value === NaN) {
           throw 'The model is not valid.'
        }
        
        this._product = value;
    }
    
    addProduct(name, quantity, price) {
        let newProduct = new this.product({
            name: name,
            quantity: quantity,
            price: price
        });

        let promise = newProduct.save().then(err => {
            if(err) console.log(err);
        });
        
        return promise;
    }
}

module.exports = ProductsService;