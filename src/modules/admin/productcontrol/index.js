import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
            product: [],
            changestyle:1001,
            msg:1,
            task2:[{id:1,text:'aaaaa'},{id:2,text:'cccccc'},{id:3,text:'eeeeeee'}],
            task3:[],
            tasks1: [{
                text: "Vue.js - 是一套构建用户界面的渐进式框架",
                id:0

            },
                {
                    text: "Bootstrap 响应式布局",
                    id:1
                },
                {
                    text: "Webpack前端资源模块化管理和打包工具",
                    id:2
                },
                {
                    text: "Yarn 中文手册Yarn 是一个快速、可靠、安全的依赖管理工具",
                    id:3
                },
                {
                    text: "JavaScript语言精粹",
                    id:4
                },
                {
                    text: "JavaScript高级程序设计",
                    id:5
                }], tasks2: [{
                text: "Vue.js - 是一套构建用户界面的渐进式框架",
                id:0
            },

                {
                    text: "Webpack前端资源模块化管理和打包工具",
                    id:2

                },
                {
                    text: "JavaScript语言精粹",
                    id:4
                },
                {
                    text: "JavaScript高级程序设计",
                    id:5
                }],



        };
    },
    created() {
        this.getdata();
       // this.forshow();
        //this.fortask();
    },
    mounted(){
    },
    methods: {
        getClass(params){

            let hascur = false;
            for(let k=0;k< this.task3.length;k++){
                if(this.task3[k].productCode ==params.productCode){
                    hascur = true;
                }
            }

            if(hascur){
                return 'changecol';
            } else{
                return 'cur1';
            }},
        forshow(a){
            console.log("aaaaaaa====>",a.productCode);
            if(this.task3.length<=0){
                this.task3.push(a);
            }else{
                let hasa = false;
                for(let k=0;k< this.task3.length;k++){
                    /* console.log("task3[k]id====>",this.task3[k].id);
                     console.log('task311infor', this.task3);*/
                    if(this.task3[k].productCode==a.productCode){
                        hasa =true;
                        this.task3.splice(k, 1);
                    }

                }//send(a.productCode,hasa)
                if(hasa){

                }else{
                    this.task3.push(a)
                }
            }

            console.log('task311', this.task3);
        },
        getdata(){
            let _This = this;
            let uid= _This.$route.params.id;

            let postData = {
                id: uid
            };
            _.ajax({
                url: '/case_base/getdata',
                method: 'POST',
                data: postData,

                success: function (result) {
                    // console.log('result.data',result);
                    if (result.code == 0 && result.data) {
                        _This.product = result.data;
                    }else {
                        //_This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        }, getdata(){
            let _This = this;
            let uid= _This.$route.params.id;

            let postData = {
                id: uid
            };
            _.ajax({
                url: '/case_base/getdata',
                method: 'POST',
                data: postData,

                success: function (result) {
                    // console.log('result.data',result);
                    if (result.code == 0 && result.data) {
                        _This.product = result.data;
                    }else {
                        //_This.$router.push('/customers');
                    }
                }
            }, 'withCredentials');
        },
        setscroll(params){
            var distop=""+params;
            var  disTop=document.getElementById(distop).offsetTop;
            // console.log(disTop);
            document.getElementById("right").scrollTop=disTop-132;
            this.changestyle=params;

        },
        onscorllevent(params){
            this.product.forEach(m=>{

                var disTop=document.getElementById(m.productCode).offsetTop;

                var scrolltop = document.getElementById("right").scrollTop;

                if(disTop<scrolltop+350&&disTop>scrolltop-350){
                    this.changestyle=  m.productCode;
                }

                //console.log('disTop',disTop);
                //console.log('scrolltop',scrolltop);
                //parentCode
            })
        },
    }
    }