const wx2my = require('../../wx2my');
const Behavior = '';
getApp();

var t = require("../../util/util.js");

Page({
  data: {
    info: {},
    leaseTime: 0,
    checkNum: 0,
    isShowTip: !1,
    isClick: !0,
    swiperImg: [],
    interval: 5e3
  },
  onLoad: function (t) {
    var e = this;
    this.getSwiperImg(), e.setData({
      info: JSON.parse(t.data)
    });
  },
  changeTime: function (t) {
    var e = this,
        a = t.currentTarget.dataset.time;
    e.setData({
      leaseTime: a
    });
  },
  goPayment: function () {
    var e = this;
    e.data.isClick && (wx2my.showLoading({
      title: "请稍后...",
      mask: !0
    }), e.setData({
      isClick: !1
    }), e.data.leaseTime ? t.httpRequest("/lease/wiredLease", {
      qrcode: e.data.info.qecode,
      time: e.data.leaseTime
    }, function (a) {
      switch (a.code) {
        case 1:
          e.setData({
            isClick: !0
          }), wx2my.hideLoading(), wx2my.navigateTo({
            url: "../successfulPayment/successfulPayment?order_id=" + a.data.order_id
          });
          break;
        case 3:
          t.alipayPayment(a.data.amount, 2, function (t) {
            e.setData({
              isClick: !0
            }), e.goPayment();
          }, function () {
            e.setData({
              isClick: !0
            }), wx2my.hideLoading();
          });
          break;

        default:
          e.setData({
            isClick: !0
          }), wx2my.hideLoading();
      }
    }, function () {
      e.setData({
        isClick: !0
      }), wx2my.hideLoading();
    }) : (e.setData({
      isClick: !0
    }), wx2my.showToast({
      title: "请选择租借时长",
      icon: "none"
    })));
  },
  checkStatus: function (e) {
    var a = this,
        i = a.data.checkNum;
    i++, a.setData({
      checkNum: i
    }), a.data.checkNum < 10 ? t.httpRequest("/payment/orderStatus", {
      order_no: e
    }, function (t) {
      1 == t.data.status ? (wx2my.hideLoading(), a.goPayment()) : setTimeout(function () {
        a.checkStatus(e);
      }, 1500);
    }, function () {
      wx2my.hideLoading();
    }) : (wx2my.showToast({
      title: "[02]订单异常,请联系客服",
      duration: 2e3
    }), wx2my.hideLoading());
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
  getSwiperImg: function () {
    var e = this;
    t.httpRequest("/index/ad", {}, function (t) {
      1 == t.code ? e.setData({
        swiperImg: t.data.list,
        interval: 1e3 * t.data.time
      }) : wx2my.showToast({
        title: t.info,
        icon: "none"
      });
    });
  }
});