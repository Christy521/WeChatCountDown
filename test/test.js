// test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    endTime: '2019-5-22 17:31:20',
    timer: '',
    isShow:true
  },  
  countDown() {
    let that = this    
    that.setData({
      timer: setInterval(function() {        
        let currentTimeStamp = new Date().getTime()
        let endTimeStamp = new Date(that.data.endTime).getTime()
        let leftTimeStamp = endTimeStamp - currentTimeStamp
        if (leftTimeStamp<=0){
          that.setData({
            leftSeconds:0,
            leftMinutes:0,
            leftHour:0,
            isShow:false
          })
          clearInterval(that.data.timer)
          return
        }
        let leftTotalSeconds = parseInt(leftTimeStamp / 1000)
        let leftHour = Math.floor(leftTotalSeconds / 3600),
            leftMinutes = Math.floor(leftTotalSeconds % 3600 / 60),
            leftSeconds = leftTotalSeconds % 3600 % 60
        that.setData({
          leftSeconds: leftSeconds,
          leftMinutes: leftMinutes,
          leftHour: leftHour
        })
        leftTotalSeconds--
        that.setData({
          leftTimeStamp:leftTimeStamp
        })
      }, 17)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.countDown()
    // console.log(this.format())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})