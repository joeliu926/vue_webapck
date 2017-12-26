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
            caseId:'',
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

            options11:[{
                value: 0,
                label: '未知'
            }, {
                value: 1,
                label: '男'
            }, {
                value: 2,
                label: '女'
            }],
            operationDate: '',
            imageUrl:"",
            title:'',
            search:"",
            searchData:[],
            textareas:[],
            caseDetail: {
                id: 3,
                caseName: "",
                doctor: {
                    "tenantId": "",
                    "id": 1,
                    "name": ""
                },
                products: [
                    {
                        "id": 1,
                        "productName":""
                    }
                ],
                operationDate: 1513008000000,
                customerGender: 1,
                customerAge: 23,
                customerLogo: {
                    "name": "",
                    "url": ""
                },
                beforePicture: {
                    "name": "",
                    "url": ""
                },
                afterPicture: {
                    "name": "",
                    "url": ""
                },
                contentList: [
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
            },
            product:''

        };
    },
    created() {
        this.caseId = this.$route.params.id;

        if(this.caseId!='_EPT'){
            this.initData();
        }
        this.getdoctorlist();
    },
    methods: {
        initData(){
            let _this =this;
            let pData={
                id:this.caseId
            };
            _.ajax({
                url: '/admin/backcase/casedetail',
                method: 'POST',
                data: pData,
                success: function (result) {
                    if(result.code==0) {
                        _this.caseDetail = result.data;
                    }
                }
            }, 'withCredentials');
        },
        /*添加页面*/
        caseaddSave(){
            if(this.caseId=='_EPT')
            {
                this.caseDetail.id ='';
                let pData={
                    postData:JSON.stringify(this.caseDetail)
                };
                _.ajax({
                    url: '/admin/backcase/backcaseadd',
                    method: 'POST',
                    data: pData,
                    success: function (result) {
                    }
                }, 'withCredentials');
            }
            else{
                let pData={
                    postData:JSON.stringify(this.caseDetail)
                };
                _.ajax({
                    url: '/admin/backcase/caseupdate',
                    method: 'POST',
                    data: pData,
                    success: function (result) {
                    }
                }, 'withCredentials');
            }

        },
        remoteMethod(query) {
            if (query !== '') {
                this.loading = false;
                var _This = this;
                let   postData={
                    // pageNo:_This.pageNo,
                    // pageSize:_This.pageSize,
                    productName:query
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
                                _This.searchData.push(item);
                            });
                           console.log(_This.searchData);
                        }

                    }
                }, 'withCredentials');
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
                    _this.doctorlist=result.data;
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
                        _This.caseDetail.beforePicture.url =result.data.url;
                        _This.caseDetail.beforePicture.name =result.data.name;
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        },
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
                        _This.caseDetail.afterPicture.url =result.data.url;
                        _This.caseDetail.afterPicture.name =result.data.name;
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
                        _This.caseDetail.customerLogo.url =result.data.url;
                        _This.caseDetail.customerLogo.name =result.data.name;
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        },
        fDeleteAfterItem(index){
            let _This=this;
            _This.caseDetail.contentList.splice(index,1);
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
                    let plength=_This.caseDetail.contentList[index].pictures.length;
                    if(result.code == 0 ) {
                        _This.caseDetail.contentList[index].pictures.splice(plength-1,0,result.data);
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
            _This.caseDetail.contentList.push(_This.addAfterCaseItem);
        },
        fDeletePic(ee,index,pindex){
            let _This=this;
            ee.cancelBubble = true;
            _This.caseDetail.contentList[index].pictures.splice(pindex,1);
        }
    }
}