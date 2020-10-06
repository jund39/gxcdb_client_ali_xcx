const wx2my = require('../../wx2my');
const Behavior = '';
getApp();

var t = require("../../util/util.js");

Page({
  data: {
    question: {}
  },
  onLoad: function (t) {
    this.getInfo(t.id);
  },
  getInfo: function (i) {
    var e = this;
    t.httpRequest("/index/faqDetail", {
      id: i
    }, function (t) {
      1 == t.code && (e.setData({
        question: t.data
      }), wx2my.setNavigationBarTitle({
        title: t.data.title
      }));
    });
  }
});