/**
 * Author : 丸子团队（波波、Chi、ONLINE.信）
 * 朝鹿志: https://www.cdeer.cn/
 */
const API = require('/utils/base')

App({

  onLaunch: function () {
    API.login();
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    })
  },

  onShow: function () {
    this.globalData.user = API.getUser();
  },

  globalData: {
    user: '',
    StatusBar: '',
    CustomBar: ''
  }

})