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
    isClick: !0,
    status: 1,
    list: []
  },
  onLoad: function () {
    a = {
      page: 1,
      page_size: 10
    }, this.getOrderList();
  },
  onReachBottom: function () {
    var t = this;
    t.data.total > t.data.list.length && (a.page++, t.getOrderList());
  },
  getOrderList: function () {
    var e = this,
        i = [],
        s = e.data.list;
    t.httpRequest("/order/orderList", {
      page: a.page,
      page_size: a.page_size
    }, function (t) {
      1 == t.code && (e.setData({
        total: t.data.total
      }), a.page > 1 ? (i = t.data.list, e.setData({
        list: s.concat(i)
      })) : e.setData({
        list: t.data.list
      }));
    });
  },
  goDetail: function (a) {
    let order_id = a.currentTarget.dataset.id;
    let order_status = a.currentTarget.dataset.status;
    wx2my.navigateTo({
      url: "../viewDetails/viewDetails?order_id=" + order_id + "&type=" + order_status
    });
  },
  payStatus: function (e) {
    var i = this,
        s = e.currentTarget.dataset.id;
    t.httpRequest("/order/payStatus", {
      order_id: s
    }, function (t) {
      wx2my.showToast({
        title: t.msg,
        duration: 5e3
      }), 1 == t.data.status && (a = {
        page: 1,
        page_size: 10
      }, i.getOrderList());
    });
  }
});