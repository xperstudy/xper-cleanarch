import { expect } from 'chai';
import { app } from '../../src/function/app';

const request = require('supertest');

describe('First ', function() {
    it('register user', function() {
        request(app).post('/users')
            .send({ username: 'user01', password: 'pw', confirm: 'pw' })
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .type('application/json')
            .end(function(err:Error,res: any) { if ( err ) throw err; });
    });

    it('boolean', function() {
        expect(true).to.equal(true);
    })

    it('/hello', function() {
        request(app).get('/hello').expect(200).end(function(err:Error,res) { if ( err ) throw err; });
    })

    it('/login', function() {
        request(app).get('/login')
            .expect(200)
            .expect('/login')
            .end(function(err:Error,res: any) { if ( err ) throw err; });
    })
})
