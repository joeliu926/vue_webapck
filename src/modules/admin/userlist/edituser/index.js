/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../../tree/index.vue';
import CONSTANT from '../../../../common/utils/constants.js'
export default {
    components: {tree},
    data () {
        return {
            userId:'',
            userInfo:{
                headImgUrl:"",
                id:0,
                loginName:"18010120135",
                menus:[],
                mobile:"18010120135",
                name:"檀兴园",
                nickname:"",
                permissions:[],
                rolesEnName:[],
                status:0,
                tenantId:0,
                type:"",
                wxOpenId:""},
            roleList:[],
            doctoredit:'用户编辑',
            checked:true,
            imgUploadUrl: CONSTANT.fileUpload+"attachment/upload"
        };
    },
    created() {
        this.userId = this.$route.params.id;
        this.initUser();
    },
    methods: {
        initUser(){
            let _this = this;
            let _data={
                userId:this.userId
            }
            _.ajax({
                url: '/admin/userrole/getuserinfo',
                method: 'POST',
                data:_data,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.userInfo =result.data;
                        _this.initRoles();
                    }
                }
            }, 'withCredentials');
        },
        initRoles(){
            let _this = this;
            _.ajax({
                url: '/admin/userrole/rolelist',
                method: 'POST',
                //data:_data,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.roleList =result.data;
                        _this.roleList.forEach(m=>{
                            _this.userInfo.roles.forEach(roles=>{
                                if(roles.id==m.id){
                                    m.checked=true;
                                }
                            });
                        });

                    }
                }
            }, 'withCredentials');

        },
        fGetGoodAtList(){

        },
        resetPassword(){
            let _data={
                userId:this.userId
            }
            _.ajax({
                url: '/admin/userrole/resetpwd',
                method: 'POST',
                data:_data,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.$message.info("重置成功");
                    }
                    else{
                        _this.$message.error("重置失败");
                    }
                }
            }, 'withCredentials');
        },
        unbind(){
            let _this = this;
            let _data={
                userId:this.userId
            }
            _.ajax({
                url: '/admin/userrole/unbind',
                method: 'POST',
                data:_data,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        if (result.code == 0 && result.data) {
                            _this.userInfo.userCode = result.data.userCode;
                            _this.$message.info("解绑成功");
                        }
                        else{
                            _this.$message.error("解绑失败");
                        }
                    }
                }
            }, 'withCredentials');
        },
        save(){
            let _this = this;
            this.userInfo.rolesEnName=this.roleList.filter(function (m) {
                m.userId = _this.userId;
                return m.checked ==true;
            });

            let _data=_this.userInfo;
            _.ajax({
                url: '/admin/userrole/updateuser',
                method: 'POST',
                data:_data,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        let rolelist  = [];

                        _this.userInfo.rolesEnName.forEach(rl=>{
                            rolelist.push(rl.id);
                        });

                        let postObje={"roles":rolelist,"userId":result.data.id};
                        _.ajax({
                            url: '/admin/userrole/updateuserrole',
                            method: 'POST',
                            data:{objValue:JSON.stringify(postObje)},
                            success: function (result) {
                                if (result.code == 0 && result.data) {
                                    _this.$message.info("保存成功");
                                }else{
                                    _this.$message.error("保存失败");
                                }
                            }
                        }, 'withCredentials');
                    }
                    else{
                        _this.$message.error("保存失败");
                    }
                }
            }, 'withCredentials');
            

        },
        saveAndAdd(){

        },
        Cancel(){

        },
        chooseImage(){
            this.$refs.uploadImg.click();
        },
        fAjaxFileUpload(e){
            //console.log("upload file");
            let _This = this;
            var imgFile = e.target.files[0];
            if(imgFile.size>5*1024*1024){
                return false;
            }
            var fdata = new FormData();
            fdata.append('imgFile', imgFile);
            fdata.append('user',"test");
            _.ajax({
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function(result) {
                    if(result.code==0&&result.data.length>0){
                        _This.userInfo.headImgUrl=result.data[0];
                    }
                },
                error: function(result) {
                    //console.log("error-- result------>", result)
                }
            });
        }
    }
}