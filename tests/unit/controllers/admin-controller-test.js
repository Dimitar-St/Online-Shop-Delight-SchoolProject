const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      AdminController = require('../../../controllers/admin-controller.js');

let expect = chai.expect;


describe('Admin controller tests', function() {
    let req, 
        res,
        controller,
        service;
    
    beforeEach(function() {
        service = {
            getAllUsers: () => {},
            isAdmin: (user) => {},
            findByUsername: (username) => {
                return Promise.resolve();
            },
            addMoney: (user, money) => {}
        };
        req = {
            user: {
                role: ''
            },
            isAuthenticated: () => {},
            params: {
                username: 'username'
            },
            params: {
                username: 'kendal'
            },
            body: {
                money: '12'
            }
        };
        res = {
            render: () => {}
        };
        controller = new AdminController(service);
    });
    
    it('Expect AdminController class to exist', function() {
        expect(AdminController).to.exist;
    });
    
    it('Expect admin controller instance to have all functions.', function() {
        expect(controller.getAllUser).to.be.a('function');
    });
    
    describe('getAllUsers function tests', function() {
        it('Should call this.service.getAllUsers()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({}));
            
            controller.getAllUser(req, res);
            
            sinon.assert.calledOnce(getAllUsersStub);
        });
        
        it('Should call res.render()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({})),
                renderStub = sinon.stub(res, 'render');
            
            controller.getAllUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(renderStub);
                      });
        });
        
        it('Should call res.render()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({})),
                isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.getAllUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(isAuthenticatedStub);
                      });
        });
        
        it('Should call this.service.isAdmin()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({})),
                isAdminStub = sinon.stub(service, 'isAdmin');
            
            controller.getAllUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(isAdminStub);
                      });
        });
    });
    
    describe('editTheGivenUser function tests', function() {
        it('Should call this.service.findByUsername()', function() {
            let findBySernameStub = sinon.stub(service, 'findByUsername').returns(Promise.resolve({}));
            
            controller.editTheGivenUser(req, res);
            
            sinon.assert.calledOnce(findBySernameStub);
        });
        
        it('Should call res.render()', function() {
            let findByUsernameStub = sinon.stub(service, 'findByUsername').returns(Promise.resolve({})),
                renderStub = sinon.stub(res, 'render');
            
            controller.editTheGivenUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(renderStub);
                      });
        });
        
        it('Should call res.render()', function() {
            let findByUsernameStub = sinon.stub(service, 'findByUsername').returns(Promise.resolve({})),
                isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.editTheGivenUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(isAuthenticatedStub);
                      });
        });
    });

    describe('addMoney function tests', function() {
        it('Should call this.service.findByUsername()', function() {
            let findBySernameStub = sinon.stub(service, 'findByUsername').returns(Promise.resolve({}));
            
            controller.addMoney(req, res);
            
            sinon.assert.calledOnce(findBySernameStub);
        });

        it('Should call this.service.addMoney()', function() {
            let addMoneyStub = sinon.stub(service, 'addMoney').returns(Promise.resolve({}));
            
            controller.addMoney(req, res)
                      .then(() => {
                        sinon.assert.calledOnce(addMoneyStub);
                      });
        });

        it('Should call res.render()', function() {
            let renderStub = sinon.stub(res, 'render');
            
            controller.addMoney(req, res)
                      .then(() => {
                        sinon.assert.calledOnce(renderStub);
                      });
        });

        it('Should call req.isAuthenticated()', function() {
            let isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.addMoney(req, res)
                      .then(() => {
                        sinon.assert.calledOnce(isAuthenticatedStub);
                      });
        });
    });
});
