const wx2my = require('../../wx2my');
const Behavior = '';
var e = getApp(),
    t = require("../../util/util.js"),
    a = null,
    n = null;

Page({
  data: {
    nearySeller: [],
    time: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    order_id: "",
    overtime: !1,
    amount: 0
  },
  onLoad: function (e) {
    this.getNearySellerInfo(), this.getDetail(e.order_id), this.isReturnSuccess(e.order_id);

    try {
      wx2my.setStorageSync("hui", !0);
    } catch (e) {}
  },
  onShow: function () {
    try {
      var e = wx2my.getStorageSync("hui");
      this.data.order_id && e && (this.getDetail(this.data.order_id), this.isReturnSuccess(this.data.order_id));
    } catch (e) {}
  },
  onHide: function () {
    clearInterval(a), clearInterval(n);
  },
  onUnload: function () {
    clearInterval(a), clearInterval(n);
    var e = getCurrentPages();
    "pages/onLoan/onLoan" == e[e.length - 2].route && wx2my.navigateBack({
      delta: 2
    });
  },
  goSeller: function (e) {
    var t = e.currentTarget.dataset.id;
    wx2my.navigateTo({
      url: "../seller/seller?id=" + t
    });
  },
  getNearySellerInfo: function () {
    var a = this;
    t.httpRequest("/Seller/sellerList", {
      longitude: e.globalData.longitude,
      latitude: e.globalData.latitude
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

      1 == e.code && a.setData({
        nearySeller: e.data.list
      });
    });
  },
  getDetail: function (e) {
    var n = this;
    t.httpRequest("/order/orderDetail", {
      order_id: e
    }, function (e) {
      if (1 == e.code) {
        n.setData({
          order_id: e.data.order_id,
          amount: e.data.amount,
          time: e.data.time,
          overtime: e.data.overtime
        });
        var t = e.data.time;
        a = setInterval(function () {
          t++, n.countDown(t);
        }, 1e3);
      }
    });
  },
  deviceEnd: function () {
    var e = this;
    wx2my.showModal({
      title: "温馨提示",
      content: "结束超时订单，押金不退",
      success: function (a) {
        a.confirm && t.httpRequest("/order/deviceEnd", {
          order_id: e.data.order_id
        }, function (e) {
          wx2my.showToast({
            title: e.msg,
            icon: "none"
          }), 1 == e.code && setTimeout(function () {
            wx2my.redirectTo({
              url: "../indexAlipay/indexAlipay"
            });
          }, 1500);
        });
      }
    });
  },
  isReturnSuccess: function (e) {
    function a() {
      t.httpRequest("/Order/returnDetail", {
        order_id: e
      }, function (t) {
        1 == t.code && (clearInterval(n), setTimeout(function () {
          wx2my.navigateTo({
            url: "../viewDetails/viewDetails?order_id=" + e
          });
        }, 3e3));
      });
    }

    n = setInterval(function () {
      a();
    }, 3e3);
  },
  countDown: function (e) {
    var t = this,
        a = parseInt(e / 60 / 60 / 24 % 30),
        n = parseInt(e / 60 / 60 % 24),
        r = parseInt(e / 60 % 60),
        i = parseInt(e % 60);
    a < 10 && (a = "0" + a), n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), t.setData({
      day: a,
      hour: n,
      minute: r,
      second: i
    });
  },
  openLocation: function (i) {
    let e = this;
    let index = parseInt(i.currentTarget.dataset.index);
    wx2my.openLocation({
      latitude: Number(e.data.nearySeller[index].latitude),
      longitude: Number(e.data.nearySeller[index].longitude),
      name: e.data.nearySeller[index].name,
      address: e.data.nearySeller[index].area + e.data.nearySeller[index].address
    });
  }
});