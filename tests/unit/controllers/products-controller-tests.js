const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      ProductsController = require('../../../controllers/products-controller.js');

let expect = chai.expect;

describe('Product controller tests', function() {
    let controller,
        service,
        req,
        res; 
    
    beforeEach(function() {
        req = {
            isAuthenticated: () => {},
            user: {
                role: 'admin'
            },
            body: {
                name: 'name', 
                quantity: 'quantity',
                wieght: 'weight',
                price: 'price'
            }
        };
        res = {
            render: () => {}
        };
        service = {
            getAllProducts: () => { return Promise.resolve({}); },
            addProduct: (name, quantity, weight, price) => {}
        };
        
        controller = new ProductsController(service);
    });
    
    it('Expect ProductsController class to exist', function() {
        expect(ProductsController).to.exist;
    });
    
    it('Expect products controller instance to have all functions.', function() {
        expect(controller.loadMenuPage).to.be.a('function');
        expect(controller.loadAddProductPage).to.be.a('function');
        expect(controller.isAdmin).to.be.a('function');
    });
    
    describe('Service property tests', function() {
        it('The service property should not throw.', function() {
            expect(() => {
                controller.service = {};
            }).to.not.throw();
        });
        
        it('The service property should throw error when is passed a null value.', function() {
            expect(() => {
                controller.service = null;
            }).to.throw('Invalid service');
        }); 
        
        it('The service property should throw error when is passed a undefined value.', function() {
            expect(() => {
                controller.service = undefined;
            }).to.throw('Invalid service');
        }); 
    });
    
    describe('loadMenuPage function tests', function() {
        it('Should call res.render()', function() {
            let renderStub = sinon.stub(res, 'render');
            
            controller.loadMenuPage(req, res)
                      .then(() => {
                          sinon.assert.calledOnce(renderStub);
                      });
        });
        
        it('Should call req.isAuthenticated()', function() {
            let isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.loadMenuPage(req, res)
                      .then(() => {
                          sinon.assert.calledOnce(isAuthenticatedStub);
                      });
        });
        
        it('Should call this.isAdmin()', function() {
            let isAdminStub = sinon.stub(controller, 'isAdmin');
            
            controller.loadMenuPage(req, res)
                      .then(() => {
                          sinon.assert.calledOnce(isAdminStub);
                      });
        });
    });
    
    describe('loadAddProductPage function tests', function() {
        it('Should call res.render()', function() {
            let renderStub = sinon.stub(res, 'render');
            
            controller.loadAddProductPage(req, res);
            
            sinon.assert.calledOnce(renderStub);
        });
        
        it('Should call req.isAuthenticated()', function() {
            let isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.loadAddProductPage(req, res);
            
            sinon.assert.calledOnce(isAuthenticatedStub);
        });
        
        it('Should call this.isAdmin()', function() {
            let isAdminStub = sinon.stub(controller, 'isAdmin');
            
            controller.loadAddProductPage(req, res);
            
            sinon.assert.calledOnce(isAdminStub);
        });
    });

    describe('loadRemovePage function tests', function() {
        it('Should call res.render()', function() {
            let renderStub = sinon.stub(res, 'render');
            
            controller.loadRemovePage(req, res);
            
            sinon.assert.calledOnce(renderStub);
        });

        it('Should call req.isAuthenticated()', function() {
            let isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.loadRemovePage(req, res);
            
            sinon.assert.calledOnce(isAuthenticatedStub);
        });

        it('Should call this.isAdmin()', function() {
            let isAdminStub = sinon.stub(controller, 'isAdmin');
            
            controller.loadRemovePage(req, res);
            
            sinon.assert.calledOnce(isAdminStub);
        });
    });

    describe('addProduct function tests', function() {
        it('Should call this.service.addProduct()', function() {
            let addProductStub = sinon.stub(service, 'addProduct');
            
            controller.addProduct(req, res);
            
            sinon.assert.calledOnce(addProductStub);
        });

        it('Should call res.render()', function() {
            let renderStub = sinon.stub(res, 'render');
            
            controller.addProduct(req, res);
            
            sinon.assert.calledOnce(renderStub);
        });

        it('Should call req.isAuthenticated()', function() {
            let isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.addProduct(req, res);
            
            sinon.assert.calledOnce(isAuthenticatedStub);
        });

        it('Should call this.isAdmin()', function() {
            let isAdminStub = sinon.stub(controller, 'isAdmin');
            
            controller.addProduct(req, res);
            
            sinon.assert.calledOnce(isAdminStub);
        });
    });
});