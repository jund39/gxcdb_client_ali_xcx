const wx2my = require('../../wx2my');
const Behavior = '';
var e = getApp(),
  t = require("../../util/util.js"),
  a = 1;

Page({
  data: {
    userinfo: {},
    longitude: 116.404556,
    latitude: 39.915156,
    seller_address: !1,
    markers: [],
    tel: "",
    scale: 16,
    isClick: !0,
    nearySeller: [],
    seller: {},
    showDialog: false,
    route: '',
    indexImages: [],
    indexImageTime: 5
  },
  onLoad: function (i) {
    a = 1;
    var n = this;

    if (i.q) {
      var o = decodeURIComponent(i.q),
        r = t.returnQrcode(o);
      this.getAlipayOppenid(function () {
        n.getLocation(), n.getImages(), t.userAuthor(function () {
          switch (r.type) {
            case "cab":
              e.globalData.outCodeUrl = o, n.cabinet(r.qrcode);
              break;

            case "line":
              e.globalData.outLineUrl = o, n.lineCharging(r.qrcode);
          }
        }, function () {
          wx2my.setStorage({
            key: "device",
            data: JSON.stringify(r)
          });
        });
      });
    } else this.getAlipayOppenid(function () {
      n.getUseInfo(), n.getLocation(), n.getImages();
    });
  },
  getImages: function () {
    let localThis = this;

    if (e.globalData.indexImages.length > 0) {
      localThis.setData({
        indexImages: e.globalData.indexImages,
        indexImageTime: e.globalData.indexImageTime * 1000
      });
    } else {
      t.httpRequest('/index/indexAd', {}, function (res) {
        if (res.code == 1) {
          e.globalData.indexImages = res.data.list;
          e.globalData.indexImageTime = res.data.time;
          localThis.setData({
            indexImages: e.globalData.indexImages,
            indexImageTime: e.globalData.indexImageTime * 1000
          });
        }
      });
    }
  },
  onShow: function () {
    var t = this;
    e.globalData.openID && this.getUseInfo(), wx2my.getStorage({
      key: "device",
      success: function (e) {
        var a = JSON.parse(e.data);
        switch (wx2my.removeStorage({
          key: "device"
        }), a.type) {
          case "cab":
            t.cabinet(a.qrcode);
            break;

          case "line":
            t.lineCharging(a.qrcode);
            break;
          default:
            t.cabinet(a.qrcode);
            break;
        }
      }
    });
  },
  onReady: function () {
    this.mapCtx = my.createMapContext("myMap");
  },
  getAlipayOppenid: function (i) {
    var n = this;
    my.getAuthCode({
      scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
      success: (res) => {
        if (res.authCode) {
          res.authCode && t.httpRequest("/Auth/alipayOpendId", {
            code: res.authCode
          }, function (t) {
            if (t.data.openid) e.globalData.openID = t.data.openid, i(); else {
              if (!(a < 3)) return void wx2my.showModal({
                title: "温馨提示",
                content: "尊敬的用户,您的openID未获取到,请您退出程序并再次进入重新获取"
              });
              wx2my.showToast({
                title: "openID获取失败",
                icon: "none"
              }), n.getAlipayOppenid(i), a++;
            }
          });
        }
      },
    });
  },
  getUseInfo: function () {
    var e = this;
    t.httpRequest("/user/getInfo", {}, function (t) {
      1 == t.code && e.setData({
        userinfo: t.data
      });
      if (1 == t.code) getApp().globalData.userinfo = t.data;
    });
  },
  getLocation: function () {
    var t = this;
    my.getLocation({
      success(a) {
        t.setData({
          longitude: a.longitude,
          latitude: a.latitude
        }), e.globalData.longitude = a.longitude, e.globalData.latitude = a.latitude, t.getNearySellerInfo(a.longitude, a.latitude);
      },
      fail(res) {
        my.alert({ title: '定位失败:' + res.errorMessage });
      },
    });
  },
  goUser: function () {
    this.hideSeller(), t.userAuthor(function () {
      my.navigateTo({
        url: "../user/user"
      });
    });
  },
  goSeller: function () {
    var e = this;
    my.navigateTo({
      url: "../seller/seller?id=" + e.data.seller.id
    });
  },
  goNearby: function () {
    this.hideSeller();
    var t = {
      longitude: e.globalData.longitude,
      latitude: e.globalData.latitude
    };
    my.navigateTo({
      url: "../searchNearby/searchNearby?localtion=" + JSON.stringify(t)
    });
  },
  hideSeller: function () {
    this.setData({
      seller_address: !1
    });
  },
  regionchange: function (t) {
    var a = this;
    e.globalData.openID && "end" == t.type && a.mapCtx.getCenterLocation({
      success: function (t) {
        e.globalData.longitude = t.longitude, e.globalData.latitude = t.latitude, a.getNearySellerInfo(t.longitude, t.latitude);
        a.setData({
          longitude: t.longitude, latitude: t.latitude, scale: t.scale
        });
      }
    });
  },
  backOriginal: function () {
    this.mapCtx.moveToLocation();
  },
  markertaps: function (e) {
    var t = this;
    t.setData({
      seller_address: !0
    });
    var a = !0,
      i = !1,
      n = void 0;

    try {
      for (var o, r = t.data.nearySeller[Symbol.iterator](); !(a = (o = r.next()).done); a = !0) {
        var l = o.value;
        if (l.id == e.markerId) return void t.setData({
          seller: l
        });
      }
    } catch (e) {
      i = !0, n = e;
    } finally {
      try {
        !a && r.return && r.return();
      } finally {
        if (i) throw n;
      }
    }
  },
  _scanCode: function () {
    let get_app = e;
    let loal = this;
    loal.userAuthor(function () {
      wx2my.scanCode({
        scanType: ["qrCode"],
        onlyFromCamera: !0,
        success: function (a) {
          if (a.result) {
            var i = a.result,
              n = t.returnQrcode(i);
            get_app.globalData.device_code = n.qrcode;
            if (n.oid == t.config.oid) switch (n.type) {
              
              case "cab":
                if (loal.data.route === '') {
                  loal.cabinet(n.qrcode);
                } else {
                  loal.setData({
                    route: ''
                  });
                  my.navigateTo({
                    url: "../adUploader/adUploader"
                  });
                }

                break;

              case "line":
                loal.lineCharging(n.qrcode);
            }
          }
        }
      });
    });
  },
  cabinet: function (e) {
    t.httpRequest("/Lease/deviceScan", {
      device_code: e
    }, function (e) {
      switch (e.code) {
        case 1:
          my.navigateTo({
            url: "../refundsDeposit/refundsDeposit?data=" + JSON.stringify(e.data)
          });
          break;
        case 2:
          1 == e.data.order_type ? my.navigateTo({
            url: "../leaseDetail/leaseDetail?order_id=" + e.data.order_id
          }) : 2 == e.data.order_type && my.navigateTo({
            url: "../successfulPayment/successfulPayment?order_id=" + e.data.order_id
          });
          break;

        case 3:
          my.navigateTo({
            url: "../viewDetails/viewDetails?order_id=" + e.data.order_id + "&type=2"
          });
          break;

        default:
          wx2my.showToast({
            title: e.msg,
            icon: "none"
          });
      }
    });
  },
  lineCharging: function (e) {
    t.httpRequest("/lease/wiredScan", {
      qrcode: e
    }, function (e) {
      switch (e.code) {
        case 1:
          my.navigateTo({
            url: "../chargingTime/chargingTime?data=" + JSON.stringify(e.data)
          });
          break;
        case 2:
          1 == e.data.order_type ? my.navigateTo({
            url: "../leaseDetail/leaseDetail?order_id=" + e.data.order_id
          }) : 2 == e.data.order_type && my.navigateTo({
            url: "../successfulPayment/successfulPayment?order_id=" + e.data.order_id
          });
          break;

        default:
          wx2my.showToast({
            title: e.msg,
            icon: "none"
          });
      }
    });
  },
  makePhoneCall: function (e) {
    var t = e.currentTarget.dataset.tel;
    wx2my.makePhoneCall({
      phoneNumber: t.toString()
    });
  },
  searchAddress: function () {
    var t = this;
    wx2my.chooseLocation({
      success: function (a) {
        t.setData({
          longitude: a.longitude,
          latitude: a.latitude
        }), e.globalData.longitude = a.longitude, e.globalData.latitude = a.latitude;
      }
    });
  },
  getNearySellerInfo: function (e, a) {
    var i = this;
    t.httpRequest("/Seller/sellerList", {
      longitude: e,
      latitude: a
    }, function (e) {
      if (1 == e.code) {
        i.setData({
          nearySeller: e.data.list,
          tel: e.data.tel
        });
        var t = [],
          a = !0,
          n = !1,
          o = void 0;

        try {
          for (var r, l = e.data.list[Symbol.iterator](); !(a = (r = l.next()).done); a = !0) {
            var s = r.value;
            t.push({
              id: s.id,
              width: s.width,
              height: s.height,
              longitude: s.longitude,
              latitude: s.latitude,
              iconPath: s.iconPath
            });
          }
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            !a && l.return && l.return();
          } finally {
            if (n) throw o;
          }
        }

        i.setData({
          markers: t
        });
      }
    });
  },
  ad_bussiness: function () {
    let localThis = this;

    if (!e.globalData.device_code) {
      wx2my.showModal({
        title: '提示',
        content: '缺少机柜编号，是否扫码获取？',
        confirmText: "立即扫码",
        cancelText: "取消",

        success(res) {
          if (res.confirm) {
            localThis.setData({
              route: 'ad_bussiness'
            });

            localThis._scanCode();
          } else if (res.cancel) { }
        }

      });
    } else {
      my.navigateTo({
        url: "../adUploader/adUploader"
      });
    }
  },

  /*****************授权弹窗相关js********************/
  userAuthor: function (tt) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () { };
    var uu = this;
    t.httpRequest("/user/getInfo", {}, function (n) {
      1 == n.code && (1 == n.data.is_auth ? tt(n) : (e(), uu.toggleDialog()));
    }, function () {
      e();
    });
  },
  back: function () {
    this.toggleDialog();
  },
  bindgetuserinfos: function (i) {
    var n = this;
    my.getAuthUserInfo({
      success: (uInfo) => {
        t.httpRequest("/User/updateInfo", {
          openid: e.globalData.openID,
          userinfo: JSON.stringify(uInfo)
        }, function (t) {
          1 == t.code ? n.back() : wx2my.showToast({
            title: t.msg,
            icon: "none"
          });
        });
      }
    })
  },

  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  }

});