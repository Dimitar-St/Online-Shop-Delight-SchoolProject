const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      HomeController = require('../../../controllers/home-controller.js');

let expect = chai.expect;


describe('Home controller tests', function() {
    let req, 
        res,
        controller;
    
    beforeEach(function() {
        req = {
            user: {
                role: ''
            },
            isAuthenticated: () => {}
        };
        res = {
            render: () => {}
        };
        controller = new HomeController();
    });
    
    it('Expect HomeController class to exist', function() {
        expect(HomeController).to.exist;
    });
    
    it('Expect home controller instance to have all functions.', function() {
        expect(controller.loadHomePage).to.be.a('function');
        expect(controller.loadForUsPage).to.be.a('function');
        expect(controller.isAdmin).to.be.a('function');
    });
    
    describe('isAdmin function tests', function() {
        it('Should return true', function() {
            req.user.role = 'admin';
            
            let result = controller.isAdmin(req);
            
            expect(result).to.be.true;
        });
    });
});













