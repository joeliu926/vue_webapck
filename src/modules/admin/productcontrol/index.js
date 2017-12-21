import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
            product: [],
            changestyle:1001,
            msg:0,
            task2:[{id:0,text:''},{id:0,text:''},{id:0,text:''}],
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
        //this.getdata();
        this.forshow();
       // this.fortask2();
    },
    mounted(){
    }
    ,destroyed() {

    },
    methods: {
        forshow(){

            this.tasks1.forEach((item1,index1)=>{
                console.log("item----->",item1);
                    item1.show=0;
                console.log("item-----11>",item1);
                   this.tasks2.forEach((item2,index2)=>{
                            // console.log("item1id========>",item1.id);
                            //  console.log("item2id========>",item2.id);
                            if (item1.id===item2.id){
                                item1.show=1;
                                //  this.tasks1.push({show:1})
                            }
                            else{
                                console.log("bbbbbbb",item1.id)// item1.show=1;
                            }
                        }

                    )
                }

            )
            console.log("a",this.task2)
        },
        fortask2(listid) {
            // console.log("",listid);
            var a;
            let _This=this;

            _This.tasks2.forEach((item,index)=>{
                if(listid==item.id) {
                    console.log("qqq", item.id)
                }

            })

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
        },
        setscroll(params){
            var distop=""+params;
            var  disTop=document.getElementById(distop).offsetTop;
            // console.log(disTop);
            document.getElementById("right").scrollTop=disTop-256;
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