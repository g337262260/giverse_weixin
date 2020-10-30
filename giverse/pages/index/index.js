//index.js
//获取应用实例
const app = getApp()

Page({
  beginTime :function(){
    this.timeFn()
    var that = this;
    that.data.setInter = setInterval(function(){
      that.timeFn()
    },1000)
    that.data.setInter = setInterval(function(){
      that.timeFn1()
    },1000)
  },
  endTime:function(){
    var that = this;
    clearInterval(that.data.setInter)
  },
  onLoad:function(){
    this.beginTime()
  },
  onUnload:function(){
    this.endTime()
  },
  timeFn(){
    var strTime = '2020-2-15 00:00:00'
    var dateBegin = new Date(Date.parse(strTime.replace(/-/g, "/")))
    var dateEnd = new Date()
    var dateDiff = dateEnd.getTime()-dateBegin.getTime()
    var dayDiff = Math.floor(dateDiff/(24*3600*1000))
    var level1 = dateDiff%(24*3600*1000)
    var hours = Math.floor(level1/(3600*1000))
    var level2 = level1%(3600*1000)
    var minutes = Math.floor(level2/(60*1000))
    var level3 = level2%(60*1000)
    var seconds = Math.round(level3/1000)
    var timeString = "" + dayDiff + " · " + hours + " · " + minutes +" · "+seconds
    this.setData({msg:timeString})
  },
  timeFn1(){
    var strTime = '2020-4-23 00:00:00'
    var dateBegin = new Date(Date.parse(strTime.replace(/-/g, "/")))
    var dateEnd = new Date()
    var dateDiff = dateEnd.getTime()-dateBegin.getTime()
    var dayDiff = Math.floor(dateDiff/(24*3600*1000))
    var level1 = dateDiff%(24*3600*1000)
    var hours = Math.floor(level1/(3600*1000))
    var level2 = level1%(3600*1000)
    var minutes = Math.floor(level2/(60*1000))
    var level3 = level2%(60*1000)
    var seconds = Math.round(level3/1000)
    var timeString = "" + dayDiff + " · " + hours + " · " + minutes +" · "+seconds
    this.setData({msg1:timeString})
  }
})
