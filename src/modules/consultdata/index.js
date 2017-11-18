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
            thisDay:_.date2String(new Date(),"MM月dd日")
        }
    },
    created() {

    },
    mounted(){
        this.initData();

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
        changedate(){
            this.initData();
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

                        result.data.detailList.sort(function(x, y){
                            return x.messFullCount+x.messNotFullCount > y.messFullCount+y.messNotFullCount ? -1:1;
                        });


                        result.data.detailList.sort(function(x, y){
                            return    x.messFullCount+x.messNotFullCount == y.messFullCount+y.messNotFullCount?
                                x.messFullCount > y.messFullCount ? 1:-1:1;
                        });

                        result.data.detailList.reverse();
                        result.data.detailList.forEach(item=>{
                            settingColumn.xAxis.categories.push(item.userName);
                            settingColumn.series[0].data.push(item.messNotFullCount);
                            settingColumn.series[1].data.push(item.messFullCount);
                        })

                        _this.optionsColumn =  settingColumn;
                    }else {
                        //_This.$router.push('/customers');
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