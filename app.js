//app.js
import {
  getUrl
} from "/utils/common.js";
App({
  onLaunch: function() {
    // 登录
    if (wx.getStorageSync("memberopenid")) {
      getUrl('https://www.sulong.org/Get/GetMemberRegStatus.aspx?openid=' + wx.getStorageSync("memberopenid")).then((res) => {
        let o = res.data.memberclassid; //返回0未注册 1机构 2个人
        wx.setStorageSync("userType", o);
        if (o == 0) {
          wx.redirectTo({
            url: '/pages/user/login',
          })
        } else {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      });
    } else {
      let p = new Promise(function(reslove, reject) {
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            if (res.code) {
              reslove(res.code);
            } else {
              wx.redirectTo({
                url: '/pages/user/login',
              })
            }
          }
        });
      })
      p.then((res) => {
        wx.setStorageSync("codes", res);
        getUrl('https://www.sulong.org/Get/GetCode.aspx?json_code=' + wx.getStorageSync("codes")).then((res) => {
          var obj = JSON.parse(res.data.data);
          var openid = obj.openid;
          wx.setStorageSync("memberopenid", openid);
          if (openid) {
            getUrl('https://www.sulong.org/Get/GetMemberRegStatus.aspx?openid=' + wx.getStorageSync("memberopenid")).then((res) => {
              let o = res.data.memberclassid; //返回0未注册 1机构 2个人
              wx.setStorageSync("userType", o);
              if (o == 0) {
                wx.redirectTo({
                  url: '/pages/user/login',
                })
              } else {
                wx.redirectTo({
                  url: '/pages/index/index',
                })
              }
            });
          }else{
            wx.redirectTo({
              url: '/pages/user/login',
            })
          }

        });
      })
    }


  },
  globalData: {
    userInfo: null
  }
})