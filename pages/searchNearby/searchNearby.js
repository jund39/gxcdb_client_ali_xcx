const wx2my = require('../../wx2my');
const Behavior = '';
var e = getApp(),
    a = require("../../util/util.js"),
    t = {
  page: 1,
  page_size: 10
};

Page({
  data: {
    total: 0,
    nearySeller: []
  },
  onLoad: function () {
    t = {
      page: 1,
      page_size: 10
    }, this.getNearySellerInfo();
  },
  onReachBottom: function () {
    var e = this;
    e.data.total > e.data.nearySeller.length && (t.page++, e.getNearySellerInfo());
  },
  goSeller: function (e) {
    var a = e.currentTarget.dataset.id;
    wx2my.navigateTo({
      url: "../seller/seller?id=" + a
    });
  },
  getNearySellerInfo: function () {
    var l = this;
    wx2my.showLoading({
      title: "加载中..."
    });
    var i = [],
        r = l.data.nearySeller;
    a.httpRequest("/Seller/sellerList", {
      longitude: e.globalData.longitude,
      latitude: e.globalData.latitude,
      isList: !0,
      page_no: t.page,
      page_size: t.page_size
    }, function (e) {
      let lists = e.data.list;

      for (let i = 0; i < lists.length; i++) {
        let val = lists[i];
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
      }

      1 == e.code && (l.setData({
        total: e.data.total
      }), t.page > 1 ? (i = e.data.list, l.setData({
        nearySeller: r.concat(i)
      })) : l.setData({
        nearySeller: e.data.list
      })), wx2my.hideLoading();
    }, function () {
      wx2my.hideLoading();
    });
  }
});