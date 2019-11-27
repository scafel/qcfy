// pages/gykt/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    displayF:"none"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goUrl: function (e) {
    let url = e.currentTarget.dataset.url;
    wx.redirectTo({
      url: '/pages/' + url + "/index",
    })
  },
  showForm:function(){
    let that = this;
    let d = that.data.displayF;
    if(d == "none"){
      that.setData({
        displayF: "block"
      })
    }else{
      that.setData({
        displayF: "none"
      })
    }
    
  }
})