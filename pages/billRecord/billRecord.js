const wx2my = require('../../wx2my');
//const Behavior = require('../../Behavior');
getApp();

var t = require("../../util/util.js"),
    a = {
  page: 1,
  page_size: 10
};

Page({
  data: {
    total: 0,
    list: []
  },
  onLoad: function () {
    a = {
      page: 1,
      page_size: 10
    }, this.getBillList();
  },
  getBillList: function () {
    var i = this;
    wx2my.showLoading({
      title: "加载中..."
    });
    var e = [],
        s = i.data.list;
    t.httpRequest("/payment/log", {
      page: a.page,
      page_size: a.page_size
    }, function (t) {
      1 == t.code && (i.setData({
        total: t.data.total
      }), a.page > 1 ? (e = t.data.list, i.setData({
        list: s.concat(e)
      })) : i.setData({
        list: t.data.list
      })), wx2my.hideLoading();
    }, function () {
      wx2my.hideLoading();
    });
  },
  onReachBottom: function () {
    var t = this;
    t.data.total > t.data.list.length && (a.page++, t.getBillList());
  }
});