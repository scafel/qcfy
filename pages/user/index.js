// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zs: "none",
    userInfo: null,
    username:"获取中。。。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    if (wx.getStorageSync("userInfo")) {
      that.setData({
        "userInfo": wx.getStorageSync("userInfo")
      })
    }
    wx.request({
     url: 'https://www.sulong.org/Get/GetPersonalBasicInfo.aspx?openid=' + wx.getStorageSync("memberopenid"),
     method: 'GET',
     header: { 'content-type': 'application/json' },
     success:function(res){
        let code = res.data.code;
        if (code) {
          if (code == 1) {
              let username = res.data.data.personlname;
              that.setData({
                username:username
              })
          }else{
             console.log(res.data.msg);
          }
        }else{
          console.log(res);
        }
     }
   })
    
  },
  goUrl: function(e) {
    let url = e.currentTarget.dataset.url;
    wx.redirectTo({
      url: '/pages/' + url + "/index",
    })
  },
  openZs: function() {
    this.setData({
      'zs': "block"
    })
  },
  hidenZs: function() {
    this.setData({
      'zs': "none"
    })
  },
  preventD: function() {
    return;
  },
  getUserInfo: function() {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        var userinfoS = {}
        var userInfo = res.userInfo
        userinfoS.nickName = userInfo.nickName
        userinfoS.avatarUrl = userInfo.avatarUrl
        userinfoS.gender = userInfo.gender //性别 0：未知、1：男、2：女
        wx.setStorageSync("userInfo", userinfoS)
        that.setData({
          "userInfo": userinfoS
        })
      }
    })
  },
  goToCer:function(){
    wx.navigateTo({
      url: '/pages/user/certificate',
    })
  }
})