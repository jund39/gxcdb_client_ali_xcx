const wx2my = require('../../wx2my');
//const Behavior = require('../../Behavior');
getApp();

var t = require("../../util/util.js"),
    i = null;

Page({
  data: {
    info: {},
    password: [],
    isPasClick: !0,
    isOveClick: !0,
    isShowTip: !1,
    hour: "00",
    minute: "00",
    second: "00"
  },
  onLoad: function (t) {
    this.getDetail(t.order_id);
  },
  onUnload: function () {
    clearInterval(i);
  },
  getDetail: function (i) {
    var e = this;
    t.httpRequest("/order/wiredInfo", {
      order_id: i
    }, function (t) {
      if (1 == t.code) {
        var i = {
          order_id: t.data.order_id,
          time: t.data.time,
          expire_time: t.data.expire_time,
          is_end: t.data.is_end,
          qrcode: t.data.qrcode.replace(/(.{4})/g, '$1 '),
          isshowGetPaw: t.data.type,
          intro: t.data.intro
        };
        e.setData({
          password: t.data.password.toString().split(""),
          info: i
        }), e.countDown(t.data.expire_time - t.data.time);
      } else wx2my.showToast({
        title: t.msg,
        icon: "none"
      });
    });
  },
  overOrder: function () {
    var i = this;

    if (i.data.info.order_id == 'undefined' || i.data.info.order_id == null) {
      wx2my.showToast({
        title: "订单ID丢失！",
        icon: "none"
      });
      return false;
    }

    i.data.isOveClick && (i.setData({
      isOveClick: !1
    }), t.httpRequest("/order/wiredEnd", {
      order_id: i.data.info.order_id
    }, function (t) {
      1 == t.code && (wx2my.showToast({
        title: "结束订单成功",
        icon: "none"
      }), setTimeout(function () {
        i.setData({
          isOveClick: !0
        }), wx2my.redirectTo({
          url: "../indexAlipay/indexAlipay"
        });
      }, 1500));
    }, function () {
      i.setData({
        isOveClick: !0
      });
    }));
  },
  againGetPaw: function () {
    var e = this;
    e.data.isPasClick && (e.setData({
      isPasClick: !1
    }), clearInterval(i), t.httpRequest("/order/wiredPassword", {
      order_id: e.data.info.order_id
    }, function (t) {
      1 == t.code && (e.setData({
        password: t.data.password.toString().split("")
      }), e.countDown(t.data.expire_time - t.data.time), wx2my.showToast({
        title: "密码更换成功",
        icon: "none"
      }), setTimeout(function () {
        e.setData({
          isPasClick: !0
        });
      }, 1e3));
    }, function () {
      e.setData({
        isPasClick: !0
      });
    }));
  },
  openTips: function () {
    this.setData({
      isShowTip: !0
    });
  },
  closeTips: function () {
    this.setData({
      isShowTip: !1
    });
  },
  countDown: function (t) {
    function e() {
      var e = parseInt(t / 60 / 60 % 24),
          o = parseInt(t / 60 % 60),
          n = parseInt(t % 60);
      e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), t < 1 && (clearInterval(i), wx2my.showToast({
        title: "订单已结束",
        icon: "none"
      }), setTimeout(function () {
        a.overOrder();
      }, 1500)), a.setData({
        hour: e,
        minute: o,
        second: n
      });
    }

    var a = this;
    i = setInterval(function () {
      t--, e();
    }, 1e3);
  }
});