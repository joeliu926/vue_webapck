/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../tree/index.vue';
export default {
    components: {
        tree},
    data () {
        return {
            pageNo: 1,
            pageSize: 15,
            count:1,
            doctorlist:'角色列表',
            Rolelist:[],
        };
    },
    created() {
        this.getRolelist(1);
        this.testimage();
    },
    mounted(){
    },
    methods: {
        handleCurrentChange(params){
            this.getRolelist(params);
        },
        getRolelist(params){
            let _this = this;
            this.pageNo = params;
            let _data={
                pageNo:params,
                pageSize:this.pageSize
            }
            _.ajax({
                url: '/admin/userrole/rolelistpage',
                method: 'POST',
                data:_data,
                success: function (result) {
                    if (result.code == 0 && result.data) {
                        _this.Rolelist = result.data.list;

                        _this.Rolelist.forEach(m=>{
                            m.status = m.status ==1?"正常":"已删除";
                            m.createDate =_.date2String(new Date(m.createDate),"yyyy-MM-dd hh:mm:ss");
                        });

                        _this.count = result.data.count;

                    }else {
                        // _This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        testimage(){
            _.ajax({
                type: 'POST',
                urlType:'full',
                url:'https://27478500.qcloud.la/uploadimg_test/attachment/upload',//https://27478500.qcloud.la/uploadimg_test/attachment/upload',
                //contentType: "application/json;charset=utf-8",
                //crossDomain: true,
                data: "",
                success: function (data) {
                    console.log('--------------',data);
                },
                //dataType: 'jsonp'
            });

        }
    }
}