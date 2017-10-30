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
        
});