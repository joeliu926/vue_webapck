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
        // let defaultl=require("../../../common/img/login_logo.png");
        return {
            // ddddd:"http://140.143.185.73:8077/mc_files/10088/POSTER_PICTURE/f63d6aec-b2a2-4ecb-86e2-356f9e3a5fc5",
            // defaultImg: require("../../../common/img/add-img-icon.png"), //默认上传图片
            // imgUploadUrl:CONSTANT.fileUpload+"api/posterInfo/uploadPosterPicture",//"attachment/upload",//上传图片地址
            count: 0,
            pageSize: 10,
            pageNo: 1,
            status: 0,
            giftList: []
        };
    },
    filters: {
        dateFilter: function (input) {
            if (!input) {
                return "";
            }
            return _.date2String(new Date(input), "yyyy年MM月dd日 hh:mm");
        }
    },
    created() {
        this.SearchGiftList();
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        /*获取所有的礼品列表*/
        SearchGiftList(){
            var _This = this;
            let postData = {
                pageNo: _This.pageNo,
                pageSize: _This.pageSize,
            }
            _.ajax({
                url: '/admin/gift/giftlist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    // console.log("======giftlist======", result);
                    if (result.code == 0) {
                        _This.count = result.data.count;
                        _This.giftList = result.data.list;
                        //数据排序
                        _This.giftList = _This.giftList.sort(function (x, y) {
                            return y.validity > x.validity;
                        });
                    }

                }
            }, 'withCredentials');
        },
        /*跳转创建添加礼品页面*/
        addgift(){
            this.$router.push("/admin/gift/addgift");
        },
        /*跳转创建修改礼品页面*/
        editgift(e, uid){
            // console.log("e=======================>>>>>>",e);
            // 禁止下架礼品进入详情页
            // if(e==1){
            //     return false;
            // }
            //跳转到详情页
            if (!uid) {
                return false;
            }
            this.$router.push("/admin/gift/editgift/" + uid);
        },
        /*下架礼品*/
        deleteitem(param){
            let id = param;
            console.log(id, "下架礼品");
            var _This = this;
            let postData = {
                id: id
            }

            _This.$confirm('确认下架该礼品吗?', '礼品下架', {
                confirmButtonText: '确认下架',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _.ajax({
                    url: '/admin/gift/giftdelte',
                    method: 'POST',
                    data: postData,
                    success: function (result) {
                        // console.log("======giftlist======", result);
                        if (result.code == 0) {
                            _This.giftList = result.data.list;
                            _This.count = result.data.count;
                        }

                    }
                }, 'withCredentials');
            });

        },
        /*确认删除礼品*/
        fDelData(imput){
            let _This = this;
            this.$confirm('确认删吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                _This.fCaseDelete(imput);
            });
        },

        /**
         * 切换分页
         */
        handleCurrentChange(pnum){
            this.pageNo = pnum;
            this.SearchGiftList();
        },

    },
    watch: {}
}