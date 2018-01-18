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
            imgUploadUrl:CONSTANT.fileUpload+"attachment/upload",//上传图片地址
            addPost:false,//新增海报标志
            addPostcate:false, //新增海报分类状态
            eidtPostcate:false, //编辑海报分类状态
            currentEdit:0, //当前的编辑item
            aPostClassify:[{id:1,name:"分类一"},{id:2,name:"分类二"},{id:3,name:"分类三"}],//海报分类
            selectClassify:2,//选中的分类
            uploadPostImg:""//当前上传的图片
        };
    },
    filters:{
    },
    created() {
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
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
        /**
         * 新增海报
         */
        fAddPost(){
            let _This = this;
            console.log("add post----------");
            _This.addPost=true;


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
         * 选择海报分类
         */
        fSelectClassify(cmd){
           console.log("select classsify------>");
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
                    if(result.code == 0 && result.data.length > 0) {
                       _This.uploadPostImg=result.data[0];
                    }
                },
                error: function(result) {
                    console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 新增海报分类
         */
        fAddPostClassify(){
            let _This = this;
            console.log("add post----------");
            _This.addPostcate=true;
        },
        /**
         * 确认新增
         */
        fAddCommit(){
            let _This = this;
            _This.addPostcate=false;
            console.log("add sure----------")
        },
        /**
         * 删除海报
         */
        fDelPost(item){
            let _This=this;
            console.log("delete post------>",item);
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
         * 选择海报分类
         * @param classid
         */
        fSelectClassify(classid){
            let _This = this;
            console.log("select classify-----",classid)
        },
        /**
         * 编辑海报
         */
        fEditPost(item){
            let _This=this;
            _This.currentEdit=item;
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
            _This.currentEdit=item;
            console.log("edit classify-----",item)
        }
    },
    watch: {}
}