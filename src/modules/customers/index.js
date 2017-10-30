export default {
    components: {

    },
    data () {
        return {
            name: "尼古拉-特斯拉",
            title: "../../common/img/gaoji2.png",
            activeName: "customerName",
            customerName: "this is a user",
            telNum: "13455555555",
            WeChat: "wechat",
            registerDate: "2017-05-08",
            total: 233,
            aCustomerlist: [{
                id:"0001",
                customerName: '王小虎',
                registerDate: '2016-05-06',
                telNum:"18012634866",
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id:"0002",
                customerName: '王中虎',
                registerDate: '2016-05-05',
                telNum:"13012645866",
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id:"0003",
                customerName: '王大虎',
                registerDate: '2016-05-04',
                telNum:"1471262666",
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                id:"0004",
                customerName: '王老虎',
                registerDate: '2016-05-03',
                telNum:"17812651765",
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }

    },
    created() {
        _.ajax({
            url: '/user/userate',
            method: 'POST',
            data:{
                "dataCode": 0,
                "dataType":2
            },
            success: function (res) {
                console.log('get result',res);

            }
        });
    },
    mounted(){

    },
    destroyed() {

    },
    methods: {
        fSearchData(e){
            console.log(e);
            //console.log(this.name+"------------"+this.sPassword);
        },
        handleClick(){
           console.log(this.activeName)
        },
        pickerOptions(){

        },
        fRefresh(){
            console.log("refresh");
        },
        fEdit(){
            console.log("edit data");

        },
        fMoreUserInfo(){
            console.log("get more user info");
        }

    }
}