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
            afterIndex:-1, //标记多文件选择的条目
            afterPIndex:-1,//标记多文件选择的图片
            addAfterCaseItem:{
                "title": "",
                "definitionDate": "",
                "pictures": [
                    {
                        "name": "",
                        "url": ""
                    }
                ],
                "description": ""
            },
            doctorlist: [{
                value: '选项1',
                label: '李医生'
            }, {
                value: '选项2',
                label: '张医生'
            }, {
                value: '选项3',
                label: '郝医生'
            }],

            options11:[ {
                value: '选项1',
                label: '男'
            }, {
                value: '选项2',
                label: '女'
            }],
            bydefault: require("../../../../common/img/add-img-icon.png"),
            imgUploadUrl: "https://27478500.qcloud.la/uploadimg_test/api/caseHeader/uploadCasePicture",
            defaultImg: require("../../../../common/img/add-img-icon.png"), //默认上传图片
            afterImg:require("../../../../common/img/add-img-icon.png"), //默认上传图片
            afterName:"",
            beforeImg:require("../../../../common/img/add-img-icon.png"), //默认上传图片
            beforeName:"",
            defaultName:"",
            addpicName:"",
            // defaultImg: "", //默认上传图片
            value: '',
            value1: '',
            operationDate: '',
            imageUrl:"",
            textarea:"",
            caseName:"",
            doctor:"",
            product:"",
            customerAge:'',
            customerGender:0,
            contentList:[{
                "title": "",
                "definitionDate": "",
                "pictures": [
                    {
                        "name": "",
                        "url": ""
                    }
                ],
                "description": ""
            }],
            title:'',
            search:"",
            searchData:[],
            textareas:[],
            caseDetail: {
                "id": 3,
                "caseName": "测试案例1",
                "doctor": {
                    "tenantId": "",
                    "id": 1,
                    "name": "李医生"
                },
                "products": [
                    {
                        "id": 1,
                        "productName": " 眼部整形"
                    }
                ],
                "operationDate": 1513008000000,
                "customerGender": 1,
                "customerAge": 23,
                "customerLogo": {
                    "name": "10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7",
                    "url": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7"
                },
                "beforePicture": {
                    "name": "10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7",
                    "url": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7"
                },
                "afterPicture": {
                    "name": "10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7",
                    "url": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7"
                },
                "contentList": [
                    {
                        "id": 3,
                        "title": "术后10天",
                        "pictures": [
                            {
                                "name": "10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7",
                                "url": "http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/3919c607-53e9-46a4-afea-57aa734e99e7"
                            }
                        ],
                        "definitionDate": 1513008000000,
                        "description": "手术日记描述"
                    }
                ]
            }

        };
    },
    created() {
        this.getdoctorlist();
    },
    mounted() {

    },
    destroyed() {

    },
    methods: {
        /*添加页面*/
        caseaddSave(){
            let _This=this;
            let sContentList=JSON.stringify(_This.contentList);
            let oContentList=JSON.parse(sContentList);
            oContentList.forEach((item,index)=>{
                let picLength=item.pictures.length;
                if(picLength>0){
                  item.pictures.splice((picLength-1),1);
                }
            });
            console.log("----------------",this.operationDate);
            console.log(new Date(this.operationDate).valueOf());
            console.log(this.doctorlist[0].id);
            let postData = {
                "loginName":"admin",
                "caseName": this.caseName,
                "doctor": {
                    "id":   this.doctorlist.id,
                },
                "products": [
                    {
                        "id":this.searchData.index
                    }
                ],
                "operationDate":this.operationDate?new Date(this.operationDate).valueOf():"",
                "beforePicture": {
                    "name": this.beforeName?this.beforeName:"",
                },
                "afterPicture": {
                    "name": this.afterName?this.afterName:"",
                },
                "customerLogo": {
                    "name": this.defaultName?this.defaultName:"",
                },
                "customerGender":this.customerGender,
                "customerAge": 23,
                "contentList": [
                    {
                        "title": this.title,
                        "definitionDate": this.definitionDate?new Date(this.definitionDate).valueOf():"",
                        "pictures": [
                            {
                                "name": this.addpicName?this.addpicName:"",
                            }
                        ],
                        "description": this.textarea,
                    }
                ],
            };
            console.log("++++++++++++++++++",postData);
            let pData={
                postData:JSON.stringify(postData)
            }
            _.ajax({
                url: '/admin/backcase/backcaseadd',
                method: 'POST',
                data: pData,
                success: function (result) {
                    console.log("caseadd- 成功添加------", result);


                }
            }, 'withCredentials');
        },
        remoteMethod(query) {
            console.log(query);
            if (query !== '') {
                this.loading = false;
                var _This = this;
                let   postData={
                    // pageNo:_This.pageNo,
                    // pageSize:_This.pageSize,
                    productName:query,


                }
                _.ajax({
                    url: '/admin/backcase/selectcaselist',
                    method: 'POST',
                    data: postData,
                    success: function (result) {
                        console.log("============",result);
                        if(result.code==0){
                            let list=result.data;
                            console.log(list);
                            list.forEach(item => {
                                _This.searchData.push(item.productName);
                            });
                           console.log(_This.searchData);
                        }

                    }
                }, 'withCredentials');
                // setTimeout(() => {
                //     this.loading = false;
                //     this.options4 = this.list.filter(item => {
                //         return item.label.toLowerCase()
                //                 .indexOf(query.toLowerCase()) > -1;
                //     });
                // }, 200);
            } else {
                this.options4 = [];
            }
        },

        /*添加描述信息*/
        addtextareas(param){
            console.log(param);
            this.textareas.push(param);
            console.log(this.textareas);

            this.textarea="";
        },
        /*获取医生列表*/
        getdoctorlist(){
            let _this=this;
            let pData={

            }
            _.ajax({
                url: '/admin/backcase/setdoctorlist',
                method: 'POST',
                data: pData,
                success: function (result) {
                    console.log("获取医生列表成功-------", result);
                    _this.doctorlist=result.data;
                    console.log(_this.doctorlist);

                }
            }, 'withCredentials');
        },



        /*日期筛选条件*/
        pickerOptions1: {
            disabledDate(time) {
                return time.getTime() > Date.now();
            },
        },

        /*保存按钮*/
        Savecase (){
            this.caseaddSave();

           //this.$router.push("/admin/backcaselist");
        },
        beforeImgUpload(e){
            let _This = this;
            var beforeimgFile = e.target.files[0];
            console.log("img---->", beforeimgFile);
            if(beforeimgFile.size > 5*1024*1024) {
                return false;
            }
            var fdata = new FormData();
            fdata.append('beforeimgFile', beforeimgFile);
            fdata.append('user', "test");
            _.ajax({
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    console.log("------------",result)
                    if(result.code == 0 ) {
                        _This.beforeImg =result.data.url;
                        _This.beforeName =result.data.name;
                        // console.log("+++++++++++++++",_This.defaultImg);
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        }
        ,
        afterImgUpload(e){
            let _This = this;
            var afterimgFile = e.target.files[0];
            console.log("img---->", afterimgFile);
            if(afterimgFile.size > 5*1024*1024) {
                return false;
            }
            var fdata = new FormData();
            fdata.append('afterimgFile', afterimgFile);
            fdata.append('user', "test");
            _.ajax({
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    console.log("------------",result)
                    if(result.code == 0 ) {
                        _This.afterImg =result.data.url;
                        _This.afterName =result.data.name;
                        // console.log("+++++++++++++++",_This.defaultImg);
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        }
        ,
        fChoosebfImg() {
            this.$refs.beforeImg.click();
        },
        fChooseafImg() {
            this.$refs.afterImg.click();
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
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    console.log("------------",result)
                    if(result.code == 0 ) {
                        _This.defaultImg =result.data.url;
                        _This.defaultname =result.data.name;
                        // console.log("+++++++++++++++",_This.defaultImg);
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        },
        fDeleteAfterItem(index){
            let _This=this;
            _This.contentList.splice(index,1);
        },
        /**
         * 多文件上传
         * @param ee
         */
        fMultImgUpload(ee){
            let _This=this;
         let index=_This.afterIndex;
         let pindex=_This.afterPIndex;
            var fdata = new FormData();
            var imgFile = ee.target.files[0];
            fdata.append('imgFile', imgFile);
            _.ajax({
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    let plength=_This.contentList[index].pictures.length;
                    if(result.code == 0 ) {
                        _This.contentList[index].pictures.splice(plength-1,0,result.data);
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 多文件形式
         * @param index
         * @param pindex
         */
        fMultChooseafImg(index,pindex){
            let _This=this;
            _This.afterIndex=index;
            _This.afterPIndex=pindex;
            let itema="s"+index+pindex+"e";
            this.$refs[itema][0].click();
        },
        fAddAfterCase(){
            let _This=this;
            _This.contentList.push(_This.addAfterCaseItem);
        },
        fDeletePic(ee,index,pindex){
            let _This=this;
            ee.cancelBubble = true;
            _This.contentList[index].pictures.splice(pindex,1);
            console.log("close pic",index);
        }



    },
    watch: {

    }
}