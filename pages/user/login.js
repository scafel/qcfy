// pages/user/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2016-09-01",
    oneData: ['机构', '个人'],
    one: [{
      id: 1,
      name: '机构'
    }, {
      id: 2,
      name: '个人'
    }],
    oneIndex: 0,
    jgTwoData: ['已登记', '未登记'],
    jgTwo: [{
      id: 3,
      name: '已登记'
    }, {
      id: 4,
      name: '未登记'
    }],
    jgTwoIndex: 0,
    grTwoData: ['新兴领域青年', '其它'],
    grTwo: [{
      id: 5,
      name: '新兴领域青年'
    }, {
      id: 6,
      name: '其它'
    }],
    grTwoIndex: 0,
    grThreeData: ['青少年事务社会工作专业人才', '新经济组织从业人员', '新媒体从业人员', '	新社会群体', '新社会组织从业人员'],
    grThree: [{
      id: 7,
      name: '青少年事务社会工作专业人才'
    }, {
      id: 8,
      name: '新经济组织从业人员'
    }, {
      id: 9,
      name: '新媒体从业人员'
    }, {
      id: 10,
      name: '	新社会群体'
    }, {
      id: 25,
      name: '新社会组织从业人员'
    }],
    grThreeIndex: 0,
    grFour: null,
    grFourIndex: 0,
    grFourOneData: ['快递小哥', '外卖小哥', '网约车司机'],
    grFourOne: [{
      id: 11,
      name: '快递小哥'
    }, {
      id: 12,
      name: '外卖小哥'
    }, {
      id: 13,
      name: '网约车司机'
    }],
    grFourTwoData: ['自媒体写手', '网络意见领袖', '网络主播', '新媒体平台经营者'],
    grFourTwo: [{
      id: 14,
      name: '自媒体写手'
    }, {
      id: 15,
      name: '网络意见领袖'
    }, {
      id: 16,
      name: '网络主播'
    }, {
      id: 17,
      name: '新媒体平台经营者'
    }],
    grFourThreeData: ['网络作家、编剧', '自由撰稿人', '自由美术工作者（含书法、摄影、工艺美术）', '独立音乐人', '自由舞蹈工作者', '文化创意行业工作者', '非遗传承人'],
    grFourThree: [{
      id: 18,
      name: '网络作家、编剧'
    }, {
      id: 19,
      name: '自由撰稿人'
    }, {
      id: 20,
      name: '自由美术工作者（含书法、摄影、工艺美术）'
    }, {
      id: 21,
      name: '独立音乐人'
    }, {
      id: 22,
      name: '自由舞蹈工作者'
    }, {
      id: 23,
      name: '文化创意行业工作者'
    }, {
      id: 24,
      name: '非遗传承人'
    }],
    sexData: ['男', '女'],
    sex: [{
      type: 1,
      value: '男'
    }, {
      type: 0,
      value: '女'
    }],
    sexIndex: 0,
    politicData: ["中共党员", "共青团员", "民主党派", "群众"],
    politic: [{
      type: 1,
      value: "中共党员"
    }, {
      type: 2,
      value: "共青团员"
    }, {
      type: 3,
      value: "民主党派"
    }, {
      type: 4,
      value: "群众"
    }],
    politicIndex: 0,
    educationalData: ["小学", "初中", "高中", "中专", "大专", "大学本科", "硕士研究生", "博士研究生"],
    educational: [{
      type: 1,
      value: "小学"
    }, {
      type: 2,
      value: "初中"
    }, {
      type: 3,
      value: "高中"
    }, {
      type: 4,
      value: "中专"
    }, {
      type: 5,
      value: "大专"
    }, {
      type: 6,
      value: "大学本科"
    }, {
      type: 7,
      value: "硕士研究生"
    }, {
      type: 8,
      value: "博士研究生"
    }],
    educationalIndex: 0,
    cityData: ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "忻州市", "吕梁市", "晋中市", "临汾市", "运城市"],
    city: [{
      type: 1,
      value: "太原市"
    }, {
      type: 2,
      value: "大同市"
    }, {
      type: 3,
      value: "阳泉市"
    }, {
      type: 4,
      value: "长治市"
    }, {
      type: 5,
      value: "晋城市"
    }, {
      type: 6,
      value: "朔州市"
    }, {
      type: 7,
      value: "忻州市"
    }, {
      type: 8,
      value: "吕梁市"
    }, {
      type: 9,
      value: "晋中市"
    }, {
      type: 10,
      value: "临汾市"
    }, {
      type: 11,
      value: "运城市"
    }],
    cityIndex: 0,
    sfcygData: ["伙伴计划", "创投大赛", "都未参与"],
    sfcyg: [{
      type: 1,
      value: "伙伴计划"
    }, {
      type: 2,
      value: "创投大赛"
    }, {
      type: 3,
      value: "都未参与"
    }],
    meetTheRequirementsData: ['持证社工', '社工相关专业毕业', '培训达标', '储备力量'],
    meetTheRequirements: [{
      id: 1,
      value: '持证社工'
    }, {
      id: 2,
      value: '社工相关专业毕业'
    }, {
      id: 3,
      value: '培训达标'
    }, {
      id: 4,
      value: '储备力量'
    }],
    showView: {
      member: 'none',
      organization: 'block',
      jgydj: 'block',
      politic: 'none',
      grThree: 'block',
      grFourOne: 'none',
      grFourTwo: 'none',
      grFourThree: 'none',
      xshzzcyry: 'none',
      qsnswshgzzyrc: 'block'
    },
    memberclassid: 3,
    memberclassid1: 1,
    memberclassid2: 3,
    memberclassid3: 0,
    memberclassid4: 0,
    chkMeetTheRequirementsv: null,
    chkSfcygv: null,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          'height': res.windowHeight
        })
      }
    })
  },
  OneChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    let one = that.data.one;
    if (index == 1) {
      showView.member = "block";
      showView.organization = "none";
      that.setMemberClassId(that, 7, 2, 5, 7, 0);
    } else {
      showView.member = "none";
      showView.organization = "block";
      that.setMemberClassId(that, 3, 1, 3, 0, 0);
    }
    that.setData({
      oneIndex: index,
      showView: showView,
    })
  },
  grTwoChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    let two = that.data.grTwo,
      memberclassid;
    if (index == 1) {
      showView.grThree = "none";
      showView.grFourOne = "none";
      showView.grFourTwo = "none";
      showView.grFourThree = "none";
      showView.xshzzcyry = "none";
      showView.qsnswshgzzyrc = "none";
      that.setMemberClassId(that, 6, 2, 6, 0, 0);
    } else {
      showView.grThree = "block";
      showView.qsnswshgzzyrc = "block";
      that.setMemberClassId(that, 7, 2, 5, 7, 0);
    }
    that.setData({
      grTwoIndex: index,
      showView: showView,
    })
  },
  grThreeChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    let three = that.data.grThree;
    let grFour = null,
      grFourData = null;
    if (index == 0) {
      showView.grFourOne = "none";
      showView.grFourTwo = "none";
      showView.grFourThree = "none";
      showView.xshzzcyry = "none";
      showView.qsnswshgzzyrc = "block";
      that.setMemberClassId(that, 7, 2, 5, 7, 0);
    };
    if (index == 1) {
      showView.grFourOne = "block";
      showView.grFourTwo = "none";
      showView.grFourThree = "none";
      showView.xshzzcyry = "none";
      showView.qsnswshgzzyrc = "none";
      grFour = that.data.grFourOne;
      grFourData = that.data.grFourOneData;
      that.setMemberClassId(that, 11, 2, 5, 8, 11);
    };
    if (index == 2) {
      showView.grFourOne = "none";
      showView.grFourTwo = "block";
      showView.grFourThree = "none";
      showView.xshzzcyry = "none";
      showView.qsnswshgzzyrc = "none";
      grFour = that.data.grFourTwo;
      grFourData = that.data.grFourTwoData;
      that.setMemberClassId(that, 14, 2, 5, 9, 14);
    };
    if (index == 3) {
      showView.grFourOne = "none";
      showView.grFourTwo = "none";
      showView.grFourThree = "block";
      showView.xshzzcyry = "none";
      showView.qsnswshgzzyrc = "none";
      grFour = that.data.grFourThree;
      grFourData = that.data.grFourThreeData;
      that.setMemberClassId(that, 18, 2, 5, 10, 18);
    };
    if (index == 4) {
      showView.grFourOne = "none";
      showView.grFourTwo = "none";
      showView.grFourThree = "none";
      showView.xshzzcyry = "block";
      showView.qsnswshgzzyrc = "none";
      that.setMemberClassId(that, 25, 2, 5, 25, 0);
    };
    that.setData({
      grThreeIndex: index,
      showView: showView,
      grFour: grFour,
      grFourData: grFourData,
      grFourIndex: 0,
    })
  },
  sexChange: function(e) {
    let index = e.detail.value;
    let that = this;
    that.setData({
      sexIndex: index
    })
  },
  dateChange: function(e) {
    let data = e.detail.value;
    let that = this;
    that.setData({
      date: data
    })
  },
  grFourOneChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let four = that.data.grFourOne;
    that.setMemberClassId(that, four[index].id, 2, 5, 8, four[index].id);
    that.setData({
      grFourIndex: index,
    })
  },
  grFourTwoChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let four = that.data.grFourTwo;
    that.setMemberClassId(that, four[index].id, 2, 5, 9, four[index].id);
    that.setData({
      grFourIndex: index,
    })
  },
  grFourThreeChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let four = that.data.grFourThree;
    that.setMemberClassId(that, four[index].id, 2, 5, 10, four[index].id);
    that.setData({
      grFourIndex: index,
    })
  },
  sfcygChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    that.setData({
      sfcygIndex: index
    })
  },
  politicChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    if (index == 2) {
      showView.politic = "block";
    } else {
      showView.politic = "none";
    }
    that.setData({
      politicIndex: index,
      showView: showView
    })
  },
  educationalChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    that.setData({
      educationalIndex: index
    })
  },
  cityChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    that.setData({
      cityIndex: index
    })
  },
  jgTwoChange: function(e) {
    let index = e.detail.value;
    let that = this;
    let showView = that.data.showView;
    let two = that.data.jgTwo;
    if (index == 1) {
      showView.jgydj = "none";
      that.setMemberClassId(that, two[index].id, 1, two[index].id, 0, 0);
    } else {
      showView.jgydj = "block";
      that.setMemberClassId(that, two[index].id, 1, two[index].id, 0, 0);
    }
    that.setData({
      jgTwoIndex: index,
      showView: showView,
    })
  },
  chkSfcyg: function(e) {
    let value = e.detail.value;
    let that = this;
    let v = '';
    if (value.length < 1) {
      that.setData({
        chkSfcygv: null,
      })
    } else {
      for (var i = value.length - 1; i >= 0; i--) {
        v += value[i] + ",";
      }
      that.setData({
        chkSfcygv: v,
      })
    }
  },
  meetTheRequirements: function(e) {
    let value = e.detail.value;
    let that = this;
    let v = '';
    if (value.length < 1) {
      that.setData({
        meetTheRequirementsv: null,
      })
    } else {
      for (var i = value.length - 1; i >= 0; i--) {
        v += value[i] + ",";
      }
      that.setData({
        meetTheRequirementsv: v,
      })
    }
  },
  formSubmit: function(e) {
    let that = this;
    let value = e.detail.value;
    value.memberclassid = that.data.memberclassid;
    var memberopenid = wx.getStorageSync("memberopenid");
    value.memberopenid = memberopenid;
    let memberclassid = that.data.memberclassid;
    let postData = {};
    postData.memberopenid = memberopenid;
    postData.memberclassid = memberclassid;
    if (value.hfldMemberClassId == 1) {
      postData.txtCompanyName = value.txtCompanyName;
      postData.txtCompanyTel = value.txtCompanyTel;
      postData.txtCompanyEmail = value.txtCompanyEmail;
      postData.txtCompanyNo = value.txtCompanyNo;
    } else if (value.hfldMemberClassId == 2) {
      postData.txtTel = value.txtTel;
      postData.dropCity = value.dropCity;
      postData.dropEducationalBackground = value.dropEducationalBackground;
      postData.dropPoliticCountenance = value.dropPoliticCountenance;
      if (that.data.politicIndex == 2) {
        postData.txtPoliticCountenance_2 = value.txtPoliticCountenance_2;
      }
      postData.txtNativePlace = value.txtNativePlace;
      postData.txtBorn = value.txtBorn;
      postData.txtNation = value.txtNation;
      postData.txtSex = value.txtSex;
      postData.txtPersonalName = value.txtPersonalName;
    } else {
      return false;
    }
    //不可为空项目
    switch (memberclassid) {
      case 3:
        //机构已登记
        postData.txtOrganizationCode = value.txtOrganizationCode;
        postData.txtLegalPerson = value.txtLegalPerson;
        break;
      case 4:
        //机构未登记
        break;
      case 6:
        //个人其他
        break;
      case 7:
        //个人 青少年事务社会工作专业人才 
        postData.txtWorkUnit = value.txtWorkUnit;
        postData.txtZyfwdq = value.txtZyfwdq;
        postData.txtProfessionalLevel = value.txtProfessionalLevel;
        postData.txtYearsOfWorking = value.txtYearsOfWorking;
        postData.txtProfessionalExpertise = value.txtProfessionalExpertise;
        break;
      case 11:
        //个人 新兴领域青年 新经济组织从业人员 快递小哥
        break;
      case 12:
        //个人 新兴领域青年 新经济组织从业人员 外卖小哥
        break;
      case 13:
        //个人 新兴领域青年 新经济组织从业人员 网约车司机
        break;
      case 14:
        //个人 新兴领域青年 新媒体从业人员 自媒体写手
        break;
      case 15:
        //个人 新兴领域青年 新媒体从业人员 网络意见领袖
        break;
      case 16:
        //个人 新兴领域青年 新媒体从业人员 网络主播
        break;
      case 17:
        //个人 新兴领域青年 新媒体从业人员 新媒体平台经营者
        break;
      case 18:
        //个人 新兴领域青年 新社会群体 网络作家、编剧
        break;
      case 19:
        //个人 新兴领域青年 新社会群体 自由撰稿人
        break;
      case 20:
        //个人 新兴领域青年 新社会群体 自由美术工作者（含书法、摄影、工艺美术）
        break;
      case 21:
        //个人 新兴领域青年 新社会群体 独立音乐人
        break;
      case 22:
        //个人 新兴领域青年 新社会群体 自由舞蹈工作者
        break;
      case 23:
        //个人 新兴领域青年 新社会群体 文化创意行业工作者
        break;
      case 24:
        //个人 新兴领域青年 新社会群体 非遗传承人
        break;
      case 25:
        //个人 新兴领域青年 新社会组织从业人员
        postData.txtZzmcjzw = value.txtZzmcjzw;
        break;
    }
    let errmsg;
    for (var p in postData) { //遍历json对象的每个key/value对,p为key
      if (postData[p]) {
        if (postData[p].length < 1) {
          errmsg = p;
          break;
        }
      } else {
        errmsg = p;
        break;
      }
    }
    if (errmsg) {
      wx.showModal({
        title: '错误提示',
        content: "请输入" + that.texToZh(errmsg),
        showCancel: false
      })
      return false;
    }
    postData.memberclassid0 = that.data.memberclassid1;
    postData.memberclassid1 = that.data.memberclassid2;
    postData.memberclassid2 = that.data.memberclassid3;
    postData.memberclassid3 = that.data.memberclassid4;
    //可以为空项目
    switch (memberclassid) {
      case 3:
        //机构已登记
        break;
      case 4:
        //机构未登记
        break;
      case 6:
        //个人其他
        break;
      case 7:
        //个人 青少年事务社会工作专业人才 
        postData.chkMeetTheRequirements = that.data.meetTheRequirementsv;
        break;
      case 11:
        //个人 新兴领域青年 新经济组织从业人员 快递小哥
        break;
      case 12:
        //个人 新兴领域青年 新经济组织从业人员 外卖小哥
        break;
      case 13:
        //个人 新兴领域青年 新经济组织从业人员 网约车司机
        break;
      case 14:
        //个人 新兴领域青年 新媒体从业人员 自媒体写手
        break;
      case 15:
        //个人 新兴领域青年 新媒体从业人员 网络意见领袖
        break;
      case 16:
        //个人 新兴领域青年 新媒体从业人员 网络主播
        break;
      case 17:
        //个人 新兴领域青年 新媒体从业人员 新媒体平台经营者
        break;
      case 18:
        //个人 新兴领域青年 新社会群体 网络作家、编剧
        break;
      case 19:
        //个人 新兴领域青年 新社会群体 自由撰稿人
        break;
      case 20:
        //个人 新兴领域青年 新社会群体 自由美术工作者（含书法、摄影、工艺美术）
        break;
      case 21:
        //个人 新兴领域青年 新社会群体 独立音乐人
        break;
      case 22:
        //个人 新兴领域青年 新社会群体 自由舞蹈工作者
        break;
      case 23:
        //个人 新兴领域青年 新社会群体 文化创意行业工作者
        break;
      case 24:
        //个人 新兴领域青年 新社会群体 非遗传承人
        break;
      case 25:
        //个人 新兴领域青年 新社会组织从业人员
        postData.chkSfcyg = that.data.chkSfcygv
        break;
    }
    if (value.hfldMemberClassId == 1) {
      wx.showModal({
        title: '系统提示',
        content: "机构注册正在开发中",
        showCancel: false
      })
      return false;
    }
    wx.request({
      url: 'https://www.sulong.org/PostIn/Reg.aspx',
      data: postData,
      method: "POST",
      success: function(res) {
        if (res.data.code) {
          if (res.data.code == 1) {
            wx.setStorageSync("userType", 1);
            wx.showLoading({
              title: '注册中',
            })

            setTimeout(function() {
              wx.hideLoading()
              wx.showToast({
                title: '注册成功',
                icon: 'success',
                duration: 2000,
                success: function() {
                  wx.redirectTo({
                    url: "/pages/user/index",
                  })
                }
              })
            }, 3000)

          } else {
            wx.showLoading({
              title: '登录中',
            }) 
            setTimeout(function() {
              wx.hideLoading()
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000,
                success: function() {
                  wx.redirectTo({
                    url: "/pages/user/index",
                  })
                }
              })
            }, 3000)
          }
        } else {
          wx.showModal({
            title: '错误提示',
            content: '请求出错了',
            showCancel: false
          })
        }

      },
      fail: function() {
        wx.showToast({
          title: '请求出错',
        })
      }
    })
  },
  getUserInfo: function(e) {
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        var userinfoS = {};
        var userInfo = res.userInfo;
        userinfoS.nickName = userInfo.nickName;
        userinfoS.avatarUrl = userInfo.avatarUrl;
        userinfoS.gender = userInfo.gender; //性别 0：未知、1：男、2：女
        wx.setStorageSync("userInfo", userinfoS);
      }
    })
  },
  resetInput: function(e) {

  },
  texToZh: function(e) {
    let obj = {
      txtPersonalName: "姓名",
      txtNation: "民族",
      txtNativePlace: "籍贯",
      txtPoliticCountenance_2: "党派",
      txtTel: "电话",
      txtZzmcjzw: "组织名称及职务",
      txtWorkUnit: "工作单位",
      txtZyfwdq: "主要服务地区",
      txtProfessionalLevel: "职业水平",
      txtYearsOfWorking: "从业年限",
      txtProfessionalExpertise: "从业专长",
      txtCompanyName: "机构名称",
      txtOrganizationCode: "机构代码",
      txtLegalPerson: "机构法人",
      txtCompanyTel: "机构电话",
      txtCompanyEmail: "机构邮箱",
      txtCompanyNo: "机构人数"
    };
    if (obj.hasOwnProperty(e)) {
      return obj[e];
    } else {
      return e;
    }
  },
  setMemberClassId: function(event, one, two, three, four, five) {
    event.setData({
      memberclassid: one,
      memberclassid1: two,
      memberclassid2: three,
      memberclassid3: four,
      memberclassid4: five,
    })
  }
})