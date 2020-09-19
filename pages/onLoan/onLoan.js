const wx2my = require('../../wx2my');
//const Behavior = require('../../Behavior');
getApp(), require("../../util/util.js");
var e = null;
Page({
  data: {
    info: {}
  },
  onLoad: function (t) {
    var a = this;
    (e = my.createInnerAudioContext()).src = "/static/mp3/success.mp3", e.play(), a.setData({
      info: JSON.parse(t.data)
    }), setTimeout(function () {
      wx2my.navigateTo({
        url: "../leaseDetail/leaseDetail?order_id=" + a.data.info.order_id
      });
    }, 2e3);
  }
});