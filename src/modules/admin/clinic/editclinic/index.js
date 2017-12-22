/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
            majorBusiness:"",//主营业务
            oMajorBusinessList:[],//主营业务列表
            oProductCode:[], //项目编码集合
            oSelectMajorItems:[], //选中的主营业务
            inauguralState:"",
            clinicLogo:"",
          // imgUploadUrl:"https://jsonplaceholder.typicode.com/posts/",
          // imgUploadUrl:"https://27478500.qcloud.la/uploadimg_test/attachment/upload",
            imgUploadUrl:"http://localhost:8023/admin/clinic/test",
           //imgUploadUrl:"http://140.143.185.73:8083/attachment/upload",
            oClinicRank:["诊所","门诊部","整形外科医院","一级民营医院","二级医院","三级甲等医院"],
            clinicRank:"",
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
               // "loginName": "", //当前登录用户名
                "logo": "", //诊所logo
                "name": "", //诊所名
                "parentTenantId": 0, //租户ID
                "phone": "", //电话
               // "picture": "", //照片
                "productNames": [ //项目
                    {
                        "productCode": "",
                        "productName": ""
                    }
                ],
                "provName": "北京", //省份
                "qualification": "12" //诊所等级
            }

        };
    },
    created() {
        let clinicid=this.$route.params.id;
        console.log("clinic----",clinicid);
       this.fGetSingleClinic();

    },
    mounted(){
        let currentCity="";

        var map = new BMap.Map("map-content");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        //  map.centerAndZoom("北京",12);
        function myFun(result){
            var cityName = result.name;
            console.log("result----------->",result.center);
            let lat=result.center.lat;
            let lng=result.center.lng;
            point = new BMap.Point(lng,lat);
            map.centerAndZoom(point,12);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);







        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }

        // 初始化地图,设置城市和地图级别。

        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {"input" : "suggestId"
                ,"location" : map
            });

        ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
            G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

            setPlace();
        });

        function setPlace(){
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun(){
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果

                console.log("pp-------->",pp);

                map.centerAndZoom(pp, 18);
                map.addOverlay(new BMap.Marker(pp));    //添加标注
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            console.log("myValue--------->",myValue);
            local.search(myValue);
        }
    },
    destroyed() {

    },
    methods: {
        fEditClinic(){
            console.log("edit clinic-----");
        },
        fEditCancel(){
            this.$router.push("/admin/clinic/detail");
        },
        fEditSave(){
            //this.$router.push("/admin/clinic/detail");
            let _This = this;
            _This.oClinicData.productNames=_This.oSelectMajorItems;
            let pCreateData=JSON.stringify(_This.oClinicData);

            console.log("update--pCreateData------->",_This.oClinicData);


            // return false;
            let postData = {
                pData: pCreateData
            };

            _.ajax({
                url: '/admin/clinic/update',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("update ff------->",result);
                    if (result.code == 0 && result.data) {

                    }
                }
            }, 'withCredentials');
        },
        /**
         * 选择主营项目
         */
        fSelectMajorItem(eCode){
            let _This = this;
            if(_This.oProductCode.indexOf(eCode)>=0){
                return false;
            }
            _This.oMajorBusinessList.forEach(item => {
                    if (item.productCode == eCode) {
                        let productItem = {
                            productCode: item.productCode,
                            productName: item.productName
                        };
                        _This.oProductCode.push(eCode);
                        _This.oSelectMajorItems.push(productItem);
                    }
            });
        },
        /**
         * 查询主营项目
         */
        fGetMajorList(ename){

            console.log("search auto ====>",ename);
            if (ename.trim() == "") {
                return false;
            }
            let _This = this;
            let postData = {
                productName: ename
            };
            _.ajax({
                url: '/product/searchList',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _This.oMajorBusinessList = result.data;
                    }
                }
            }, 'withCredentials');
        },
        fRemoveMajor(eCode){
            let _This = this;
            let lindex=_This.oProductCode.indexOf(eCode);
            _This.oProductCode.splice(lindex,1);
            _This.oSelectMajorItems.splice(lindex,1);

        },
        /**
         * 新建诊所
         */
        fCreateClinic(){
            let _This = this;
            _This.oClinicData.productNames=_This.oSelectMajorItems;
            _This.oClinicData.clinicId="";
            let pCreateData=JSON.stringify(_This.oClinicData);

            console.log("pCreateData------->",_This.oClinicData);


           // return false;
            let postData = {
                pData: pCreateData
            };

            _.ajax({
                url: '/admin/clinic/create',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("create ff------->",result);
                    if (result.code == 0 && result.data) {

                    }
                }
            }, 'withCredentials');
        },
        /**
         * 获取单个诊所信息
         */
        fGetSingleClinic(){
            let _This=this;
            let clinicid=_This.$route.params.id;
            let postData = {
                id: clinicid
            };

            _.ajax({
                url: '/admin/clinic/get',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("get single ------->",result);
                    if (result.code == 0 && result.data) {
                        delete result.data.page;
                        _This.oClinicData=result.data;
                        _This.oSelectMajorItems=result.data.productNames;
                        _This.oSelectMajorItems.forEach(item=>{
                            _This.oProductCode.push(item.productCode);
                        });
                    }
                }
            }, 'withCredentials');
        },
        uploadLogoSuccess(res,file){
            console.log(Array.prototype.slice.call(arguments));
            this.oClinicData.logo = URL.createObjectURL(file.raw);
        },
        beforeUploadLogo(){

        },
        ajaxFileUpload(e){
            let _This=this;

          _This.imgUploadUrl="/admin/clinic/test";

            console.log(_This.imgUploadUrl,"-----eeeeee---->",e);

            var imgFile = e.target.files[0];

            console.log("--------------->", window.URL.createObjectURL(imgFile));

            console.log("img---->",imgFile);
            var fdata = new FormData();
            fdata.append('imgFile', imgFile);
            fdata.append('user',"test");
            _.ajax(
                {
                    url:_This.imgUploadUrl,
                    type: 'POST',
                    data: fdata,
                    contentType: false,
                    processData: false,
                    success: function (result) {

                         console.log("-----upload result----",result);
                    },
                    error:function (result) {
                        console.log("error-- result------>",result)
                    }
                },'withCredentials');
        }
    },
    watch: {

    }
}