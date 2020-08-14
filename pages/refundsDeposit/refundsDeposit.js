const wx2my = require('../../wx2my');
const Behavior = '';
var get_app = getApp();

var e = require("../../util/util.js"),
    t = null,
    a = !0;

Page({
  data: {
    info: {},
    checkNum: 0,
    isPlay: !0,
    isClick: !0,
    swiperImg: [],
    interval: 5e3,
    agreeChecked: !0,
    agreement: !1,
    freezeFailBtn: !1,
    version: 100,
    order_no: ""
  },
  onLoad: function (e) {
    var newData = JSON.parse(e.data);
    newData.wechat_credit = false;
    this.getSwiperImg(), (t = my.createInnerAudioContext()).src = "/static/mp3/lease.mp3", this.setData({
      info: newData
    });
  },
  onShow: function () {
    a = this.data.info.alipay_credit, a = "true" == a, this.data.order_no && this.checkStatus(this.data.order_no);

    try {
      var e = wx2my.getSystemInfoSync().version.replace(/\./g, "");
      e = e.substr(0, 1), this.setData({
        version: parseInt(e)
      });
    } catch (e) {}
  },
  startFreeLease: function () {
    var a = this;
    a.data.isClick && (console.log(a.data.version), a.data.version >= 1 ? (wx2my.showLoading({
      title: "请稍后...",
      mask: !0
    }), a.setData({
      isClick: !1,
      isPlay: !0
    }), setTimeout(function () {
      a.data.isPlay && t.play();
    }, 1500), e.httpRequest("/lease/deviceLease", {
      device_code: a.data.info.device_code,
      is_credit: !0
    }, function (e) {
      switch (e.code) {
        case 1:
          setTimeout(function () {
            a.setData({
              order_no: "",
              isClick: !0
            }), wx2my.hideLoading(), wx2my.navigateTo({
              url: "../onLoan/onLoan?data=" + JSON.stringify(e.data)
            });
          }, 1e3);
          break;

        case 3:
          a.setData({
            isPlay: !1
          }), a.freezePay();
          break;

        default:
          a.setData({
            isClick: !0,
            isPlay: !1
          }), wx2my.hideLoading();
      }
    }, function () {
      a.setData({
        isClick: !0,
        isPlay: !1
      }), wx2my.hideLoading();
    })) : wx2my.showModal({
      title: "提示",
      content: "微信版本过低，不支持免押租借，如需使用免押请升级最新版本，即将为您切换为押金租借",
      success: function (e) {
        e.confirm && (a.setData({
          freezeFailBtn: !0
        }), a.startLease());
      }
    }));
  },
  startFreeLease1: function () {
    var a = this;
    a.data.isClick && (console.log(a.data.version), a.data.version >= 7 ? (wx2my.showLoading({
      title: "请稍后...",
      mask: !0
    }), a.setData({
      isClick: !1,
      isPlay: !0
    }), setTimeout(function () {
      a.data.isPlay && t.play();
    }, 1500), e.httpRequest("/lease/deviceLease", {
      device_code: a.data.info.device_code,
      is_credit: !0
    }, function (e) {
      switch (e.code) {
        case 1:
          setTimeout(function () {
            a.setData({
              order_no: "",
              isClick: !0
            }), wx2my.hideLoading(), wx2my.navigateTo({
              url: "../onLoan/onLoan?data=" + JSON.stringify(e.data)
            });
          }, 1e3);
          break;

        case 3:
          a.setData({
            isPlay: !1
          }), a.freezePay();
          break;

        default:
          a.setData({
            isClick: !0,
            isPlay: !1
          }), wx2my.hideLoading();
      }
    }, function () {
      a.setData({
        isClick: !0,
        isPlay: !1
      }), wx2my.hideLoading();
    })) : wx2my.showModal({
      title: "提示",
      content: "微信版本过低，不支持免押租借，如需使用免押请升级最新版本，即将为您切换为押金租借",
      success: function (e) {
        e.confirm && (a.setData({
          freezeFailBtn: !0
        }), a.startLease());
      }
    }));
  },
  freezePay: function () {
    var t = this;
    var de = e;
    e.httpRequest("/payment/freeze", {
      device_code: t.data.info.device_code,
      pay_type: "alipay"
    }, function (e) {
      1 == e.code && (t.setData({
        order_no: e.data.order_no,
        isClick: !0
      }),my.tradePay({
            // 调用资金冻结接口（alipay.fund.auth.order.app.freeze），获取资金授权参数
            orderStr: e.data.params,
            success: (res) => {
              //setTimeout(t.startFreeLease(), 1e3);
              de.httpRequest("/lease/deviceLease", {
                device_code: t.data.info.device_code,
                is_credit: !0
              }, function (e) {
                switch (e.code) {
                  case 1:
                    setTimeout(function () {
                      t.setData({
                        order_no: "",
                        isClick: !0
                      }), wx2my.hideLoading(), wx2my.navigateTo({
                        url: "../onLoan/onLoan?data=" + JSON.stringify(e.data)
                      });
                    }, 1e3);
                    break;

                  default:
                    t.setData({
                      isClick: !0,
                      isPlay: !1
                    }), wx2my.hideLoading();
                }
              }, function () {
                t.setData({
                  isClick: !0,
                  isPlay: !1
                }), wx2my.hideLoading();
              })
            },
            fail: (res) => {
              wx2my.hideLoading();
            },
            complete: function(e){
              console.log('complete:'+JSON.stringify(e));
            }
          }));
    }, function () {
      t.setData({

        isClick: !0
      }), wx2my.hideLoading();
    });
  },
  startLease: function () {
    var a = this;
    a.data.isClick && (wx2my.showLoading({
      title: "请稍后...",
      mask: !0
    }), a.setData({
      isClick: !1,
      isPlay: !0,
      order_no: ""
    }), setTimeout(function () {
      a.data.isPlay && t.play();
    }, 1500), e.httpRequest("/lease/deviceLease", {
      device_code: a.data.info.device_code,
      is_credit: !1
    }, function (t) {
      switch (t.code) {
        case 1:
          setTimeout(function () {
            a.setData({
              isClick: !0,
              order_no: ""
            }), wx2my.hideLoading(), wx2my.navigateTo({
              url: "../onLoan/onLoan?data=" + JSON.stringify(t.data)
            });
          }, 1e3);
          break;

        case 3:
          a.setData({
            isPlay: !1
          }), e.alipayPayment(t.data.amount, 1, function (e) {
            a.setData({
              isClick: !0
            }), a.checkStatus(e);
          }, function () {
            "true" == a.data.info.alipay_credit ? a.setData({
              isClick: !0,
              freezeFailBtn: !1
            }) : a.setData({
              isClick: !0
            });
          });
          break;

        default:
          a.setData({
            isClick: !0,
            isPlay: !1
          }), wx2my.hideLoading();
      }
    }, function () {
      a.setData({
        isClick: !0,
        isPlay: !1
      }), wx2my.hideLoading();
    }));
  },
  checkStatus: function (t) {
    var i = this,
        s = i.data.checkNum;
    s++, i.setData({
      checkNum: s
    }), i.data.checkNum < 10 ? e.httpRequest("/payment/orderStatus", {
      order_no: t,
      is_credit: a
    }, function (e) {
      1 == e.data.status ? (wx2my.hideLoading(), i.data.freezeFailBtn ? i.startLease() : "true" == i.data.info.alipay_credit ? i.startFreeLease() : i.startLease()) : 2 == e.data.status ? wx2my.showModal({
        title: "提示",
        content: e.msg,
        cancelText: "否",
        confirmText: "是",
        success: function (e) {
          wx2my.hideLoading(), e.confirm && (a = !1, i.setData({
            freezeFailBtn: !0
          }), i.startLease());
        }
      }) : setTimeout(function () {
        i.checkStatus(t);
      }, 1500);
    }, function () {
      wx2my.hideLoading();
    }) : (wx2my.showToast({
      title: "订单异常,请联系客服",
      duration: 2e3
    }), wx2my.hideLoading());
  },
  getSwiperImg: function () {
    var t = this;
    e.httpRequest("/index/ad", {}, function (e) {
      1 == e.code ? t.setData({
        swiperImg: e.data.list,
        interval: 1e3 * e.data.time
      }) : wx2my.showToast({
        title: e.info,
        icon: "none"
      });
    });
  },
  checkboxChange: function (e) {
    e.detail.value.length > 0 ? this.setData({
      isClick: !0
    }) : (this.setData({
      isClick: !1
    }), wx2my.showToast({
      title: "请同意委托扣款授权书，否则无法租借",
      icon: "none"
    }));
  },
  openAgree: function () {
    this.setData({
      agreement: !0
    });
  },
  closeAgree: function () {
    this.setData({
      agreement: !1
    });
  }
});