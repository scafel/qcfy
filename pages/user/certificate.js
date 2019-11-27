// pages/user/certificate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cerList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
       url: 'https://www.sulong.org/Get/GetPersonalCertificate.aspx?openid=' + wx.getStorageSync("memberopenid"),
       method: 'GET',
       header: { 'content-type': 'application/json' },
       success:function(res){
         let code = res.data.code;
        if (code) {
          if (code == 1) {
              let cerList = res.data.data;
              cerList = cerList.replace(/\'/g, '');
              cerList = cerList.substring(1,cerList.length -1);
              cerList = cerList.split('},{');
              let cerListLast = [];
              for (var i = cerList.length - 1; i >= 0; i--) {
                let p = cerList[i].split(",");
                cerListLast.push(p);
              }
              that.setData({
                cerList:cerListLast
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
  bcCertPng:function(e){
    let png = e.currentTarget.dataset.png;
    let url = 'https://www.sulong.org/Certificate/'+png; //仅为示例，并非真实的资源
    console.log(url);
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    })
  }
})