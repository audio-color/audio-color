"use strict";

const { server } = require("../src/server.js");

const supergoose = require("./supergoose.js");
const mockRequest = supergoose(server);
const apiRoutes = require('./../apiRouter/apiRouter.js')
// const express = require("express");
// const http = require("http");

describe("Testing the routes in the app", () => {
  it("Get token should return ", () => {
    return mockRequest.get("/callback").expect(200);
  });

  it("Get access", () => {
    return mockRequest.get("/login").expect(200);
  });

  it("Return currently playing track", () => {
    return mockRequest.get("/nowplaying").expect(200);
  });

  it("It will test the route colorize", () => {
    return mockRequest.get("/colorize").expect(200);
  })
});


describe("server working", () => {
  it("should exist", done => {
    console.log("This is the server", server);
    expect(server).toBeDefined();
    done();
  });
});
