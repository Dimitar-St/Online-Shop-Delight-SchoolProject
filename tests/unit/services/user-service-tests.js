const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      UserService = require('../../../services/user-service.js'),
      UserModelMock = require('./mocks/user-model-mock.js');

let expect = chai.expect;

describe('User service tests', function() {
    let service,
        userModelMock;
    
    beforeEach(function() {
        userModelMock = new UserModelMock();
        service = new UserService(userModelMock);
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
});