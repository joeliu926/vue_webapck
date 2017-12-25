/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';

export default {
	components: {
		tree
	},
	data() {
		return {
			defaultImg: require("../../../../common/img/add-img-icon.png"), //默认上传图片
			majorBusiness: "", //主营业务
			oMajorBusinessList: [], //主营业务列表
			oProductCode: [], //项目编码集合
			oSelectMajorItems: [], //选中的主营业务
			inauguralState: "",
			clinicLogo: "",
			sAddress:"",
			contentMap:new BMap.Map("map-content"),
			imgUploadUrl: "https://27478500.qcloud.la/uploadimg_test/attachment/upload",
			oClinicRank: ["诊所", "门诊部", "整形外科医院", "一级民营医院", "二级医院", "三级甲等医院"],
			clinicRank: "",
			oClinicData: {
				"address": "", //诊所地址
				"brief": "", //诊所简介
				"businessTime": "", //营业时间
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
		let clinicid = this.$route.params.id;
		this.fGetSingleClinic();

	},
	mounted() {
		let _This=this;
		_This.contentMap=new BMap.Map("map-content");
		  var map =_This.contentMap;// new BMap.Map("map-content");
		  	//map.enableScrollWheelZoom();
		    map.enableContinuousZoom(); 
		var autoDrop = new BMap.Autocomplete( //建立一个自动完成的对象
			{
				"input": "suggestId",
				"location": map
			});
		autoDrop.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
			var currentSelect = e.item.value;
			var selectValue = currentSelect.province + currentSelect.city + currentSelect.district + currentSelect.street + currentSelect.business;
			//_This.$refs.dropaddress.innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + selectValue;
            //console.log("selectValue------>",selectValue);
            _This.oClinicData.address=selectValue;
            _This.fSearchAddressByAddress(18);
		});

	},
	destroyed() {

	},
	methods: {
		fEditClinic() {
			//console.log("edit clinic-----");
		},
		fEditCancel() {
			this.$router.push("/admin/clinic/detail");
		},
		fEditSave() {
			//this.$router.push("/admin/clinic/detail");
			let _This = this;
			_This.oClinicData.productNames = _This.oSelectMajorItems;
			_This.oClinicData.logo =_This.defaultImg;  //
			//_This.oClinicData.address =_This.sAddress;
               if(!/\S{1,}/.test(_This.oClinicData.name)){
                   _This.$message.error("诊所名不能为空");
                   return false;
               }
            if(!/^\w{2,}$/.test(_This.oClinicData.qualification)){
                _This.$message.error("请选择诊所等级");
                return false;
            }
            if(!/^\d{3,}$/.test(_This.oClinicData.phone)){
                _This.$message.error("请输入正确的电话号码");
                return false;
            }
            if(_This.oSelectMajorItems.length<=0){
                _This.$message.error("请输入主营业务");
                return false;
            }
            if(_This.defaultImg.indexOf("add-img-icon")>=0){
                _This.$message.error("请上传诊所Logo");
                return false;
            }
            if(!/\S{2,}/.test(_This.oClinicData.businessTime)){
                _This.$message.error("请输入营业时间");
                return false;
            }
            if(!/\S{2,}/.test(_This.oClinicData.address)){
                _This.$message.error("请输入诊所地址");
                return false;
            }


			let pCreateData = JSON.stringify(_This.oClinicData);
			//return false;
			let postData = {
				pData: pCreateData
			};

			_.ajax({
				url: '/admin/clinic/update',
				method: 'POST',
				data: postData,
				success: function(result) {
					//console.log("update ff------->", result);
					if(result.code == 0 && result.data) {
                        _This.$message({message: '更新成功',
                            type: 'success'
                        });

                        setTimeout(function () {
                            _This.$router.push("/admin/clinic/detail");
                        },3000)

					}else{
					    _This.$message.error("更新失败");
                    }
				}
			}, 'withCredentials');
		},
		/**
		 * 选择主营项目
		 */
		fSelectMajorItem(eCode) {
			let _This = this;
			if(_This.oProductCode.indexOf(eCode) >= 0) {
				return false;
			}
			_This.oMajorBusinessList.forEach(item => {
				if(item.productCode == eCode) {
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
		fGetMajorList(ename) {
			//console.log("search auto ====>", ename);
			if(ename.trim() == "") {
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
				success: function(result) {
					if(result.code == 0 && result.data) {
						_This.oMajorBusinessList = result.data;
					}
				}
			}, 'withCredentials');
		},
		/**
		 * 移除主营业务
		 */
		fRemoveMajor(eCode) {
			let _This = this;
			let lindex = _This.oProductCode.indexOf(eCode);
			_This.oProductCode.splice(lindex, 1);
			_This.oSelectMajorItems.splice(lindex, 1);

		},
		/**
		 * 新建诊所
		 */
		fCreateClinic() {
			let _This = this;
			_This.oClinicData.productNames = _This.oSelectMajorItems;
				_This.oClinicData.logo =_This.defaultImg; 
			_This.oClinicData.clinicId = "";
			let pCreateData = JSON.stringify(_This.oClinicData);

			//console.log("pCreateData------->", _This.oClinicData);

			// return false;
			let postData = {
				pData: pCreateData
			};

			_.ajax({
				url: '/admin/clinic/create',
				method: 'POST',
				data: postData,
				success: function(result) {
					//console.log("create ff------->", result);
					if(result.code == 0 && result.data) {

					}
				}
			}, 'withCredentials');
		},
		/**
		 * 获取单个诊所信息
		 */
		fGetSingleClinic() {
			let _This = this;
			let clinicid = _This.$route.params.id;
			let postData = {
				id: clinicid
			};

			_.ajax({
				url: '/admin/clinic/get',
				method: 'POST',
				data: postData,
				success: function(result) {
					//console.log("get single ------->", result);
					if(result.code == 0 && result.data) {
						delete result.data.page;
						_This.oClinicData = result.data;
						_This.oSelectMajorItems = result.data.productNames;
						 _This.defaultImg=_This.oClinicData.logo; 
						 _This.sAddress=_This.oClinicData.address; 
						_This.oSelectMajorItems.forEach(item => {
							_This.oProductCode.push(item.productCode);
						});
						//console.log("111----_This.oClinicData------->", _This.oClinicData);
						_This.fSearchAddressByAddress();
					}
				}
			}, 'withCredentials');
		},
		fChooseImg() {
			this.$refs.uploadImg.click();
		},
		/**
		 * 异步文件上传
		 */
		fAjaxFileUpload(e) {
			let _This = this;
			var imgFile = e.target.files[0];
			console.log("img---->", imgFile);
			if(imgFile.size > 5*1024*1024) {
				return false;
			}
			var fdata = new FormData();
			fdata.append('imgFile', imgFile);
			fdata.append('user', "test");
			_.ajax({
				url: "/backcase/uploadcasePicture",
				type: 'POST',
				data: fdata,
				urlType: 'full',
				contentType: false,
				processData: false,
				success: function(result) {
					if(result.code == 0 && result.data.length > 0) {
						_This.defaultImg = result.data[0];
					}
				},
				error: function(result) {
					console.log("error-- result------>", result)
				}
			});
		},
		 /**
         * 获取地址map
         */
       fSearchAddressByAddress(msize) {
        	let _This=this;
        	msize=msize||12;
        	let addressText=_This.oClinicData.address;
       	    var map =_This.contentMap;// new BMap.Map("map-content"); 
			var localSearch = new BMap.LocalSearch(map);
			localSearch.setSearchCompleteCallback(function(searchResult) {
				var poi = searchResult.getPoi(0);
				_This.fGetSpecificAddress(poi.point);
				map.centerAndZoom(poi.point, msize);
				map.clearOverlays(); 
				var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
				map.addOverlay(marker);
				var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + addressText + "</p>");
				marker.openInfoWindow(infoWindow);
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			});
			localSearch.search(addressText);
		},
		/**
		 * 根据坐标点进行地址解析
		 */
		fGetSpecificAddress(cpoint){
			let _This=this;
			let geoc = new BMap.Geocoder(); 
			geoc.getLocation(new BMap.Point(cpoint.lng, cpoint.lat), function(res) {
				//console.log("res22-------->", res);
				let addComp = res.addressComponents;
				//console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			   //_This.oClinicData.address=res.address;
			  	_This.oClinicData.countryName="中国";
				_This.oClinicData.provName=addComp.province;
				_This.oClinicData.cityName=addComp.city;
				_This.oClinicData.districtName =addComp.district;
				_This.oClinicData.coordinate=cpoint.lng+","+cpoint.lat;
				_This.oClinicData.street=addComp.street;
				_This.oClinicData.streetNumber=addComp.streetNumber;
				//console.log("_This.oClinicData222-------->", _This.oClinicData);
				
			});
		}
	},
	watch: {

	}
}