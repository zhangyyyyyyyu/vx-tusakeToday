Page({
  data:{
    dataList:[],
  },
  onLoad(){
    let that=this
    wx.request({
      url: 'http://www.ipip5.com/today/api.php?type=json',
      success(res){
        console.log("请求成功",res.data)
        that.setData({
          dataList: res.data.result,
          nowDate:res.data.today
        })
      },
      fali(res){
        console.log("请求失败",res);
      }
    })
  }
})