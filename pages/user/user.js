const wx2my = require('../../wx2my');
const Behavior = '';
var t = getApp(),
    e = require("../../util/util.js"),
    n = 1;

Page({
  data: {
    isClick: !0,
    userInfo: {},
    isshowbtn: !1
  },
  onLoad: function (t) {
    console.log(21312321312);
    n = 1;
    var i = this;
    t.froms ? (this.setData({
      isshowbtn: !0
    }), this.getAlipayOppenid(function () {
      e.userAuthor(function (t) {
        i.setData({
          userInfo: t.data
        });
      });
    })) : this.getUserInfo();
  },
  getAlipayOppenid: function (i) {
    var o = this;
    my.login({
      success: function (s) {
        s.code && e.httpRequest("/Auth/wechatOpendId", {
          code: s.code
        }, function (e) {
          if (e.data.openid) t.globalData.openID = e.data.openid, i();else {
            if (!(n < 3)) return void wx2my.showModal({
              title: "温馨提示",
              content: "尊敬的用户,您的openID未获取到,请您退出程序并再次进入重新获取"
            });
            wx2my.showToast({
              title: "openID获取失败",
              icon: "none"
            }), o.getAlipayOppenid(i), n++;
          }
        });
      }
    });
  },
  getUserInfo: function () {
    var t = this;
    e.httpRequest("/user/getInfo", {}, function (e) {
      1 == e.code && t.setData({
        userInfo: e.data
      });
    });
  },
  returnDeposit: function () {
    var t = this;
    t.data.isClick && (t.setData({
      isClick: !1
    }), t.data.userInfo.balance <= 0 ? (wx2my.showToast({
      title: "当前账户没有余额",
      icon: "none"
    }), t.setData({
      isClick: !0
    })) : wx2my.showModal({
      title: "退款提醒",
      content: "亲,是否退款",
      success: function (n) {
        n.confirm && e.httpRequest("/payment/refund", {}, function (e) {
          1 == e.code && (t.setData({
            isClick: !0
          }), wx2my.showToast({
            title: "已退款" + e.data.amount + "元",
            icon: "none"
          }), t.getUserInfo());
        }, function () {
          t.setData({
            isClick: !0
          });
        });
      }
    }));
  },
  returnFreeze: function () {
    var t = this;
    t.data.isClick && (t.setData({
      isClick: !1
    }), t.data.userInfo.deposit <= 0 ? (wx2my.showToast({
      title: "当前账户没有资金",
      icon: "none"
    }), t.setData({
      isClick: !0
    })) : wx2my.showModal({
      title: "解冻提醒",
      content: "亲,是否解冻资金",
      success: function (n) {
        n.confirm && e.httpRequest("/payment/unfreeze", {}, function (e) {
          t.setData({
            isClick: !0
          }), wx2my.showToast({
            title: e.msg,
            icon: "none"
          });
        }, function () {
          t.setData({
            isClick: !0
          });
        });
      }
    }));
  }
});