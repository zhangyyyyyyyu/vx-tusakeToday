Page({
data:{
    nowDate:'',
    weatherCity:'',
    nowTemp:'',
    windDeraction:'',
    windSpeed:'',
    humiDity:'',
    nowTime:''
  },
  query:function(){
    db.collection('weatherTodayData').get().then(res=>{
      console.log(res.data);
    })
  },
  onLoad(){
    this.add();
  },
  onLoad(){
    let nowDate=this.getTime()
    let that=this
    wx.request({
      url: 'http://www.weather.com.cn/data/sk/101010100.html',
      success(res){
        console.log("获取成功",res)
        that.setData({
          weatherCity:res.data.weatherinfo.city,
          nowTemp:res.data.weatherinfo.temp,
          windDeraction:res.data.weatherinfo.WD,
          windSpeed:res.data.weatherinfo.WS,
          humiDity:res.data.weatherinfo.SD,
          nowTime:res.data.weatherinfo.time,
          nowDate//实则为nowDate: nowDate,此处为简写
        })
      },
      fail(res){
        console.log("获取失败",res)
      }
    })
  },
   //获取时间函数
   getTime(){
    let date=new Date()
    let month=date.getMonth()+1
    if(month<10){
      month= '0' +month
    }
    let day=date.getDate()
    if(day<10){
      day= '0' +day
    }
    let monthDay=month+'月'+day+'日'
    console.log(monthDay)
    return monthDay
  }
})