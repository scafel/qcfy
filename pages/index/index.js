//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['red', 'blue', 'green'],
    region: ['山西省', '太原市', '太原市'],
    index:0,
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    
  },
  goUrl:function(e){
    let url = e.currentTarget.dataset.url;
    wx.redirectTo({
      url: '/pages/'+url+"/index",
    })
  }
})
