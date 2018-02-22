/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';
import CONSTANT from '../../../../common/utils/constants.js';
import VAREGEX from '../../../../common/utils/valregex.js';
import VueCropper from 'vue-cropper';
export default {
    components: {
        tree,
        VueCropper
    },
    data() {
        return {
            bydefault:require("../../../../common/img/add-img-icon.png"),
            defaultImg: require("../../../../common/img/add-img-icon.png"), //默认上传图片
            majorBusiness: "", //主营业务
            oMajorBusinessList: [], //主营业务列表
            oProductCode: [], //项目编码集合
            oSelectMajorItems: [], //选中的主营业务
            majorBusinessNO: "", //主营业务废弃
            inauguralState: "",
            clinicLogo: "",
            sAddress:"",
            contentMap:{}, //import CONSTANT from '../../../../common/utils/constants.js'
            imgUploadUrl:CONSTANT.fileUpload+"attachment/upload",
            //imgUploadUrl: "https://27478500.qcloud.la/uploadimg_test/attachment/upload",
            oClinicRank: ["诊所", "门诊部", "整形外科医院", "一级民营医院", "二级医院", "三级甲等医院"],
            clinicRank: "",
            oClinicData: {
                "address": "", //诊所地址
                "brief": "", //诊所简介
                "businessTime": "", //营业时间
                "cityName": "", //城市名
                "clinicId": "", //诊所id
                "coordinate": "", //坐标
                "countryName": "", //国家
                "districtName": "", //地址
                "id": "",
                "linkman": "", //诊所负责人
                // "loginName": "", //当前登录用户名
                "logo": "", //诊所logo
                "name": "", //诊所名
                "parentTenantId": "", //租户ID
                "phone": "", //电话
                // "picture": "", //照片
                "productNames": [ //项目
                    {
                        "productCode": "",
                        "productName": ""
                    }
                ],
                "provName": "北京", //省份
                "qualification": "" //诊所等级
            },
            savestate:true,
            cropData:{
                img: '',
                info: true,
                outputSize:1,
                fixed:true,
                canMoveBox:false,
                autoCrop: true,
                original:true,
                autoCropWidth: 212,  //212
                autoCropHeight: 350,  //350
                fixedBox: true,
                full:true
            },
            currentChoiceType:0,//当前选择上传的图片类型，0是before， 1是after
            isCroper:false //是否打开裁剪的窗口

        };
    },
    created() {
        let clinicid = this.$route.params.id;
       // this.fGetSingleClinic();
        /*刷新和关闭浏览器的提示信息（）*/
        window.onbeforeunload = function (e) {

            return "系统可能不会保存您所做的更改。";
        }

    },
    /*浏览器后退键的提示信息 （路由导航守卫）*/
    beforeRouteLeave (to, from , next) {

        if(this.savestate==true){
            const answer = window.confirm('您编辑的内容尚未保存，确定离开此页面吗？')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
        else{
            next()
        }

    },
    mounted() {
        let _This=this;
        _This.fGetSingleClinic();
        _This.contentMap=new BMap.Map("map-content");
        let map =_This.contentMap;// new BMap.Map("map-content");
        //map.enableScrollWheelZoom();
        map.enableContinuousZoom();
        let autoDrop = new BMap.Autocomplete( //建立一个自动完成的对象
            {
                "input": "suggestId",
                "location": map
            });
        autoDrop.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
            let currentSelect = e.item.value;
            let selectValue = currentSelect.province + currentSelect.city + currentSelect.district + currentSelect.street + currentSelect.business;
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
        /**
         * 编辑取消
         */
        fEditCancel() {
            this.savestate=false;
            this.$router.push("/admin/clinic/detail");
        },
        /**
         * 编辑保存
         * @returns {boolean}
         */
        fEditSave() {
            this.savestate=false;
            let _This = this;
            _This.oClinicData.productNames = _This.oSelectMajorItems;
           // _This.oClinicData.logo =_This.defaultImg;  //
            //_This.oClinicData.address =_This.sAddress;
            if(!/\S{1,}/.test(_This.oClinicData.name)){
                _This.$message.error("诊所名不能为空");
                return false;
            }
            if(!/^\S{2,}$/.test(_This.oClinicData.qualification)){
                _This.$message.error("请选择诊所等级");
                return false;
            }
            let pregex=/^(((0\d{2,3})|(\(0\d{2,3}\)))(\-|)\d{8})|(\d{3,4}\-\d{3,4}\-\d{3,4})$/;
            let phone=_This.oClinicData.phone;
            if((!VAREGEX.isMobile(phone))&&!VAREGEX.isTel(phone)){ //VAREGEX
                _This.$message.error("请输入正确的电话号码");
                return false;
            }
            if(!/\S{1,}/.test(_This.oClinicData.majorBusiness)){
                _This.$message.error("请输入主营业务");
                return false;
            }
    /*        if(_This.oSelectMajorItems.length<=0){
                _This.$message.error("请输入主营业务");
                return false;
            }*/
            if(!_This.oClinicData.logo){
                _This.$message.error("请上传诊所Logo");
                return false;
            }
      /*      if(_This.defaultImg.indexOf("add-img-icon")>=0){
                _This.$message.error("请上传诊所Logo");
                return false;
            }*/
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
                        },1000)

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
           // _This.oClinicData.logo =_This.defaultImg;
            _This.oClinicData.clinicId = "";
            let pCreateData = JSON.stringify(_This.oClinicData);
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
                    if(result.code == 0 && result.data) {
                        delete result.data.page;
                        _This.oClinicData = result.data;
                        _This.oSelectMajorItems = result.data.productNames||[];
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
        /**
         * 选择诊所图片
         */
        fChooseImg() {
            this.$refs.uploadImg.click();
        },
        /**
         * 异步文件上传
         */
        fAjaxFileUpload(e) {
            let _This = this;
            var imgFile = e.target.files[0];

            let aLogoType=[".jpg",".jpeg",".png",".bmp"];
            let imgName=imgFile.name.substr(imgFile.name.lastIndexOf(".")).toLocaleLowerCase();
            if(aLogoType.indexOf(imgName)<0){
                _This.$message.error("上传图片格式错误");
                return false;
            }
            if(imgFile.size > 5*1024*1024) {
                _This.$message.error("图片大小不能超过5M");
                return false;
            }
            var fdata = new FormData();
            fdata.append('imgFile', imgFile);
            fdata.append('user', "test");
            _.ajax({
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    if(result.code == 0 && result.data.length > 0) {
                        //_This.defaultImg = result.data[0];
                        _This.oClinicData.logo=result.data[0];
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 多文件上传-------新加入
         * @param ee
         */
        fMultImgUpload(ee){

            console.log("---------ee-------------",ee);
            let _This=this;
            let index=_This.afterIndex;
            var fdata = new FormData();
            var imgFile = ee.target.files[0];
            fdata.append('imgFile', imgFile);
            fdata.append('fieldFlag', 1);
          //  http://140.143.185.73:8083/api/clinic/upload
            let imgUploadUrl=CONSTANT.fileUpload+"/api/clinic/upload";
            _.ajax({
                url: imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    console.log(result.data)
                    let oClinicData=_This.oClinicData;
                    _This.oClinicData.fileVo=_This.oClinicData.fileVo||[];
                    if(result.code == 0 ) {
                        _This.oClinicData.fileVo.push(result.data);
                    }
                },
                error: function(result) {
                    this.$message.error("图片大小不能超过5M！");
                    console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 多文件形式-------新加
         * @param index
         * @param pindex
         */
        fMultChooseafImg(index,pindex){
            let _This=this;
            _This.afterIndex=index;
            let itema=index;
            this.$refs[itema].click();
        },
        /**
         *删除多个的图片
         */
        fDeletePic(ee,index,pindex){
            let _This=this;
            ee.cancelBubble = true;
            let oClinicData=_This.oClinicData;
            _This.oClinicData.fileVo.splice(pindex,1);
        },
///////////////////裁剪图片 start///////////////////////////////////////////
        /**
         * 裁剪图片
         */
        fCroperImg(){
            let _This=this;
            _This.$refs.cropData.getCropBlob((imgFile) => {
                // do something
                var fdata = new FormData();
                fdata.append('imgFile', imgFile);
                fdata.append('fieldFlag', 1);
                let imgUploadUrl=CONSTANT.fileUpload+"/api/clinic/upload";
                _.ajax({
                    url: imgUploadUrl,
                    type: 'POST',
                    data: fdata,
                    urlType: 'full',
                    contentType: false,
                    processData: false,
                    success: function(result) {
                        let oClinicData=_This.oClinicData;
                        _This.oClinicData.fileVo=_This.oClinicData.fileVo||[];
                        if(result.code == 0 ) {
                            _This.oClinicData.fileVo.push(result.data);
                            _This.isCroper=false;
                        }else{
                            this.$message.error("系统错误，图片提交失败！");
                        }
                    },
                    error: function(result) {
                        this.$message.error("图片大小不能超过5M！");
                        console.log("error-- result------>", result)
                    }
                });
            });
        },

        /*诊所照片裁剪上传*/
        CroperImgUpload(e){
            let _This = this;
            var imgFile = e.target.files[0];
            if(imgFile.size > 5*1024*1024) {
                _This.$message.error("图片大小不能超过5M");
                return false;
            }
            let aLogoType=[".jpg",".jpeg",".png",".bmp"];
            let imgName=imgFile.name.substr(imgFile.name.lastIndexOf(".")).toLocaleLowerCase();
            if(aLogoType.indexOf(imgName)<0){
                _This.$message.error("上传图片格式错误");
                return false;
            }

            var reader = new FileReader();
            reader.onload = function(ee){
                let cropData=_This.cropData;
                _This.isCroper=true;
                cropData.img=ee.target.result;
                _This.cropData=cropData;
            };
            reader.readAsDataURL(imgFile);
            return false;
        },
        /**
         * 关闭上传照片窗口
         */
        fCloseUploadPic(){
            this.isCroper=false;
        },

        ///////////////////裁剪图片 end///////////////////////////////////////////


        /**
         * 获取地址map
         */
        fSearchAddressByAddress(msize) {
            let _This=this;
            let addressText=_This.oClinicData.address;
            let map =_This.contentMap;
            map&&addressText&&_This.fLocationCity(addressText,function (addressText) {
                msize=msize||12;
                //var map =_This.contentMap;//***************
                var localSearch = new BMap.LocalSearch(map);
                localSearch.setSearchCompleteCallback(function(searchResult) {
                    if(!searchResult){
                        return false;
                    }
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
            });

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
        },
        /**
         * 定位城市
         */
        fLocationCity(addText,callback){
            if(addText){
                callback(addText);
            }else {
                let map =this.contentMap;
                var myCity = new BMap.LocalCity();
                myCity.get(function(result){
                    callback(result.name);
                });
            }
        }
    },
    watch: {

    }
}