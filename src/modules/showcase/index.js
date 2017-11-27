/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
var rsaService = require('node-rsa');
export default {
    components: {

    },
    data () {
     return{

     }
    },
    created() {

    },
    mounted(){
        var ws = new WebSocket("ws://123.207.213.50:8053");
        var nickname = "aaaa";
        ws.onopen = function (e) {
            console.log('Connection to server opened');
        }
        //显示
        function appendLog(type, nickname, message) {
     /*       if (typeof message == "undefined") return;
            var messages = document.getElementById('messages');
            var messageElem = document.createElement("li");
            var preface_label;
            if (type === 'notification') {
                preface_label = "<span class=\"label label-info\">*</span>";
            } else if (type == 'nick_update') {
                preface_label = "<span class=\"label label-warning\">*</span>";
            } else {
                preface_label = "<span class=\"label label-success\">"
                    + nickname + "</span>";
            }
            var message_text = "<h2>" + preface_label + "&nbsp;&nbsp;"
                + message + "</h2>";
            messageElem.innerHTML = message_text;
            messages.appendChild(messageElem);*/
        }
        //收到消息处理
        ws.onmessage = function (e) {
            var data = JSON.parse(e.data);
            nickname = data.nickname;
            appendLog(data.type, data.nickname, data.message);
            console.log("ID: [%s] = %s", data.id, data.message);
        }
        ws.onclose = function (e) {
            appendLog("Connection closed");
            console.log("Connection closed");
        }
        //发送消息
        function sendMessage() {
            var messageField = document.getElementById('message');
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(messageField.value);
            }
            messageField.value = '';
            messageField.focus();
        }
        //修改名称
        function changName() {
            var name = $("#name").val();
            if (ws.readyState === WebSocket.OPEN) {
                ws.send("/nick " + name);
            }
        }

        function disconnect() {
            ws.close();
        }
    },
    destroyed() {

    },
    methods: {
        fLogin(){
            _.ajax({
                url: '/api/getPublicKey',
                method: 'POST',
                success: function (res) {
                    if (res && res.publickey) {
                        clientKey.importKey(res.publickey);
                        let un = clientKey.encrypt(sUName, 'base64');
                        let pd = clientKey.encrypt(sUPassword, 'base64');
                        _.ajax({
                            url: '/user/login/entry',
                            method: 'POST',
                            data:{
                                name:un,
                                password:pd
                            },
                            success: function (res) {
                                if(res.code==0) {
                                    window.location.href="/";
                                }else {
                                    _this.alertWaring = true;
                                    _this.alertPhone = false;
                                    _this.alertPassword = false;
                                }
                            }
                        },'withCredentials');
                    }
                }
            });
        }
    }
}