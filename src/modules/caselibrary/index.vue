<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="sass">
    html,body{
             background-color: #f7f7f7;
         }

    .nav-content{
         line-height: 60px;
         height: 60px;
         color: white;
         box-sizing: border-box;
         padding: 0 30px;
        .el-col:first-child{
            text-align: left;
        }
        .el-col:last-child{
            text-align: right;
        }
        .el-col:nth-child(2){
            text-align: center;
        }
        .el-dropdown-link{
            color: white;
            font-size: 16px;
        }
        .nav-logo{
          margin-left: 30px;
        }
        .nav-logo:before{
            content: url("../../common/img/logo.png");
            position: relative;
            top: 5px;
            right: 10px;
        }
        .nav-select-list{
            cursor: pointer;
        }
    }
    .nav-user-img{
        height: 40px;
        width: 40px;
    }
    .nav-img-content{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        float: right;
        border: 1px solid #eaeaea;
        position: relative;
        top:10px;
    }
    .nav-content-gradient{
        background: -moz-linear-gradient(left, #4962D4 0%, #4F3CCA 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#4962D4), color-stop(100%,#4F3CCA));
        background: -webkit-linear-gradient(top, #4962D4 0%,#4F3CCA 100%);
        background: -o-linear-gradient(left, #4962D4 0%,#4F3CCA 100%);
        background: -ms-linear-gradient(left, #4962D4 0%,#4F3CCA 100%);
        background: linear-gradient(to right,#4962D4 0%,#4F3CCA 100%);
    }


    .case-nav{
        background-color: #534CE7;

        border: none;
        height: 134px;
        .nav-row{
            width:100%;
            height: 134px;
            .nav-item{
                padding-top:30px;
                width:60px;
                height:134px;
                margin:0 auto;
                height:100px;
                div{
                    width:60px;
                    height:100px;
                    border-bottom:4px solid transparent;
                    img{
                        display:block;
                        width:60px;
                        height:60px;
                        border-radius:50px;
                        margin-bottom:10px;
                    }
                    p{
                        color:white;
                        font-size:14px;
                        text-align:center;
                    }
                }
                .icon-item.active{
                     border-bottom:4px solid #FFF;
                }


            }

        }

    }
    .fl {
        float:left;
    }
    .fr{
        float:right;
    }
    .clearfix:before,
    .clearfix:after{
        content:"";
        height:0;
        line-height:0;
        visibility:hidden;
        clear:both;

    }

    .case-menu{
        padding:12px 12px 0 12px;
        .case-list{
            padding: 12px;
            border: 2px solid #eeeeee;
            border-radius: 4px;
            background: #FFF
            h6{

                font-size:16px;
                font-weight:700;
            }
            .case-items{
                margin-top:10px;
                display:flex;
                flex-wrap:wrap;
                .case-item{
                    width:31.33%;
                    margin-left:6px;
                    padding: 0 !important;
                    margin-bottom:12px;
                    height:300px;
                    border:1px solid #eeeeee;
                    border-radius:4px;
                    box-shadow: 0px 0px 1px 1px #e0e0e0;
                    .item-info {
                       width:100%;

                      .item-top{
                         width:100%;
                         height:150px;
                         display:flex;
                            span{
                                flex:1;
                                display:block;
                                float:left;
                                border-radius:4px;

                                position:relative;
                                vertical-align:top;
                                img {
                                  width:100%;
                                  display:block;

                                }
                                .before{
                                    display:block;
                                    border-radius:0 8px 8px  0;
                                    position:absolute;
                                    color:#FFF;
                                    left:0px;
                                    bottom:0px;
                                    padding:0 10px;
                                    background:rgba(0,0,0,.4);
                                }
                                 .after{
                                    display:block;
                                    border-radius:0 8px 8px  0;
                                    position:absolute;
                                    color:#FFF;
                                    left:0px;
                                    bottom:0px;
                                    padding:0 10px;
                                    background:rgba(0,0,0,.4);
                                }
                            }
                      }
                      .item-bottom{
                         box-sizing:border-box;
                         width:100%;
                         padding:10px;
                         height:148px;

                         p{
                            font-size:16px;
                            height:16px;
                            line-height:16px;
                            margin-bottom:16px;
                            span{

                               dispaly:block!important;
                                vertical-align:middle;
                            }
                             span.left{
                                font-size:16px;
                                font-weight:bold;
                             }
                            span.right{
                                margin-top:2px;
                                font-size:14px;
                                float:right;
                                color:#999;
                            }
                         }
                         .itemName{
                            width:40%;
                            height:24px;
                            color:#666;
                            font-size:14px;
                            padding:0 4px;
                            line-height:24px;
                            text-align:center;
                            border:1px solid #e0e0e0;
                            border-radius:14px;
                         }
                         .userifo{
                             margin-top:25px;
                            img{
                                display:block;
                                width:40px;
                                height:40px;
                                background:red;
                                border-radius:50%;
                                vertical:middle;
                            }
                            span{
                               display:block;
                               font-size:14px;
                               height:40px;
                               text-align:center;
                               line-height:40px;
                               color:#999;
                               margin-left:14px;

                            }
                         }




                      }



                    }

                }
            }
        }
    }





</style>






















