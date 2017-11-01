import info from './components/info/index.vue';
import interact from './components/interact/index.vue';
import member from './components/member/index.vue';
import right from './components/right/index.vue';
import top from './components/top/index.vue';

export default {
    components: {
        interact,
        member,
        right,
        top,
        info
    },
    data () {
        return {
            oCustomer:{
                id:"1111",
                name:"杨宏伟",
                filenum:"77777",
                gender:"nan",
                birthday:"2017-01-01",
                nation:"kkk",
                maritalStatus:"jjj",
                education:"jjj",
                phoneNum:"jjj",
                phoneAddress:"jjj",
                email:"jjj",
                postcode:"jjj",
                wechatNum:"jjj",
                qqNum:"jjj",
                job:"jjj",
                companyName:"jjj",
                socialInsuranceNum:"jjj",
                source:"jjj",
                comment:"jjj",

            }
        }
    },
    created() {
        this.searchData();
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        searchData(){
            var _This = this;
            var postData = {
                id: "1"
            };
            _.ajax({
                url: '/customers/detail',
                method: 'POST',
                data: postData,
                success: function (result) {
                    console.log(result);
                    if (result.code == 0 && result.data) {
                        _This.oCustomer = result.data;
                    }
                }
            }, 'withCredentials');
        }

    }
}