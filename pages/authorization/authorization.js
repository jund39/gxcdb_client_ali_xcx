const wx2my = require('../../wx2my');
const Behavior = '';
var t = getApp(),
    e = require("../../util/util.js");

Page({
  data: {
    isClick: !0,
    showDialog: true
  },
  onLoad: function (t) {},
  back: function () {
    wx2my.navigateBack({
      delta: 1
    });
  },
  bindgetuserinfos: function (i) {

    var n = this,
        o = i.detail.userInfo;
    e.httpRequest("/User/updateInfo", {
      openid: t.globalData.openID,
      userinfo: JSON.stringify(o)
    }, function (t) {
      1 == t.code ? n.back() : wx2my.showToast({
        title: t.msg,
        icon: "none"
      });
    });
  },

  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  }

});