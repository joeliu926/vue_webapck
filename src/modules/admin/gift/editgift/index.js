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
            bydefault: require("../../../../common/img/add-img-icon.png"),
            // imgUploadUrl:CONSTANT.fileUpload+"attachment/upload",
            imgUploadUrl: CONSTANT.fileUpload + "api/gift/uploadGiftPicture",
            buttonText: "",
            maxlength1: 12,
            textarea: "",
            maxlength: 200,
            endData: "",
            hide: true,
            endDatePicker: this.processDate(),
            afterIndex: -1, //标记多文件选择的条目
            giftDetail: {},
            savestate: true,
            state: true,
            contentHasSave: false // 记录用户是否已经保存内容
        }
    },

    created() {
        this.initData();
        if (this.giftDetail.status == 1) {
            this.hide = false;
        }

        /*刷新和关闭浏览器的提示信息（）*/
        window.onbeforeunload = function (e) {

            return "系统可能不会保存您所做的更改。";
        }

    },
    /*浏览器后退键的提示信息 （路由导航守卫）*/
    beforeRouteLeave (to, from, next) {

        if (this.savestate == true) {
            const answer = window.confirm('您编辑的内容尚未保存，确定离开此页面吗？')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
        else {
            next()
        }
    },
    methods: {
        /**
         * 时间限制  大于当天
         */
        processDate(){
            return {
                disabledDate(time){
                    return time.getTime() < Date.now()//礼品有效期限 最小值大于当天
                }
            }
        },
        /*获取数据 礼品详情数据展示*/
        initData(){
            // 提交参数
            let _This = this;
            let id = _This.$route.params.id;
            // console.log(id, "888888888888888888");
            let pData = {
                id: parseInt(_This.$route.params.id)
            };
            _.ajax({
                url: '/admin/gift/editgift',
                method: 'POST',
                data: pData,
                success: function (result) {
                    // console.log("====++++++8888888888888888888++++++++====", result);
                    if (result.code == 0) {
                        _This.giftDetail = result.data;


                    }
                }
            }, 'withCredentials');
        },
        /*取消按钮*/
        backlist(){
            this.savestate = false;
            this.$router.push("/admin/gift");
        },
        /* 修改好后内容  保存按钮 提交修改好的数据*/
        savegift(){
            if (this.giftDetail.status == 1) {
                this.$message("已下架礼品不可编辑！");
                return false;
            }
            /*验证判断必填项*/
            // 礼品名称验证
            var authname = false;
            if (!this.giftDetail.name) {
                authname = true;
            }
            if (authname) {
                this.$message.error("礼品名称不能为空");
                return false;
            }
            //礼品描述验证
            var authdes = false;
            if (!this.giftDetail.des) {
                authdes = true;
            }
            if (authdes) {
                this.$message.error("礼品描述不能为空");
                return false;
            }
            /*礼品有效期*/
            var authvalidity = false;
            if (!this.giftDetail.validity) {
                authvalidity = true;
            }
            if (authvalidity) {
                this.$message.error("礼品有效期不能为空");
                return false;
            }

            /*礼品图片最少一张 最多五张*/
            var authPictures = false;
            var arr = this.giftDetail.giftPictures || [];
            if (arr.length == 0) {
                authPictures = true;
            }

            if (authPictures) {
                this.$message.error("礼品图片最少上传一张");
                return false;
            }
            // if(arr.length>5){
            //     authPictures=true;
            // }
            // if(authPictures){
            //     this.$message.error("礼品图片最多上传五张");
            //     return false;
            // }
            // 提交参数
            let _This = this;
            let pData = {
                id: _This.giftDetail.id,
                name: _This.giftDetail.name,
                des: _This.giftDetail.des,
                validity: _This.giftDetail.validity,
                giftPictures: _This.giftDetail.giftPictures
            };
            pData = JSON.stringify(pData);
            var pdata = null;
            pdata = {date: pData}
            // console.log(pdata, "6666666666666666666");
            _This.savestate = false;
            _.ajax({
                url: '/admin/gift/editgiftNew',
                method: 'POST',
                data: pdata,
                success: function (result) {
                    // console.log("====++++++66666666666 6666++++++++====",result);

                    if (result.code == 0) {
                        let giftDetail = result.data;
                        _This.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        setTimeout(function () {
                            _This.$router.push("/admin/gift");
                        }, 1000)

                    } else {
                        _This.$message.error("添加失败,系统异常请稍后再试！");
                    }
                }
            }, 'withCredentials');

        },
        /**
         * 多文件上传-------新加入
         * @param ee
         */
        fMultImgUpload(ee){
            let _This = this;
            let index = _This.afterIndex;
            var fdata = new FormData();
            var imgFile = ee.target.files[0];
            fdata.append('imgFile', imgFile);
            fdata.append('fieldFlag', 1);
            _This.imgUploadUrl = CONSTANT.fileUpload + "api/gift/uploadGiftPicture";
            _.ajax({
                url: _This.imgUploadUrl,
                type: 'POST',
                data: fdata,
                urlType: 'full',
                contentType: false,
                processData: false,
                success: function (result) {
                    // console.log("----------------",result)
                    let giftDetail = _This.giftDetail;

                    let giftPictures = giftDetail.giftPictures || [];
                    if (result.code == 0) {
                        giftPictures.push(result.data);
                    }
                    giftDetail.giftPictures = giftPictures;
                    _This.giftDetail = {};
                    _This.giftDetail = giftDetail;
                    // console.log("----------------",_This.giftDetail);
                },
                error: function (result) {
                    this.$message.error("图片大小不能超过5M！");
                    console.log("error-- result------>", result)
                }
            });
        },
        /**
         * 多文件形式-------新加到页面
         * @param index
         * @param pindex
         */
        fMultChooseafImg(index, pindex){
            if (this.giftDetail.status == 1) {
                this.$message("已下架礼品不可编辑！");
                return false;
            }
            var arr = this.giftDetail.giftPictures || [];
            if (arr.length > 4) {
                this.$message.error("礼品图片最多上传五张");
                return false;
            }
            let _This = this;
            _This.afterIndex = index;
            let itema = index;
            this.$refs[itema].click();
        },
        /**
         *删除多个的图片
         */
        fDeletePic(ee, index, pindex){
            if (this.giftDetail.status == 1) {
                this.$message("已下架礼品不可编辑！");
                return false;
            }
            let _This = this;
            ee.cancelBubble = true;
            let giftDetail = _This.giftDetail;
            let giftPictures = giftDetail.giftPictures || [];
            giftPictures.splice(pindex, 1);
            giftDetail.giftPictures = giftPictures;
            _This.giftDetail = {};
            _This.giftDetail = giftDetail;
            // console.log("=============", _This.giftDetail.giftPictures);
        },

    }
}