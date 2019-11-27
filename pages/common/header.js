// pages/common/header.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {
  if (wx.getStorageSync("userType") != 0) {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  } else {
    wx.showLoading({
      title: '数据加载中',
    })
    setTimeout(function () {
      if (wx.getStorageSync("userType") != 0) {
        wx.redirectTo({
          url: '/pages/index/index',
        })
      } else {
        wx.redirectTo({
          url: '/pages/user/login',
        })
      }
    }, 2000)
  }
}
})