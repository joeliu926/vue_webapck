/**
 * Created by JoeLiu on 2017-9-15.
 */
import Vue from 'vue';
import App from './app.vue';
import router from './router/router.js';
import VueCropper from 'vue-cropper';
import Element from './elementUI.js';
import "babel-polyfill";
new Vue({
    el: '#appid',
    router: router,
    render: h => h(App)
});