/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/

export default {
    components: {

    },
    data () {
        let _this=this;

        return {
            showdata:null,
        }
    },
    created() {
            this.showdata = 'hello boy';
    },
    mounted(){
    },
    destroyed() {

    },
    methods: {
        sendquery(){
           _.ajax({
                url: '/userate',
                method: 'POST',
                data:{
                    "dataCode": 0,
                    "dataType":2
                },
                success: function (res) {

                    console.log('get result',res);
                    if (res.code == "0") {
                        if(!res.data.status)
                        {
                            _this.codeWarnings =['编码重复！'];
                        }
                        else {
                            _this.createModalBtns= _this.laststep;
                            _this.isfirstsetp=false;
                        }
                    }
                }
            });
        }
    }
}