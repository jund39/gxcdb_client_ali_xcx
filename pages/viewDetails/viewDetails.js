const wx2my = require('../../wx2my');
const Behavior = '';
getApp();

var t = require("../../util/util.js");

Page({
  data: {
    info: {},
    type: 2
  },
  onLoad: function (t) {
    this.getDetail(t.order_id), this.setData({
      type: t.type || 2
    }), wx2my.setStorage({
      key: "hui",
      data: !1
    });
  },
  onUnload: function () {
    var t = getCurrentPages(),
        e = t.length - 2;
    "pages/leaseDetail/leaseDetail" == t[e].route && wx2my.navigateBack({
      delta: e - 1
    });
  },
  getDetail: function (e) {
    var a = this;
    t.httpRequest("/order/orderInfo", {
      order_id: e
    }, function (t) {
      1 == t.code && a.setData({
        info: t.data
      });
    });
  },
  payStatus: function (e) {
    var a = e.currentTarget.dataset.id;
    t.httpRequest("/order/payStatus", {
      order_id: a
    }, function (t) {
      wx2my.showToast({
        title: t.msg,
        duration: 4e3
      }), 1 == t.data.status && setTimeout(function () {
        wx2my.navigateBack({
          delta: 1
        });
      }, 4e3);
    });
  }
});