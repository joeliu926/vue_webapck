/**
 * Created by JoeLiu on 2017-9-15.
 */
import Vue from 'vue';
import App from './app.vue';
import router from './router/router.js';
import Element from './elementUI.js';
new Vue({
    el: '#appid',
    router: router,
    render: h => h(App)
});