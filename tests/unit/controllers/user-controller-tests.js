const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      UserService = require('../../../services/user-service.js'),
      UserController = require('../../../controllers/user-controller.js');

let expect = chai.expect;

describe('User controller tests', function() {
    let req, 
        res,
        service,
        controller;
    
    beforeEach(function() {
        req = {
            isAuthenticated: () => {},
            user: { }
        };
        res = {
            render: () => {}
        };
        service = {
            isAdmin: (user) => {}
        };
        controller = new UserController(service);
    });
    
    it('Expect UserController class to exist', function() {
        expect(UserController).to.exist;
    });
    
    it('Expect user controller instance to have all functions.', function() {
        expect(controller.loadProfilePage).to.be.a('function');
        expect(controller.loadSettingsPage).to.be.a('function');
        expect(controller.updateEmail).to.be.a('function');
        expect(controller.updateProfileImage).to.be.a('function');
        expect(controller.loadOrderPage).to.be.a('function');
        expect(controller.updateUsername).to.be.a('function');
    });
    
    describe('loadProfilePage function tests', function() {
        it('Should res.render()', function() {
            let resStub = sinon.stub(res, 'render');
            
            controller.loadProfilePage(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
        
        it('Should req.isAuthenticated()', function() {
            let reqStub = sinon.stub(req, 'isAuthenticated');
            
            controller.loadProfilePage(req, res);
            
            sinon.assert.calledOnce(reqStub);
        });
        
        it('Should this.service.isAdmin()', function() {
            let isAdminStub = sinon.stub(service, 'isAdmin');
            
            controller.loadProfilePage(req, res);
            
            sinon.assert.calledOnce(isAdminStub);
        });
    });
    
    describe('loadSettingsPage function tests', function() {
        it('Should res.render()', function() {
            let resStub = sinon.stub(res, 'render');
            
            controller.loadSettingsPage(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
        
        it('Should req.isAuthenticated()', function() {
            let reqStub = sinon.stub(req, 'isAuthenticated');
            
            controller.loadSettingsPage(req, res);
            
            sinon.assert.calledOnce(reqStub);
        });
        
        it('Should this.service.isAdmin()', function() {
            let isAdminStub = sinon.stub(service, 'isAdmin');
            
            controller.loadSettingsPage(req, res);
            
            sinon.assert.calledOnce(isAdminStub);
        });
    });
    
});