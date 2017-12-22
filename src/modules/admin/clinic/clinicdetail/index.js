/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        let defaultl=require("../../../../common/img/login_logo.png");
        return {
            defaultLogo:defaultl,
            majorBusiness:"",//主营业务
            oMajorBusinessList:[],//主营业务列表
            oProductCode:[], //项目编码集合
            oSelectMajorItems:[], //选中的主营业务
            oClinicData:{
                "address": "", //诊所地址
                "brief": "", //诊所简介
                "businessTime": "",  //营业时间
                "cityName": "", //城市名
                "clinicId": 0, //诊所id
                "coordinate": "", //坐标
                "countryName": "", //国家
                "districtName": "", //地址
                "id": 0,
                "linkman": "", //诊所负责人
                "logo": "", //诊所logo
                "name": "", //诊所名
                "phone": "", //电话
                "productNames": [ //项目
                    {
                        "productCode": "",
                        "productName": ""
                    }
                ],
                "provName": "", //省份
                "qualification": "" //诊所等级
            }
        };
    },
    filters:{
        phoneFilter:function (input) {
            if(input&&input!=""){
                return input.replace(/(\d{3})\d{4}(\d{3})/,"$1*****$2");
            }
        },
        productFilter: function (input) {
            if (!input || input == "" || typeof(input) != "object") {
                return "";
            }
            let result = [];

            input.forEach(item => {
                result.push(item.productName);
            });
            return result.join("、");
        },
    },
    created() {
        let clinicid=this.$route.params.id;
        let postData = {
            faceId: ""
        };

        this.fGetClinicList();
    },
    mounted(){
        let currentCity = "";

        var map = new BMap.Map("map-content");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        //  map.centerAndZoom("北京",12);
        function myFun(result) {
            var cityName = result.name;
            console.log("result----------->", result.center);
            let lat = result.center.lat;
            let lng = result.center.lng;
            point = new BMap.Point(lng, lat);
            map.centerAndZoom(point, 12);
        }

        var myCity = new BMap.LocalCity();
        myCity.get(myFun);


        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }

        // 初始化地图,设置城市和地图级别。

        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {
                "input": "suggestId"
                , "location": map
            });

        ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province + _value.city + _value.district + _value.street + _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province + _value.city + _value.district + _value.street + _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
            G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

            setPlace();
        });

        function setPlace() {
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun() {
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果

                console.log("pp-------->", pp);

                map.centerAndZoom(pp, 18);
                map.addOverlay(new BMap.Marker(pp));    //添加标注
            }

            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            console.log("myValue--------->", myValue);
            local.search(myValue);
        }
    },
    destroyed() {

    },
    methods: {
        fEditClinic(){
            this.$router.push("/admin/clinic/edit/"+this.oClinicData.clinicId);
        },
        fGetClinicList(){
            let _This=this;
            let postData = {
                //faceId: ""
            };
            _.ajax({
                url: '/admin/clinic/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("list--------", result);
                    if(result.code==0&&result.data.list.length>0){
                        _This.oClinicData=result.data.list[0];
                    }
                }
            }, 'withCredentials');
        },
        fGetClinicDetail(){
            let postData = {
               // faceId: ""
            };
            _.ajax({
                url: '/admin/clinic/get',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("test--------", result);
                }
            }, 'withCredentials');
        }
    },
    watch: {}
}