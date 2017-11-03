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
        it('Should return true when the user is admin.', function() {
            req.user.role = 'admin';
            
            let result = controller.isAdmin(req);
            
            expect(result).to.be.true;
        });
        
        it("Should return false when the user isn't admin.", function() {
            req.user.role = 'user';
            
            let result = controller.isAdmin(req);
            
            expect(result).to.be.false;
        });
        
        it('Should return false when there is no user.', function() {
            let result = controller.isAdmin({});
            
            expect(result).to.be.false;
        });
    });
    
     describe('loadHomePage function tests', function() {
        it('Should call req.render()', function() {
           let resStub = sinon.stub(res, 'render');
            
           controller.loadHomePage(req, res);
            
           sinon.assert.calledOnce(resStub);
        });
         
         it('Should call req.isAuthenticated()', function() {
           let reqStub = sinon.stub(req, 'isAuthenticated');
            
           controller.loadHomePage(req, res);
            
           sinon.assert.calledOnce(reqStub);
        });
    });
});
