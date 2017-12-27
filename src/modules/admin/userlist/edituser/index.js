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
            userInfo:{},
            roleList:[],
            doctoredit:'用户编辑',
            checked:true,
            imgUploadUrl: CONSTANT.fileUpload+"attachment/upload"
        };
    },
    created() {
        this.clearData();
        this.userId = this.$route.params.id;
        if(this.userId != '_EPT'){
            this.initUser();
        }

        this.initRoles();
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
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.roleList =result.data;
                        _this.roleList.forEach(m=>{
                            _this.userInfo.roles&&_this.userInfo.roles.forEach(roles=>{
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
            let _this = this;
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
        checkrole(params){

            let refresh = this.roleList;
            this.roleList=[];
            refresh.forEach(m=>{
               if(m.id ==params.id){
                   m.checked =m.checked;
               }
            });
            this.roleList =refresh;
        },
        saveInfo(cb){
            if(!this.authData()){
                return;
            }
            let _this = this;
            this.userInfo.rolesEnName=this.roleList.filter(function (m) {
                m.userId = _this.userId;
                return m.checked ==true;
            });

            if(this.userId == '_EPT'){
                this.userInfo.id ="";
            }

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
                                    cb&&cb();
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
        save(){
            let _this =this;
            this.saveInfo(function () {
                _this.clearData();
                _this.$router.push("/admin/userlist");
            });
        },
        saveAndAdd(){
            let _this =this;
            this.saveInfo(function () {
                _this.clearData();
                _this.$router.push("/admin/userlist/edit/_EPT");
            });
        },
        Cancel(){
            this.clearData();
            this.$router.push("/admin/userlist");
        },
        clearData(){
            this.userInfo = {
                headImgUrl:"",
                id:'',
                loginName:"",
                menus:[],
                mobile:"",
                name:"",
                nickname:"",
                permissions:[],
                rolesEnName:[],
                status:0,
                tenantId:0,
                type:"",
                wxOpenId:""}
        },
        chooseImage(){
            this.$refs.uploadImg.click();
        },
        fAjaxFileUpload(e){
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
        },
        authData(){

            if(/^[^ ]+$/.test(this.userInfo.name)){
                //return true;
            }else{
                this.$message.error("用户名不能为空");
                return false;
            }

            if(/1\d{10}/.test(this.userInfo.mobile)){
                //return true;
            }else{
                this.$message.error("手机号不正确");
                return false;

            }

            if(/^[^ ]+$/.test(this.userInfo.loginName)){
               // return true;
            }else{
                this.$message.error("登陆名不能为空");
                return false;
            }
            let checkArray =this.roleList.filter(function (m) {
                return m.checked ==true;
            });

            if(checkArray.length<1){
                this.$message.error("请选择用户角色！");
                return false;
            }

            return true;
        }
    }
}