const wx2my = require('../../wx2my');
//const Behavior = require('../../Behavior');
var get_app = getApp(),
    util = require("../../util/util.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    items: [],
    page: 1,
    page_size: 10,
    display: NaN,
    updown: 'down-arrow'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getItems();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.page * this.data.page_size < this.data.total) {
      this.setData({
        page: this.data.page + 1
      });
      this.getItems();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  getItems: function () {
    var localThis = this;
    util.httpRequest("/user_ad_order/index", {
      page: localThis.data.page,
      page_size: localThis.data.page_size
    }, function (res) {
      1 == res.code && localThis.setData({
        items: localThis.data.items.concat(res.data.list),
        total: res.data.total
      });
    });
  },
  orderInfo: function (e) {
    let index = e.currentTarget.dataset.id;

    if (this.data.display != index) {
      this.setData({
        display: index
      });
    } else {
      this.setData({
        display: NaN
      });
    }
  }
});