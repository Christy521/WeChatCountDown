const app = getApp()

Page({
  data: {
    endTime:'2019-5-17 23:59:59',
    timer:''
  },
  //时间处理
  format() {
    let currentTime = new Date()
    let endTimes = new Date(this.data.endTime)
    let leftTimeStamp = endTimes.getTime() - currentTime.getTime()
    let currentHour = currentTime.getHours(),
      currentMinutes = currentTime.getMinutes(),
      currentSeconds = currentTime.getSeconds()
    let endHour = endTimes.getHours(),
      endMinutes = endTimes.getMinutes(),
      endSeconds = endTimes.getSeconds()
    if (leftTimeStamp > 0) {
      let currentTotalSeconds = currentHour * 3600 + currentMinutes * 60 + currentSeconds,
        endTotalSeconds = endHour * 3600 + endMinutes * 60 + endSeconds,
        leftTotalSeconds = endTotalSeconds - currentTotalSeconds
      let leftHour = Math.floor(leftTotalSeconds / 3600),
        leftMinutes = Math.floor(leftTotalSeconds % 3600 / 60),
        leftSeconds = leftTotalSeconds % 3600 % 60
      this.setData({
        leftHour: leftHour,
        leftMinutes: leftMinutes,
        leftSeconds: leftSeconds
      })
    } else {
      this.setData({
        leftHour: '00',
        leftMinutes: '00',
        leftMinutes: '00'
      })
    }
  },
  //倒计时功能
  countDown() {
    let that = this
    let leftSeconds = that.data.leftSeconds
    that.setData({
      timer: setInterval(function () {
        leftSeconds--
        that.setData({
          leftSeconds: leftSeconds
        })
        if (leftSeconds == 0) {
          let leftMinutes = that.data.leftMinutes
          leftMinutes--
          that.setData({
            leftSeconds: 59,
            leftMinutes: leftMinutes
          })
          clearInterval(that.data.timer)
          that.countDown()
        }
        if (that.data.leftMinutes == 0) {
          let leftHour = that.data.leftHour
          leftHour--
          that.setData({
            leftHour: leftHour,
            leftMinutes: 59
          })
        }
      }, 1000)
    })
  },
  onLoad(){
    this.format()
    this.countDown()
  }
})
