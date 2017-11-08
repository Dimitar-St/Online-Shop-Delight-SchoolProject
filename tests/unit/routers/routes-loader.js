const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      RoutesLoader = require('../../../routers/routes-loader.js');

let expect = chai.expect;


describe('Routes loader tests', function() {
    let loader;
    
    beforeEach(function() {
        loader = new RoutesLoader(() => {}, () => { });
    });
    
    describe('App property tests', function() {
        it('The app property should not throw.', function() {
            expect(() => {
                loader.app = () => {};
            }).to.not.throw();
        });
        
        it('The app property should throw error when is passed a null value.', function() {
            expect(() => {
                loader.app = null;
            }).to.throw('Invalid app value');
        }); 
        
        it('The app property should throw error when is passed a undefined value.', function() {
            expect(() => {
                loader.app = undefined;
            }).to.throw('Invalid app value');
        }); 
        
        it('The app property should throw error when is passed a array value.', function() {
            expect(() => {
                loader.app = [];
            }).to.throw('Invalid app value');
        }); 
        
        it('The app property should throw error when is passed a array value.', function() {
            expect(() => {
                loader.app = '';
            }).to.throw('Invalid app value');
        }); 
        
        it('The app property should throw error when is passed a empty object value.', function() {
            expect(() => {
                loader.app = {};
            }).to.throw('Invalid app value');
        }); 
    });
    
    describe('Router property tests', function() {
        it('The router property should not throw.', function() {
            expect(() => {
                loader.router = () => {};
            }).to.not.throw();
        });
        
        it('The router property should throw error when is passed a null value.', function() {
            expect(() => {
                loader.router = null;
            }).to.throw('Invalid router value');
        }); 
        
        it('The router property should throw error when is passed a undefined value.', function() {
            expect(() => {
                loader.router = undefined;
            }).to.throw('Invalid router value');
        }); 
        
        it('The router property should throw error when is passed a array value.', function() {
            expect(() => {
                loader.router = [];
            }).to.throw('Invalid router value');
        }); 
        
        it('The router property should throw error when is passed a array value.', function() {
            expect(() => {
                loader.router = '';
            }).to.throw('Invalid router value');
        }); 
        
        it('The router property should throw error when is passed a empty object value.', function() {
            expect(() => {
                loader.router = {};
            }).to.throw('Invalid router value');
        }); 
    });
});
