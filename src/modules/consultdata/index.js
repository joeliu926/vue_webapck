import HighchartsComponent from '../../common/template/HighchartsComponent.vue';
export default {
    components: {
        HighchartsComponent
    },
    data () {
        return {


            defineday:0,
            count: 0,
            aCustomerlist: [],
            tabType:"top",
            activeSelect:"nearly",
            isUp:true,
            isModel:false,
            optionsColumn:{
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
                    '#FF7092',//
                    '#C8A2FB',//紫
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
                    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
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
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: '已补充信息',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }]
            },
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
            }]
        }

    },
    created() {

    },
    mounted(){

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
        fSelectDate(e){
console.log("fffffffffffffffffffff");
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