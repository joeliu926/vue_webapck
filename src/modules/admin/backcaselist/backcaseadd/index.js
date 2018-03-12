/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../../tree/index.vue';
import CONSTANT from '../../../../common/utils/constants.js';
import VueCropper from 'vue-cropper';

export default {
    components: {
        tree,
        VueCropper
    },
    data () {
        return {
            defaultImg: require("../../../../common/img/post-demo.png"), //图片demo
            bydefault:require("../../../../common/img/add-img-icon.png"),
            imgUploadUrl: CONSTANT.fileUpload+"api/caseHeader/uploadCasePicture",
            imgVideoMulty:CONSTANT.fileUpload+"attachment/upload/v3",//多个文件上传可以上传图片和视频
            thumbnailUrl:CONSTANT.fileUpload+"attachment/thumbnail",//获取文件的缩略图请求
            caseId:'',
            afterIndex:-1, //标记多文件选择的条目
            afterPIndex:-1,//标记多文件选择的图片
            productItem:"",//单项诊疗项目 caseDetail.products111
            oProductList: [], //诊疗项目列表1111
            oProductCode: [], //诊疗项目id集合1111
            oSelectProductItems: [], //选中的诊疗项目1111
            oSelectDoc:"",
            endDatePicker:this.processDate(),
            addAfterCaseItem:{ //增加新的
                "title": "",
                "definitionDate": "",
                "pictures": [],
                "description": "",
                "type":2
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
            dataString:"",
            caseDel:this.dataString,
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
                  /*  {
                        "id": "",
                        "title": "",
                        "pictures": [],
                        "definitionDate": "",
                        "description": "",
                        "type":2
                    }*/
                ]
            },
            savestate:true,
            cropData:{
                img: '',
                info: true,
                autoCrop: true,
                canMoveBox:false,
                autoCropWidth: 212,
                autoCropHeight: 350,
                fixedBox: true,
                full:true
            },
            currentChoiceType:-1,//当前选择上传的图片类型，0是before， 1是after
            isCroper:false, //是否打开裁剪的窗口

            isCaseLib:false,//是否打开案例库
            isPicCaseLib:true,//0照片案例、1视频案例
            aMaterial:[],//素材照片集合
            iMaterial:{},//素材单个文件
            pageSize:4,//每页数量
            totalCount:0,//总共页数
            aSelectNameCollection:[],//选中的名称
            aSelectCollection:[],//选中的案例条目
            currentIndex:-1,//当前上传图片视频位置索引
            pageNo:1,//页码编号
            customerName:"",//依据名称或者电话搜索
            fileaccept:"image/jpg,image/jpeg,image/bmp,image/png",//限定文件接收类型


        };
    },
    created() {
        this.dataString=JSON.stringify(this.caseDetail);
        this.caseDel=JSON.parse(this.dataString);
        this.caseId = this.$route.params.id;
        if(this.caseId!='_EPT'){
            this.initData();
        }
        this.getdoctorlist();
        window.onbeforeunload = function() {
            return "系统可能不会保存您所做的更改";
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
    methods: {
        /**
         * 获取项目列表详情
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
        /*保存按钮 和保存并新建*/
        Savecase(icode){
            this.savestate=false;
            /*验证判断必填项*/
            if(!/\S{1,}/.test(this.caseDetail.caseName)){
                this.$message.error("案例名不能为空");
                return false;
            }
            if(!this.caseDetail.doctor.id){
                this.$message.error("医生名不能为空");
                return false;
            }
            if(this.caseDetail.products.length==0){
                this.$message.error("诊疗项目不能为空");
                return false;
            }
            if(!/\S{1,}/.test(this.caseDetail.operationDate)){
                 this.$message.error("诊疗时间不能为空");
                 return false;
             }
            if(this.caseDetail.beforePicture.url==""){
                this.$message.error("请上传术前照片");
                return false;
            }
            if(this.caseDetail.afterPicture.url==""){
                this.$message.error("请上传术后照片");
                return false;
            }
            if(this.caseDetail.customerLogo.url==""){
                this.$message.error("请上传求美者头像照片");
                return false;
            }
            if(!this.caseDetail.customerGender){
                this.$message.error("请选择性别");
                return false;
            }
            if(!/\d{1,}/.test(this.caseDetail.customerAge)){
                this.$message.error("年龄不能为空");
                return false;
            }
            /*
            * 段落的标题和其他的验证；
            * */
            var  authtitle=false;
            var  authdefinitionDate=false;
            var  authpictures=false;
            this.caseDetail.contentList.forEach(m=>{
                if(m.title.length==0){
                    authtitle=true;
                }
                if(m.definitionDate.length==0){
                    authdefinitionDate=true;
                }
                if(m.pictures.length==0){
                    authpictures=true;
                }
            })
            if(authtitle){
                this.$message.error("段落标题不能为空");
                return false;
            }
            if(authdefinitionDate){
                this.$message.error("恢复日期不能为空");
                return false;
            }
            if(authpictures){
                this.$message.error("补充求美者照片不能为空");
                return false;
            }


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
                        // console.log("====++++++++++++++====",result);
                        if(result.code==0){
                            _This.$message({message: '添加成功',
                                type: 'success'
                            });
                            if(icode==1){
                                setTimeout(function(){

                                    _This.$router.push("/admin/backcaselist");
                                },3000);

                            }else{
                                _This.caseDetail=_This.caseDel;
                            }
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
                            if(icode==1){
                                setTimeout(function(){
                                    _This.$router.push("/admin/backcaselist");
                                },1000);
                            }else{
                                _This.caseDetail=_This.caseDel;
                            }
                        }else {
                            _This.$message.error("更新失败,系统异常请稍后再试！");
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

            // console.log("============","+++++++++++++",this.oProductCode);
            let _This=this;
            let index= _This.caseDetail.products.indexOf(item);
            if(index>=0){
                _This.oProductCode.splice(index,1);
                _This.caseDetail.products.splice(index,1);
            }
            // console.log(this.caseDetail.products);
        },

        /**
         * 选中诊疗项目
         * @param item
         */
        fSelectProductItem(item){
            let _This=this;
             if(_This.oProductCode.indexOf(item.id))
             {
                 _This.oProductCode.push(item.id);
                 delete item.page;
                 if(item.productName){
                     _This.caseDetail.products.push(item);
                 }
             }
            this.productItem ="";
        },
        //获取诊疗项目列表
        fAutoProduct(query) {
            if (query !== '') {
                this.loading = false;
                var _This = this;
                let   postData={
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
                this.searchData = [];
            }
        },
        /**
         * 诊疗时间判断
         */
        processDate(){
            return {
                disabledDate(time){
                    return time.getTime() > Date.now()//诊疗时间最大值小于等于当天
                }
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
            this.textareas.push(param);
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

        /*取消按钮*/
        backlist(){
            this.savestate=false;
            this.$router.push("/admin/backcaselist");
        },
        /*术前照片上传*/
        beforeImgUpload(e){
            let _This = this;
            var beforeimgFile = e.target.files[0];
          //  console.log("img---->", beforeimgFile);
            if(beforeimgFile.size > 5*1024*1024) {
                _This.$message.error("图片大小不能超过5M");
                return false;
            }
            let aLogoType=[".jpg",".jpeg",".png",".bmp"];
            let imgName=beforeimgFile.name.substr(beforeimgFile.name.lastIndexOf(".")).toLocaleLowerCase();
            if(aLogoType.indexOf(imgName)<0){
                _This.$message.error("上传图片格式错误");
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
                        _This.caseDetail.beforePicture=result.data;//术前照片赋值**************
                    }
                },
                error: function(result) {
                    this.$message.error("图片大小不能超过5M!");
                    // console.log("error-- result------>", result)
                }
            });
        },
        /*术后照片上传*/
        afterImgUpload(e){
            let _This = this;
            var afterimgFile = e.target.files[0];
            if(afterimgFile.size > 5*1024*1024) {
                _This.$message.error("图片大小不能超过5M");
                return false;
            }
            let aLogoType=[".jpg",".jpeg",".png",".bmp"];
            let imgName=afterimgFile.name.substr(afterimgFile.name.lastIndexOf(".")).toLocaleLowerCase();
            if(aLogoType.indexOf(imgName)<0){
                _This.$message.error("上传图片格式错误");
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
                    }
                },
                error: function(result) {
                    this.$message.error("图片大小不能超过5M!");
                    // console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 选择术前照片
         */
        fChoosebfImg() {
           // this.$refs.beforeImg.click();
            this.currentChoiceType=0;
            this.isPicCaseLib=true; //图片库
            this.isCaseLib=true;//打开选择
            this.fileaccept="image/jpg,image/jpeg,image/bmp,image/png";
            this.fGetMaterilList();//获取图片案例库列表
        },
        /**
         * 选择术后照片
         */
        fChooseafImg() {
           // this.$refs.afterImg.click();
            this.currentChoiceType=1;
            this.isPicCaseLib=true;//图片
            this.isCaseLib=true;//打开选择
            this.fileaccept="image/jpg,image/jpeg,image/bmp,image/png";
            this.fGetMaterilList(); //获取图片案例库列表
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
                _This.$message.error("图片大小不能超过5M");
                return false;
            }
            let aLogoType=[".jpg",".jpeg",".png",".bmp"];
            let imgName=imgFile.name.substr(imgFile.name.lastIndexOf(".")).toLocaleLowerCase();
            if(aLogoType.indexOf(imgName)<0){
                _This.$message.error("上传图片格式错误");
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
                    // console.log("------------",result)
                    if(result.code == 0 ) {
                        _This.caseDetail.customerLogo.url =result.data.url;
                        _This.caseDetail.customerLogo.name =result.data.name;
                    }
                },
                error: function(result) {
                    this.$message.error("图片大小不能超过5M!");
                    // console.log("error-- result------>", result)
                }
            });
        },

        /**
         *删除一个段落（关闭按钮）
         */
        fDeleteAfterItem(index){
            let _This=this;
            if(_This.caseDetail.contentList.length<=1){
                return false;
            }
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
                        let itype=_This.isPicCaseLib?1:2;
                        result.data.type=itype;
                        _This.caseDetail.contentList[index].pictures.push(result.data);
                    }
                },
                error: function(result) {
                    this.$message.error("图片大小不能超过5M！");
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
           // _This.afterPIndex=pindex;
            //let itema="s"+index+pindex+"e";
            let itema="s"+index+"e";
            this.$refs[itema][0].click();
        },
        /**
         * 添加多案例
         */
        fAddAfterCase(arg){
            let _This=this;

            _This.isPicCaseLib=!!arg;
            let addAfterCaseItem=_This.addAfterCaseItem;
            addAfterCaseItem.type=!!arg?1:2;
            let temCase=JSON.stringify(addAfterCaseItem);
            _This.caseDetail.contentList.push(JSON.parse(temCase));
        },
        /**
         *删除单个的图片
         */

        fDeletePic(ee,index,pindex){
            let _This=this;
            ee.cancelBubble = true;
            _This.caseDetail.contentList[index].pictures.splice(pindex,1);
        },
        /**
         * 裁剪图片
         */
        fCroperImg(){
            let _This=this;
            _This.$refs.cropData.getCropBlob((imgFile) => {
                // do something
                var fdata = new FormData();
                fdata.append('imgFile', imgFile);
                _.ajax({
                    url: _This.imgUploadUrl,
                    type: 'POST',
                    data: fdata,
                    urlType: 'full',
                    contentType: false,
                    processData: false,
                    success: function(result) {
                        if(result.code!=0){
                            this.$message.error("图片上传失败");
                            return false;
                        }
                        let cType=_This.currentChoiceType;
                        if(cType==0){
                            _This.caseDetail.beforePicture=result.data;
                        }else if(cType==1){
                            _This.caseDetail.afterPicture=result.data;
                        }
                        _This.isCroper=false;
                        _This.currentChoiceType=-1;

                    },
                    error: function(result) {
                        this.$message.error("图片大小不能超过5M！");
                        console.log("error-- result------>", result)
                    }
                });
            });
        },

        /*术前术后照片裁剪上传*/
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
            reader.onload = function(e){
                let cropData=_This.cropData;
                _This.isCroper=true;
                cropData.img=e.target.result;
                _This.cropData=cropData;
            }
            reader.readAsDataURL(imgFile);
            return false;
        },
        /**
         * 关闭上传照片窗口
         */
        fCloseUploadPic(){
            let _This=this;
            _This.isCroper=false;
            _This.currentChoiceType=-1;
            _This.aSelectNameCollection=[];
            _This.aSelectCollection=[];
        },

        //////////////////////////////////////////////////////////////////////////http://140.143.185.73:8077/mc_files/10088/CASE_LIBRARY/d50a756d-8ad1-47fa-9ecb-ce541ca1f319
        /**
         * 打开案例库
         */
        fOpenCaseLib(index,ctype){
            let _This=this;
            _This.isCaseLib=true;
            _This.currentIndex=index;
            _This.isPicCaseLib=ctype==1?true:false;
            _This.fileaccept=_This.isPicCaseLib?"image/jpg,image/jpeg,image/bmp,image/png":"video/mp4,video/MP4,video/WEBM,video/webm";
            _This.fGetMaterilList();
        },
        /**
         * 关闭案例库
         */
        fCloseCaseLib(){
            let _This=this;
            _This.isCaseLib=false;
            _This.currentChoiceType=-1;
            _This.aSelectNameCollection=[];
            _This.aSelectCollection=[];
        },
        /**
         * 确认选择照片
         */
        fEnsureSelectCase(){
            let _This=this;
            let index=_This.currentIndex;
            let aSelectCollection=_This.aSelectCollection;
            if(aSelectCollection.length<=0){
                _This.$message.error("请选择案例内容");
                return false;
            }

            if(_This.currentChoiceType>=0){ //选择术前术后照片情况
                let cropData=_This.cropData;
                _This.isCroper=true;
                cropData.img=aSelectCollection[0].url;
                _This.cropData=cropData;
                _This.isCaseLib=false;
                _This.aSelectNameCollection=[];
                _This.aSelectCollection=[];
                return false;
            }


            let aPic=_This.caseDetail.contentList[index].pictures;
            let aResult=aPic.concat(aSelectCollection);

            _This.caseDetail.contentList[index].pictures=aResult;
            _This.isCaseLib=false;
            _This.aSelectNameCollection=[];
            _This.aSelectCollection=[];
        },

        getBase64Image(img) {


            var image = new Image();
            image.src =aSelectCollection[0].url;//"http://p4yff5s6k.bkt.clouddn.com/6FNOpE-HAT2Ab94XdCLgPzonurU=/FikAuqZ0f_4A8YKYyZPqhP8DwdZF";//
            image.crossOrigin = "*";
            image.onload = function(e){

              //  let timage=_This.getBase64Image(image);
               // console.log("image-----------",timage);
            }
            var canvas =this.$refs.icanvas;
            var ctx = canvas.getContext("2d");

            var icanvasaa=this.$refs.icanvasaa;
            icanvasaa.src=img.src;
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0, img.width, img.height);

            var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
            var dataURL = canvas.toDataURL("image/"+ext);

            // canvas转为blob并上传

            return dataURL
        },

        /**
         * 分页操作
         * @param pnum
         */
        handleCurrentChange(pnum){
            this.pageNo=pnum;
            this.fGetMaterilList();
        },
        /**
         * 根据客户手机号码或者名称搜索案例内容
         */
        fSearchCase(){
            this.pageNo=1;
            this.fGetMaterilList();
        },
        /**
         * 图片库多选
         */
        fMultySelect(item){
            let _This=this;
            let aSelectNameCollection=_This.aSelectNameCollection;
            let aSelectCollection=_This.aSelectCollection;
            let iIndex=aSelectNameCollection.indexOf(item.fileName);
            if(iIndex<0){
                let itype=_This.isPicCaseLib?1:2;
                item.type=itype;
                item.name=item.fileName;
                if(!_This.isPicCaseLib){
                    aSelectNameCollection=[];
                    aSelectCollection=[];
                }
                aSelectNameCollection.push(item.fileName);
                aSelectCollection.push(item);

            }else{
                aSelectNameCollection.splice(iIndex,1);
                aSelectCollection.splice(iIndex,1);
            }
            _This.aSelectCollection=aSelectCollection;
            _This.aSelectNameCollection=aSelectNameCollection;
        },
        /**
         * 上传照片到照片库
         */
        fUploadImgToLib(){
            let _This=this;
            //_This.currentIndex=index;
            this.$refs["imgvideo"].click();
        },
        /**
         * 多文件上传视频和图片
         * @param ee
         */
        fImgVideoUpload(ee){
            let _This=this;
            let index=_This.afterIndex;
            // let pindex=_This.afterPIndex;
            var fdata = new FormData();
            var imgFile = ee.target.files;
            let loading = _This.$loading({
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            for(let i=0;i<imgFile.length;i++){
               let itemFile=imgFile[i];
                if(_This.isPicCaseLib){
                    let aLogoType=[".jpg",".jpeg",".png",".bmp"];
                    let imgName=itemFile.name.substr(itemFile.name.lastIndexOf(".")).toLocaleLowerCase();
                    if(aLogoType.indexOf(imgName)<0){
                        _This.$message.error("上传图片"+itemFile.name+"格式错误");
                        loading.close();
                        return false;
                    }
                    if(itemFile.size > 5*1024*1024) {
                        _This.$message.error("图片"+itemFile.name+"大小不能超过5M");
                        loading.close();
                        return false;
                    }

                }else {
                    let aLogoType=[".mp4"];
                    let imgName=itemFile.name.substr(itemFile.name.lastIndexOf(".")).toLocaleLowerCase();
                    if(aLogoType.indexOf(imgName)<0){
                        _This.$message.error("上传视频"+itemFile.name+"格式错误");
                        loading.close();
                        return false;
                    }
                    if(itemFile.size > 20*1024*1024) {
                        _This.$message.error("视频"+itemFile.name+"大小不能超过20M");
                        loading.close();
                        return false;
                    }
                }
                fdata.append('imgFile'+i, imgFile[i]);
            }

            //return false;
            _.ajax({
                url: _This.imgVideoMulty,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    let itype=_This.isPicCaseLib?1:2;
                    let aMaterial=_This.aMaterial;
                    let aSelectCollection=_This.aSelectCollection;
                    let aSelectNameCollection= _This.aSelectNameCollection;
                    let oCol=result.data||[];
                    let aList=[];
                    if(result.code == 0 ) {
                        oCol.forEach((item,index)=>{
                            let oItem={};
                            oItem.url=item.url;
                            oItem.fileName=item.name;
                            oItem.name=item.name;
                            oItem.type=itype;
                           //////// aMaterial.unshift(oItem); //暂时不删除
                            aSelectNameCollection.push(oItem.fileName);
                            aSelectCollection.push(oItem);
                            aList.push(oItem);

                        });
                       ////////// _This.aMaterial=aMaterial; //暂时不删除

                        _This.aSelectCollection=aSelectCollection;
                        _This.aSelectNameCollection=aSelectNameCollection;
                        _This.fSaveVidoeOrImg(aList);
                    }
                    loading.close();
                },
                error: function(result) {
                    this.$message.error("图片大小不能超过5M！");
                    loading.close();
                    console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 保存文件或者图片
         */
        fSaveVidoeOrImg(olist){
            var _This = this;
            let pdata={
                fileVo:olist||[]
            };
            let postData={
                pData:JSON.stringify(pdata)
            };
            //console.log("post data----",pdata);
            _.ajax({
                url: '/admin/mediabase/uploadlocal',
                method: 'POST',
                data: postData,
                success: function (result) {
                   // console.log("=====mediabase----uploadlocal=======",result);
                    if(result.code==0){
                        _This.pageNo=1;//返回第一页
                        _This.fGetMaterilList(); //重新获取项目照片库列表
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 获取视频或者图片列表
         */
        fGetMaterilList(){
            var _This = this;
            let postData={
                pageNo:_This.pageNo,
                pageSize:_This.pageSize,
                customerName:_This.customerName,
                type:_This.isPicCaseLib?1:2

            };
            //console.log("post data----",postData);
            _.ajax({
                url: '/admin/mediabase/materialList',
                method: 'POST',
                data: postData,
                success: function (result) {
                     //console.log("=====mediabase/materialList=======",result);
                    if(result.code==0){
                       _This.aMaterial=result.data.list;
                       _This.totalCount=result.data.count;
                    }

                }
            }, 'withCredentials');
        },
        /**
         * 获取视频文件的缩略图
         */
        fGetThumbnail(){
            var _This = this;
            let postData={
                videoname:"video_2018-03-07_be2e8571-b7e0-4367-a3f3-edc6ec4a1a29"

            };
            let thumbnailUrl=_This.thumbnailUrl;

            console.log("post data----",postData,thumbnailUrl);
            _.ajax({
                url: "/admin/mediabase/thumbnail",
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("=====mediabase/thumbnailUrl=======",result);
                    if(result.code==0){

                    }
                },error:function (result) {
                    console.log("-----error-----------",result);
                }
            }, 'withCredentials');
        },

    }
}