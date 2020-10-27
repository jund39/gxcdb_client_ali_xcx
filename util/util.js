const wx2my = require('../wx2my');
//const Behavior = require('../Behavior');
function t(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zy@20200608";
  e = s.hexMD5(e);

  for (var n = 0, o = (t = r.base64decode(t)).length, a = e.length, i = "", c = "", u = 0; u < o; u++) n == a && (n = 0), i += e.substr(n, 1), n++;

  for (u = 0; u < o; u++) t.substr(u, 1).charCodeAt() < i.substr(u, 1).charCodeAt() ? c += String.fromCharCode((t.substr(u, 1) + 256).charCodeAt() - i.substr(u, 1).charCodeAt()) : c += String.fromCharCode(t.substr(u, 1).charCodeAt() - i.substr(u, 1).charCodeAt());

  return c;
}

function e() {
  var t = Date.parse(new Date()) / 1e3;
  return {
    timestamp: t = t.toString(),
    hash: s.hexMD5(c.headerkey + t)
  };
}
function n(t, n, o) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
  wx2my.request({
    url: c.host + t,
    method: "POST",
    header: {
      "content-type": "application/json",
      openid: i.globalData.openID,
      hash: e().hash,
      time: e().timestamp.toString(),
      ocode: c.ocode,
      client: "alipay"
    },
    data: n,
    dataType: "json",
    success: function (t) {
      switch (t.data || (a(), wx2my.showToast({
        title: "系统繁忙",
        icon: "none"
      })), t.data.code) {
        case 0:
          a(), wx2my.showToast({
            title: t.data.msg,
            icon: "none"
          });
          break;

        case 401:
          a(), wx2my.showToast({
            title: "未登录/未授权",
            icon: "none"
          });
          break;

        case 403:
          a(), wx2my.showToast({
            title: "非法请求",
            icon: "none"
          });
          break;

        default:
          o(t.data);
      }
    },
    fail: function (t) {
      a(), wx2my.showToast({
        title: "系统繁忙",
        icon: "none"
      });
    }
  });
}

function o(e, n) {
  var o = null,
      a = null,
      i = null;
  return -1 != e.indexOf("&&cineda=") ? (o = e.indexOf("&&cineda="), a = t(a = e.substring(n, o)), i = e.substring(o + 9)) : -1 != e.indexOf("&&t=") && (o = e.indexOf("&&t="), a = t(a = e.substring(n, o)), i = e.substring(o + 4)), {
    oid: a,
    type: "cab",
    qrcode: i
  };
}

function a(e, n) {
  var o = e.indexOf("&&t="),
      a = e.substring(n, o);
  return {
    oid: a = t(a),
    type: "line",
    qrcode: e.substring(o + 4)
  };
}

var i = getApp(),
    s = require("./md5.js"),
    r = require("./base64.js"),
    c = {
  oid: 1,
  ocode: "youdiankeji",
  host: "https://www.youdiankejike.com/app",
  qrcodeurl: "https://www.youdiankejike.com",
  headerkey: "zhongyun@2020&8889"
};

module.exports = {
  config: c,
  mwdecrypt: t,
  httpRequest: n,
  e,
  getUserInfoAlipay: function (t) {
    wx2my.getLocation({
      success: function (t) {
        i.globalData.longitude = t.longitude, i.globalData.latitude = t.latitude;
      }
    }), wx2my.getSetting({
      success: function (e) {
        e.authSetting["scope.userInfo"] && my.getUserInfo({
          success: function (e) {
            console.log(e), t(e);
          }
        });
      }
    });
  },
  alipayPayment: function (t, e, o, a) {
    n("/payment/recharge", {
      amount: t,
      pay_type: "alipay",
      type: e
    }, function (t) {
      if (1 == t.code) {
        var e = t.data.params;
        my.tradePay({
            tradeNO: e.out_trade_no, // 调用 小程序支付 时必填
            //orderStr: e.nonceStr, // 调用 资金授权 时必填
            success (res) {
              o(e.out_trade_no);
            },
            fail (t) {
              wx2my.showToast({
                title: "支付失败",
                icon: "none"
              }), a();
            },
            complete (t) {
              wx2my.hideLoading();
            },
        })
      } else wx2my.hideLoading(), wx2my.showToast({
        title: "支付失败",
        icon: "none"
      });
    });
  },
  adPayment: function (amount, type, suc = () => {}, fai = () => {}, com = () => {}) {
    //广告相关支付
    n("/payment/adPayOrder", {
      amount: amount,
      pay_type: "alipay"
    }, function (t) {
      if (1 == t.code) {
        var e = t.data.params;
        my.tradePay({
          tradeNO: e.out_trade_no, // 调用 小程序支付 时必填
          //orderStr: e.nonceStr, // 调用 资金授权 时必填
          success (res) {
            o(e.out_trade_no);
          },
          fail (t) {
            wx2my.showToast({
              title: "支付失败",
              icon: "none"
            }), a();
          },
          complete (t) {
            wx2my.hideLoading();
          },
        })
      // if (1 == t.code) {
      //   var e = t.data.params;
      //   wx.requestPayment({
      //     timeStamp: e.timeStamp,
      //     nonceStr: e.nonceStr,
      //     package: e.package,
      //     signType: e.signType,
      //     paySign: e.paySign,
      //     success: function () {
      //       suc(t.data.order_no);
      //     },
      //     fail: function (res) {
      //       fai(t.data.order_no);
      //     },
      //     complete: function () {
      //       com(t.data.order_no);
      //     }
      //   });
      } else {
        wx2my.hideLoading(), wx2my.showToast({
          title: "支付失败",
          icon: "none"
        });
      }

      ;
    });
  },
  returnQrcode: function (t) {
    let e = c.qrcodeurl,
        n = null,
        url = t.substring(0, t.indexOf('/', 8));

    if (url === e) {
      if (t.includes("/Lease?objhxy=")) {
        n = o(t, e.length + 14);
      } else {
        if (t.includes("/Lease?o=")) {
          n = o(t, e.length + 9);
        } else {
          if (t.includes("/Xc?o=")) {
            n = a(t, e.length + 6);
          }
        }
      }
    }

    return n;
  },
  userAuthor: function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
    n("/user/getInfo", {}, function (n) {
      1 == n.code && (1 == n.data.is_auth ? t(n) : (e(), wx2my.navigateTo({
        url: "/pages/authorization/authorization"
      })));
    }, function () {
      e();
    });
  }
};