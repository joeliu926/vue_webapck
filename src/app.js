/**
 * Created by JoeLiu on 2017-9-15.
 */
import HighchartsComponent from './common/template/HighchartsComponent.vue';
export default {
    components: {
        HighchartsComponent
    },
    data () {
        let _this=this;
        return {
             showdata:null,
             sLabel:"this is a test label",
             options: {
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    lineWidth: 2,
                    lineColor: '#F33',
                    id: 'temperature-axis'
                },
                series: [{
                    name: 'Temperature',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    color: '#F33'
                }]
            },
            styles: {
                width: 1200,
                height: 600
            }
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
        intext(){
            this.$router.push('/test');
        },
        activeIndex(){},
        handleSelect(){}
    }
}