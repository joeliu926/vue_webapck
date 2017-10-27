<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    html,body,#web-layout,.content,.login{ margin:0px; height:100%;}
    .login-flex{
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
        background-color: #6F61D3;
        border: none;
        color: white;
    }

    .login-submit:hover{
        background-color: #9186e0;
        color: white;
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