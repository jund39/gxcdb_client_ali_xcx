const wx2my = require('../../wx2my');
const Behavior = '';
getApp();

var t = require("../../util/util.js");

Page({
  data: {
    question: [],
    tel: ""
  },
  onLoad: function () {
    this.getInfo();
  },
  makePhoneCall: function (t) {
    var e = t.currentTarget.dataset.tel;
    wx2my.makePhoneCall({
      phoneNumber: e.toString()
    });
  },
  getInfo: function () {
    var e = this;
    t.httpRequest("/index/faqList", {}, function (t) {
      1 == t.code && e.setData({
        question: t.data.list,
        tel: t.data.tel
      });
    });
  },
  goDetail: function (t) {
    var e = t.currentTarget.dataset.id;
    wx2my.navigateTo({
      url: "../problemDetail/problemDetail?id=" + e
    });
  }
});