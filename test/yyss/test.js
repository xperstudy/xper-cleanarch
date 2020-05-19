"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var app_1 = require("../../src/function/app");
var request = require('supertest');
describe('First ', function () {
    it('사용자 이름이 이미 등록된 경우 “이미 등록된 사용자입니다.” 라는 메시지를 출력한다.', function () {
        request(app_1.app).post('/users')
            .send({ username: 'admin', password: 'admin1234', confirm: 'admin1234' })
            .set('Accept', 'application/json')
            .expect(500)
            .expect('Content-Type', /json/)
            .type('application/json')
            .end(function (err, res) {
            // 1. assert (error.message, "이미 등록된 사용자입니다.");
            console.log(res);
            console.log(res.error);
            if (!res.error)
                throw new chai_1.AssertionError("에러가 아님");
            if (res.error != "이미 등록된 사용자입니다.")
                throw new chai_1.AssertionError("스트링 동일하지 않음");
            else
                console.log(res.error);
        });
    });
    /**
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
     */
});
