/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';
import CONSTANT from '../../../../common/utils/constants.js'
export default {
    components: {
        tree
    },
    data () {
        return {
            bydefault:require("../../../../common/img/add-img-icon.png"),
            imgUploadUrl: CONSTANT.fileUpload+"api/caseHeader/uploadCasePicture",
            caseId:'',
            afterIndex:-1, //标记多文件选择的条目
            afterPIndex:-1,//标记多文件选择的图片
            productItem:"",//单项诊疗项目 caseDetail.products111
            oProductList: [], //诊疗项目列表1111
            oProductCode: [], //诊疗项目id集合1111
            oSelectProductItems: [], //选中的诊疗项目1111
            oSelectDoc:"",
            addAfterCaseItem:{ //增加新的
                "title": "",
                "definitionDate": "",
                "pictures": [],
                "description": ""
            },
            doctorlist: [{
                value: '',
                label: ''
            }],

            optGender:[{ //性别下拉
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
                id: "",
                caseName: "",
                doctor: {
                },
                products: [],
                operationDate: "",
                customerGender: "",
                customerAge: "",
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
                        "id": "",
                        "title": "",
                        "pictures": [],
                        "definitionDate": "",
                        "description": ""
                    }
                ]
            }
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
        /**
         * 获取列表
         */
        initData(){
            let _This =this;
            let pData={
                id:this.caseId
            };
            _.ajax({
                url: '/admin/backcase/casedetail',
                method: 'POST',
                data: pData,
                success: function (result) {
                    if(result.code==0) {
                        _This.caseDetail = result.data||[];

                        _This.oSelectDoc=_This.caseDetail.doctor&&_This.caseDetail.doctor.name;
                        _This.oProductCode=[];
                        _This.caseDetail.products&&_This.caseDetail.products.forEach(item=> {
                            _This.oProductCode.push(item.id)
                        });
                    }
                }
            }, 'withCredentials');
        },
        /*添加页面*/
        caseaddSave(){
            let _This=this;
            if(_This.caseDetail.hasOwnProperty("page")){
                delete _This.caseDetail.page;
            }
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
                        if(result.code==0){
                            _This.$message({message: '添加成功',
                                type: 'success'
                            });
                            setTimeout(function(){
                                _This.$router.push("/admin/backcaselist");
                            },3000);
                        }else {
                            _This.$message.error("添加失败");
                        }
                    }
                }, 'withCredentials');
            }
            else{

                delete this.caseDetail.clinic;
                let pData={
                    postData:JSON.stringify(this.caseDetail)
                };
                _.ajax({
                    url: '/admin/backcase/caseupdate',
                    method: 'POST',
                    data: pData,
                    success: function (result) {
                        if(result.code==0){
                            _This.$message({message: '更新成功',
                                type: 'success'
                            });
                            setTimeout(function(){
                                _This.$router.push("/admin/backcaselist");
                            },3000);
                        }else {
                            _This.$message.error("更新失败");
                        }
                    }
                }, 'withCredentials');
            }

        },
        /**
         * 删除诊疗项目
         * @param item
         */
        fRemoveProduct(item){
            let _This=this;
            let index= _This.caseDetail.products.indexOf(item);
            if(index>=0){
                _This.oProductCode.splice(index,1);
                _This.caseDetail.products.splice(index,1);
            }
        },
        /**
         * 选中诊疗项目
         * @param item
         */
        fSelectProductItem(item){
            let _This=this;
             if(_This.oProductCode.indexOf(item.id)<0)
             {
                 _This.oProductCode.push(item.id);
                 delete item.page;
                 _This.caseDetail.products.push(item);
             }
        },
        //获取诊疗项目列表
        fAutoProduct(query) {
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
                        if(result.code==0){
                           // let list=result.data;
                            _This.searchData=result.data;
                     /*       list.forEach(item => {
                                _This.searchData.push(item);
                            });*/

                        }

                    }
                }, 'withCredentials');
            } else {
                this.options4 = [];
            }
        },
        fDoctorChange(item){
            if(typeof(item)=="object"){
                if(item.hasOwnProperty("page")){
                    delete item.page;
                }
                this.caseDetail.doctor=item;
                this.oSelectDoc=item.name;
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
          //  console.log("img---->", beforeimgFile);
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
        // let pindex=_This.afterPIndex;
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
                       // _This.caseDetail.contentList[index].pictures.splice(plength-1,0,result.data);
                        _This.caseDetail.contentList[index].pictures.push(result.data);
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

            console.log(index,"-----",pindex);

            let _This=this;
            _This.afterIndex=index;
           // _This.afterPIndex=pindex;
            //let itema="s"+index+pindex+"e";
            let itema="s"+index+"e";
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