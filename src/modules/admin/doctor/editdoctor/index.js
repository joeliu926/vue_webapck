/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../../tree/index.vue';
export default {
    components: {tree},
    data () {
        return {
        	imgUploadUrl: "https://27478500.qcloud.la/uploadimg_test/attachment/upload",
        	addImg:require("../../../../common/img/add-img-icon.png"),
        	defaultImg:require("../../../../common/img/add-img-icon.png"),
            doctoredit:'医生编辑',
            gender:"0",
            inauguralState:"",//医生的任职状态
            oInaugural:[{key:"外聘专家"},{key:"坐诊医生"}],
            oJobTitle:["医师","主治医师","副主任医师","主任医师"],
            selectJobTitle:"",//选中的医生的职称
            curId:0,
            oDoctor:{
                "age": "",
                "brief": "",
                "clinicId": "",
                "duty": "",
                "gender": "",
                "id": "",
                "image": "",
                "jobCategory": "",
                "jobExperience": "",
                "jobTitle": "",
                "loginName": "",
                "name": "",
                "picture": "",
                "specialty": "",
                "tenantId": ""
            }
        };
    },
    created() {
        let _This = this;
        _This.curId=_This.$route.params.id;
        _This.fGetDoctorDetail();

    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        goback(){
        },
        gohome(){
            this.$router.push("/");
        },
        fGetDoctorDetail(){
        	let _This=this;
        	let doctorId=_This.$route.params.id;
        	//console.log("doctor id----",doctorId);
            let postData = {
               id:doctorId
            };
            _.ajax({
                url: '/admin/doctor/get',
                method: 'POST',
                data: postData,
                success: function (result) {
                   // console.log("test--------", result);
                    if(result.code==0&&typeof(result.data)=="object"){
                    	 _This.oDoctor=result.data;
                    	 _This.selectJobTitle=_This.oDoctor.jobTitle;   	
                        _This.inauguralState=_This.oDoctor.jobCategory;
                        if(_This.oDoctor.image){
                        	_This.defaultImg=_This.oDoctor.image;
                        }
                    	// console.log("test--------", _This.oDoctor);
                    }
                }
            }, 'withCredentials');    
        
        },
        fEditSave(icode){
            let _This=this;
            _This.oDoctor.jobTitle=_This.selectJobTitle;
            _This.oDoctor.jobCategory=_This.inauguralState;
            _This.oDoctor.image=_This.defaultImg;

            if(!/\S{1,}/.test(_This.oDoctor.name)){
                _This.$message.error("医生名不能为空");
                _This.$refs.dname.$refs.input.focus();
                return false;
            }
            if(!/\d{1,}/.test(_This.oDoctor.age)){

                _This.$message.error("请输入医生年龄");
                _This.$refs.age.$refs.input.focus();
                return false;
            }
            if(_This.defaultImg.indexOf("add-img-icon")>=0){
                _This.$message.error("请上传医生头像");
                return false;
            }
            if(!/\S{1,}/.test(_This.oDoctor.brief)){
                _This.$message.error("请输入医生简介");
                _This.$refs.brief.$refs.input.focus();
                return false;
            }
            if(!/\S{1,}/.test(_This.oDoctor.duty)){
                _This.$message.error("请填写医生职务");
                _This.$refs.duty.$refs.input.focus();
                return false;
            }
            if(!/\S{1,}/.test(_This.oDoctor.selectJobTitle)){
                _This.$message.error("请选择医生职称");
                _This.$refs.selectJobTitle.$refs.input.focus();
                return false;
            }
            if(!/\S{1,}/.test(_This.oDoctor.specialty)){
                _This.$message.error("请填写医生擅长项目");
                _This.$refs.specialty.$refs.input.focus();
                return false;
            }
            if(!/\S{1,}/.test(_This.inauguralState)){
                _This.$message.error("请选择医生任职状态");
                return false;
            }
            if(!/\S{1,}/.test(_This.oDoctor.jobExperience)){
                _This.$message.error("请填写医生从业年限");
                _This.$refs.jobExperience.$refs.input.focus();
                return false;
            }


            _This.oDoctor.updateTime=Date.now().valueOf();
            let postData = _This.oDoctor;
            if(postData.hasOwnProperty("page")){
            	delete postData.page;
            }
            let doctorId=_This.$route.params.id;
            let purl="/admin/doctor/create";
            if(doctorId>0){
            	 purl="/admin/doctor/update";
            }
            //console.log("postData------->",postData);
            _.ajax({
                url: purl,
                method: 'POST',
                data: postData,
                success: function (result) {
                   // console.log("doctor--create--------", result);
                    if(result.code==0&&result.data){
                    	_This.$message({message: '添加成功',
                            type: 'success'
                        });
                       if(icode==1){
                       	 setTimeout(function(){
                       	 		_This.$router.push("/admin/doctor");
                       	 },3000);
                       
                       }else{
                       	 _This.oDoctor={};
                           _This.defaultImg=_This.addImg;
                           _This.selectJobTitle="";
                           _This.inauguralState="";
                       }
                    }else{
                    	 _This.$message.error('操作失败');
                    }
                }
            }, 'withCredentials');
        },
        fEditCancel(){
            this.$router.push("/admin/doctor");
        },
        fSelectGoodAtItem(item){
this.inauguralState=item;
        },
        fGetGoodAtList(){

        },
        fChooseImg(){
         this.$refs.uploadImg.click();
        },
        fAjaxFileUpload(e){
        	//console.log("upload file");
        			let _This = this;
			var imgFile = e.target.files[0];
			//console.log("img---->", imgFile.size,imgFile.name);
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
							_This.defaultImg=result.data[0];
					}
				
				},
				error: function(result) {
					console.log("error-- result------>", result)
				}
			});
        }
    },
    watch: {
        $route(){
        }
    }
}