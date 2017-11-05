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
            isAdmin: (user) => {}
        };
        req = {
            user: {
                role: ''
            },
            isAuthenticated: () => {}
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
        it('Should this.service.getAllUsers()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({}));
            
            controller.getAllUser(req, res);
            
            sinon.assert.calledOnce(getAllUsersStub);
        });
        
        it('Should res.render()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({})),
                renderStub = sinon.stub(res, 'render');
            
            controller.getAllUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(renderStub);
                      });
        });
        
        it('Should res.render()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({})),
                isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.getAllUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(isAuthenticatedStub);
                      });
        });
        
        it('Should this.service.isAdmin()', function() {
            let getAllUsersStub = sinon.stub(service, 'getAllUsers').returns(Promise.resolve({})),
                isAdminStub = sinon.stub(service, 'isAdmin');
            
            controller.getAllUser(req, res)
                      .then(() => {
                         sinon.assert.calledOnce(isAdminStub);
                      });
        });
    });
});
