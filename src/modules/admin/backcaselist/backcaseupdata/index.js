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
            value: '',
            value1: '',
            imageUrl:"",
            textarea:"",
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

        };
    },
    created() {
        this.getdata();
    },
    mounted(){



    },
    destroyed() {

    },
    methods: {
        getdata(){
            let postData = {

            };
            _.ajax({
                url: '/admin/backcase/backcaseupdata',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("caselist--------", result);


                }
            }, 'withCredentials');
        },

        setdata(){
            let postData = {

            };
            _.ajax({
                url: '/admin/backcase/backcaselist',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log("caseupdata--------", result);


                }
            }, 'withCredentials');
        },


        pickerOptions1: {
            disabledDate(time) {
                return time.getTime() > Date.now();
            },
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        updataSave(){
            this.setdata();
            console.log("add casesave");
            this.$router.push("/admin/backcaselist");
        },
    },
    watch: {

    }
}