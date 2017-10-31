const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      UserService = require('../../../services/user-service.js'),
      AuthenticationController = require('../../../controllers/authentication-controller.js');

let expect = chai.expect;


describe('Authentication controller tests', function() {
    let req,
        res,
        service,
        controller;
    
    beforeEach(function() {
        service = {
            createUser: () => {}
        };
        req = {
            body: {
                username: 'username',
                email: 'email',
                password: 'password',
                urlProfilePicture: 'urlProfilePicture'
            },
            flash: () => {},
            logout: () => {}
        };
        res = {
            render: () => {},
            redirect: () => {}
        };
        controller = new AuthenticationController(service);
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
        it('The service property should not throw.', function() {
            expect(() => {
                controller.service = service;
            }).to.not.throw();
        });
        
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
    
    describe('loadLoginPage function tests', function() {
        it('Should call res.render()', function() {
            let resStub = sinon.stub(res, 'render');
            
            controller.loadLoginPage(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
    });
    
     describe('loadRegisterPage function tests', function() {
        it('Should call res.render()', function() {
            let resStub = sinon.stub(res, 'render');
            
            controller.loadRegisterPage(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
    });
    
    describe('register function tests', function() {
        it('Should call this.service.createUser()', function() {
            let createUserStub = sinon.stub(service, 'createUser');
            
            controller.register(req, res);
            
            sinon.assert.calledOnce(createUserStub);
        });
        
        it('Should call res.redirect()', function() {
            let resStub = sinon.stub(res, 'redirect');
            
            controller.register(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
    });
});