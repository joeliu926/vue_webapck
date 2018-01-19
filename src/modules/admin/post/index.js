/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../tree/index.vue';
import CONSTANT from '../../../common/utils/constants.js';
export default {
    components: {
        tree
    },
    data () {
        let defaultl=require("../../../common/img/login_logo.png");
        return {
            defaultImg: require("../../../common/img/add-img-icon.png"), //默认上传图片
            imgUploadUrl:CONSTANT.fileUpload+"api/posterInfo/uploadPosterPicture",//"attachment/upload",//上传图片地址
            addPost:false,//新增海报标志
            addPostcate:false, //新增海报分类状态
            eidtPostcate:false, //编辑海报分类状态
            currentEdit:0, //当前的编辑item
            aPostClassify:[],//海报分类
            aPoster:[],//海报列表
            selectClassify:"",//选中的分类
            uploadPostImg:{},//当前上传的图片
            categoryId:"",//分类id
            pageNo:1,//第几页
            pageSize:2,//每页条数
            currentClassifyId:"",//当前分类id
            currentClassifyName:"",//当前分类名称
            isCurrentClick:"",//当前点击分类
            count:"",//总条数
        };
    },
    filters:{
    },
    created() {
        let _This=this;
        _This.fGetClassify();//获取分类列表
        _This.fGetPostClassify();//获取海报列表
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        /**
         * 新增海报按钮
         */
        fAddPost(){
            let _This = this;
            console.log("add post----------");
            _This.addPost=true;
            _This.uploadPostImg={};
            if(_This.aPostClassify.length>0){
                _This.selectClassify=_This.aPostClassify[0].id;
            }
        },
        /**
         * 新增海报确定
         */
        fSubAddPost(){
            let _This = this;
            let posterBody = _This.uploadPostImg.name;//海报体
            let categoryId = _This.selectClassify;//分类ID
            let formatId = _This.formatId||1; //版式ID
            if(!categoryId){
                _This.$message.error("请选择海报分类");
                return false;
            }
            if(!posterBody){
                _This.$message.error("请选择海报图片");
                return false;
            }
            let postData = {
                posterBody: posterBody,
                categoryId: categoryId,
                formatId: formatId
            };
            console.log("poster ---postData---",postData);
            _.ajax({
                url: '/admin/posterInfo/addposter',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("poster ---result---",result);
                    if(result.code == 0 && result.data) {
                        _This.addPost=false;
                    }else {
                        _This.$message.error("创建海报失败");
                    }
                }
            }, 'withCredentials');
        },

        /**
         * 关闭新增海报
         */
        fCloseAddPost(){
            let _This = this;
            console.log("add post----------");
            _This.addPost=false;
        },
        /**
         * 选择海报图片
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
                    console.log("upload result-----",result);
                    if(result.code == 0 && result.data) {
                       _This.uploadPostImg=result.data;
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result);
                }
            });
        },
        /**
         * 新增海报分类按钮
         */
        fAddPostClassify(){
            let _This = this;
            console.log("add post---11111111-------");
            _This.currentClassifyId="";
            _This.currentClassifyName="";
            _This.addPostcate=true;
        },
        /**
         * 确认新增海报分类
         */
        fAddCommit(){
            console.log("333333------",this.fValidateEdit());
            let _This = this;
            let categoryName= _This.currentClassifyName;
            if(_This.fValidateEdit(categoryName)){
                _This.fAddOrUpdateClassify();
                _This.addPostcate=false;
            }

            console.log("add sure----------")
        },
        /**
         * 关闭新增
         */
        fCloseAdd(){
            let _This = this;
            _This.addPostcate=false;
            console.log("add cancel----------")
        },
        /**
         * 添加更新分类
         */
        fAddOrUpdateClassify(){
            let _This = this;
            let categoryId = _This.currentClassifyId;
            let categoryName = _This.currentClassifyName.trim();
            let postData = {
                id:categoryId,
                categoryName:categoryName
            };


            _.ajax({
                url: '/admin/postercategory/addorupdate',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("result---update---",result);
                    if(result.code == 0 && result.data) {
                        console.log("---categoryId---------",categoryId,!categoryId);
                        if(!categoryId){
                            _This.aPostClassify.push(result.data);
                            _This.$message({message: '添加成功',
                                type: 'success'
                            });

                        }else{
                            _This.currentEdit=0;
                            _This.$message({message: '更新成功',
                                type: 'success'
                            });
                        }

                    }
                }
            }, 'withCredentials');
        },
        /**
         * 编辑海报
         */
        fEditPost(item){

            let _This=this;
            console.log("--index-----",_This.aPostClassify.indexOf(item));
            _This.currentEdit=item.id;
            _This.currentClassifyId=item.id;
            _This.currentClassifyName=item.categoryName;
            console.log("item------>",item);
        },
        /**
         * 编辑确认提交
         */
        fEditCommit(item,editorcancel){
            let _This=this;
            if(!editorcancel){
                _This.currentEdit=0;
                return false;
            }
            let categoryName= _This.currentClassifyName;
            if(_This.fValidateEdit(categoryName)){
                _This.fAddOrUpdateClassify();//更新分类
                let iIndex=_This.aPostClassify.indexOf(item);
                if(iIndex>=0){
                    _This.aPostClassify[iIndex].categoryName=_This.currentClassifyName;
                }
            }
            console.log("edit classify-----",item)
        },
        /**
         * 验证编辑添加分类信息
         */
        fValidateEdit(categoryName){
            let _This=this;
            if(categoryName==""){
                _This.$message.error("分类名称不能为空");
                return false;
            }
            let isExist=false;
            _This.aPostClassify.forEach(function (item) {
                if(item.categoryName==categoryName){
                    isExist=true;
                }
            });

            if(isExist){
                _This.$message.error("分类名称已存在");
                return false;
            }
            return true;
        },
        /**
         * 获取分类列表
         */
        fGetClassify(){
            let _This = this;
            //let clinicid = _This.oClinicData.clinicId;
            let postData = {
            };
            _.ajax({
                url: '/admin/postercategory/list',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("category list----",result);
                    if(result.code == 0 && result.data) {
                        _This.aPostClassify=result.data;
                    }
                }
            }, 'withCredentials');
        },
        /**
         * 获取海报列表
         */
        fGetPostClassify(){
            let _This = this;
           // let clinicid = _This.oClinicData.clinicId;
            let postData = {
                categoryId: _This.categoryId||3,
                pageNo: _This.pageNo,
                pageSize: _This.pageSize

            };

            console.log("get poster list- postData--->",postData);
            _.ajax({
                url: '/admin/posterinfo/pagelist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("get poster list---->",result);
                    if(result.code == 0 && result.data.list.length>0) {
                        _This.aPoster =result.data.list;
                        _This.count=result.data.count;
                    }else{
                        _This.aPoster =[];
                        _This.count=0;
                    }
                }
            }, 'withCredentials');
        },

        /**
         * 删除海报
         */
        fDelPost(item){
            let _This=this;
            console.log("delete post------>",item);
            this.$confirm('确认删吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then((res) => {
                if(res=="confirm"){
                    console.log("fffffffffffffff",res);
                    let postData = {
                        id:item
                    };
                    _.ajax({
                        url: '/admin/posterInfo/posterdel',
                        method: 'POST',
                        data: postData,
                        success: function (result) {
                            console.log("delete data------->",result);
                            if(result.code==0){
                               _This.fGetPostClassify();
                            }else {
                                _This.$message.error("删除海报失败！");
                            }

                        }
                    }, 'withCredentials');
                }

            });
        },

        /**
         * 选择海报分类
         * @param classid
         */
        fSelectClassify(classid){
            let _This = this;
            _This.isCurrentClick=classid;
            _This.categoryId=classid;
            _This.fGetPostClassify();
        },
        /**
         * 切换分页
         */
        handleCurrentChange(nu){
          let _This=this;
            _This.pageNo=nu;
            _This.fGetPostClassify();
        }

    },
    watch: {}
}