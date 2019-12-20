const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET/frequency endpoint', () => {
  it('should count the frequency a letter occurs in a string', () => {
    return supertest(app)
      .get('/frequency')
      .query({ s:})
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
        // expect(res.body).to.have.lengthOf.at.least(1);
        // expect(res.body).to.include.members([1,2,3,4,5]);
      });
  });
});