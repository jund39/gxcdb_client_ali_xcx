const wx2my = require('../../wx2my');
const Behavior = '';
//const Behavior = require('../Behavior');
getApp();

var t = require("../../util/util.js");

Page({
  data: {
    data: {}
  },
  onLoad: function () {
    this.getInfo();
  },
  getInfo: function () {
    var a = this;
    t.httpRequest("/index/about", {}, function (t) {
      1 == t.code && a.setData({
        data: t.data
      });
    });
  }
});