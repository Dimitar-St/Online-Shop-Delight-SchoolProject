const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      mongoose = require('mongoose'),
      UserService = require('../../../services/user-service.js'),
      UserModelMock = require('./mocks/user-model-mock.js');

let expect = chai.expect;

describe('User service tests', function() {
    let service,
        userModelMock,
        saveStub,
        findStub,
        updateStub;
    
    beforeEach(function() {
        
        userModelMock = new UserModelMock();
        service = new UserService(UserModelMock);
        saveStub = sinon.stub(UserModelMock.prototype, 'save').returns(Promise.resolve());
        findStub = sinon.stub(UserModelMock, 'find').returns(Promise.resolve('no err', [1, 3]));
        updateStub = sinon.stub(UserModelMock, 'update').returns(Promise.resolve());
    });
    
    afterEach(function() {
        saveStub.restore();
        findStub.restore();
        updateStub.restore();
    });
    
    it('Expect UserService class to exist', function() {
        expect(UserService).to.exist;
    });
    
    it('Expect user service instance to have all functions.', function() {
        expect(service.createUser).to.be.a('function');
        expect(service.createAdmin).to.be.a('function');
        expect(service.getAllUsers).to.be.a('function');
        expect(service.updateEmail).to.be.a('function');
        expect(service.updateProfileImage).to.be.a('function');
        expect(service.updateUsername).to.be.a('function');
        expect(service.isAdmin).to.be.a('function');
    });
    
    
    describe('createUser function tests', function() {
        it('Should call save()', function() {
            service.createUser('username', 'email', 'password', 'profilePic');
            
            sinon.assert.calledOnce(saveStub);
        });
    });
    
    describe('createAdmin function tests', function() {
        it('Should call save()', function() {
            service.createAdmin('username', 'email', 'password', 'profilePic');
            
            sinon.assert.calledOnce(saveStub);
        });
    });
    
    describe('getAllUsers function tests', function() {
        it('Should call save()', function() {
            service.getAllUsers();
            
            sinon.assert.calledOnce(findStub);
        });
    });
    
    describe('updateEmail function tests', function() {
        it('Should call update()', function() {
            service.updateEmail(1, 'newEmail');
            
            sinon.assert.calledOnce(updateStub);
        });
    });
    
    describe('updateProfileImage function tests', function() {
        it('Should call update()', function() {
            service.updateProfileImage(1, 'newEmail');
            
            sinon.assert.calledOnce(updateStub);
        });
    });
    
    describe('updateUsername function tests', function() {
        it('Should call find()', function() {
            service.updateUsername(1, 'newUsername');
            
            sinon.assert.calledOnce(findStub);
        });
        
//        it('Should call update()', function() {
//            service.updateUsername(1, 'newUsername')
//                   .then(() => {
//                        sinon.assert.calledOnce(updateStub);
//                   });
//        });
    });
});







