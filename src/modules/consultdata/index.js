import HighchartsComponent from '../../common/template/HighchartsComponent.vue';
export default {
    components: {
        HighchartsComponent
    },
    data () {
        return {
            todayNum:0,
            compareNum:0,
            startDate: _.date2String(new Date(),"yyyy-MM-dd"),
            endDate:_.date2String(new Date(),"yyyy-MM-dd"),
            defineday:"",
            count: 0,
            aCustomerlist: [],
            tabType:"top",
            activeSelect:"nearly",
            isUp:true,
            isModel:false,
            optionsColumn:{},
            styles: {
                //width:"80%",
                //height: 400
            },
            statisticsType: '1',
            optionType: [{
                value: '1',
                label: '按天'
            }, {
                value: '2',
                label: '按周'
            }, {
                value: '3',
                label: '按月'
            }],
            activeDate: '1',
            optionDate: [{
                value: '1',
                label: '最近7天'
            }, {
                value: '2',
                label: '最近15天'
            }, {
                value: '3',
                label: '最近30天'
            }, {
                value: '4',
                label: '最近半年'
            }, {
                value: '5',
                label: '最近一年'
            }],
            thisDay:_.date2String(new Date(),"MM月dd日"),

            todayNum_scene:0,
            compareNum_scene:0,
            startDate_scene:_.date2String(new Date(),"yyyy-MM-dd"),
            endDate_scene:_.date2String(new Date(),"yyyy-MM-dd"),
            isUp_scene:true,
            optionsColumn_scene:{},
            startDatePicker:this.beginDate(),
            endDatePicker:this.processDate(),
        }
    },
    created() {

    },
    mounted(){
        this.initData();
        this.initData_scene();

    },
    destroyed() {

    },
    filters:{
      dateFilter:function (input) {
          if(input&&input!=""){
              return  _.date2String(new Date(input),"yyyy-MM-dd hh:mm:ss");
          }
      },
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1****$2");
            }
        }
    },
    methods: {
        beginDate(){
            let _This = this
            return {

                function( time){
                    return time.getTime();
                }



                // disabledDate(time){
                //     if(_This.startDate){
                //         return time.getTime();
                //     }
                //     // return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
                // }
            }
        },
        //提出结束时间必须大于提出开始时间
        processDate(){
            let _This = this
            return {
                disabledDate(time){
                    if(_This.startDate){
                        return new Date(_This.startDate).getTime() > time.getTime()
                    }else{
                        return time.getTime() > Date.now()//开始时间不选时，结束时间最大值小于等于当天
                    }
                }
            }
        },
        changedate(){
            this.initData();
        },
        changedate_scene(){
            this.initData_scene();
        },
        initData(){
            var settingColumn={
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                colors:[
                    '#f198ad',//
                    '#d3bef1',//紫
                    '#0000FF',//蓝
                    '#FFFF00',//黄
                    '#FF0000',//红
                    '#FFFFFF',//紫
                    '#7cb5ec',
                    '#90ed7d',
                    '#f7a35c',
                    '#8085e9',
                    '#f15c80',
                    '#e4d354',
                    '#2b908f',
                    '#f45b5b',
                    '#91e8e1'
                ],
                xAxis: {
                    categories: []
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    stackLabels: {
                        enabled: true,
                        formatter:function(){
                            return "<span style='color:purple;'>"+this.total+"人</span>";
                        }
                    },
                    useHTML:true,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    headerFormat: '<small style="font-size:16px">{point.key}</small><br/>',
                    backgroundColor:"rgba(0,0,0,0.4)",
                    borderWidth:0,
                    style:{
                        color:"#ffffff",
                    },
                    /* formatter: function () {
                     return '<b>' + this.x + '</b><br/>' +
                     this.series.name + ': ' + this.y + '<br/>' +
                     '总量: ' + this.point.stackTotal;
                     }*/
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        pointWidth:60
                    }
                },
                series: [{
                    name: '未补充信息',
                    data: [],
                    stack: 'male'
                }, {
                    name: '已补充信息',
                    data: [],
                    stack: 'male'
                }]
            };
            let _this =this;
            _.ajax({
                url: '/consults/getrecords',
                method: 'POST',
                data: {
                    beginDate:_.date2String(new Date(_this.startDate),"yyyy-MM-dd"),
                    endDate:_.date2String(new Date(_this.endDate),"yyyy-MM-dd")
                },
                success: function (result) {
                    if (result.code ==0&&result.data) {
                        _this.todayNum = result.data.todayConsultNum;
                        _this.compareNum = Math.abs(result.data.changeValue);
                        _this.isUp =result.data.changeValue>0?true:false;
                        result.data.detailList = result.data.detailList.sort(function(x, y){
                            return x.messFullCount+x.messNotFullCount > y.messFullCount+y.messNotFullCount ? -1:1;
                        });

                        let subArray = [];
                        let sortIndex =-1;
                        //二维排序
                        for(let i=0;i<result.data.detailList.length;i++){
                            let f_count = result.data.detailList[i].messFullCount;
                            let f_notcount = result.data.detailList[i].messNotFullCount;

                            if(result.data.detailList.length<=i+1){
                                    continue;
                            }

                            let l_count = result.data.detailList[i+1].messFullCount;
                            let l_notcount = result.data.detailList[i+1].messNotFullCount;

                            if(f_count+f_notcount ==l_count+l_notcount){
                                if(sortIndex==-1){
                                    sortIndex=i;
                                }
                                subArray.push(result.data.detailList[i]);
                            }
                            else{
                                subArray.push(result.data.detailList[i]);
                                if(subArray.length>1){
                                    subArray = subArray.sort(function(x, y){
                                        return x.messFullCount > y.messFullCount ? -1:1;
                                    });
                                    //二维重排序后替换
                                    result.data.detailList.splice(sortIndex,subArray.length,...subArray);
                                }
                                sortIndex=-1;
                                subArray =[];
                            }
                        }

                        result.data.detailList.forEach(item=>{
                            settingColumn.xAxis.categories.push(item.userName);
                            settingColumn.series[0].data.push(item.messNotFullCount);
                            settingColumn.series[1].data.push(item.messFullCount);
                        })

                        _this.optionsColumn =  settingColumn;
                    }else {
                        _this.optionsColumn =  settingColumn;
                    }
                }
            }, 'withCredentials');
        },

        initData_scene(){
            var settingColumn={
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                colors:[
                    '#FFEBD6',//黄
                    '#BEC5FC',//蓝
                    '#f198ad',//
                    '#d3bef1',//紫
                    '#FF0000',//红
                    '#FFFFFF',//紫
                    '#7cb5ec',
                    '#90ed7d',
                    '#f7a35c',
                    '#8085e9',
                    '#f15c80',
                    '#e4d354',
                    '#2b908f',
                    '#f45b5b',
                    '#91e8e1'
                ],
                xAxis: {
                    categories: []
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    stackLabels: {
                        enabled: true,
                        formatter:function(){
                            return "<span style='color:purple;'>"+this.total+"人</span>";
                        }
                    },
                    useHTML:true,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    headerFormat: '<small style="font-size:16px">{point.key}</small><br/>',
                    backgroundColor:"rgba(0,0,0,0.4)",
                    borderWidth:0,
                    style:{
                        color:"#ffffff",
                    },
                    /* formatter: function () {
                     return '<b>' + this.x + '</b><br/>' +
                     this.series.name + ': ' + this.y + '<br/>' +
                     '总量: ' + this.point.stackTotal;
                     }*/
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        pointWidth:60
                    }
                },
                series: [{
                    name: '待面诊',
                    data: [],
                    stack: 'male'
                }, {
                    name: '已结束',
                    data: [],
                    stack: 'male'
                }]
            };
            let _this =this;
            _.ajax({
                url: '/consults/getrecords_scene',
                method: 'POST',
                data: {
                    beginDate:_.date2String(new Date(_this.startDate_scene),"yyyy-MM-dd"),
                    endDate:_.date2String(new Date(_this.endDate_scene),"yyyy-MM-dd")
                },
                success: function (result) {
                    if (result.code ==0&&result.data) {
                        _this.todayNum_scene = result.data.todayConsultNum;
                        _this.compareNum_scene = Math.abs(result.data.changeValue);
                        _this.isUp_scene =result.data.changeValue>0?true:false;
                        result.data.detailList = result.data.detailList.sort(function(x, y){
                            return x.endConsultCount+x.notConsultCount > y.endConsultCount+y.notConsultCount ? -1:1;
                        });

                        let subArray = [];
                        let sortIndex =-1;
                        //二维排序
                        for(let i=0;i<result.data.detailList.length;i++){
                            let f_count = result.data.detailList[i].endConsultCount;
                            let f_notcount = result.data.detailList[i].notConsultCount;

                            if(result.data.detailList.length<=i+1){
                                continue;
                            }

                            let l_count = result.data.detailList[i+1].endConsultCount;
                            let l_notcount = result.data.detailList[i+1].notConsultCount;

                            if(f_count+f_notcount ==l_count+l_notcount){
                                if(sortIndex==-1){
                                    sortIndex=i;
                                }
                                subArray.push(result.data.detailList[i]);
                            }
                            else{
                                subArray.push(result.data.detailList[i]);
                                if(subArray.length>1){
                                    subArray = subArray.sort(function(x, y){
                                        return x.endConsultCount > y.endConsultCount ? -1:1;
                                    });
                                    //二维重排序后替换
                                    result.data.detailList.splice(sortIndex,subArray.length,...subArray);
                                }
                                sortIndex=-1;
                                subArray =[];
                            }
                        }

                        result.data.detailList.forEach(item=>{
                            settingColumn.xAxis.categories.push(item.userName);
                            settingColumn.series[0].data.push(item.notConsultCount);
                            settingColumn.series[1].data.push(item.endConsultCount);
                        })

                        _this.optionsColumn_scene =  settingColumn;
                    }else {
                        _this.optionsColumn_scene =  settingColumn;
                    }
                }
            }, 'withCredentials');
        },

        fSelectDate(e){

        },
        handleClick(){

        },
        pickerOptions(){},
        fDateChange(date){

        },
        fRefresh(){
        },
        fEdit(){
            console.log("edit data");

        },
        fMoreUserInfo(){
            console.log("get more user info");
        },
        handleCurrentChange(pnum){
        },
        searchData(){

        },
        fCustomerDetail(uid){
            if(!uid){
                return false;
            }
            this.$router.push({path:'/customerinfo/'+uid});
        }

    }
}