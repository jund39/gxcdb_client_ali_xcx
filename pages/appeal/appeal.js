const wx2my = require('../../wx2my');
//const Behavior = require('../../Behavior');
getApp();

var e = require("../../util/util.js");

Page({
  data: {
    qrcode: "",
    tel: ""
  },
  onLoad: function () {
    this.getInfo();
  },
  getInfo: function () {
    let local = this;
    e.httpRequest("/index/faqList", {}, function (t) {
      1 == t.code && local.setData({
        tel: t.data.tel
      });
    });
  },
  _scanCode: function () {
    var t = this;
    wx2my.scanCode({
      scanType: ["qrCode"],
      onlyFromCamera: !0,
      success: function (o) {
        if (o.result) {
          var r = o.result,
            a = e.returnQrcode(r);
          a.oid == e.config.oid && t.setData({
            qrcode: a.qrcode
          });
        }
      }
    });
  },
  to_call: function () {
    wx2my.makePhoneCall({
      phoneNumber: this.data.tel
    });
  },
  returnCheck: function () {
    var t = this;
    t.data.qrcode && (wx2my.showLoading({
      title: "请稍后..."
    }), e.httpRequest("/order/returnCheck", {
      device_code: t.data.qrcode
    }, function (e) {
      wx2my.hideLoading(), wx2my.showToast({
        title: e.msg,
        icon: "none"
      }), 1 == e.code && setTimeout(function () {
        wx2my.navigateBack({
          delta: 1
        });
      }, 1800);
    }));
  }
});