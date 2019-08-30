'use strict';

"use strict";

const { server } = require("./../src/server.js");
const supergoose = require("./supergoose.js");
const mockRequest = supergoose(server);
// const express = require("express");
// const http = require("http");

describe("Testing the routes in the app", () => {


    it('the data is peanut butter', async () => {
      jest.setTimeout(300000);
      const data = await mockRequest.get('/');
      expect(data)
      done();
    });
  

  it("Get token should return ", () => {
    return mockRequest.get("/callback").expect(200);
  });

  it('Get access', () => {
    return mockRequest.get('/login').expect(200);
  });

  it('Return currently playing track', () => {
    return mockRequest.get('/nowplaying').expect(200);
  })

});

describe("server working", () => {
  it("should exist", () => {
    console.log('This is the server', server)
    // expect(server).toBeDefined();
    // done();
  });
});
