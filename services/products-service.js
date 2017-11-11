class ProductsService {
    constructor(model) {
        this.Product = model;
    }
    
    get Product() {
        return this._product;
    }
    
    set Product(value) {
        if(value === null || value === undefined || value === NaN) {
           throw 'The model is not valid.'
        }
        
        this._product = value;
    }
    
    addProduct(name, quantity, price) {
        let newProduct = new this.Product({
            name: name,
            quantity: quantity,
            price: price
        });

        let promise = newProduct.save().then(err => {
            if(err) console.log(err);
        });
        
        return promise;
    }
    
    getAllProducts() {
        return this.Product.find({}, function(err, data) {
            return Promise.resolve(data);   
        });
    }
}

module.exports = ProductsService;