const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      sinonChai = require('sinon-chai'),
      UserService = require('../../../services/user-service.js'),
      UserController = require('../../../controllers/user-controller.js');

chai.should();
chai.use(sinonChai);

let expect = chai.expect;

describe('User controller tests', function() {
    let req, 
        res,
        service,
        controller;
    
    beforeEach(function() {
        req = {
            isAuthenticated: () => {},
            user: {
                id: 1,
                username: 'username'
            },
            body: { 
                newEmail: 'newEmail',
                newUsername: 'newUsername'
            }
        };
        res = {
            render: () => {},
            redirect: () => {}
        };
        service = {
            isAdmin: (user) => {},
            updateEmail: (id, newEmail) => {},
            updateProfileImage: (id, newImage) => {},
            updateUsername: (id, newUsername) => {}
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
    
    describe('updateEmail function tests', function() {
        it('Should this.service.updateEmail()', function() {
            let updateEmailStub = sinon.stub(service, 'updateEmail');
            
            controller.updateEmail(req, res);
            
            sinon.assert.calledOnce(updateEmailStub);
        });
        
        it('Should res.redirect()', function() {
            let resStub = sinon.stub(res, 'redirect');
            
            controller.updateEmail(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
    });
    
     describe('updateProfileImage function tests', function() {
        it('Should this.service.updateProfileImage()', function() {
            let updateProfileImageStub = sinon.stub(service, 'updateProfileImage');
            
            controller.updateProfileImage(req, res);
            
            sinon.assert.calledOnce(updateProfileImageStub);
        });
        
        it('Should res.redirect()', function() {
            let resStub = sinon.stub(res, 'redirect');
            
            controller.updateProfileImage(req, res);
            
            sinon.assert.calledOnce(resStub);
        });
    });
    
    describe('updateUsername function tests', function() {
        it('Should this.service.updateUsername()', function() {
            let updateUsernameStub = sinon.stub(service, 'updateUsername').returns(Promise.resolve([]));
            
            controller.updateUsername(req, res);
            
            sinon.assert.calledOnce(updateUsernameStub);
        });
        
        it('Should res.render()', function() {
            let updateUsernameStub = sinon.stub(service, 'updateUsername').returns(Promise.resolve([])),
                renderStub = sinon.stub(res, 'render');
            
            controller.updateUsername(req, res)
                      .then(() => {
                          sinon.assert.calledOnce(renderStub);
                      });
        });
        
        it('Should req.isAuthenticated()', function() {
            let updateUsernameStub = sinon.stub(service, 'updateUsername').returns(Promise.resolve([])),
                isAuthenticatedStub = sinon.stub(req, 'isAuthenticated');
            
            controller.updateUsername(req, res)
                      .then(() => {
                          sinon.assert.calledOnce(isAuthenticatedStub);
                      });
        });
        
        it('Should this.service.updateUsername()', function() {
            let updateUsernameStub = sinon.stub(service, 'updateUsername').returns(Promise.resolve([])),
                isAdminStub = sinon.stub(service, 'isAdmin');
            
            controller.updateUsername(req, res)
                      .then(() => {
                          sinon.assert.calledOnce(isAdminStub);
                      });
        });
    });
    
});