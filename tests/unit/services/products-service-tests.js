const mocha = require('mocha'),
      chai = require('chai'),
      sinon = require('sinon'),
      ProductService = require('../../../services/products-service.js'),
      ProductModelMock = require('./mocks/product-model-mock');

let expect = chai.expect;

describe('Products service tests', function() {
      let service,
      productModelMock;

      beforeEach(function() {
            service = new ProductService(ProductModelMock);
      });

      it('Expect ProductService class to exist', function() {
          expect(ProductService).to.exist;
      });
      
      it('Expect user service instance to have all functions.', function() {
          expect(service.addProduct).to.be.a('function');
          expect(service.removeProduct).to.be.a('function');
          expect(service.getAllProducts).to.be.a('function');
      });

      describe('Product property tests', function() {
            it('Should throw when is passed a null value.', function() {
                  expect(() => {
                     service.Product = null;
                  }).to.throw('The model is not valid.');
            });

            it('Should throw when is passed a indefined value.', function() {
                  expect(() => {
                     service.Product = undefined;
                  }).to.throw('The model is not valid.');
            });

            it('Should throw when is passed a NaN value.', function() {
                  expect(() => {
                     service.Product = NaN;
                  }).to.throw('The model is not valid.');
            });
      });

      describe('addProduct function tests', function() {
            it('Should call save()', function() {
                  expect(() => {
                     service.Product = null;
                  }).to.throw('The model is not valid.');
            });
      });
 });