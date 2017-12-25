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
            options: [{
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
            contentList:[],
            title:'',

        };
    },
    created() {
        // this.setdata();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        /*添加页面*/
        caseaddSave(){
            console.log("----------------",this.operationDate);
            console.log(new Date(this.operationDate).valueOf());
            let postData = {
                "loginName":"admin",
                "caseName": this.caseName,
                "doctor": {
                    "id": 1
                },
                "products": [
                    {
                        "id": 1
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





        /*日期筛选条件*/
        pickerOptions1: {
            disabledDate(time) {
                return time.getTime() > Date.now();
            },
        },

        /*保存按钮*/
        Savecase (){
            this.caseaddSave();

           this.$router.push("/admin/backcaselist");
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


    },
    watch: {

    }
}