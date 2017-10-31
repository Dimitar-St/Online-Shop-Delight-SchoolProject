const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      UserService = require('../../../services/user-service.js'),
      AuthenticationController = require('../../../controllers/authentication-controller.js');

let expect = chai.expect;


describe('Authentication controller tests', function() {
    let req,
        res,
        serviceStub,
        controller;
    
    beforeEach(function() {
        serviceStub = sinon.createStubInstance(UserService);
        req = {
            body: {
                username: 'username',
            },
            flash: () => {},
            logout: () => {}
        };
        res = {
            render: () => {},
            redirect: () => {}
        };
        controller = new AuthenticationController(serviceStub);
    });
    
    it('Expect AuthenticationController class to exist', function() {
        expect(AuthenticationController).to.exist;
    });
    
    it('Expect authentication consotroller instance to have all functions.', function() {
        expect(controller.loadLoginPage).to.be.a('function');
        expect(controller.loadRegisterPage).to.be.a('function');
        expect(controller.register).to.be.a('function');
        expect(controller.login).to.be.a('function');
        expect(controller.logout).to.be.a('function');
    });
    
    describe('Service property tests', function() {
       it('The service property should throw error when is passed a null value.', function() {
            expect(() => {
                controller.service = null;
            }).to.throw('The passed service is null');
        }); 
        
        it('The service property should throw error when is passed a undefined value.', function() {
            expect(() => {
                controller.service = undefined;
            }).to.throw('The passed service is null');
        }); 
    }); 
});