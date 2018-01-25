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
                "clinicId": "", //诊所id
                "coordinate": "", //坐标
                "countryName": "", //国家
                "districtName": "", //地址
                "id": "",
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

       // this.fGetClinicList();
    },
    mounted(){
    	//console.log("oClinicData.address--------",this.oClinicData.address);
        let currentCity = "";
        this.fGetClinicList();
      //  var map = new BMap.Map("map-content");


    },
    destroyed() {

    },
    methods: {
        fEditClinic(){
            //console.log("this.oClinicData.clinicId------>",this.oClinicData.clinicId);
            this.$router.push("/admin/clinic/edit/"+(this.oClinicData.clinicId||0));
        },
        /**
         * 获取诊所列表信息
         */
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
                    if(result.code==0&&result.data!="null"&&result.data.list.length>0){
                        _This.oClinicData=result.data.list[0];
                        _This.fGetClinicDetail();
                    }
                    _This.fSearchAddressByAddress();

                }
            }, 'withCredentials');
        },
        /**
         * 获取诊所详情
         */
        fGetClinicDetail(){
            let _This = this;
            let clinicid = _This.oClinicData.clinicId;
            let postData = {
                id: clinicid
            };
            _.ajax({
                url: '/admin/clinic/get',
                method: 'POST',
                data: postData,
                success: function (result) {
                    if(result.code == 0 && result.data) {
                        _This.oClinicData = result.data;
                    }
                }
            }, 'withCredentials');
        },
        fCreateMap(){
        	 // var map = new BMap.Map("map-content");
        },
        /**
         * 获取地址map
         */
       fSearchAddressByAddress() {
        	let _This=this;
        	let addressText=_This.oClinicData.address;
       	    var map = new BMap.Map("map-content");
       	  	  	//map.enableScrollWheelZoom();
		    map.enableContinuousZoom(); 
			var localSearch = new BMap.LocalSearch(map);
			localSearch.setSearchCompleteCallback(function(searchResult) {
			    if(!searchResult){
			        return false;
                }
				var poi = searchResult.getPoi(0);
				map.centerAndZoom(poi.point, 18);
				  map.clearOverlays(); 
				var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
				map.addOverlay(marker);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + addressText + "</p>");
				marker.openInfoWindow(infoWindow);
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			});
			localSearch.search(addressText);
		}
    },
    watch: {}
}