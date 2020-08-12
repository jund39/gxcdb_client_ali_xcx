const wx2my = require('../../wx2my');

var get_app = getApp(),
    util = require("../../util/util.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    image_size: 5 * 1024 * 1024,
    video_size: 30 * 1024 * 1024,
    video_time: 10 * 60,
    image_price: 0,
    video_price: 0,
    date_number: 0,
    price: 0,
    comment: '',
    tempFilePathImage: '',
    tempFilePathVideo: '',
    path: '',
    dis_i: 'none',
    dis_v: 'none',
    dis_p: 'none',
    items: [{
      name: "上传视频",
      value: "video",
      checked: true
    }, {
      name: "上传图片",
      value: "image",
      checked: false
    }],
    videoContext: {},
    tishi: '',
    color: 'white',
    formData: {
      name: '',
      phone: '',
      type: 'video',
      cabinet_id: '',
      sid: '',
      agency_id: '',
      address: ''
    },
    ad_order: {},
    disabled: false,
    commitText: "确认支付"
  },
  onLoad: function () {
    var localThis = this;
    util.httpRequest("/ad_user_setting/show", {
      cabinet_id: get_app.globalData.device_code
    }, function (res) {
      if (res.data.is_screen < 2) {
        wx2my.showModal({
          showCancel: false,
          title: '提示',
          content: '无屏机柜无法投放',

          success(res) {
            if (res.confirm) {
              wx2my.navigateBack();
            }
          }

        });
      }

      ;
      1 == res.code && localThis.setData({
        image_size: parseInt(res.data.image_size) * 1024 * 1024,
        video_size: parseInt(res.data.video_size) * 1024 * 1024,
        video_time: parseInt(res.data.video_time),
        image_price: parseFloat(res.data.image_price),
        video_price: parseFloat(res.data.video_price),
        price: parseFloat(res.data.video_price),
        date_number: parseInt(res.data.date_number),
        comment: res.data.comment,
        'formData.address': res.data.address,
        'formData.cabinet_id': res.data.cabinet_id,
        'formData.sid': res.data.sid,
        'formData.agency_id': res.data.agency_id,
        tishi: `（文件大小不能超过${res.data.video_size}M，播放时长不能超过${res.data.video_time}秒）`
      });
    });
  },
  uploadFile: function (o) {
    var localThis = this;

    if (localThis.data.disabled) {
      return false;
    }

    if (localThis.data.formData.type === 'video') {
      wx.chooseMedia({
        sourceType: ['album'],
        mediaType: ["video"],
        count: 1,
        success: function (res) {
          let size = parseInt(res.tempFiles[0].size);
          let time = res.tempFiles[0].duration;
          let image = res.tempFiles[0].thumbTempFilePath;

          if (size <= localThis.data.video_size && time <= localThis.data.video_time) {
            localThis.setData({
              dis_i: 'block',
              dis_v: 'none',
              dis_p: 'block',
              color: 'white',
              tempFilePathImage: image,
              tempFilePathVideo: res.tempFiles[0].tempFilePath,
              path: res.tempFiles[0].tempFilePath
            });
          } else {
            localThis.setData({
              dis_i: 'none',
              dis_v: 'none',
              dis_p: 'none',
              color: 'red',
              tempFilePathImage: '',
              tempFilePathVideo: '',
              path: ''
            });
            wx2my.showToast({
              title: '广告文件不符合要求',
              mask: false,
              icon: 'none'
            });
            return false;
          }
        },
        fail: function (res) {
          localThis.setData({
            dis_i: 'none',
            dis_v: 'none',
            dis_p: 'none',
            color: 'red',
            tempFilePathImage: '',
            tempFilePathVideo: '',
            path: ''
          });
          wx2my.showToast({
            title: '请上传广告文件',
            mask: false,
            icon: 'none'
          });
          return false;
        }
      });
    } else {
      wx2my.chooseImage({
        count: 1,
        success: function (res) {
          let size = parseInt(res.tempFiles[0].size);

          if (size <= localThis.data.image_size) {
            localThis.setData({
              dis_i: 'block',
              dis_v: 'none',
              dis_p: 'none',
              color: 'white',
              tempFilePathImage: res.tempFiles[0].path,
              tempFilePathVideo: '',
              path: res.tempFiles[0].path
            });
          } else {
            localThis.setData({
              dis_i: 'none',
              dis_v: 'none',
              dis_p: 'none',
              color: 'red',
              tempFilePathImage: '',
              tempFilePathVideo: '',
              path: ''
            });
            wx2my.showToast({
              title: '广告文件不符合要求',
              mask: false,
              icon: 'none'
            });
            return false;
          }
        },
        fail: function (res) {
          localThis.setData({
            dis_i: 'none',
            dis_v: 'none',
            dis_p: 'none',
            color: 'red',
            tempFilePathImage: '',
            tempFilePathVideo: '',
            path: ''
          });
          wx2my.showToast({
            title: '请上传广告文件',
            mask: false,
            icon: 'none'
          });
          return false;
        }
      });
    }
  },
  videoPlay: function () {
    this.setData({
      dis_v: 'block',
      videoContext: wx.createVideoContext('userVideo')
    });
    this.data.videoContext.play();
  },
  videoClose: function () {
    this.setData({
      dis_v: 'none'
    });
    this.data.videoContext.stop();
  },
  radioChange: function (e) {
    if (e.detail.value === 'image') {
      this.setData({
        tishi: `（文件大小不能超过${this.data.image_size / 1024 / 1024}M）`,
        'formData.type': 'image',
        price: this.data.image_price,
        tempFilePathImage: '',
        tempFilePathVideo: '',
        path: '',
        dis_i: 'none',
        dis_v: 'none',
        dis_p: 'none'
      });
    } else {
      this.setData({
        tishi: `（文件大小不能超过${this.data.video_size / 1024 / 1024}M，播放时长不能超过${this.data.video_time}秒）`,
        'formData.type': "video",
        price: this.data.video_price,
        tempFilePathImage: '',
        tempFilePathVideo: '',
        path: '',
        dis_i: 'none',
        dis_v: 'none',
        dis_p: 'none'
      });
    }
  },
  bindInput: function (e) {
    let val = e.currentTarget.id;
    this.setData({
      ['formData.' + val]: e.detail.value
    });
  },
  commit: function () {
    let localThis = this; //上传检查

    let name = localThis.data.formData.name;

    if (!/^.{1,}$/.test(name)) {
      wx2my.showToast({
        title: '姓名不能为空，请重填',
        mask: false,
        icon: 'none'
      });
      return false;
    }

    let phone = localThis.data.formData.phone;

    if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
      wx2my.showToast({
        title: '手机号码有误，请重填',
        mask: false,
        icon: 'none'
      });
      return false;
    }

    let path = localThis.data.path;

    if (path == '') {
      wx2my.showToast({
        title: '请上传广告文件',
        mask: false,
        icon: 'none'
      });
      return false;
    } //检查完成，禁止重复点击


    localThis.setData({
      disabled: true,
      commitText: "上传中..."
    });
    wx2my.showLoading({
      title: "开始上传...",
      mask: true
    });
    wx2my.uploadFile({
      url: util.config.host + '/user_ad_order/store',
      //上传的接口地址
      header: {
        "Content-Type": "application/multipart/form-data",
        openid: get_app.globalData.openID,
        hash: util.e().hash,
        time: util.e().timestamp.toString(),
        ocode: util.config.ocode,
        client: "wechat"
      },
      filePath: localThis.data.path,
      name: 'file',
      formData: localThis.data.formData,

      success(res) {
        let resdata = JSON.parse(res.data);

        if (resdata.code) {
          localThis.setData({
            ad_order: resdata.data.id
          }); //调取支付,支付成功后跳转

          util.adPayment(localThis.data.price, 0, function (order_number) {
            //成功后的操作
            wx2my.showLoading({
              title: "请稍等上传完成",
              mask: true
            });
          }, function (order_number) {
            //失败后操作
            wx2my.showLoading({
              title: "请稍等清理数据",
              mask: true
            });
          }, function (order_number) {
            //不管成功和失败都会执行
            localThis.modifyOrder(resdata.data.id, order_number);
          });
        } else {
          localThis.numInit();
          wx2my.hideLoading({
            success: () => {
              wx2my.showToast({
                title: res.msg
              });
            }
          });
        }
      },

      fail: function (res) {
        localThis.numInit();
        wx2my.hideLoading();
      }
    });
  },
  modifyOrder: function (order_id, order_number) {
    let localThis = this;
    util.httpRequest('/user_ad_order/mod', {
      order_id: order_id,
      order_number: order_number
    }, function (mod_res) {
      wx2my.hideLoading();
      localThis.numInit();
      wx2my.navigateTo({
        //跳转到订单列表
        url: "../adOrder/adOrder"
      });
    });
  },
  numInit: function () {
    //重置页面数据
    this.setData({
      tempFilePathImage: '',
      tempFilePathVideo: '',
      path: '',
      dis_i: 'none',
      dis_v: 'none',
      dis_p: 'none',
      'formData.name': '',
      'formData.phone': '',
      disabled: false,
      commitText: "确认支付"
    });
  }
});