const wx2my = require('../../wx2my');
const Behavior = '';
var e = getApp(),
    a = require("../../util/util.js");

Page({
  data: {
    seller: {}
  },
  onLoad: function (t) {
    var l = this;
    a.httpRequest("/Seller/info", {
      longitude: e.globalData.longitude,
      latitude: e.globalData.latitude,
      id: t.id
    }, function (e) {
      let val = e.data;
      let {
        shop_end,
        shop_start
      } = val;
      let time_start = shop_start.split(':');
      let time_end = shop_end.split(':');
      let times = new Date();
      let time_this_hours = times.getHours();
      let time_this_minutes = times.getMinutes();

      if (time_this_hours >= parseInt(time_start[0])) {
        if (time_this_hours < parseInt(time_end[0])) {
          val.openStatus = 1;
        } else if (time_this_hours == parseInt(time_end[0]) && parseInt(time_end[1]) > 0) {
          if (time_this_minutes < parseInt(time_end[1])) {
            val.openStatus = 1;
          } else {
            val.openStatus = 0;
          }
        } else {
          val.openStatus = 0;
        }
      } else {
        val.openStatus = 0;
      }

      console.log(e.data);
      1 == e.code && l.setData({
        seller: val
      });
    });
  },
  openLocation: function () {
    var e = this;
    wx2my.openLocation({
      latitude: Number(e.data.seller.latitude),
      longitude: Number(e.data.seller.longitude),
      name: e.data.seller.name,
      address: e.data.seller.area + e.data.seller.address
    });
  }
});