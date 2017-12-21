/**
 * Created by JoeLiu on 2017-9-15.
 */

import tree from '../tree/index.vue';

export default {
    components: {
        tree
    },
    data () {
        return {
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
            value: ''

        };
    },
    created() {

    },
    mounted(){

    },
    destroyed() {

    },
    methods: {

    },
    watch: {

    }
}