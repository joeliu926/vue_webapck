/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import HighchartsComponent from '../../common/template/HighchartsComponent.vue';
export default {
    components: {
        HighchartsComponent
    },
    data () {
        let _this=this;
        return {
            showdata:null,
            optionsLine: {
                title: {
                    text: '对数折线图'
                },
                xAxis: {
                    tickInterval: 1
                },
                yAxis: {
                    type: 'logarithmic',
                    minorTickInterval: 0.1
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br />',
                    pointFormat: 'x = {point.x}, y = {point.y}'
                },
                series: [{
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
                    pointStart: 1
                }]
            },
            optionsArea: {
                chart: {
                    type: 'area'
                },
                title: {
                    text: '美苏核武器库存量'
                },
                subtitle: {
                    text: '数据来源: <a href="https://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                    'thebulletin.metapress.com</a>'
                },
                xAxis: {
                    allowDecimals: false,
                    labels: {
                        formatter: function () {
                            return this.value; // clean, unformatted number for year
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: '核武库国家'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000 + 'k';
                        }
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} 制造 <b>{point.y:,.0f}</b>枚弹头'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: '美国',
                    data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                }, {
                    name: '苏联/俄罗斯',
                    data: [null, null, null, null, null, null, null, null, null, null,
                        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                        4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                        15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                        33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                        35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                        21000, 20000, 19000, 18000, 18000, 17000, 16000]
                }]
            },
            optionsColumn:{
                chart: {
                    type: 'column'
                },
                title: {
                    text: '按性别划分的水果消费总量'
                },
                xAxis: {
                    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: '水果数量'
                    }
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            '总量: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: '小张',
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: '小潘',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }, {
                    name: '小彭',
                    data: [2, 5, 6, 2, 1],
                    stack: 'female'
                }, {
                    name: '小王',
                    data: [3, 0, 4, 4, 3],
                    stack: 'female'
                }]
            },
            optionsPie:{
                chart: {
                    plotShadow: false
                },
                title: {
                    text: '2014年某网站各浏览器的访问量占比'
                },
                colors:[
                    '#FF0000',//红
                    '#00FF00',//绿
                    '#0000FF',//蓝
                    '#FFFF00',//黄
                    '#FF00FF',//紫
                    '#FFFFFF',//紫
                    '#7cb5ec',
                    '#434348',////////
                    '#90ed7d',
                    '#f7a35c',
                    '#8085e9',
                    '#f15c80',
                    '#e4d354',
                    '#2b908f',
                    '#f45b5b',
                    '#91e8e1'
                ],
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                    }
                },
                series: [{
                    type: 'pie',
                    name: '浏览器占比',
                    data: [
                        ['Firefox',   45.0],
                        ['IE',       26.8],
                        {
                            name: 'Chrome',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['Safari',    8.5],
                        ['Opera',     6.2],
                        ['其他',   0.7]
                    ]
                }]
            },
            optionsMix:{
                title: {
                    text: '混合图表'
                },
                xAxis: {
                    categories: ['苹果', ' 橙', '梨', '香蕉', '李子']
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                labels: {
                    items: [{
                        html: '水果消耗',
                        style: {
                            left: '100px',
                            top: '18px',
                           // color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    }]
                },
                series: [{
                    type: 'column',
                    name: '小张',
                    data: [3, 2, 1, 3, 4]
                }, {
                    type: 'column',
                    name: '小潘',
                    data: [2, 3, 5, 7, 6]
                }, {
                    type: 'column',
                    name: '小王',
                    data: [4, 3, 3, 9, 0]
                }, {
                    type: 'spline',
                    name: '平均值',
                    data: [3, 2.67, 3, 6.33, 3.33],
                    marker: {
                        lineWidth: 2,
                       // lineColor: Highcharts.getOptions().colors[3],
                        fillColor: 'white'
                    }
                }, {
                    type: 'pie',
                    name: '总的消耗',
                    data: [{
                        name: '小张',
                        y: 13,
                        //color: Highcharts.getOptions().colors[0] // Jane's color
                    }, {
                        name: '小潘',
                        y: 23,
                       // color: Highcharts.getOptions().colors[1] // John's color
                    }, {
                        name: '小王',
                        y: 19,
                       // color: Highcharts.getOptions().colors[2] // Joe's color
                    }],
                    center: [100, 80],
                    size: 100,
                    showInLegend: false,
                    dataLabels: {
                        enabled: false
                    }
                }]
            },
            styles: {
                width: 800,
                height: 400
            }
        }
    },
    created() {
            this.showdata = 'hello boy';
            //console.log($('body').html());
    },
    mounted(){
        console.log('aaaa')
    },
    destroyed() {

    },
    methods: {

    }
}