const wx2my = require('../../wx2my');
const Behavior = '';
getApp();

var e = require("../../util/util.js");

Page({
  data: {
    qrcode: ""
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