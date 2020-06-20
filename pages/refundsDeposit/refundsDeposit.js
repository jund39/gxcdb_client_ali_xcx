const wx2my = require('../../wx2my');
const Behavior = '';
getApp();

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
    console.log(a.data);
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
    console.log('已来到payment/freeze');
    var t = this;
    e.httpRequest("/payment/freeze", {
      device_code: t.data.info.device_code,
      pay_type: "alipay"
    }, function (e) {
      console.log('获取返回值，如下：');
      console.log(e);
      1 == e.code && (t.setData({
        order_no: e.data.order_no,
        isClick: !0
      }),my.tradePay({
            // 调用资金冻结接口（alipay.fund.auth.order.app.freeze），获取资金授权参数
            orderStr: e.data.params,
            success: (res) => {
              /*my.request({
                url: '', //我是在这里做的回调 官方的回调不知道为什么一直没有执行
                data:{data:res.result}, //将支付宝返回的数据传到后台
                type:"post",
                success:function(res){
					//授权成功
                }
              })*/
              //this.checkStatus(this.data.order_no);
              console.log(1212121212); 
              console.log(res); 
              console.log('this.data.order_no:'+this.data.order_no); 
              
            },
            fail: (res) => {
              my.alert({
                content: JSON.stringify(res),
              });
            },
            complete: function(e){
              console.log('complete:'+JSON.stringify(e));
            }
          }));
      /*1 == e.code && (t.setData({
        order_no: e.data.order_no,
        isClick: !0
      }), my.openBusinessView && my.openBusinessView({
        businessType: "wxpayScoreUse",
        extraData: {
          mch_id: e.data.params.mch_id,
          package: e.data.params.package,
          timestamp: e.data.params.timestamp,
          nonce_str: e.data.params.nonce_str,
          sign_type: e.data.params.sign_type,
          sign: e.data.params.sign
        },
        envVersion: "release",
        success: function (e) {},
        fail: function (e) {
          wx2my.hideLoading();
        }
      }));*/
    }, function () {
      t.setData({
        isClick: !0
      }), wx2my.hideLoading();
    });
  },
  startLease: function () {
    var a = this;
    //console.log(111111);
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
      console.log(22222);
      console.log(t);
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
            
            console.log(595959);
            a.setData({
              isClick: !0
            }), a.checkStatus(e);
          }, function () {
            console.log(66666);
            console.log(a.data.info.alipay_credit);
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
      console.log(2020202020);
    var i = this,
        s = i.data.checkNum;
    s++, i.setData({
      checkNum: s
    }), i.data.checkNum < 10 ? e.httpRequest("/payment/orderStatus", {
      order_no: t,
      is_credit: a
    }, function (e) {
      console.log(8989898989);
      console.log(e.data.status);
      console.log(i.data.freezeFailBtn);
      console.log(i.data.info.alipay_credit);
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