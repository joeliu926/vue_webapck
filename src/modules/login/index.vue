<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    html,body,#web-layout,.content,.login{ margin:0px; height:100%;}
    .login-flex{

    /*    list-style-type: none;
        -ms-flex-align: center;
        display: -ms-flexbox;
        -ms-flex-pack: center;*/
        /*for ie9*/

        justify-content: center;
        margin: 1px auto 0;
        display: table;


        display: flex;
        align-content: center;
        align-items: center;
        justify-content:center;
    }
    .grid-content {
        width: 280px;
    }
    .login-input{margin: 10px 0;}
    .login-input input:focus{border: 1px solid #6F61D3 !important;}
    .login-ltext{text-decoration: none;color: #a79def; font-size: 14px;}
    .login-icon{text-align: center;}
    .login-submit{
        width: 100%;
        background-color: #6F61D3 !important;
        border: none !important;
        color: white !important;
    }

    .login-submit:hover,el-button:hover{
        background-color: #9186e0 !important;
        color: white !important;
    }
    .login-left-content{
        flex: 1 1 150px;
        flex-direction: column;
    }
    .item-space{
        flex: 3 1 200px;
    }
    .login-elrow {
        padding: 5px;
        flex: 1 0 100px;
     }
  .login-right-img{
      height: 100%;
      flex: 0 0 576px;
      background-image: url("../../common/img/login-right.jpg");
  }
    @media screen and (max-width: 700px) {
        .login-right-img{display: none;}
    }
</style>