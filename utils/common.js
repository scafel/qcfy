var app = getApp();
var MD5Encode = require("MD5Encode.js");

/**
 * 对字符串判空
 */
function isStringEmpty(data) {
  if (null == data || "" == data) {
    return true;
  }
  return false;
}

/**
 * 封装网络请求
 */
function sentHttpRequestToServer(uri, data, method) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: uri,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
          resolve(res)
      },
      fail: function(res) {
        wx.showModal({
          title: '网站提示',
          content: '请求服务端失败,服务器返回错误',
          showCancel:false,
        })
      },
      complete: function(res) {}
    })
  })
}

function getUrL(uri, data = null) {
  return sentHttpRequestToServer(uri, data, 'get');
}

function postUrL(uri, data = null) {
  return sentHttpRequestToServer(uri, data, 'post', );
}

/**
 * 将map对象转换为json字符串
 */
function mapToJson(map) {
  if (null == map) {
    return null;
  }
  var jsonString = "{";
  for (var key in map) {
    jsonString = jsonString + key + ":" + map[key] + ",";
  }
  if ("," == jsonString.charAt(jsonString.length - 1)) {
    jsonString = jsonString.substring(0, jsonString.length - 1);
  }
  jsonString += "}";
  return jsonString;
}

/**
 * 弹窗提示成功
 */
function toastSuccess() {
  wx.showToast({
    title: '成功',
    icon: 'success',
    duration: 2000
  })
}

/**
 * 调用微信支付
 */
function doWechatPay(prepayId, successCallback, failCallback, completeCallback) {
  var nonceString = getRandomString();
  var currentTimeStamp = getCurrentTimeStamp();
  var packageName = "prepay_id=" + prepayId;
  var dataMap = {
    timeStamp: currentTimeStamp,
    nonceStr: nonceString,
    package: packageName,
    signType: "MD5",
    paySign: getWechatPaySign(nonceString, packageName, currentTimeStamp),
    success: successCallback,
    fail: failCallback,
    complete: completeCallback
  }
  console.log(dataMap);
  wx.requestPayment(dataMap);
}

/**
 * 获取微信支付签名字符串
 */
function getWechatPaySign(nonceStr, packageName, timeStamp) {
  var beforMD5 = "appid=" + app.d.appId + "&nonceStr=" + nonceStr + "&package=" + packageName + "&signType=MD5" + "&timeStamp=" + timeStamp + "&key=" + app.d.appKey;
  return doMD5Encode(beforMD5).toUpperCase();
}

/**
 * 获取当前时间戳
 */
function getCurrentTimeStamp() {
  var timestamp = Date.parse(new Date());
  return timestamp + "";
}

/**
 * 获取随机字符串，32位以下
 */
function getRandomString() {
  return Math.random().toString(36).substring(3, 8);
}

/**
 * MD5加密
 */
function doMD5Encode(toEncode) {
  return MD5Encode.hexMD5(toEncode);
}
/**
 * 验证时url地址
 */
function IsURL(str_url) {
  var strRegex = '^((https|http|ftp|rtsp|mms)?://)' +
    '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
    +
    '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
    +
    '|' // 允许IP和DOMAIN（域名） 
    +
    '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
    +
    '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
    +
    '[a-z]{2,6})' // first level domain- .com or .museum 
    +
    '(:[0-9]{1,4})?' // 端口- :80 
    +
    '((/?)|' // a slash isn't required if there is no file name 
    +
    '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
  var re = new RegExp(strRegex);
  //re.test() 
  if (re.test(str_url)) {
    return (true);
  } else {
    return (false);
  }
}
/**
 * 检查用户是否为存值会员
 */
function checkUserIsMember() {
  let isMember = wx.getStorageSync('user');
  let member = wx.getStorageSync('member');
  if (isMember) {
    if (isMember.endTime > Math.round(new Date().getTime() / 1000)){
        return true;
    }else{
      wx.showModal({
        title: '会员提示',
        content :'会员已到期',
        confirmText: "续费会员",
        showCancel: false,
        success: function () {
          wx.switchTab({
            url: '/pages/user/index',
          })
        }
      })
    }
  } else {
    wx.showModal({
      title: '会员提示',
      content: '请先成为会员！',
      showCancel: false,
      confirmText:"成为会员",
      success: function () {
        wx.switchTab({
          url: '/pages/user/index',
        })
      }
    })
  }
}
/** 
 * 和PHP一样的时间戳格式化函数 
 * @param {string} format 格式 
 * @param {int} timestamp 要格式化的时间 默认为当前时间 
 * @return {string}   格式化的时间字符串 
 */
function dateToTime(format, timestamp) {
  var a, jsdate = ((timestamp) ? new Date(timestamp * 1000) : new Date());
  var pad = function(n, c) {
    if ((n = n + "").length < c) {
      return new Array(++c - n.length).join("0") + n;
    } else {
      return n;
    }
  };
  var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var txt_ordin = {
    1: "st",
    2: "nd",
    3: "rd",
    21: "st",
    22: "nd",
    23: "rd",
    31: "st"
  };
  var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var f = {
    // Day 
    d: function() {
      return pad(f.j(), 2)
    },
    D: function() {
      return f.l().substr(0, 3)
    },
    j: function() {
      return jsdate.getDate()
    },
    l: function() {
      return txt_weekdays[f.w()]
    },
    N: function() {
      return f.w() + 1
    },
    S: function() {
      return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'
    },
    w: function() {
      return jsdate.getDay()
    },
    z: function() {
      return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0
    },

    // Week 
    W: function() {
      var a = f.z(),
        b = 364 + f.L() - a;
      var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
      if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
        return 1;
      } else {
        if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
          nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
          return date("W", Math.round(nd2.getTime() / 1000));
        } else {
          return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
        }
      }
    },

    // Month 
    F: function() {
      return txt_months[f.n()]
    },
    m: function() {
      return pad(f.n(), 2)
    },
    M: function() {
      return f.F().substr(0, 3)
    },
    n: function() {
      return jsdate.getMonth() + 1
    },
    t: function() {
      var n;
      if ((n = jsdate.getMonth() + 1) == 2) {
        return 28 + f.L();
      } else {
        if (n & 1 && n < 8 || !(n & 1) && n > 7) {
          return 31;
        } else {
          return 30;
        }
      }
    },

    // Year 
    L: function() {
      var y = f.Y();
      return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0
    },
    //o not supported yet 
    Y: function() {
      return jsdate.getFullYear()
    },
    y: function() {
      return (jsdate.getFullYear() + "").slice(2)
    },

    // Time 
    a: function() {
      return jsdate.getHours() > 11 ? "pm" : "am"
    },
    A: function() {
      return f.a().toUpperCase()
    },
    B: function() {
      // peter paul koch: 
      var off = (jsdate.getTimezoneOffset() + 60) * 60;
      var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
      var beat = Math.floor(theSeconds / 86.4);
      if (beat > 1000) beat -= 1000;
      if (beat < 0) beat += 1000;
      if ((String(beat)).length == 1) beat = "00" + beat;
      if ((String(beat)).length == 2) beat = "0" + beat;
      return beat;
    },
    g: function() {
      return jsdate.getHours() % 12 || 12
    },
    G: function() {
      return jsdate.getHours()
    },
    h: function() {
      return pad(f.g(), 2)
    },
    H: function() {
      return pad(jsdate.getHours(), 2)
    },
    i: function() {
      return pad(jsdate.getMinutes(), 2)
    },
    s: function() {
      return pad(jsdate.getSeconds(), 2)
    },
    //u not supported yet 

    // Timezone 
    //e not supported yet 
    //I not supported yet 
    O: function() {
      var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
      if (jsdate.getTimezoneOffset() > 0) t = "-" + t;
      else t = "+" + t;
      return t;
    },
    P: function() {
      var O = f.O();
      return (O.substr(0, 3) + ":" + O.substr(3, 2))
    },
    //T not supported yet 
    //Z not supported yet 

    // Full Date/Time 
    c: function() {
      return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P()
    },
    //r not supported yet 
    U: function() {
      return Math.round(jsdate.getTime() / 1000)
    }
  };

  return format.replace(/[\ ]?([a-zA-Z])/g, function(t, s) {
    var ret;
    if (t != s) {
      // escaped 
      ret = s;
    } else if (f[s]) {
      // a date function exists 
      ret = f[s]();
    } else {
      // nothing special 
      ret = s;
    }
    return ret;
  });
}
module.exports = {
  isStringEmpty: isStringEmpty,
  mapToJson: mapToJson,
  toastSuccess: toastSuccess,
  doWechatPay: doWechatPay,
  getUrl: getUrL,
  postUrl: postUrL,
  isUrl: IsURL,
  checkUser: checkUserIsMember,
  dateToTime: dateToTime
}